import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import prisma from '@/lib/prisma';
import * as XLSX from 'xlsx';

type ExcelBillRow = {
  PatientName: string;
  Date: string;
  Procedure: string;
  Billed: string;
  Paid: string;
  PaymentMethod: string;
};

type ExcelBankRow = {
  Date: string;
  Description: string,
  Deposit: string,
  Withdrawal: string
};

export async function POST(req: NextRequest) { 
  const session = await getServerSession(authOptions);
  if (!session?.user) {
    return NextResponse.json({ error: 'You must be logged in to create a post' }, { status: 401 });
  }
  const userId = parseInt(session.user.id, 10);

  const { searchParams } = new URL(req.url);
  const filetype = searchParams.get('filetype') || 'unknown';
  
  try {
    const formData = await req.formData();
    const file = formData.get('file') as File;
    const createdMonth = formData.get('month') as string;

    if (!file || !createdMonth) {
      return NextResponse.json({ error: 'File or month is missing' }, { status: 400 });
    }

    const arrayBuffer = await file.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    const workbook = XLSX.read(buffer, { type: 'buffer' });
    const sheetName = workbook.SheetNames[0];
    const worksheet = workbook.Sheets[sheetName];
    const data = XLSX.utils.sheet_to_json(worksheet);

    const pdfFilename = `${createdMonth}.pdf`;
    const pdfUrl = `/uploads/${pdfFilename}`;

    // ✅ Check if post already exists
    let post = await prisma.post.findFirst({
      where: {
        month: createdMonth,
        authorId: userId,
      },
    });

    if (!post) {
      // ✅ Create new post if not found
      post = await prisma.post.create({
        data: {
          filename: createdMonth + ".pdf",
          month: createdMonth,
          url: pdfUrl,
          authorId: userId,
        },
      });
    }

    // ✅ Save billing report entries
    if (filetype === 'billingreport') {
      for (const row of data) {
        const { PatientName, Date:dateString, Procedure, Billed, Paid, PaymentMethod } = row as ExcelBillRow;
        const date = new Date(dateString);
        await prisma.billingReport.create({
          data: {
            date: date,
            patientname: String(PatientName),
            procedure: String(Procedure || ''),
            billed: parseFloat(Billed) || 0,
            paid: parseFloat(Paid) || 0,
            paymentmethod: String(PaymentMethod || ''),
            postId: post.id,
          },
        });
      }
    }

    // ✅ Save bank statement entries
    if (filetype === 'bankstatement') {
      for (const row of data) {
        const { Date:dateString, Description, Deposit, Withdrawal } = row as ExcelBankRow;
        const date = new Date(dateString);
        await prisma.bankStatement.create({
          data: {
            date: date,
            description: String(Description || ''),
            deposit: parseFloat(Deposit) || 0,
            withdrawl: parseFloat(Withdrawal) || 0,
            postId: post.id,
          },
        });
      }
    }

    return NextResponse.json({ success: true, message: 'Upload success', url: pdfUrl });
  } catch (error) {
    console.error('POST /api/upload error:', error);
    return NextResponse.json({ error: 'Failed to process file' }, { status: 500 });
  }
}

 
import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from "next-auth";
import prisma from '@/lib/prisma';
import * as XLSX from 'xlsx';
import { authOptions } from "@/lib/auth";

export async function POST(req: NextRequest) {
  const session = await getServerSession(authOptions);
  if (!session?.user) {
    return NextResponse.json({ error: 'You must be logged in to create a post' }, { status: 401 });
  }

  try {
    // Parse form data
    const formData = await req.formData();
    const file = formData.get('file') as File;
    const createdMonth = formData.get('month') as string;

    if (!file || !createdMonth) {
      return NextResponse.json({ error: 'File or month is missing' }, { status: 400 });
    }

    // Read file buffer
    const arrayBuffer = await file.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    // Parse Excel data
    const workbook = XLSX.read(buffer, { type: 'buffer' });
    const sheetName = workbook.SheetNames[0];
    const worksheet = workbook.Sheets[sheetName];
    const data = XLSX.utils.sheet_to_json<{ name: string; amount: number }>(worksheet);

    const pdfFilename = `${createdMonth}.pdf`;
    const pdfUrl = `/uploads/${pdfFilename}`;

    // Save post
    const post = await prisma.post.create({
      data: {
        filename: file.name,
        month: createdMonth,
        url: pdfUrl,
        authorId: Number(session.user.id), // ensure it's a number
      },
    });

    // Save bills
    for (const row of data) {
      await prisma.bill.create({
        data: {
          name: row.name,
          amount: Number(row.amount),
          postId: post.id,
        },
      });
    }

    return NextResponse.json({ success: true, message: 'Upload success', url: pdfUrl });
  } catch (error) {
    console.error("POST /api/upload error:", error);
    return NextResponse.json({ error: 'Failed to process file' }, { status: 500 });
  }
}


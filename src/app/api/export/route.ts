import { NextRequest } from 'next/server';
import { PDFDocument, StandardFonts, rgb } from 'pdf-lib';
import prisma from '@/lib/prisma'; // Adjust if your prisma path differs

// Constants
const PAGE_WIDTH = 600;
const PAGE_HEIGHT = 800;
const MARGIN_TOP = 120;
const MARGIN_BOTTOM = 40;
const LINE_HEIGHT = 30;
const START_Y = 200;
const MAX_LINES_PER_PAGE = Math.floor((PAGE_HEIGHT - START_Y - MARGIN_BOTTOM) / LINE_HEIGHT);

export async function POST(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const month = searchParams.get("month") || "Unknown month";

  // 1. Fetch raw data
  const data = await prisma.bill.findMany({
    select: { name: true, amount: true },
  });

  // 2. Group by name and sum amounts
  const grouped: Record<string, number> = {};
  data.forEach(({ name, amount }) => {
    grouped[name] = (grouped[name] || 0) + amount;
  });
  const groupedData = Object.entries(grouped); // [ ['Alice', 123.45], ['Bob', 98.76], ... ]

  // 3. Create PDF
  const pdfDoc = await PDFDocument.create();
  const font = await pdfDoc.embedFont(StandardFonts.TimesRoman);
  let page = pdfDoc.addPage([PAGE_WIDTH, PAGE_HEIGHT]);
  let currentLine = 0;

  // Header
  const now = new Date().toLocaleString();
  page.drawText(`${month} Report: Downloaded at ${now}`, {
    x: 50,
    y: PAGE_HEIGHT - MARGIN_TOP,
    size: 16,
    font,
    color: rgb(0, 0, 0),
  });

  // 4. Draw grouped data with pagination
  groupedData.forEach(([name, total], index) => {
    // If we’ve reached the limit, start a new page
    if (currentLine >= MAX_LINES_PER_PAGE) {
      page = pdfDoc.addPage([PAGE_WIDTH, PAGE_HEIGHT]);
      currentLine = 0;
    }

    const yPosition = PAGE_HEIGHT - START_Y - currentLine * LINE_HEIGHT;

    page.drawText(`${name}: $${total.toFixed(2)}`, {
      x: 50,
      y: yPosition,
      size: 14,
      font,
      color: rgb(0, 0, 0),
    });

    currentLine += 1;
  });

  // 5. Return the PDF as a response
  const pdfBytes = await pdfDoc.save();
  return new Response(pdfBytes, {
    headers: {
      'Content-Type': 'application/pdf',
      'Content-Disposition': `attachment; filename="${month}-profit-report.pdf"`,
    },
  });
}

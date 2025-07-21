// app/api/upload/check/route.ts
import { NextRequest } from "next/server";
import { PrismaClient } from "@prisma/client";
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';

const prisma = new PrismaClient();

export async function GET(req: NextRequest) {

  const session = await getServerSession(authOptions);
  if (!session?.user) {
    return new Response(JSON.stringify({ error: "Unauthorized" }), {
      status: 401,
    });
  }
  const userId = parseInt(session.user.id, 10);

  const { searchParams } = new URL(req.url);
  const month = searchParams.get("month"); // yyyy-MM

  if (!month) {
    return new Response(JSON.stringify({ error: "Month is required" }), {
      status: 400,
    });
  }

  try {
    const exists = await prisma.post.findFirst({
      where: { month, authorId: userId }, // replace with your actual field
    });
    if (!exists) {
      return new Response(JSON.stringify({ billexist: false, bankexist: false }), {
        status: 200,
      });
    }

    const bill = await prisma.billingReport.findFirst({
      where: { postId:exists?.id },
    });

    const bank = await prisma.bankStatement.findFirst({
      where: { postId:exists?.id },
    });
    return new Response(JSON.stringify({ billexist: !!bill, bankexist: !!bank }), {
      status: 200,
    });
  } catch (e) {
    console.error("Error checking month:", e);
    return new Response(JSON.stringify({ error: "Database error" }), {
      status: 500,
    });
  }
}

// app/api/upload/check/route.ts
import { NextRequest } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const month = searchParams.get("month"); // yyyy-MM

  if (!month) {
    return new Response(JSON.stringify({ error: "Month is required" }), {
      status: 400,
    });
  }

  try {
    const exists = await prisma.post.findFirst({
      where: { month }, // replace with your actual field
    });

    return new Response(JSON.stringify({ exists: !!exists }), {
      status: 200,
    });
  } catch (e) {
    console.error("Error checking month:", e);
    return new Response(JSON.stringify({ error: "Database error" }), {
      status: 500,
    });
  }
}

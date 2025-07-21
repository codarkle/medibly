// app/api/reports/route.ts
import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';

const prisma = new PrismaClient();

export async function GET() {
  const session = await getServerSession(authOptions);
  if (!session?.user) {
    return NextResponse.json({ error: 'You must be logged in to create a post' }, { status: 401 });
  }
  const userId = parseInt(session.user.id, 10);

  try {
    const posts = await prisma.post.findMany({
      orderBy: { month: 'desc' },
      where: { authorId: userId }, // replace with your actual field
    });

    return NextResponse.json(posts);
  } catch (error) {
    console.error('Error fetching posts:', error);
    return NextResponse.json({ error: 'Failed to fetch reports' }, { status: 500 });
  }
}

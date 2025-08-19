// app/api/users/route.ts
import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function GET() {
  const users = await prisma.user.findMany()
  return NextResponse.json(users)
}

export async function POST(request: Request) {
  const body = await request.json()
  const { email, password } = body

  const user = await prisma.user.create({
    data: { email, password },
  })

  return NextResponse.json(user)
}

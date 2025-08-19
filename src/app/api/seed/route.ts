// app/api/seed/route.ts
import { NextResponse } from 'next/server'
import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY! // ⚠️ only server-side
)

export async function POST() {
  const { error } = await supabase.from('User').insert({
    email: 'admin@example.com',
    password: '123456',
  })

  if (error) return NextResponse.json({ error }, { status: 400 })
  return NextResponse.json({ message: 'Seed user created' })
}

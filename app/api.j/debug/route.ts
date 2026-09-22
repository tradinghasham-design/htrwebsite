import { NextResponse } from "next/server";

export async function GET() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  return NextResponse.json({
    url_exists: !!url,
    url_value: url || "MISSING",
    key_exists: !!key,
    key_starts_with: key ? key.substring(0, 30) : "MISSING",
    key_length: key ? key.length : 0,
  });
}

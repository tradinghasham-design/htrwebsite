import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || "URL_MISSING";
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "KEY_MISSING";

// Debug: Ye Vercel par check karne ke liye hai
console.log("=== SUPABASE DEBUG ===");
console.log("URL:", supabaseUrl.substring(0, 40));
console.log("KEY starts with:", supabaseAnonKey.substring(0, 40));

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
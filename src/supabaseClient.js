import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL || 'https://kgaeffyumccbnyrlzfex.supabase.co';
const SUPABASE_ANON_KEY = import.meta.env.VITE_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtnYWVmZnl1bWNjYm55cmx6ZmV4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzA0NTg2MTYsImV4cCI6MjA4NjAzNDYxNn0.x-7ALUE8bdVDe7_yTnoHhSWk8c1n9fIajTf0OZ1aFvg';

let client;
try {
  client = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
} catch (err) {
  console.warn('[Supabase] Initialization failed, using safe fallback client:', err);
  client = {
    from: () => ({
      insert: async () => ({ error: new Error('Supabase client uninitialized') }),
      select: async () => ({ data: [], error: new Error('Supabase client uninitialized') }),
    })
  };
}

export const supabase = client;

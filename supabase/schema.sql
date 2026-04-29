create table if not exists public.app_notes (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  title text not null,
  created_at timestamptz not null default now()
);

alter table public.app_notes enable row level security;

create policy "Users can read their own notes"
on public.app_notes
for select
using (auth.uid() = user_id);

create policy "Users can insert their own notes"
on public.app_notes
for insert
with check (auth.uid() = user_id);

create policy "Users can delete their own notes"
on public.app_notes
for delete
using (auth.uid() = user_id);

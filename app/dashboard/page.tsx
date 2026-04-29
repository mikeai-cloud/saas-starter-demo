import { redirect } from "next/navigation";
import { CheckoutButton } from "@/components/checkout-button";
import { createClient } from "@/lib/supabase/server";
import { addNote, deleteNote, signOut } from "./actions";

type Note = {
  id: string;
  title: string;
  created_at: string;
};

export default async function DashboardPage() {
  const supabase = await createClient();
  const {
    data: { user }
  } = await supabase.auth.getUser();

  if (!user) redirect("/login");

  const { data: notes } = await supabase
    .from("app_notes")
    .select("id,title,created_at")
    .order("created_at", { ascending: false })
    .limit(8);

  return (
    <main className="min-h-screen px-6 py-10">
      <div className="mx-auto max-w-5xl">
        <header className="flex flex-col gap-4 rounded-3xl border border-white/10 bg-white/5 p-6 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-sm text-emerald-300">Protected dashboard</p>
            <h1 className="text-3xl font-bold">Welcome back</h1>
            <p className="mt-1 text-slate-300">{user.email}</p>
          </div>
          <form action={signOut}>
            <button className="rounded-2xl border border-white/20 px-5 py-3 hover:bg-white/10">Sign out</button>
          </form>
        </header>

        <section className="mt-6 grid gap-6 md:grid-cols-3">
          {[
            ["Active plan", "Free"],
            ["Monthly usage", "42 events"],
            ["Database", "Supabase"]
          ].map(([label, value]) => (
            <div key={label} className="rounded-3xl border border-white/10 bg-white/5 p-6">
              <p className="text-sm text-slate-400">{label}</p>
              <p className="mt-2 text-2xl font-bold">{value}</p>
            </div>
          ))}
        </section>

        <section className="mt-6 grid gap-6 md:grid-cols-[1fr_340px]">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <h2 className="text-xl font-semibold">Database notes</h2>
            <p className="mt-1 text-sm text-slate-400">Create records scoped to the current user.</p>

            <form action={addNote} className="mt-5 flex gap-3">
              <input
                name="title"
                placeholder="Add a product note..."
                className="min-w-0 flex-1 rounded-2xl border border-white/10 px-4 py-3"
              />
              <button className="rounded-2xl bg-white px-5 py-3 font-semibold text-slate-950">Add</button>
            </form>

            <div className="mt-5 space-y-3">
              {(notes as Note[] | null)?.length ? (
                (notes as Note[]).map((note) => (
                  <div key={note.id} className="flex items-center justify-between rounded-2xl border border-white/10 bg-slate-900 p-4">
                    <div>
                      <p className="font-medium">{note.title}</p>
                      <p className="text-xs text-slate-500">{new Date(note.created_at).toLocaleString()}</p>
                    </div>
                    <form action={deleteNote}>
                      <input type="hidden" name="id" value={note.id} />
                      <button className="text-sm text-slate-400 hover:text-white">Delete</button>
                    </form>
                  </div>
                ))
              ) : (
                <p className="rounded-2xl border border-dashed border-white/10 p-4 text-sm text-slate-400">
                  No notes yet. Add one to test the database.
                </p>
              )}
            </div>
          </div>

          <aside className="rounded-3xl border border-emerald-300/20 bg-emerald-300/10 p-6">
            <h2 className="text-xl font-semibold">Upgrade to Pro</h2>
            <p className="mt-2 text-slate-300">Test the Stripe subscription checkout flow.</p>
            <div className="mt-5">
              <CheckoutButton />
            </div>
          </aside>
        </section>
      </div>
    </main>
  );
}

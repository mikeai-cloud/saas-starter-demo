import Link from "next/link";
import { LoginForm } from "./login-form";

export default function LoginPage() {
  return (
    <main className="flex min-h-screen items-center justify-center px-6 py-16">
      <div className="w-full max-w-md">
        <Link href="/" className="text-sm text-slate-400 hover:text-white">
          ← Back to home
        </Link>
        <h1 className="mt-6 text-3xl font-bold">Sign in to the demo</h1>
        <p className="mt-2 text-slate-300">Use Supabase magic-link authentication.</p>
        <div className="mt-6">
          <LoginForm />
        </div>
      </div>
    </main>
  );
}

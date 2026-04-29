"use client";

import { useState } from "react";
import { createClient } from "@/lib/supabase/browser";

export function LoginForm() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  async function handleLogin(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsLoading(true);
    setMessage("");

    const supabase = createClient();
    const { error } = await supabase.auth.signInWithOtp({
      email,
      options: {
        emailRedirectTo: `${window.location.origin}/auth/callback`
      }
    });

    if (error) {
      setMessage(error.message);
    } else {
      setMessage("Check your email for the magic login link.");
    }

    setIsLoading(false);
  }

  return (
    <form onSubmit={handleLogin} className="rounded-3xl border border-white/10 bg-white/5 p-6">
      <label htmlFor="email" className="text-sm font-medium text-slate-200">
        Email address
      </label>
      <input
        id="email"
        type="email"
        required
        value={email}
        onChange={(event) => setEmail(event.target.value)}
        placeholder="you@example.com"
        className="mt-2 w-full rounded-2xl border border-white/10 px-4 py-3"
      />
      <button
        disabled={isLoading}
        className="mt-4 w-full rounded-2xl bg-white px-4 py-3 font-semibold text-slate-950 disabled:opacity-60"
      >
        {isLoading ? "Sending..." : "Send magic link"}
      </button>
      {message ? <p className="mt-4 text-sm text-slate-300">{message}</p> : null}
    </form>
  );
}

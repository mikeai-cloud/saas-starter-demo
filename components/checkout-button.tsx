"use client";

import { useState } from "react";

export function CheckoutButton() {
  const [isLoading, setIsLoading] = useState(false);

  async function startCheckout() {
    setIsLoading(true);

    const response = await fetch("/api/create-checkout-session", {
      method: "POST"
    });

    const data = (await response.json()) as { url?: string; error?: string };

    if (data.url) {
      window.location.href = data.url;
      return;
    }

    alert(data.error ?? "Unable to start checkout.");
    setIsLoading(false);
  }

  return (
    <button
      onClick={startCheckout}
      disabled={isLoading}
      className="rounded-2xl bg-emerald-400 px-5 py-3 font-semibold text-slate-950 hover:bg-emerald-300 disabled:opacity-60"
    >
      {isLoading ? "Opening Stripe..." : "Upgrade with Stripe"}
    </button>
  );
}

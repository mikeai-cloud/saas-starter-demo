# SaaS Starter Demo

Full-stack SaaS starter demo built with Next.js 15, Supabase Auth + DB, Stripe Checkout, Tailwind CSS, and Vercel.

## Links

- Live demo: https://saas-starter-demo-ten.vercel.app
- GitHub: https://github.com/mikeai-cloud/saas-starter-demo

## Features
- Responsive landing page
- Supabase email magic-link auth
- Protected dashboard
- Supabase database-backed notes
- Stripe subscription checkout route
- Vercel-ready deployment

## Setup

```bash
npm install
cp .env.example .env.local
npm run dev
```

Required environment variables:

```bash
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
STRIPE_SECRET_KEY=
STRIPE_PRICE_ID=
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

## Supabase
Run `supabase/schema.sql` in your Supabase SQL editor.

## Stripe
Create a recurring price in Stripe and set `STRIPE_PRICE_ID`. The checkout route uses Stripe Checkout in subscription mode.

## Verify

```bash
npm run lint
npm run build
npm audit
```

## Deploy
Import the GitHub repo into Vercel and add the environment variables.

export default function Page() {
  return (
    <main className="flex min-h-screen items-center justify-center p-6">
      <div className="max-w-xl w-full rounded-2xl bg-white shadow-lg ring-1 ring-black/5 p-10 text-center">
        <h1 className="text-4xl font-bold tracking-tight">
          Hi <span className="text-brand">arena</span>
        </h1>
        <p className="mt-4 text-gray-600">
          Your site is live-ready. Deploys instantly to Vercel.
        </p>
        <div className="mt-8 flex items-center justify-center gap-3 text-sm text-gray-500">
          <span className="inline-flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-green-500" />
            Healthy
          </span>
          <span>?</span>
          <span>Next.js 14 + Tailwind</span>
        </div>
      </div>
    </main>
  );
}

import { HelloWorldCard } from '../features/hello-world/HelloWorldCard'
import { demoFeatureAreas } from '../lib/demo-data'

export function HomePage() {
  return (
    <main className="mx-auto flex min-h-screen w-full max-w-5xl flex-col gap-8 px-6 py-10">
      <section className="rounded-3xl bg-slate-950 px-8 py-10 text-white shadow-lg">
        <p className="text-sm uppercase tracking-[0.2em] text-sky-300">
          workday-plus
        </p>
        <h1 className="mt-3 max-w-2xl text-4xl font-semibold tracking-tight sm:text-5xl">
          lean starter for a ubc course planning app
        </h1>
        <p className="mt-4 max-w-3xl text-base leading-7 text-slate-300">
          this page is intentionally simple. it proves the frontend runs, the
          backend runs, and tanstack query can fetch data from fastapi.
        </p>
      </section>

      <section className="grid gap-6 md:grid-cols-[1.2fr_0.8fr]">
        <HelloWorldCard />

        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-xl font-semibold text-slate-900">
            major work areas
          </h2>
          <ul className="mt-4 space-y-3 text-sm text-slate-700">
            {demoFeatureAreas.map((item) => (
              <li
                key={item}
                className="rounded-lg bg-slate-50 px-3 py-2"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  )
}

import { useEffect } from "react";
import { Sparkles } from "lucide-react";
import { useGreetingStore } from "@/stores/useGreetingStore";

export default function HomePage() {
  const message = useGreetingStore(s => s.message);
  const fetchGreeting = useGreetingStore(s => s.fetchGreeting);

  useEffect(() => {
    fetchGreeting();
  }, []);

  return (
    <main className="relative min-h-screen overflow-hidden bg-slate-950 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(56,189,248,0.35),transparent_55%),radial-gradient(circle_at_bottom,rgba(99,102,241,0.35),transparent_55%)]" />
      <div className="absolute -top-32 right-0 h-72 w-72 rounded-full bg-indigo-500/40 blur-3xl animate-float" />
      <div className="absolute bottom-0 left-0 h-64 w-64 rounded-full bg-sky-400/40 blur-3xl animate-float-slow" />

      <div className="relative z-10 mx-auto flex min-h-screen max-w-5xl flex-col items-center justify-center px-6 py-16 text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm uppercase tracking-[0.25em] text-sky-200 shadow-lg shadow-sky-500/10 animate-fade-in">
          <Sparkles className="h-4 w-4 text-sky-200" />
          Instant greeting
        </div>

        <h1 className="mt-8 text-5xl font-bold tracking-tight text-white sm:text-6xl lg:text-7xl animate-slide-up">
          {message}
        </h1>
        <p className="mt-6 max-w-2xl text-base text-slate-200/80 sm:text-lg animate-slide-up [animation-delay:120ms]">
          Hello World Instant delivers the classic greeting the moment you arrive. A clean,
          focused canvas with a touch of color and motion to keep things delightful.
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4 animate-slide-up [animation-delay:200ms]">
          <div className="rounded-2xl border border-white/10 bg-white/5 px-6 py-4 text-left shadow-xl shadow-indigo-500/10">
            <p className="text-xs uppercase tracking-[0.2em] text-sky-200">Core feature</p>
            <p className="mt-2 text-lg font-semibold text-white">Instant greeting</p>
            <p className="mt-2 text-sm text-slate-300/80">
              Loads immediately with no interaction needed.
            </p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 px-6 py-4 text-left shadow-xl shadow-sky-500/10">
            <p className="text-xs uppercase tracking-[0.2em] text-indigo-200">Design note</p>
            <p className="mt-2 text-lg font-semibold text-white">Simple & polished</p>
            <p className="mt-2 text-sm text-slate-300/80">
              Minimal layout enhanced with soft gradients and animation.
            </p>
          </div>
        </div>

        <div className="mt-12 flex items-center gap-3 text-xs uppercase tracking-[0.35em] text-slate-400 animate-fade-in [animation-delay:280ms]">
          <span className="h-px w-10 bg-slate-700" />
          Hello World Instant
          <span className="h-px w-10 bg-slate-700" />
        </div>
      </div>
    </main>
  );
}
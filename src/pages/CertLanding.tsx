import { useMemo } from "react";
import { Link, useParams, Navigate } from "react-router-dom";
import { motion } from "framer-motion";
import { CERTS } from "../data/certs";
import { ArrowRight } from "lucide-react";

export default function CertLanding() {
  const { certId } = useParams();

  const cert = useMemo(() => CERTS.find((c) => c.id === certId), [certId]);

  if (!cert) return <Navigate to="/" replace />;
  if (!cert.enabled) return <Navigate to="/" replace />;

  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      <header className="mx-auto max-w-5xl px-6 pt-10 pb-6">
        <Link to="/" className="text-sm text-zinc-300 hover:text-white">← Back</Link>
        <h1 className="mt-3 text-3xl font-semibold">{cert.label}</h1>
        <p className="mt-1 text-zinc-300">{cert.subtitle}</p>
      </header>

      <main className="mx-auto max-w-5xl px-6 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          className="rounded-3xl border border-white/10 bg-white/5 p-6"
        >
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <h2 className="text-xl font-semibold">Modules</h2>
              <p className="text-sm text-zinc-300">
                We’ll generate keyword-focused question packs from each module.
              </p>
            </div>

            <Link
              to={`/cert/${cert.id}/levels`}
              className="inline-flex items-center justify-center gap-2 rounded-2xl bg-yellow-400 px-5 py-3 text-sm font-semibold text-black hover:bg-yellow-300"
            >
              Start Levels 1–2 <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <ul className="mt-6 grid gap-3 md:grid-cols-2">
            {cert.modules.map((m, idx) => (
              <li
                key={`${m.title}-${idx}`}
                className="rounded-2xl border border-white/10 bg-black/20 p-4 text-sm text-zinc-100"
              >
                <div className="text-xs text-zinc-400">Module {idx + 1}</div>
                <div className="mt-1">{m.title}</div>
              </li>
            ))}
          </ul>
        </motion.div>
      </main>
    </div>
  );
}

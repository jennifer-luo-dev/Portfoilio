"use client";
import { useState } from "react";

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<null | "sending" | "ok" | "error">(null);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) setStatus("ok");
      else setStatus("error");
    } catch {
      setStatus("error");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-xl">
      <label className="block mb-3">
        <span className="text-sm">Name</span>
        <input
          required
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          className="mt-1 block w-full px-3 py-2 border rounded"
        />
      </label>
      <label className="block mb-3">
        <span className="text-sm">Email</span>
        <input
          required
          type="email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          className="mt-1 block w-full px-3 py-2 border rounded"
        />
      </label>
      <label className="block mb-3">
        <span className="text-sm">Message</span>
        <textarea
          required
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          rows={6}
          className="mt-1 block w-full px-3 py-2 border rounded"
        />
      </label>
      <div className="flex items-center gap-3">
        <button
          type="submit"
          className="px-4 py-2 bg-slate-900 text-white rounded disabled:opacity-60"
          disabled={status === "sending"}
        >
          {status === "sending" ? "Sending…" : "Send message"}
        </button>
        {status === "ok" && (
          <span className="text-sm text-green-600">Sent — thank you!</span>
        )}
        {status === "error" && (
          <span className="text-sm text-red-600">
            Error sending — try again later.
          </span>
        )}
      </div>
    </form>
  );
}

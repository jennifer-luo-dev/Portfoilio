"use client";
import { useState } from "react";

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<null | "sending" | "ok" | "error">(null);
  const [clientError, setClientError] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("sending");
    setClientError(null);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus("ok");
        setClientError(null);
      } else {
        // try to read JSON detail so we can show a more helpful message
        let err = "Error sending — try again later.";
        try {
          const body = await res.json();
          if (body?.error) err = String(body.error);
          else if (body?.detail) err = String(body.detail);
        } catch (e) {
          // fall back to status text
          err = res.statusText || err;
        }
        console.error("Contact form error response:", res.status, err);
        // show the server-provided message (still keep a friendly default)
        setStatus(null);
        // display a temporary error label (stored in local state)
        setClientError(err);
      }
    } catch {
      setStatus(null);
      setClientError("Error sending — try again later.");
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
        {clientError && (
          <span className="text-sm text-red-600">{clientError}</span>
        )}
      </div>
    </form>
  );
}

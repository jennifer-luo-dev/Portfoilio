"use client";

import { useState } from "react";

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });
    const data = await res.json();
    if (data.success) alert("Message sent!");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-4 max-w-md mx-auto"
    >
      <input
        name="name"
        placeholder="Name"
        onChange={handleChange}
        required
        className="border p-2"
      />
      <input
        name="email"
        placeholder="Email"
        type="email"
        onChange={handleChange}
        required
        className="border p-2"
      />
      <textarea
        name="message"
        placeholder="Message"
        onChange={handleChange}
        required
        className="border p-2"
        rows={4}
      />
      <button type="submit" className="bg-blue-600 text-white p-2 rounded">
        Send
      </button>
    </form>
  );
}

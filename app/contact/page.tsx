import ContactForm from "../../components/ContactForm";

export default function Contact() {
  return (
    <section className="container mx-auto px-6 py-10">
      <h1 className="text-2xl font-bold mb-3">Contact</h1>
      <p className="text-slate-600 mb-6">
        Send a note — I check messages frequently. Your message goes to my email
        via Resend.
      </p>
      <ContactForm />
    </section>
  );
}

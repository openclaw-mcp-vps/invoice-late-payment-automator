export default function Home() {
  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9] font-sans">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-16 text-center">
        <span className="inline-block mb-4 px-3 py-1 rounded-full bg-[#161b22] text-[#58a6ff] text-xs font-semibold uppercase tracking-widest border border-[#30363d]">
          Invoice Automation
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Automate Late Payment<br />
          <span className="text-[#58a6ff]">Reminders & Penalties</span>
        </h1>
        <p className="text-lg text-[#8b949e] mb-8 max-w-xl mx-auto">
          Stop chasing clients manually. Set your rules once and let the system send escalating reminders and apply late fees automatically — every single day.
        </p>
        <a
          href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg text-base transition-colors"
        >
          Get Started — $11/mo
        </a>
        <p className="mt-4 text-xs text-[#6e7681]">Cancel anytime. No contracts.</p>
      </section>

      {/* Features strip */}
      <section className="max-w-3xl mx-auto px-6 pb-16 grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
        {[
          { title: "Daily Cron Checks", desc: "Overdue invoices detected automatically every 24 hours." },
          { title: "Escalating Reminders", desc: "Day 1, 7, 14 — customizable email sequences per client." },
          { title: "Auto Late Fees", desc: "Apply flat or percentage penalties based on your rules." }
        ].map((f) => (
          <div key={f.title} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
            <h3 className="text-white font-semibold mb-2">{f.title}</h3>
            <p className="text-sm text-[#8b949e]">{f.desc}</p>
          </div>
        ))}
      </section>

      {/* Pricing */}
      <section className="max-w-sm mx-auto px-6 pb-20 text-center">
        <h2 className="text-2xl font-bold text-white mb-8">Simple Pricing</h2>
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-2xl p-8">
          <p className="text-[#58a6ff] font-semibold text-sm uppercase tracking-widest mb-2">Pro</p>
          <p className="text-5xl font-bold text-white mb-1">$11</p>
          <p className="text-[#8b949e] text-sm mb-6">per month</p>
          <ul className="text-left space-y-3 mb-8 text-sm text-[#c9d1d9]">
            {[
              "Unlimited invoices monitored",
              "Customizable reminder schedules",
              "Flat & percentage late fees",
              "Email delivery via your SMTP",
              "Dashboard & audit log"
            ].map((item) => (
              <li key={item} className="flex items-center gap-2">
                <span className="text-[#58a6ff] font-bold">✓</span> {item}
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg transition-colors"
          >
            Start Now
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
        <div className="space-y-5">
          {[
            {
              q: "How does the automation work?",
              a: "A daily cron job scans your invoices, compares due dates to today, and triggers the appropriate reminder email or late fee based on the rules you configure."
            },
            {
              q: "Can I customize the reminder schedule?",
              a: "Yes. You define exactly which days after the due date each reminder fires, and what message is sent. Different rules can apply to different clients."
            },
            {
              q: "What email provider does it use?",
              a: "You connect your own SMTP credentials (Gmail, SendGrid, Postmark, etc.), so emails come from your address and you stay in full control."
            }
          ].map((item) => (
            <div key={item.q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
              <p className="text-white font-semibold mb-2">{item.q}</p>
              <p className="text-sm text-[#8b949e]">{item.a}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="text-center pb-10 text-xs text-[#6e7681]">
        &copy; {new Date().getFullYear()} Invoice Late Payment Automator. All rights reserved.
      </footer>
    </main>
  );
}

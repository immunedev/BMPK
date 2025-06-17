'use client'

import React from "react";

const topics = [
    "Kredyt frankowy",
    "Kredyt WIBOR",
    "Wsparcie prawne",
    "Odzyskiwanie środków",
    "Porada prawna",
    "Inny temat"
];

const ContactForm: React.FC = () => {
    const [email, setEmail] = React.useState("");
    const [phone, setPhone] = React.useState("");
    const [topic, setTopic] = React.useState(topics[0]);
    const [info, setInfo] = React.useState("");
    const [submitted, setSubmitted] = React.useState(false);
    const [isSubmitting, setIsSubmitting] = React.useState(false);
    const [error, setError] = React.useState<string | null>(null);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setError(null);

        try {
            const response = await fetch('/api/send', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, phone, topic, info }),
            });

            if (!response.ok) throw new Error('Coś poszło nie tak');

            setSubmitted(true);
            setEmail("");
            setPhone("");
            setTopic(topics[0]);
            setInfo("");
        } catch (err) {
            setError(err instanceof Error ? err.message : 'Nieznany błąd');
        } finally {
            setIsSubmitting(false);
        }
    };

     return (
        <div className="px-8 py-12 bg-white rounded-3xl shadow-2xl border border-rose-100">
            <div className="text-center mb-8">
                <h2 className="text-3xl font-extrabold text-rose-700">Skontaktuj się z nami</h2>
                <p className="text-rose-300 mt-2">Odpowiemy najszybciej jak to możliwe</p>
                <hr className="my-6 border-t-2 border-rose-200 w-32 mx-auto" />
            </div>
            <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
                <label className="flex flex-col font-semibold text-slate-700">
                    Email
                    <input
                        type="email"
                        required
                        className="mt-2 p-3 rounded-xl border border-rose-300 focus:ring-2 focus:ring-rose-400 outline-none transition bg-rose-50 placeholder-slate-400"
                        placeholder="E-mail, na który się skontaktujemy"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                </label>
                <label className="flex flex-col font-semibold text-slate-700">
                    Numer telefonu
                    <input
                        type="tel"
                        required
                        className="mt-2 p-3 rounded-xl border border-rose-300 focus:ring-2 focus:ring-rose-400 outline-none transition bg-rose-50 placeholder-slate-400"
                        placeholder="Numer telefonu do kontaktu"
                        value={phone}
                        onChange={e => setPhone(e.target.value)}
                        pattern="^[0-9+\s()-]{7,}$"
                    />
                </label>
                <label className="flex flex-col font-semibold text-slate-700">
                    Temat
                    <select
                        className="mt-2 rounded-xl focus:ring-2 focus:ring-rose-400 outline-none transition bg-rose-50"
                        value={topic}
                        onChange={e => setTopic(e.target.value)}
                    >
                        {topics.map((t, idx) => (
                            <option key={idx} value={t}>{t}</option>
                        ))}
                    </select>
                </label>
                <label className="flex flex-col font-semibold text-slate-700">
                    Treść wiadomości
                    <textarea
                        required
                        className="mt-2 p-3 rounded-xl border border-rose-300 focus:ring-2 focus:ring-rose-400 outline-none transition min-h-[100px] resize-y bg-rose-50 placeholder-slate-400"
                        placeholder="Opisz swój temat lub pytanie"
                        value={info}
                        onChange={e => setInfo(e.target.value)}
                    />
                </label>
                <button
                    type="submit"
                    disabled={isSubmitting}
                    className="bg-rose-700 hover:bg-rose-800 text-white font-bold py-3 px-8 rounded-xl transition mt-2 shadow-lg disabled:bg-rose-300"
                >
                    {isSubmitting ? 'Wysyłanie...' : 'Wyślij'}
                </button>
                {submitted && (
                    <div className="text-rose-700 text-center font-semibold mt-2">
                        Dziękujemy za kontakt! Odpowiemy wkrótce.
                    </div>
                )}
                {error && (
                    <div className="text-rose-700 font-semibold mt-2">
                        Wystąpił błąd: {error}
                    </div>
                )}
            </form>
        </div>
    );
};

const MainView: React.FC = () => (
    <section className="w-full min-h-[80vh] flex flex-col md:flex-row items-center justify-center bg-gradient-to-br from-rose-50 to-slate-100 py-16 px-4">
        <div className="flex-1 flex flex-col items-start justify-center max-w-xl mb-12 md:mb-0 md:mr-16">
            <h1 className="text-5xl md:text-6xl font-extrabold text-rose-800 mb-6 leading-tight">
                Twoje bezpieczeństwo<br />
                <span className="text-rose-500">Naszym priorytetem</span>
            </h1>
            <p className="text-lg md:text-xl font-semibold text-slate-700 mb-8">
                Skuteczna pomoc prawna dla osób i firm.<br />
                Zaufaj doświadczonym radcom prawnym – rozwiążemy Twój problem.
            </p>
            <ul className="text-rose-700 font-medium space-y-2 mb-8">
                <li>✔️ Bezpłatna analiza sprawy</li>
                <li>✔️ Szybki kontakt i indywidualne podejście</li>
                <li>✔️ Wieloletnie doświadczenie</li>
                <li>✔️ Wysoka skuteczność w działaniu</li>
                <li>✔️ Tysiące spraw</li>

            </ul>

            <button
                className="bg-rose-100 hover:bg-rose-200 text-rose-700 font-bold py-3 px-8 rounded-xl transition shadow-lg mb-4"
                onClick={() => window.scrollBy({ top: window.innerHeight, left: 0, behavior: 'smooth' })}
                type="button"
            >
                Przeczytaj więcej 
            </button>
        </div>
        <div className="flex-1 max-w-lg w-full">
            <ContactForm />
        </div>
    </section>
);

export default MainView;

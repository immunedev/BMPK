import React from "react";

const steps = [
    "Bezpłatna analiza umowy kredytu WIBOR oraz sytuacji klienta.",
    "Przygotowanie i podpisanie umowy o współpracy.",
    "Zebranie i weryfikacja niezbędnych dokumentów.",
    "Sporządzenie pozwu i złożenie go w sądzie.",
    "Reprezentacja klienta w trakcie postępowania sądowego.",
    "Uzyskanie prawomocnego wyroku i rozliczenie z bankiem.",
];

const requiredDocuments = [
    "Umowa kredytu złotówkowego z oprocentowaniem WIBOR (oryginał lub kopia).",
    "Aneksy do umowy (jeśli występowały).",
    "Harmonogram spłat oraz potwierdzenia przelewów.",
    "Korespondencja z bankiem (jeśli była prowadzona).",
    "Dowód osobisty kredytobiorcy.",
];

const conditions = [
    "Bezpłatna analiza umowy i sytuacji prawnej.",
    "Wynagrodzenie prowizyjne – płatne po wygranej sprawie.",
    "Stały kontakt z dedykowanym prawnikiem.",
    "Transparentność działań i jasne warunki współpracy.",
];

const OfferWiborPage: React.FC = () => (
    <main className="w-full bg-gradient-to-br from-slate-100 to-rose-50 py-20 px-4">
        <div className="max-w-[80%] mx-auto">
            <header className="text-center mb-16">
                <h1 className="text-4xl md:text-5xl font-extrabold text-rose-800 mb-4">
                    Kredyty WIBOR – pomoc prawna dla kredytobiorców
                </h1>
                <p className="text-rose-400 text-lg font-medium">
                    Skutecznie pomagamy w dochodzeniu roszczeń z kredytów złotówkowych opartych o WIBOR. Poznaj naszą ofertę i zadbaj o swoje prawa.
                </p>
                <hr className="my-6 border-t-2 border-rose-200 w-32 mx-auto" />
            </header>

            <section className="bg-white rounded-3xl shadow-2xl border border-rose-100 mb-12 p-8">
                <h2 className="text-2xl font-bold text-rose-700 mb-4">Na czym polega nasza oferta?</h2>
                <p className="text-slate-700 text-lg font-medium mb-2">
                    Oferujemy kompleksową obsługę prawną dla osób posiadających kredyty złotówkowe z oprocentowaniem WIBOR. Analizujemy umowę, przygotowujemy pozew i reprezentujemy klienta w sądzie, dążąc do unieważnienia lub zmiany warunków kredytu.
                </p>
            </section>

            <section className="bg-white rounded-3xl shadow-2xl border border-rose-100 mb-12 p-8">
                <h2 className="text-2xl font-bold text-rose-700 mb-4">Kroki postępowania</h2>
                <ol className="list-decimal list-inside text-slate-700 text-lg font-medium space-y-2">
                    {steps.map((step, idx) => (
                        <li key={idx}>{step}</li>
                    ))}
                </ol>
            </section>

            <section className="bg-white rounded-3xl shadow-2xl border border-rose-100 mb-12 p-8">
                <h2 className="text-2xl font-bold text-rose-700 mb-4">Potrzebne dokumenty</h2>
                <ul className="list-disc list-inside text-slate-700 text-lg font-medium space-y-2">
                    {requiredDocuments.map((doc, idx) => (
                        <li key={idx}>{doc}</li>
                    ))}
                </ul>
            </section>

            <section className="bg-white rounded-3xl shadow-2xl border border-rose-100 mb-12 p-8">
                <h2 className="text-2xl font-bold text-rose-700 mb-4">Szacowany czas trwania sprawy</h2>
                <p className="text-slate-700 text-lg font-medium">
                    Średni czas trwania postępowania sądowego to 18–30 miesięcy, w zależności od sądu i indywidualnych okoliczności sprawy.
                </p>
            </section>

            <section className="bg-white rounded-3xl shadow-2xl border border-rose-100 mb-12 p-8">
                <h2 className="text-2xl font-bold text-rose-700 mb-4">Warunki współpracy</h2>
                <ul className="list-disc list-inside text-slate-700 text-lg font-medium space-y-2">
                    {conditions.map((cond, idx) => (
                        <li key={idx}>{cond}</li>
                    ))}
                </ul>
            </section>
        </div>
    </main>
);

export default OfferWiborPage;
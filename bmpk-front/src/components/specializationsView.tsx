import React from "react";
import { FaGavel, FaBalanceScale, FaRegHandshake, FaUserShield, FaMoneyCheckAlt } from "react-icons/fa";

type Specialization = {
    title: string;
    icon: React.ReactNode;
    shortDescription: string;
    bonusDescription: string;
};

const specializations: Specialization[] = [
    {
        title: "Kredyty frankowe",
        icon: <FaBalanceScale className="text-4xl text-rose-700" />,
        shortDescription: "Pomoc prawna w sprawach kredytów walutowych.",
        bonusDescription: "Skutecznie prowadzimy sprawy przeciwko bankom, pomagając klientom odzyskać należne środki i unieważnić niekorzystne umowy kredytowe.",
    },
    {
        title: "WIBOR",
        icon: <FaMoneyCheckAlt className="text-4xl text-rose-700" />,
        shortDescription: "Doradztwo i reprezentacja w sprawach WIBOR.",
        bonusDescription: "Analizujemy umowy kredytowe pod kątem klauzul WIBOR, oferując wsparcie w dochodzeniu roszczeń i negocjacjach z bankami.",
    },
    {
        title: "Odzyskiwanie środków",
        icon: <FaRegHandshake className="text-4xl text-rose-700" />,
        shortDescription: "Skuteczne odzyskiwanie należności.",
        bonusDescription: "Pomagamy w windykacji należności, prowadzeniu postępowań sądowych i egzekucyjnych, dbając o interesy naszych klientów.",
    },
    {
        title: "Prawo cywilne",
        icon: <FaGavel className="text-4xl text-rose-700" />,
        shortDescription: "Kompleksowa obsługa spraw cywilnych.",
        bonusDescription: "Reprezentujemy klientów w sporach cywilnych, sporządzamy umowy i udzielamy porad prawnych na każdym etapie sprawy.",
    },
    {
        title: "Ochrona konsumenta",
        icon: <FaUserShield className="text-4xl text-rose-700" />,
        shortDescription: "Wsparcie w sporach konsumenckich.",
        bonusDescription: "Bronimy praw konsumentów w sporach z przedsiębiorcami, pomagamy w reklamacji towarów i usług oraz dochodzeniu roszczeń.",
    },
];

const SpecializationsView: React.FC = () => (
    <section className="w-full bg-gradient-to-br from-rose-50 to-slate-100 py-20 px-4">
        <div className="max-w-[80%] mx-auto">
            <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-extrabold text-rose-800 mb-4">Nasze specjalizacje</h2>
                <p className="text-rose-400 text-lg font-medium">
                    Poznaj obszary, w których skutecznie pomagamy naszym klientom
                </p>
                <hr className="my-6 border-t-2 border-rose-200 w-32 mx-auto" />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                {specializations.map((spec) => (
                    <div
                        key={spec.title}
                        className="group bg-white border border-rose-100 rounded-3xl shadow-2xl p-8 flex flex-col items-center transition-all duration-300 hover:shadow-rose-200 hover:-translate-y-1 relative overflow-hidden min-h-[220px]"
                    >
                        <div className="mb-4">{spec.icon}</div>
                        <h3 className="text-xl font-bold text-rose-700 mb-2 text-center">{spec.title}</h3>
                        <p className="text-slate-700 text-center transition-opacity duration-200 group-hover:opacity-0">
                            {spec.shortDescription}
                        </p>
                        <div className="absolute inset-0 flex items-center justify-center px-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/95 rounded-3xl">
                            <p className="text-rose-700 text-center font-medium">{spec.bonusDescription}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
);

export default SpecializationsView;
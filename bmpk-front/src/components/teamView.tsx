import React from "react";
import Image from "next/image";

type TeamMember = {
    role: string;
    name: string;
    photo: string;
    specialization: string;
};

const team: TeamMember[] = [
    {
        role: "Właściciel",
        name: "Maciej Brończyk",
        photo: "/images/temp1.webp",
        specialization: "Założyciel kancelarii, ekspert w sprawach kredytów frankowych i prawa cywilnego.",
    },
    {
        role: "Radca prawny",
        name: "Olga Brończyk",
        photo: "/images/temp1.webp",
        specialization: "Specjalizuje się w kredytach frankowych i prawie cywilnym.",
    },
    {
        role: "Radca prawny",
        name: "Mikołaj Leszczyński",
        photo: "/images/temp1.webp",
        specialization: "Prowadzi sprawy związane z doradztwem prawnym firm.",
    },
    {
        role: "Radca prawny",
        name: "Andrzej ...",
        photo: "/images/temp1.webp",
        specialization: "Prowadzi sprawy związane z doradztwem prawnym firm.",
    },
    {
        role: "Radca prawny",
        name: "Anna Kowalska",
        photo: "/images/temp1.webp",
        specialization: "Prowadzi sprawy związane z doradztwem prawnym firm.",
    },
];

const TeamView: React.FC = () => (
    <section className="w-full bg-gradient-to-br from-slate-100 to-rose-50 py-20 px-4">
        <div className="max-w-[80%] mx-auto">
            <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-extrabold text-rose-800 mb-4">Nasz zespół</h2>
                <p className="text-rose-400 text-lg font-medium">
                    Poznaj osoby, które tworzą kancelarię i dbają o Twoje sprawy
                </p>
                <hr className="my-6 border-t-2 border-rose-200 w-32 mx-auto" />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                {team.map((member) => (
                    <div
                        key={member.name}
                        className="bg-white border border-rose-100 rounded-3xl shadow-2xl p-8 flex flex-col items-center transition-all duration-300 hover:shadow-rose-200 hover:-translate-y-1"
                    >
                        <div className="w-28 h-28 mb-4 relative">
                            <Image
                                src={member.photo}
                                alt={member.name}
                                fill
                                className="object-cover rounded-full border-4 border-rose-100 shadow"
                                sizes="112px"
                            />
                        </div>
                        <span className="text-rose-700 font-semibold mb-1">{member.role}</span>
                        <h3 className="text-xl font-bold text-slate-800 mb-2 text-center">{member.name}</h3>
                        <p className="text-slate-700 text-center">{member.specialization}</p>
                    </div>
                ))}
            </div>
        </div>
    </section>
);

export default TeamView;
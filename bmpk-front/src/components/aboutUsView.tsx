import React from "react";
import Image from "next/image";

type AboutSection = {
    title: string;
    content: string;
    image?: string;
};

const aboutSections: AboutSection[] = [
    {
        title: "Kim jesteśmy?",
        content:
            "Jesteśmy zespołem doświadczonych radców prawnych, którzy od lat skutecznie pomagają klientom indywidualnym i firmom. Nasza kancelaria specjalizuje się w sprawach kredytów frankowych, WIBOR, odzyskiwaniu środków oraz szeroko pojętym wsparciu prawnym. Stawiamy na indywidualne podejście i pełne zaangażowanie w każdą sprawę.",
        image: "/public/images/temp.webp",
    },
    {
        title: "Nasza misja",
        content:
            "Naszym celem jest zapewnienie najwyższej jakości obsługi prawnej oraz bezpieczeństwa naszym klientom. Wierzymy, że skuteczność wynika z wiedzy, doświadczenia i zaufania. Każdą sprawę traktujemy priorytetowo, dbając o jasną komunikację i transparentność działań.",
        image: "/public/images/jd.jpg",
    },
    {
        title: "Dlaczego my?",
        content:
            "Wieloletnie doświadczenie, setki wygranych spraw i tysiące zadowolonych klientów to nasza najlepsza wizytówka. Oferujemy bezpłatną analizę sprawy, szybki kontakt oraz indywidualne podejście. Z nami możesz czuć się bezpiecznie – Twoje interesy są dla nas najważniejsze.",
        image: "/public/images/jd.jpg",
    },
];

const AboutUsView: React.FC = () => (
    <section className="w-full bg-gradient-to-br from-slate-100 to-rose-50 py-20 px-4">
        <div className="max-w-[80%] mx-auto">
            <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-extrabold text-rose-800 mb-4">O nas</h2>
                <p className="text-rose-400 text-lg font-medium">
                    Poznaj naszą kancelarię i wartości, które nami kierują
                </p>
                <hr className="my-6 border-t-2 border-rose-200 w-32 mx-auto" />
            </div>
            <div className="flex flex-col gap-16">
                {aboutSections.map((section, idx) => (
                    <div
                        key={section.title}
                        className={`
                            flex flex-col md:flex-row items-center
                            ${idx % 2 === 1 ? 'md:flex-row-reverse' : ''}
                            bg-white rounded-3xl shadow-2xl border border-rose-100
                            overflow-hidden
                        `}
                    >
                        <div className="md:w-1/2 w-full h-full">
                            {section.image ? (
                                <div className="relative w-full h-64 md:h-full min-h-[16rem]">
                                    <Image
                                        src="/images/temp.webp"
                                        alt={section.title}
                                        fill
                                        className="object-cover"
                                        sizes="(min-width: 768px) 50vw, 100vw"
                                        priority={idx === 0}
                                    />
                                </div>
                            ) : (
                                <div className="w-full h-64 md:h-full bg-rose-100 flex items-center justify-center text-rose-300 text-6xl">
                                    <span>📄</span>
                                </div>
                            )}
                        </div>
                        <div className="md:w-1/2 w-full p-8 flex flex-col justify-center">
                            <h3 className="text-3xl font-bold text-rose-700 mb-4">{section.title}</h3>
                            <p className="text-slate-700 text-lg font-medium">{section.content}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
);

export default AboutUsView;
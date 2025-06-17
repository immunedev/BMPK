import React from "react";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

type LocalisationProps = {
    address: string;
    phone: string;
    email: string;
    googleMapsSrc: string;
};

const LocalisationView: React.FC<LocalisationProps> = ({
    address,
    phone,
    email,
    googleMapsSrc,
}) => (
    <section className="w-full bg-gradient-to-br from-rose-50 to-slate-100 py-20 px-4">
        <div className="max-w-[80%] mx-auto">
            <div className="text-center mb-12">
                <h2 className="text-4xl md:text-5xl font-extrabold text-rose-800 mb-4">
                    Nasza lokalizacja
                </h2>
                <p className="text-rose-400 text-lg font-medium">
                    Odwiedź nas w centrum Torunia lub skontaktuj się z nami
                </p>
                <hr className="my-6 border-t-2 border-rose-200 w-32 mx-auto" />
            </div>
            <div className="grid md:grid-cols-2 gap-10 items-center">
                <div className="rounded-3xl overflow-hidden shadow-2xl">
                    <iframe
                        src={googleMapsSrc}
                        width="100%"
                        height="350"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Google Maps"
                    ></iframe>
                </div>
                <div className="bg-white rounded-3xl shadow-2xl p-8 flex flex-col gap-6">
                    <div className="flex items-start gap-4">
                        <FaMapMarkerAlt className="text-2xl text-rose-700 mt-1" />
                        <div>
                            <span className="block text-slate-700 font-semibold mb-1">Adres</span>
                            <span className="text-slate-600">{address}</span>
                        </div>
                    </div>
                    <div className="flex items-start gap-4">
                        <FaPhoneAlt className="text-2xl text-rose-700 mt-1" />
                        <div>
                            <span className="block text-slate-700 font-semibold mb-1">Telefon</span>
                            <a href={`tel:${phone}`} className="text-slate-600 hover:text-rose-700 transition-colors">{phone}</a>
                        </div>
                    </div>
                    <div className="flex items-start gap-4">
                        <FaEnvelope className="text-2xl text-rose-700 mt-1" />
                        <div>
                            <span className="block text-slate-700 font-semibold mb-1">Email</span>
                            <a href={`mailto:${email}`} className="text-slate-600 hover:text-rose-700 transition-colors">{email}</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
);

export default LocalisationView;
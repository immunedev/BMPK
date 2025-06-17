import React from "react";

const Footer: React.FC = () => {
    return (
        <footer className="bg-white shadow-md px-6 md:px-32 py-4 mt-12">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                {/* Logo */}
                <div className="font-bold text-2xl text-rose-800">
                    BMPK
                    <span className="text-rose-800"> - Kancelaria Prawna</span>
                </div>
                {/* Links */}
                {/* <div className="flex gap-4 text-sm">
                    <a href="/polityka-prywatnosci" className="text-rose-800 hover:underline">
                        Polityka prywatności
                    </a>
                    <a href="/regulamin" className="text-rose-800 hover:underline">
                        Regulamin
                    </a>
                </div> */}
            </div>
            {/* Company Info */}
            <div className="mt-6 text-sm text-rose-800 opacity-80 text-center md:text-left">
                <div>
                    <strong>BMPK - Kancelaria Prawna</strong>
                </div>
                <div>
                    ul. Jęczmienna 22/4, 87-100 Toruń
                </div>
                <div>
                    NIP: 9561516450
                </div>
                <div>
                    Tel: <a href="tel:+48123456789" className="hover:underline">+48 56 622 03 84</a> | 
                    Email: <a href="mailto:kontakt@bmpk.pl" className="hover:underline">bmpk@bmpk.pl</a>
                </div>
            </div>
            {/* Copyright */}
            <div className="text-center text-sm text-rose-800 mt-6 opacity-70">
                &copy; {new Date().getFullYear()} BMPK - Kancelaria Prawna. Wszelkie prawa zastrzeżone.
            </div>
            {/* Credits */}
            <div className="text-center text-xs text-[#2c3e50] mt-2 opacity-50">
                Projekt i realizacja: <a href="https://github.com/immunedev" target="_blank" rel="noopener noreferrer" className="hover:underline">SOHA PSA</a>
            </div>
        </footer>
    );
};

export default Footer;
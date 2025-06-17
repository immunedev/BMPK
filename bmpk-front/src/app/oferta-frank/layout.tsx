import Footer from '@/components/footer';
import Navbar from '@/components/navbar';
import React, { ReactNode } from 'react';

interface OfertaFrankLayoutProps {
    children: ReactNode;
}

export default function OfertaFrankLayout({ children }: OfertaFrankLayoutProps) {
    return (
        <main>
            <Navbar></Navbar>
            {children}
            <Footer></Footer>
        </main>
    );
}
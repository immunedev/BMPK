import Footer from '@/components/footer';
import Navbar from '@/components/navbar';
import React, { ReactNode } from 'react';

interface OfertaWiborLayoutProps {
    children: ReactNode;
}

export default function OfertaWiborLayout({ children }: OfertaWiborLayoutProps) {
    return (
        <main>
            <Navbar></Navbar>
            {children}
            <Footer></Footer>
        </main>
    );
}
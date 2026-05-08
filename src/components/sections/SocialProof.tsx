'use client';

import { FadeUp } from '@/components/animations/FadeUp';

export function SocialProof() {
    return (
        <section className="py-20 border-y border-border bg-foreground/2">
            <div className="container mx-auto px-4 text-center">
                <FadeUp>
                    <p className="text-sm font-medium text-foreground/40 mb-10 uppercase tracking-widest">
                        Trusted by the most innovative photobooth creators worldwide 🌍
                    </p>

                    <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-50 grayscale hover:grayscale-0 transition-all duration-500 text-foreground">
                        {/* Simulating logos for now - replace with actual svgs from client */}
                        <div className="text-xl font-bold font-heading">ACME Studios</div>
                        <div className="text-xl font-bold font-heading">Lens & Light</div>
                        <div className="text-xl font-bold font-heading">SnapBox Pro</div>
                        <div className="text-xl font-bold font-heading">Memoria Booth</div>
                        <div className="text-xl font-bold font-heading">Flash Events</div>
                    </div>
                </FadeUp>
            </div>
        </section>
    );
}

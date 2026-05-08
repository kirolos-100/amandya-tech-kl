'use client';

import { FadeUp } from '@/components/animations/FadeUp';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Zap, MessageCircle } from 'lucide-react';

export function BottomCTA() {
    return (
        <section className="relative py-32 overflow-hidden border-t border-border">
            {/* Massive glow effect behind the CTA */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1100px] h-[700px] bg-accent/40 rounded-full blur-[160px] opacity-80 dark:opacity-50 pointer-events-none" />
            <div className="absolute bottom-0 right-[15%] w-[500px] h-[500px] bg-blue-500/30 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute top-0 left-[15%] w-[500px] h-[500px] bg-purple-500/30 rounded-full blur-[120px] pointer-events-none" />

            {/* Grid Pattern */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,var(--border)_1px,transparent_1px),linear-gradient(to_bottom,var(--border)_1px,transparent_1px)] bg-size-[4rem_4rem] mask-[radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-[0.05] dark:opacity-20 pointer-events-none" />

            <div className="container mx-auto px-4 relative z-10 text-center">
                <FadeUp>
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-foreground/3 mb-8 shadow-sm">
                        <Zap className="w-4 h-4 text-accent" />
                        <span className="text-sm font-medium text-foreground/80">Ready to Level Up?</span>
                    </div>

                    <h2 className="text-4xl md:text-7xl font-heading font-black text-foreground mb-8 tracking-tight max-w-4xl mx-auto">
                        Build Your Photobooth <br className="hidden md:block" />
                        <span className="text-transparent bg-clip-text bg-linear-to-r from-accent via-blue-400 to-purple-500">
                            Empire Today
                        </span>
                    </h2>

                    <p className="text-xl text-foreground/60 mb-12 max-w-2xl mx-auto leading-relaxed">
                        Join thousands of successful operators who have automated their workflows and boosted their revenue with Amandya Tech.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Link href="#pricing" className="w-full sm:w-auto">
                            <Button
                                size="lg"
                                className="w-full bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-10 h-14 text-lg font-bold shadow-xl dark:shadow-primary/20 transition-all hover:scale-105"
                            >
                                Start Building Now
                            </Button>
                        </Link>
                        <Link 
                            href="https://wa.me/6285669644533?text=Hello%20Amandya%20Tech,%20I%20would%20like%20a%20free%20consultation%20to%20start%20my%20photobooth%20business!" 
                            target="_blank"
                            className="w-full sm:w-auto"
                        >
                            <Button
                                size="lg"
                                variant="outline"
                                className="w-full rounded-full px-8 h-14 text-lg glass border-border hover:bg-foreground/5 text-foreground"
                            >
                                <MessageCircle className="mr-2 w-5 h-5 text-emerald-500" />
                                Free Consultation
                            </Button>
                        </Link>
                    </div>

                    <p className="mt-8 text-sm text-foreground/40 italic">
                        &ldquo;The most seamless all-in-one software for photobooth operators.&rdquo;
                    </p>
                </FadeUp>
            </div>
        </section>
    );
}

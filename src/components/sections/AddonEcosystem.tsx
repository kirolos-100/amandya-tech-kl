'use client';

import { FadeUp } from '@/components/animations/FadeUp';
import { Sparkles, Mail, Sticker, Camera, Zap } from 'lucide-react';

const ADDONS = [
    {
        title: 'Live Mode Integration',
        description: 'Display guest shots in real-time on big screens or TVs at the event venue. Make the atmosphere even more hyped!',
        icon: <Zap className="w-5 h-5 text-yellow-400" />,
        color: 'bg-yellow-500/10',
        border: 'border-yellow-500/20',
    },
    {
        title: 'Dual Camera Support',
        description: 'Switch between DSLR for clear output and Webcam/Wide-angle for fun videos or boomerangs.',
        icon: <Camera className="w-5 h-5 text-emerald-400" />,
        color: 'bg-emerald-500/10',
        border: 'border-emerald-500/20',
    },
    {
        title: 'Email & Custom Link',
        description: 'Send soft files automatically via Email or Link Sharing with your own branding (White-label experience).',
        icon: <Mail className="w-5 h-5 text-blue-400" />,
        color: 'bg-blue-500/10',
        border: 'border-blue-500/20',
    },
    {
        title: 'Extra Print & Sticker',
        description: 'Add extra print features or cute digital stickers to add value (and profit) to every event.',
        icon: <Sticker className="w-5 h-5 text-pink-400" />,
        color: 'bg-pink-500/10',
        border: 'border-pink-500/20',
    },
];

export function AddonEcosystem() {
    return (
        <section className="py-24 border-y border-border bg-foreground/1 relative overflow-hidden">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/25 rounded-full blur-[150px] pointer-events-none" />
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row items-start md:items-center gap-12 mb-16">
                    <div className="flex-1">
                        <FadeUp>
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-foreground/5 border border-border mb-6">
                                <Sparkles className="w-4 h-4 text-accent" />
                                <span className="text-sm font-medium text-foreground/80">Lightning-Fast Architecture</span>
                            </div>
                            <h2 className="text-3xl md:text-5xl font-heading font-bold text-foreground mb-6">
                                Go Pro with <span className="text-accent text-gradient">Custom Add-ons</span>
                            </h2>
                            <p className="text-lg text-foreground/60 max-w-xl">
                                Start with the core software and add premium modules whenever your business needs to scale up. Amandya Tech is ready to grow with you.
                            </p>
                        </FadeUp>
                    </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {ADDONS.map((addon, i) => (
                        <FadeUp key={i} delay={i * 0.1}>
                            <div className="h-full group p-6 rounded-2xl bg-card border border-border glass-card hover:bg-foreground/4 transition-all duration-300 shadow-sm hover:shadow-md">
                                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 ${addon.color} ${addon.border} border transition-transform group-hover:scale-110`}>
                                    {addon.icon}
                                </div>
                                <h3 className="text-xl font-bold font-heading text-foreground mb-3 group-hover:text-accent transition-colors">
                                    {addon.title}
                                </h3>
                                <p className="text-sm text-foreground/60 leading-relaxed">
                                    {addon.description}
                                </p>
                            </div>
                        </FadeUp>
                    ))}
                </div>
            </div>
        </section>
    );
}

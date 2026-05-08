'use client';

import { FadeUp } from '@/components/animations/FadeUp';
import { Star } from 'lucide-react';
import Image from 'next/image';

interface Testimonial {
    _id?: string;
    name: string;
    company?: string;
    role?: string;
    content: string;
    avatarUrl?: string;
    rating?: number;
}

const STATIC_TESTIMONIALS: Testimonial[] = [
    {
        name: "Sarah Jenkins",
        role: "Owner, Snap&Smile Events",
        content: "Since switching to Amandya Tech last month, it's been an absolute game changer. The dual camera feature alone has saved us thousands of dollars on buying extra iPads.",
        rating: 5,
    },
    {
        name: "Marcus Chen",
        role: "Director, Luxe Booths",
        content: "The offline mode is a true lifesaver. We once had a wedding job in the middle of nowhere with no signal, and everything synced seamlessly once we got Wi-Fi.",
        rating: 5,
    },
    {
        name: "Elena Rodriguez",
        role: "Event Coordinator",
        content: "Clients absolutely love the instant sharing feature. Collecting consent digitally also makes our legal process so much faster.",
        rating: 5,
    },
    {
        name: "David Kim",
        role: "Founder, DK Photography",
        content: "Thanks to the live template editor, I no longer need to open Photoshop on location. Fixing typos or swapping overlays is super easy right from my phone.",
        rating: 4,
    },
];

export function Testimonials({ initialTestimonials = [] }: { initialTestimonials?: Testimonial[] }) {
    const displayTestimonials = initialTestimonials.length > 0 ? initialTestimonials : STATIC_TESTIMONIALS;

    return (
        <section className="py-24 bg-foreground/2 border-y border-border overflow-hidden">
            <div className="container mx-auto px-4 mb-16 text-center">
                <FadeUp>
                    <h2 className="text-3xl md:text-5xl font-heading font-bold text-foreground mb-6">
                        The Top Choice for <span className="text-accent">Creators Worldwide 🖤</span>
                    </h2>
                </FadeUp>
            </div>

            {/* Infinite Marquee effect using CSS */}
            <div className="relative flex overflow-x-hidden group">
                <div className="py-4 animate-marquee whitespace-nowrap flex gap-6 group-hover:pause shrink-0 pl-6">
                    {displayTestimonials.map((t, i) => (
                        <div key={t._id || i} className="w-[350px] md:w-[450px] p-8 rounded-2xl bg-card border border-border shrink-0 whitespace-normal shadow-sm group/card hover:shadow-md transition-shadow">
                            <div className="flex text-accent mb-4">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} className={`w-4 h-4 ${i < (t.rating ?? 5) ? 'fill-current' : 'opacity-30'}`} />
                                ))}
                            </div>
                            <p className="text-foreground/80 text-lg leading-relaxed mb-6 group-hover/card:text-foreground transition-colors">&quot;{t.content}&quot;</p>
                            <div>
                                <h4 className="font-heading font-bold text-foreground mb-1 flex items-center gap-3">
                                    {t.avatarUrl && (
                                        <Image 
                                            src={t.avatarUrl} 
                                            alt={t.name} 
                                            width={32} 
                                            height={32} 
                                            sizes="32px"
                                            className="rounded-full object-cover" 
                                        />
                                    )}
                                    {t.name}
                                </h4>
                                <p className="text-sm text-foreground/50">{t.company || t.role}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Duplicate for seamless infinite scrolling */}
                <div className="py-4 animate-marquee whitespace-nowrap flex gap-6 group-hover:pause shrink-0 pl-6" aria-hidden="true">
                    {displayTestimonials.map((t, i) => (
                        <div key={`dup-${t._id || i}`} className="w-[350px] md:w-[450px] p-8 rounded-2xl bg-card border border-border shrink-0 whitespace-normal shadow-sm group/card hover:shadow-md transition-shadow">
                            <div className="flex text-accent mb-4">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} className={`w-4 h-4 ${i < (t.rating ?? 5) ? 'fill-current' : 'opacity-30'}`} />
                                ))}
                            </div>
                            <p className="text-foreground/80 text-lg leading-relaxed mb-6 group-hover/card:text-foreground transition-colors">&quot;{t.content}&quot;</p>
                            <div>
                                <h4 className="font-heading font-bold text-foreground mb-1 flex items-center gap-3">
                                    {t.avatarUrl && (
                                        <Image 
                                            src={t.avatarUrl} 
                                            alt={t.name} 
                                            width={32} 
                                            height={32} 
                                            sizes="32px"
                                            className="rounded-full object-cover" 
                                        />
                                    )}
                                    {t.name}
                                </h4>
                                <p className="text-sm text-foreground/50">{t.company || t.role}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Gradient fades for edges */}
                <div className="absolute inset-y-0 left-0 w-32 bg-linear-to-r from-background to-transparent z-10 pointer-events-none" />
                <div className="absolute inset-y-0 right-0 w-32 bg-linear-to-l from-background to-transparent z-10 pointer-events-none" />
            </div>
        </section>
    );
}

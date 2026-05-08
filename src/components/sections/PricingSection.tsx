'use client';

import { useState } from 'react';
import { FadeUp } from '@/components/animations/FadeUp';
import { Button } from '@/components/ui/button';
import { Check, MessageCircle } from 'lucide-react';
import { cn } from '@/lib/utils';

type BillingPeriod = 'monthly' | 'sixMonths' | 'yearly';
type PricingCategory = 'time' | 'token';

interface BaseTier {
    _id?: string;
    name: string;
    description: string;
    features: string[];
    isPopular?: boolean;
}

interface TimeTier extends BaseTier {
    prices: Record<BillingPeriod, number>;
    addons: string;
}

interface TokenTier extends BaseTier {
    price: number;
    addons?: string;
}

const TIME_TIERS: TimeTier[] = [
    {
        name: 'Lite',
        description: 'Webcam/DSLR + Windows OS. Perfect for independent operators looking to start their hustle.',
        prices: {
            monthly: 650000,
            sixMonths: 3500000,
            yearly: 6000000,
        },
        features: [
            'Cam Shutter Mode',
            'Offline & Online Payment System',
            'Online Dashboard System',
            'Custom - Visual Branding',
            'Max 100 Frames',
            '1 Device',
            'Auto Update Device',
            'Advanced Print Size & Voucher Discount',
        ],
        addons: 'Live Mode, Dual Camera, Email Soft File, Custom Link, Extra Print',
    },
    {
        name: 'Basic',
        description: 'Upgrade your workflow with Live Mode and Extra Print support.',
        isPopular: true,
        prices: {
            monthly: 1000000,
            sixMonths: 5500000,
            yearly: 10000000,
        },
        features: [
            'Everything in Lite',
            'Live Mode Integration',
            'Extra Print Support',
            'Frame Category Management',
            'Most Selling Frame Analytics',
            'Instant Photo Delivery',
        ],
        addons: 'Dual Camera, Email Soft File, Custom Soft File Link',
    },
    {
        name: 'Pro',
        description: 'Full white-label & custom experience. Build your photobooth empire now.',
        prices: {
            monthly: 1500000,
            sixMonths: 7500000,
            yearly: 13000000,
        },
        features: [
            'Everything in Basic',
            'Full Custom UI/UX & Branding',
            'Custom Photo Effects',
            'Consent Sharing (Optional)',
            'Custom Experience & Flow',
            'Unlimited Frames',
            'Priority Support',
        ],
        addons: 'Dual Camera, Email Soft File, Custom Soft File Link, Sticker',
    },
];

const TOKEN_TIERS: TokenTier[] = [
    {
        name: '300 Foto',
        description: 'Ideal for small events or one-day wedding parties.',
        price: 250000,
        features: [
            '300 Photo Tokens',
            'All Lite Features Included',
            'No Expiration Date',
            'QR Code sharing',
        ],
    },
    {
        name: '600 Foto',
        description: 'Perfect for corporate events or busy exhibitions.',
        isPopular: true,
        price: 450000,
        features: [
            '600 Photo Tokens',
            'All Basic Features Included',
            'No Expiration Date',
            'Advanced Analytics',
        ],
    },
    {
        name: '1000 Foto',
        description: 'Best value for agencies handling multiple events.',
        price: 700000,
        features: [
            '1000 Photo Tokens',
            'Everything in Pro Included',
            'No Expiration Date',
            'Priority Support',
        ],
    },
];

const formatIDR = (amount: number | undefined | null) => {
    if (amount === undefined || amount === null) return 'Contact Us';
    return new Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'IDR',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
    }).format(amount);
};

export function PricingSection({ 
    initialTimeTiers = [], 
    initialTokenTiers = [] 
}: { 
    initialTimeTiers?: TimeTier[];
    initialTokenTiers?: TokenTier[];
}) {
    const [category, setCategory] = useState<PricingCategory>('time');
    const [period, setPeriod] = useState<BillingPeriod>('yearly');

    const displayTimeTiers = initialTimeTiers.length > 0 ? initialTimeTiers : TIME_TIERS;
    const displayTokenTiers = initialTokenTiers.length > 0 ? initialTokenTiers : TOKEN_TIERS;

    const handleWhatsAppClick = (planName: string, detail: string) => {
        const periodLabel = detail === 'monthly' ? 'Monthly' : detail === 'sixMonths' ? '6 Months' : '1 Year';
        const message = encodeURIComponent(`Hello Amandya Tech, I am interested in the ${planName} package (${periodLabel}). Can you provide more information?`);
        window.open(`https://wa.me/6285669644533?text=${message}`, '_blank');
    };

    return (
        <section id="pricing" className="py-24 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-accent/30 rounded-full blur-[150px] pointer-events-none -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-[700px] h-[700px] bg-blue-500/25 rounded-full blur-[130px] pointer-events-none -translate-x-1/2 translate-y-1/2" />

            <div className="container mx-auto px-4">
                <div className="text-center mb-16 max-w-2xl mx-auto">
                    <FadeUp>
                        <h2 className="text-3xl md:text-5xl font-heading font-bold text-foreground mb-6">
                            Honest Pricing, No Nonsense Features
                        </h2>
                        
                        {/* Primary Category Toggle */}
                        <div className="flex justify-center mb-8">
                            <div className="inline-flex p-1 bg-foreground/5 border border-border rounded-2xl shadow-sm">
                                <button
                                    onClick={() => setCategory('time')}
                                    className={cn(
                                        'px-6 py-2.5 rounded-xl text-sm font-bold transition-all',
                                        category === 'time' ? 'bg-accent text-accent-foreground shadow-lg' : 'text-foreground/50 hover:text-foreground'
                                    )}
                                >
                                    Time Based
                                </button>
                                <button
                                    onClick={() => setCategory('token')}
                                    className={cn(
                                        'px-6 py-2 rounded-full text-sm font-semibold transition-all whitespace-nowrap',
                                        category === 'token' ? 'bg-accent text-accent-foreground shadow-lg' : 'text-foreground/50 hover:text-foreground'
                                    )}
                                >
                                    Token System
                                </button>
                            </div>
                        </div>

                        {/* Secondary Time Period Toggle */}
                        {category === 'time' && (
                            <div className="flex bg-foreground/5 p-1 rounded-full border border-border">
                                <button
                                    onClick={() => setPeriod('monthly')}
                                    className={cn(
                                        'px-6 py-2 rounded-full text-xs font-bold transition-all',
                                        period === 'monthly' ? 'bg-background text-foreground shadow-sm' : 'text-foreground/40 hover:text-foreground'
                                    )}
                                >
                                    Monthly
                                </button>
                                <button
                                    onClick={() => setPeriod('yearly')}
                                    className={cn(
                                        'px-6 py-2 rounded-full text-xs font-bold transition-all flex items-center gap-2',
                                        period === 'yearly' ? 'bg-accent text-accent-foreground' : 'text-foreground/50 hover:text-foreground'
                                    )}
                                >
                                    1 Year
                                    <span className="text-[10px] bg-foreground/10 px-1.5 py-0.5 rounded-full">Save More</span>
                                </button>
                                <button
                                    onClick={() => setPeriod('sixMonths')}
                                    className={cn(
                                        'px-4 py-2 rounded-full text-xs font-medium transition-all',
                                        period === 'sixMonths' ? 'bg-background text-foreground shadow-sm' : 'text-foreground/50 hover:text-foreground'
                                    )}
                                >
                                    6 Months
                                </button>
                            </div>
                        )}
                    </FadeUp>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto relative z-10">
                    {(category === 'time' ? displayTimeTiers : displayTokenTiers).map((tier, i) => {
                        const isTimeTier = category === 'time';
                        const tierId = tier._id || `tier-${i}`;
                        return (
                            <FadeUp key={`${category}-${tierId}`} delay={i * 0.1} className={cn("flex", tier.isPopular && "md:-mt-4 md:mb-4")}>
                                <div className={cn(
                                    "flex flex-col w-full p-8 rounded-3xl border transition-all duration-300 glass-card relative overflow-hidden group shadow-sm",
                                    tier.isPopular 
                                        ? "border-accent/50 bg-background scale-105 shadow-2xl shadow-accent/10 z-10" 
                                        : "border-border bg-card/50 hover:bg-foreground/4"
                                )}>
                                    {tier.isPopular && (
                                        <>
                                            <div className="absolute top-0 inset-x-0 h-px bg-linear-to-r from-transparent via-accent to-transparent" />
                                        <div className="absolute top-6 right-6 text-[10px] font-bold text-accent uppercase tracking-widest bg-accent/10 px-3 py-1 rounded-full border border-accent/20">
                                            Most Popular
                                        </div>
                                    </>
                                )}

                                <h3 className="text-xl font-heading font-bold text-foreground mb-2">{tier.name}</h3>
                                <p className="text-sm text-foreground/50 mb-6 min-h-[40px] leading-relaxed italic">
                                    &ldquo;{tier.description}&rdquo;
                                </p>

                                <div className="mb-8">
                                    <span className="text-3xl font-bold text-foreground">
                                        {isTimeTier 
                                            ? formatIDR((tier as TimeTier).prices?.[period])
                                            : formatIDR((tier as TokenTier).price)
                                        }
                                    </span>
                                    {(isTimeTier ? (tier as TimeTier).prices?.[period] : (tier as TokenTier).price) !== undefined && (
                                        <span className="text-foreground/40 text-sm ml-1">
                                            /{category === 'time' 
                                                ? (period === 'monthly' ? 'month' : period === 'sixMonths' ? '6months' : 'year')
                                                : 'package'}
                                        </span>
                                    )}
                                </div>

                                <Button
                                    onClick={() => handleWhatsAppClick(tier.name, category === 'time' ? period : `${tier.name} Token`)}
                                    className={cn(
                                        "w-full rounded-xl mb-8 font-bold h-12 transition-all group-hover:scale-[1.02] shadow-md",
                                        tier.isPopular
                                            ? "bg-accent hover:bg-accent/90 text-accent-foreground shadow-accent/20"
                                            : "bg-foreground/5 hover:bg-foreground/10 text-foreground border-border"
                                    )}
                                >
                                    <MessageCircle className="w-4 h-4 mr-2" />
                                    Order Now
                                </Button>

                                <div className="space-y-4">
                                    <p className="text-xs font-bold text-foreground/30 uppercase tracking-widest">Core Features</p>
                                    <ul className="space-y-3">
                                        {tier.features?.map((feature, idx) => (
                                            <li key={`${tier.name}-feature-${idx}`} className="flex items-start gap-3">
                                                <Check className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                                                <span className="text-sm text-foreground/70 leading-snug">{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                    
                                    {tier.addons && (
                                        <div className="pt-4 mt-4 border-t border-border">
                                            <p className="text-xs font-bold text-foreground/30 uppercase tracking-widest mb-2">Supported Add-ons</p>
                                            <p className="text-xs text-foreground/50 leading-relaxed">
                                                {tier.addons}
                                            </p>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </FadeUp>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}

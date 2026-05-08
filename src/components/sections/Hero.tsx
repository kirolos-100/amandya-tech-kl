'use client';

import { FadeUp } from '@/components/animations/FadeUp';
import { HeroTypography } from '@/components/animations/HeroTypography';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowRight, Sparkles, LayoutDashboard, Image as ImageIcon, Users, BarChart3, Settings, Zap, Camera, Smartphone } from 'lucide-react';

export function Hero() {
    return (
        <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-10">
            {/* Background Gradients & Effects */}
            <div className="absolute inset-0 z-0">
                <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-accent/30 rounded-full blur-[120px] opacity-80 dark:opacity-60" />
                <div className="absolute top-1/2 left-[5%] -translate-y-1/2 w-[400px] h-[400px] bg-blue-500/30 rounded-full blur-[100px] pointer-events-none" />
                <div className="absolute bottom-1/4 right-[5%] w-[500px] h-[500px] bg-purple-500/30 rounded-full blur-[120px] pointer-events-none" />
                <div className="absolute inset-0 bg-[linear-gradient(to_right,var(--border)_1px,transparent_1px),linear-gradient(to_bottom,var(--border)_1px,transparent_1px)] bg-size-[4rem_4rem] mask-[radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-[0.05] dark:opacity-20" />
            </div>

            <div className="container mx-auto px-4 z-10">
                <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
                    {/* Badge */}
                    <FadeUp delay={0.1} yOffset={20}>
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-border glass mb-8 animate-pulse-slow">
                            <Sparkles className="w-4 h-4 text-accent" />
                            <span className="text-sm font-medium text-foreground/80">Amandya Tech V1.1 Is Now Live 🎉</span>
                        </div>
                    </FadeUp>

                    <HeroTypography
                        text="Level Up Your Photobooth Business With Smart Automation 🚀"
                        highlightedWord="Smart Automation"
                    />

                    {/* Subheadline */}
                    <FadeUp delay={0.3}>
                        <p className="text-lg md:text-xl text-foreground/60 mb-10 max-w-2xl mx-auto leading-relaxed">
                            An all-in-one software ecosystem designed specifically for modern photobooth operators. Experience a seamless workflow with Live Gallery, Dual Camera, and automated Digital Consent.
                        </p>
                    </FadeUp>

                    {/* CTA Buttons */}
                    <FadeUp delay={0.4} className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
                        <Link href="#pricing" className="w-full sm:w-auto">
                            <Button
                                size="lg"
                                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-8 h-12 text-base shadow-xl dark:shadow-primary/20"
                            >
                                Level Up Now
                            </Button>
                        </Link>
                        <Link href="#features" className="w-full sm:w-auto">
                            <Button
                                size="lg"
                                variant="outline"
                                className="w-full rounded-full px-8 h-12 text-base glass border-border hover:bg-foreground/5 text-foreground"
                            >
                                Explore Features
                                <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                            </Button>
                        </Link>
                    </FadeUp>
                </div>

                {/* Dashboard Mockup / Isometric View */}
                <FadeUp delay={0.6} duration={1} className="my-20 relative mx-auto max-w-5xl perspective-[2000px]">
                    <div
                        className="relative rounded-2xl border border-border bg-card shadow-2xl overflow-hidden glass-card"
                        style={{
                            transform: 'rotateX(8deg) rotateY(0deg) scale(1)', // Slight 3D effect tilting back
                            transformStyle: 'preserve-3d',
                        }}
                    >
                        {/* Top Bar Fake Window */}
                        <div className="h-10 border-b border-border flex items-center justify-between px-4 bg-foreground/5">
                            <div className="flex gap-2">
                                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                                <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                                <div className="w-3 h-3 rounded-full bg-green-500/80" />
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="text-[10px] text-foreground/40 font-mono uppercase tracking-widest">Amandya_Cloud_OS_v1.1</span>
                                <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                            </div>
                        </div>

                        {/* Dashboard content wrapper */}
                        <div className="flex h-[450px] opacity-90 transition-opacity duration-700 relative">
                            {/* Scanning Line Animation */}
                            <div className="absolute inset-0 z-20 pointer-events-none overflow-hidden">
                                <div className="w-full h-[2px] bg-linear-to-r from-transparent via-accent/50 to-transparent absolute top-0 left-0 animate-scan" style={{ textShadow: '0 0 10px var(--accent)' }} />
                            </div>

                            {/* Sidebar Mockup */}
                            <div className="w-16 md:w-20 border-r border-border flex flex-col items-center py-6 gap-6 bg-foreground/2">
                                <div className="w-10 h-10 rounded-xl bg-accent text-accent-foreground flex items-center justify-center shadow-lg shadow-accent/20">
                                    <LayoutDashboard size={20} />
                                </div>
                                <div className="flex flex-col gap-4 text-foreground/30">
                                    <ImageIcon size={20} />
                                    <BarChart3 size={20} />
                                    <Users size={20} />
                                    <div className="mt-20">
                                        <Settings size={20} />
                                    </div>
                                </div>
                            </div>

                            {/* Main Viewport Mockup */}
                            <div className="flex-1 flex flex-col p-6 overflow-hidden">
                                {/* Header / Stats Row */}
                                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                                    <div className="p-4 rounded-xl bg-foreground/3 border border-border relative overflow-hidden group/card shadow-sm">
                                        <div className="text-[10px] text-foreground/40 uppercase tracking-widest mb-1">Total Shutter Count</div>
                                        <div className="text-xl font-bold text-foreground mb-1">12,842</div>
                                        <div className="text-[10px] text-emerald-500 font-medium">+12.5% Today</div>
                                        <div className="absolute -right-2 -bottom-2 opacity-5 dark:opacity-10 text-foreground">
                                            <Camera size={48} />
                                        </div>
                                    </div>
                                    <div className="p-4 rounded-xl bg-foreground/3 border border-border relative overflow-hidden group/card shadow-sm">
                                        <div className="text-[10px] text-foreground/40 uppercase tracking-widest mb-1">Payment Status</div>
                                        <div className="text-xl font-bold text-foreground mb-1">Online</div>
                                        <div className="flex items-center gap-1.5">
                                            <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                                            <span className="text-[10px] text-emerald-500 font-medium">All Online</span>
                                        </div>
                                        <div className="absolute -right-2 -bottom-2 opacity-5 dark:opacity-10 text-foreground">
                                            <Smartphone size={48} />
                                        </div>
                                    </div>
                                    <div className="p-4 rounded-xl bg-foreground/3 border border-border relative overflow-hidden hidden lg:block shadow-sm">
                                        <div className="text-[10px] text-foreground/40 uppercase tracking-widest mb-1">Voucher Usage</div>
                                        <div className="text-xl font-bold text-foreground mb-1">158 Used</div>
                                        <div className="text-[10px] text-blue-500 font-medium">85% Capacity</div>
                                        <div className="absolute -right-2 -bottom-2 opacity-5 dark:opacity-10 text-foreground">
                                            <Zap size={48} />
                                        </div>
                                    </div>
                                    <div className="p-4 rounded-xl bg-foreground/3 border border-border relative overflow-hidden hidden lg:block shadow-sm">
                                        <div className="text-[10px] text-foreground/40 uppercase tracking-widest mb-1">Frame Processing</div>
                                        <div className="text-xl font-bold text-foreground mb-1">Instant</div>
                                        <div className="text-[10px] text-purple-500 font-medium">Auto-Render</div>
                                        <div className="absolute -right-2 -bottom-2 opacity-5 dark:opacity-10 text-foreground">
                                            <Sparkles size={48} />
                                        </div>
                                    </div>
                                </div>

                                {/* Content Grid Area */}
                                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 flex-1 min-h-0">
                                    {/* Large Graph Area */}
                                    <div className="lg:col-span-2 rounded-xl bg-foreground/3 border border-border p-6 flex flex-col relative group/graph overflow-hidden shadow-sm">
                                        <div className="flex items-center justify-between mb-6">
                                            <div className="text-xs text-foreground/60 font-medium">Hourly Engagement</div>
                                            <div className="flex gap-1">
                                                <div className="w-2 h-2 rounded-full bg-emerald-500/50" />
                                                <div className="w-2 h-2 rounded-full bg-accent/50" />
                                            </div>
                                        </div>
                                        <div className="flex-1 flex items-end gap-2 md:gap-3">
                                            {[30, 45, 25, 60, 40, 75, 55, 90, 65, 85, 45, 100].map((h, i) => (
                                                <div key={i} className="flex-1 bg-linear-to-t from-accent/40 via-accent/20 to-transparent rounded-t-sm relative group/bar transition-all hover:scale-x-110" style={{ height: `${h}%` }}>
                                                    <div className="absolute inset-0 bg-accent opacity-0 group-hover/bar:opacity-30 transition-opacity" />
                                                </div>
                                            ))}
                                        </div>
                                        {/* Overlay Glow */}
                                        <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-linear-to-t from-accent/5 to-transparent pointer-events-none" />
                                    </div>

                                    {/* Sidebar feed mockup */}
                                    <div className="rounded-xl bg-foreground/3 border border-border p-4 flex flex-col gap-3 min-h-0 shadow-sm">
                                        <div className="text-[10px] text-foreground/40 uppercase tracking-widest mb-2 font-mono">Recent_Activity.LOG</div>
                                        {[1, 2, 3, 4, 5].map(i => (
                                            <div key={i} className="flex items-start gap-3 p-2 rounded-lg bg-foreground/2 border border-border/50">
                                                <div className="w-6 h-6 rounded-md bg-foreground/10 flex items-center justify-center shrink-0">
                                                    <ImageIcon size={12} className="text-foreground/40" />
                                                </div>
                                                <div className="flex-1 space-y-1.5 overflow-hidden">
                                                    <div className="w-full h-1.5 rounded bg-foreground/20" />
                                                    <div className="w-2/3 h-1 rounded bg-foreground/10" />
                                                </div>
                                                <div className="text-[8px] text-emerald-500 font-mono">OK</div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Glow projection from bottom of mockup */}
                        <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-3/4 h-16 bg-accent/40 blur-[50px] pointer-events-none" />
                    </div>
                </FadeUp>
            </div>
        </section>
    );
}

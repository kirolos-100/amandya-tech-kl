'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Menu, X, Instagram, Mail, MessageCircle, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { ThemeToggle } from './ThemeToggle';

const NAV_LINKS = [
    { href: '#features', label: 'Features' },
    { href: '#how-it-works', label: 'How It Works' },
    { href: '#pricing', label: 'Pricing & Plans' },
];

const SOCIAL_LINKS = [
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: MessageCircle, href: 'https://wa.me/6285669644533', label: 'WhatsApp' },
    { icon: Mail, href: 'mailto:info@amandya.tech', label: 'Email' },
];

export function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Body scroll lock
    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    }, [isMobileMenuOpen]);

    const menuVariants = {
        closed: {
            opacity: 0,
            y: -20,
            transition: {
                staggerChildren: 0.05,
                staggerDirection: -1,
            },
        },
        open: {
            opacity: 1,
            y: 0,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2,
            },
        },
    };

    const itemVariants = {
        closed: { opacity: 0, x: -20 },
        open: { opacity: 1, x: 0 },
    };

    return (
        <>
            <nav
                className={cn(
                    'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
                    isScrolled ? 'glass py-3 md:py-4 border-b border-border shadow-2xl' : 'bg-transparent py-6 md:py-8'
                )}
            >
                <div className="container mx-auto px-6 lg:max-w-7xl flex items-center justify-between">
                    <Link href="/" className="flex items-center gap-2 relative z-50">
                        <Image
                            src="/logo-amandya-white.png"
                            alt="Amandya Tech Logo"
                            width={160}
                            height={45}
                            className="h-7 md:h-9 w-auto object-contain transition-transform hover:scale-105 dark:invert-0 invert"
                            priority
                        />
                    </Link>

                    {/* Desktop Nav */}
                    <div className="hidden md:flex items-center gap-6 lg:gap-10">
                        {NAV_LINKS.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className="text-sm font-semibold text-foreground/60 hover:text-foreground transition-all hover:-translate-y-px"
                            >
                                {link.label}
                            </Link>
                        ))}
                        <div className="flex items-center gap-4 border-l border-border pl-6 lg:pl-10">
                            <ThemeToggle />
                            <Link href="#pricing">
                                <Button
                                    variant="default"
                                    className="bg-accent hover:bg-accent/90 text-accent-foreground rounded-full px-8 h-11 font-bold shadow-lg shadow-accent/20 transition-all hover:scale-105 active:scale-95"
                                >
                                    Join Amandya
                                </Button>
                            </Link>
                        </div>
                    </div>

                    {/* Mobile Toggle */}
                    <button
                        className="md:hidden relative z-50 p-2 text-foreground/80 hover:text-foreground transition-colors"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        aria-label="Toggle Menu"
                    >
                        <div className="relative w-6 h-6 flex items-center justify-center">
                            <AnimatePresence mode="wait">
                                {isMobileMenuOpen ? (
                                    <motion.div
                                        key="close"
                                        initial={{ opacity: 0, rotate: -90 }}
                                        animate={{ opacity: 1, rotate: 0 }}
                                        exit={{ opacity: 0, rotate: 90 }}
                                    >
                                        <X size={26} strokeWidth={2.5} />
                                    </motion.div>
                                ) : (
                                    <motion.div
                                        key="menu"
                                        initial={{ opacity: 0, rotate: 90 }}
                                        animate={{ opacity: 1, rotate: 0 }}
                                        exit={{ opacity: 0, rotate: -90 }}
                                    >
                                        <Menu size={26} strokeWidth={2.5} />
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    </button>
                </div>
            </nav>

            {/* Mobile Menu Overlay - Moved outside nav to prevent CSS inheritance issues */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="fixed inset-0 z-9999 md:hidden bg-background flex flex-col"
                        data-lenis-prevent
                    >
                        {/* Mobile Overlay Header */}
                        <div className="flex items-center justify-between px-6 py-6 md:py-8 border-b border-border">
                            <Link href="/" className="flex items-center gap-2" onClick={() => setIsMobileMenuOpen(false)}>
                                <Image
                                    src="/logo-amandya-white.png"
                                    alt="Amandya Tech Logo"
                                    width={160}
                                    height={45}
                                    className="h-7 md:h-9 w-auto object-contain dark:invert-0 invert"
                                />
                            </Link>
                            <div className="flex items-center gap-2">
                                <ThemeToggle />
                                <button
                                    className="p-2 text-foreground/80 hover:text-foreground transition-colors"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    <X size={26} strokeWidth={2.5} />
                                </button>
                            </div>
                        </div>

                        {/* Inner Scroll Container */}
                        <motion.div
                            variants={menuVariants}
                            initial="closed"
                            animate="open"
                            exit="closed"
                            className="relative flex-1 overflow-y-auto px-8 py-12 flex flex-col"
                        >
                            {/* Close overlay trigger (invisible but clickable on empty areas) */}
                            <div 
                                className="absolute inset-0 -z-10" 
                                onClick={() => setIsMobileMenuOpen(false)}
                            />
                            
                            <div className="flex-1 flex flex-col justify-center space-y-12">
                                <div className="space-y-4">
                                    <motion.p variants={itemVariants} className="text-[10px] font-bold text-accent uppercase tracking-[0.2em] opacity-50">
                                        Navigation Menu
                                    </motion.p>
                                    
                                    <div className="flex flex-col gap-4 xs:gap-6">
                                        {NAV_LINKS.map((link) => (
                                            <motion.div key={link.href} variants={itemVariants}>
                                                <Link
                                                    href={link.href}
                                                    className="text-4xl xs:text-5xl font-heading font-extrabold text-foreground/90 hover:text-accent transition-colors flex items-center group active:scale-95 origin-left"
                                                    onClick={() => setIsMobileMenuOpen(false)}
                                                >
                                                    {link.label}
                                                    <ArrowRight className="ml-4 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-accent hidden sm:block" />
                                                </Link>
                                            </motion.div>
                                        ))}
                                    </div>
                                </div>

                                <motion.div variants={itemVariants}>
                                    <Link href="#pricing" onClick={() => setIsMobileMenuOpen(false)}>
                                        <Button
                                            variant="default"
                                            className="w-full h-14 xs:h-16 text-lg bg-accent hover:bg-accent/90 text-accent-foreground rounded-2xl font-bold shadow-2xl shadow-accent/20 transition-transform active:scale-95"
                                        >
                                            Get Started
                                        </Button>
                                    </Link>
                                </motion.div>
                            </div>

                            {/* Footer Area */}
                            <motion.div variants={itemVariants} className="pt-12 pb-6 space-y-8">
                                <div className="h-px bg-border w-full" />
                                
                                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-8">
                                    <div className="flex gap-4">
                                        {SOCIAL_LINKS.map((social) => (
                                            <Link
                                                key={social.label}
                                                href={social.href}
                                                className="w-12 h-12 rounded-2xl bg-foreground/5 border border-border flex items-center justify-center text-foreground/60 hover:text-accent hover:border-accent/50 transition-all hover:-translate-y-1"
                                                aria-label={social.label}
                                            >
                                                <social.icon size={22} />
                                            </Link>
                                        ))}
                                    </div>
                                    <div>
                                        <p className="text-[10px] font-bold text-foreground/30 uppercase tracking-widest mb-1">Need Help?</p>
                                        <a href="mailto:info@amandya.tech" className="text-foreground/80 text-base font-medium hover:text-accent transition-colors">
                                            info@amandya.tech
                                        </a>
                                    </div>
                                </div>
                                
                                <p className="text-center text-foreground/20 text-[10px]">
                                    © 2026 Amandya Tech. Built with 🔥 for Photobooth Operators.
                                </p>
                            </motion.div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}

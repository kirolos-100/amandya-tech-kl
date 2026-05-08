'use client';

import { FadeUp } from '@/components/animations/FadeUp';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from '@/components/ui/accordion';

export interface FAQItem {
    _id?: string;
    question: string;
    answer: string;
}

const STATIC_FAQS: FAQItem[] = [
    {
        question: 'Can it run without internet?',
        answer: 'Absolutely! Amandya Tech has a super resilient offline mode. Guests can still take photos, sign consents, and enter data. Everything will automatically sync to the cloud and send emails once Wi-Fi is restored.',
    },
    {
        question: 'Can I use both a DSLR and a Webcam at the same event?',
        answer: 'Definitely. Our dual-camera architecture allows you to plug in a DSLR for stunning photos and a webcam for instant GIFs/Boomerangs. The software automatically switches cameras smoothly based on the template chosen by the guest.',
    },
    {
        question: 'Is there a limit to how many events can run simultaneously?',
        answer: 'No event limits! Our subscription is based on the number of active devices. If you use the Pro plan (3 devices), you can run 3 different events simultaneously or set up 3 booths at one massive event.',
    },
    {
        question: 'How does the Consent App add-on work?',
        answer: 'The Consent App is a separate interface that you can open on an iPad, placed slightly away from the main booth. After guests take a photo, it appears on the iPad for them to privately review, sign marketing/liability waivers, and enter their email to receive a digital copy.',
    },
    {
        question: 'Do my clients get a live gallery link?',
        answer: 'Always! Every event automatically generates an optimized mobile live gallery. If you are on the Pro or Enterprise plan, this gallery is fully white-labeled with your own branding and custom domain.',
    },
];

export function FAQSection({ initialFaqs = [] }: { initialFaqs?: FAQItem[] }) {
    const displayFaqs = initialFaqs.length > 0 ? initialFaqs : STATIC_FAQS;

    return (
        <section id="faq" className="py-24 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-[700px] h-[700px] bg-accent/25 rounded-full blur-[130px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-purple-500/20 rounded-full blur-[120px] pointer-events-none -translate-x-1/4 translate-y-1/4" />
            
            <div className="container mx-auto px-4 max-w-4xl">
                <FadeUp className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-heading font-bold text-foreground mb-6">
                        Frequently Asked <span className="text-accent">Questions (FAQ)</span>
                    </h2>
                    <p className="text-lg text-foreground/60">
                        Have questions? We have the answers. Need more help? Our support team is on standby 24/7.
                    </p>
                </FadeUp>

                <FadeUp delay={0.2}>
                    <div className="bg-card rounded-2xl border border-border p-6 md:p-8 glass-card shadow-sm">
                        <Accordion className="w-full">
                            {displayFaqs.map((faq, i) => (
                                <AccordionItem key={faq._id || i} value={`item-${i}`} className="border-border">
                                    <AccordionTrigger className="text-left text-foreground hover:text-accent transition-colors font-medium text-lg py-6">
                                        {faq.question}
                                    </AccordionTrigger>
                                    <AccordionContent className="text-foreground/60 leading-relaxed text-base pb-6 pr-6">
                                        {faq.answer}
                                    </AccordionContent>
                                </AccordionItem>
                            ))}
                        </Accordion>
                    </div>
                </FadeUp>
            </div>
        </section>
    );
}

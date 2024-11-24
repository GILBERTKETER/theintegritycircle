import React from 'react'
export const metadata = {
    title: 'Frequently Asked Questions | The Integrity Circle',
    description: 'Find answers to common questions about The Integrity Circle. We provide transparency and clarity on our services and practices.',
    keywords: 'FAQ, Frequently Asked Questions, The Integrity Circle, Customer Support, Transparency, Ethical Practices, Inquiries, Services',
    openGraph: {
        title: 'Frequently Asked Questions | The Integrity Circle',
        description: 'Explore frequently asked questions and discover more about The Integrity Circle. We are dedicated to providing transparency and clarity.',
        url: 'https://www.integritycircle.co.ke/faq',
        siteName: 'The Integrity Circle',
        images: [
            {
                url: '/images/og-faq.png',
                width: 1200,
                height: 630,
                alt: 'FAQ page preview for The Integrity Circle',
            },
        ],
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Frequently Asked Questions | The Integrity Circle',
        description: 'Have questions? Find answers in our FAQ section and learn more about The Integrity Circle’s services and practices.',
        images: ['/images/og-faq.png'],
    },
};

import FAQ from './index'
function FAQS() {
    return (
        <div>
            <FAQ />
        </div>
    )
}

export default FAQS

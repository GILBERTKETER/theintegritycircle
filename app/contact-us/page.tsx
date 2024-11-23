import React from 'react'
export const metadata = {
    title: 'Contact Us | The Integrity Circle',
    description: 'Get in touch with The Integrity Circle for inquiries, support, or to share your feedback. We are here to assist you with transparency and integrity.',
    keywords: 'Contact Us, Customer Support, The Integrity Circle, Inquiries, Feedback, Support, Ethical Practices',
    openGraph: {
        title: 'Contact Us | The Integrity Circle',
        description: 'Reach out to The Integrity Circle for any questions, support, or feedback. We prioritize transparency, integrity, and providing you with the assistance you need.',
        url: 'https://www.integritycircle.co.ke/contact-us',
        siteName: 'The Integrity Circle',
        images: [
            {
                url: '/images/og-contact-us.png',
                width: 1200,
                height: 630,
                alt: 'Contact Us page preview for The Integrity Circle',
            },
        ],
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Contact Us | The Integrity Circle',
        description: 'Have questions or need support? Contact The Integrity Circle and get the assistance you need with integrity and transparency.',
        images: ['/images/og-contact-us.png'],
    },
};





import Contactus from './index'
function Contact() {
    return (
        <div>
            <Contactus />
        </div>
    )
}

export default Contact

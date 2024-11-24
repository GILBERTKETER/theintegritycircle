import React from 'react'
export const metadata = {
    title: 'Expert Q&A Sessions | The Integrity Circle',
    description: 'Engage with experts through interactive Q&A sessions on The Integrity Circle. Get insights and answers on key topics related to integrity and transparency.',
    keywords: 'Expert Q&A, Question and Answer Sessions, The Integrity Circle, Expert Advice, Chats, Community Engagement, Ethical Practices, Transparency',
    openGraph: {
        title: 'Expert Q&A Sessions | The Integrity Circle',
        description: 'Join live or scheduled Q&A sessions with experts on The Integrity Circle. Gain knowledge and clarity on critical topics from industry professionals.',
        url: 'https://www.integritycircle.co.ke/expert-qa-sessions',
        siteName: 'The Integrity Circle',
        images: [
            {
                url: '/images/og-expert-qa.png',
                width: 1200,
                height: 630,
                alt: 'Expert Q&A Sessions preview for The Integrity Circle',
            },
        ],
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Expert Q&A Sessions | The Integrity Circle',
        description: 'Connect with experts in our Q&A sessions. Ask questions and get insights into critical topics related to integrity and ethical practices.',
        images: ['/images/og-expert-qa.png'],
    },
};


import ExpertQASession from './index'
function ExpertQA() {
    return (
        <div>
            <ExpertQASession />
        </div>
    )
}

export default ExpertQA

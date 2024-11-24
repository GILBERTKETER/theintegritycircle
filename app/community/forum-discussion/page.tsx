import React from 'react'
export const metadata = {
    title: 'Public Discussions Forum | The Integrity Circle',
    description: 'Join the public discussions forum at The Integrity Circle. Share ideas, ask questions, and engage with the community to promote integrity and transparency.',
    keywords: 'Forum, Public Discussions, The Integrity Circle, Community Engagement, Transparency, Ethical Practices, Collaboration, Ideas Sharing',
    openGraph: {
        title: 'Public Discussions Forum | The Integrity Circle',
        description: 'Engage with the community through The Integrity Circle’s Public Discussions Forum. Share your thoughts, ask questions, and collaborate to uphold integrity.',
        url: 'https://www.integritycircle.co.ke/forum/public-discussions',
        siteName: 'The Integrity Circle',
        images: [
            {
                url: '/images/og-public-discussions.png',
                width: 1200,
                height: 630,
                alt: 'Public Discussions Forum preview for The Integrity Circle',
            },
        ],
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Public Discussions Forum | The Integrity Circle',
        description: 'Join the conversation in The Integrity Circle’s Public Discussions Forum. Connect with others to promote ethical practices and transparency.',
        images: ['/images/og-public-discussions.png'],
    },
};


import Forum from './index'
function Forums() {
    return (
        <div>
            <Forum />
        </div>
    )
}

export default Forums

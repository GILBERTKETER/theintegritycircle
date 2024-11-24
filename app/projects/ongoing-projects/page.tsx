import React from 'react'
export const metadata = {
    title: 'Ongoing Projects | The Integrity Circle',
    description: 'Discover ongoing projects by The Integrity Circle. Stay updated on our progress toward impactful and sustainable development.',
    keywords: 'Ongoing Projects, The Integrity Circle, Active Projects, Initiatives, Development, Transparency, Progress, Sustainability',
    openGraph: {
        title: 'Ongoing Projects | The Integrity Circle',
        description: 'Stay informed about ongoing projects by The Integrity Circle. Learn how we are driving impactful and sustainable initiatives forward.',
        url: 'https://www.integritycircle.co.ke/ongoing-projects',
        siteName: 'The Integrity Circle',
        images: [
            {
                url: '/images/og-ongoing-projects.png',
                width: 1200,
                height: 630,
                alt: 'Ongoing Projects page preview for The Integrity Circle',
            },
        ],
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Ongoing Projects | The Integrity Circle',
        description: 'Discover ongoing projects by The Integrity Circle. Learn more about our commitment to impactful and sustainable initiatives.',
        images: ['/images/og-ongoing-projects.png'],
    },
};

import OngoingProjects from './index'
function CurrentProjects() {
    return (
        <div>
            <OngoingProjects />
        </div>
    )
}

export default CurrentProjects

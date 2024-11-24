import React from 'react'
export const metadata = {
    title: 'Key Information | The Integrity Circle',
    description: 'Explore essential details about ongoing projects, funding sources, infrastructure initiatives, and public resources at The Integrity Circle.',
    keywords: 'Key Information, Government Projects, Funding Sources, Infrastructure, Public Resources, The Integrity Circle, Transparency, Development',
    openGraph: {
        title: 'Key Information | The Integrity Circle',
        description: 'Discover critical information about projects, funding sources, infrastructure development, and public resources. Stay informed with The Integrity Circle.',
        url: 'https://www.integritycircle.co.ke/key-information',
        siteName: 'The Integrity Circle',
        images: [
            {
                url: '/images/og-key-information.png',
                width: 1200,
                height: 630,
                alt: 'Key Information page preview for The Integrity Circle',
            },
        ],
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Key Information | The Integrity Circle',
        description: 'Get insights into government projects, funding, infrastructure, and public resources. The Integrity Circle brings you transparency and clarity.',
        images: ['/images/og-key-information.png'],
    },
};


import CountyDetails from './[id]'
function County() {
    return (
        <div>
            <CountyDetails />
        </div>
    )
}

export default County

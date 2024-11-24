import React from 'react'
export const metadata = {
    title: 'Browse Projects | Counties Explorer',
    description: 'Explore ongoing and completed projects across various counties. Gain insights into development initiatives and their impact on communities.',
    keywords: 'Browse Projects, County Projects, Development Initiatives, Counties Explorer, Infrastructure, Community Development',
    openGraph: {
        title: 'Browse Projects | Counties Explorer',
        description: 'Discover development projects across counties, including ongoing and completed initiatives, and learn about their contributions to local communities.',
        url: 'https://www.countiesexplorer.co.ke/projects/browse',
        siteName: 'Counties Explorer',
        images: [
            {
                url: '/images/og-browse-projects.png',
                width: 1200,
                height: 630,
                alt: 'Preview of the Browse Projects page on Counties Explorer',
            },
        ],
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Browse Projects | Counties Explorer',
        description: 'Explore ongoing and completed projects across counties and understand their impact. Discover more on Counties Explorer.',
        images: ['/images/og-browse-projects.png'],
    },
};


import BrowseProjects from './index'
function Projects() {
    return (
        <div>
            <BrowseProjects />
        </div>
    )
}

export default Projects

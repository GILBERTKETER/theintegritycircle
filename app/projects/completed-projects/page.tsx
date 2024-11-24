import React from 'react'
export const metadata = {
    title: 'Completed Projects | The Integrity Circle',
    description: 'Explore completed projects by The Integrity Circle. We are dedicated to delivering impactful and sustainable initiatives.',
    keywords: 'Completed Projects, The Integrity Circle, Successful Projects, Initiatives, Development, Transparency, Impact, Sustainability',
    openGraph: {
        title: 'Completed Projects | The Integrity Circle',
        description: 'Discover the completed projects and initiatives by The Integrity Circle. We prioritize sustainable development and impactful results.',
        url: 'https://www.integritycircle.co.ke/completed-projects',
        siteName: 'The Integrity Circle',
        images: [
            {
                url: '/images/og-completed-projects.png',
                width: 1200,
                height: 630,
                alt: 'Completed Projects page preview for The Integrity Circle',
            },
        ],
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Completed Projects | The Integrity Circle',
        description: 'Explore the completed projects by The Integrity Circle and learn more about our commitment to impactful and sustainable development.',
        images: ['/images/og-completed-projects.png'],
    },
};
import CompletedProjects from './index'
function Projects() {
    return (
        <div>
            <CompletedProjects />
        </div>
    )
}

export default Projects

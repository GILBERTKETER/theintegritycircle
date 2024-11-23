import React from 'react'
export const metadata = {
    title: 'File a Complaint | The Integrity Circle',
    description: 'Submit your complaint easily through The Integrity Circle’s Complaint Filing System. We are committed to addressing concerns with integrity and transparency.',
    keywords: 'File a Complaint, Complaint Filing, The Integrity Circle, Report Issues, Integrity, Transparency, Ethical Practices',
    openGraph: {
        title: 'File a Complaint | The Integrity Circle',
        description: 'Submit your complaint through The Integrity Circle’s Complaint Filing System. We prioritize addressing your concerns with fairness and integrity.',
        url: 'https://www.integritycircle.co.ke/file-a-complaint',
        siteName: 'The Integrity Circle',
        images: [
            {
                url: '/images/og-file-complaint.png',
                width: 1200,
                height: 630,
                alt: 'Complaint Filing page preview for The Integrity Circle',
            },
        ],
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'File a Complaint | The Integrity Circle',
        description: 'Use The Integrity Circle’s Complaint Filing System to report any issues. We handle complaints with transparency and commitment to resolving concerns.',
        images: ['/images/og-file-complaint.png'],
    },
};




import ComplaintForm from './index'
function Complaint() {
    return (
        <div>
            <ComplaintForm />
        </div>
    )
}

export default Complaint

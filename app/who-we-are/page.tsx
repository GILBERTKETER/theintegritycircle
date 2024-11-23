import React from 'react'
export const metadata = {
    title: 'Who We Are | The Integrity Circle',
    description: 'Learn more about The Integrity Circle, our mission, founders, and commitment to promoting transparency and integrity.',
    keywords: 'Who We Are, The Integrity Circle, Mission, Transparency, Integrity, Founders, Global Impact',
    openGraph: {
      title: 'Who We Are | The Integrity Circle',
      description: 'Discover the vision and mission behind The Integrity Circle, a movement dedicated to promoting transparency and ethical practices across the globe.',
      url: 'https://www.integritycircle.co.ke/who-we-are',
      siteName: 'The Integrity Circle',
      images: [
        {
          url: '/images/og-who-we-are.png',
          width: 1200,
          height: 630,
          alt: 'Who We Are page preview for The Integrity Circle',
        },
      ],
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Who We Are | The Integrity Circle',
      description: 'Learn more about The Integrity Circle, our mission, and our global efforts towards building a more transparent world.',
      images: ['/images/og-who-we-are.png'],
    },
  };
  
  
  
  import Reset from './index'
function ResetPassword() {
  return (
    <div>
      <Reset/>
    </div>
  )
}

export default ResetPassword

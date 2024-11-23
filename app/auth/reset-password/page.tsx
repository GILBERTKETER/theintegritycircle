import React from 'react'
export const metadata = {
    title: 'Reset Password | The Integrity Circle',
    description: 'Reset your password to regain access to your account at The Integrity Circle.',
    keywords: 'Reset Password, Account Recovery, The Integrity Circle, Forgotten Password',
    openGraph: {
      title: 'Reset Password | The Integrity Circle',
      description: 'Reset your password to regain access to your account and explore resources, projects, and updates at The Integrity Circle.',
      url: 'https://www.integritycircle.co.ke/reset-password',
      siteName: 'The Integrity Circle',
      images: [
        {
          url: '/images/og-reset-password.png',
          width: 1200,
          height: 630,
          alt: 'Reset Password page preview for The Integrity Circle',
        },
      ],
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Reset Password | The Integrity Circle',
      description: 'Reset your password to regain access to your account at The Integrity Circle.',
      images: ['/images/og-reset-password.png'],
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

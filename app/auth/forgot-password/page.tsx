import React from 'react'
export const metadata = {
    title: 'Forgot Password | The Integrity Circle',
    description: 'Reset your password to regain access to your account at The Integrity Circle.',
    keywords: 'Forgot Password, Reset Password, The Integrity Circle, Account Recovery',
    openGraph: {
      title: 'Forgot Password | The Integrity Circle',
      description: 'Reset your password to regain access to your account and explore resources, projects, and updates.',
      url: 'https://www.integritycircle.co.ke/forgot-password',
      siteName: 'The Integrity Circle',
      images: [
        {
          url: '/images/og-forgot-password.png',
          width: 1200,
          height: 630,
          alt: 'Forgot Password page preview for The Integrity Circle',
        },
      ],
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Forgot Password | The Integrity Circle',
      description: 'Reset your password and regain access to your account at The Integrity Circle.',
      images: ['/images/og-forgot-password.png'],
    },
  };
  
  import ForgotPassword from './index'
function Password() {
  return (
    <div>
      <ForgotPassword/>
    </div>
  )
}

export default Password

import React from 'react'
export const metadata = {
    title: 'Sign Up | The Integrity Circle',
    description: 'Create your account to join The Integrity Circle community and access exclusive resources and updates.',
    keywords: 'Sign Up, Register, The Integrity Circle, Community Membership, Resources',
    openGraph: {
      title: 'Sign Up | The Integrity Circle',
      description: 'Create your account to join the community and access exclusive resources.',
      url: 'https://www.integritycircle.co.ke/signup',
      siteName: 'The Integrity Circle',
      images: [
        {
          url: '/images/og-signup.png',
          width: 1200,
          height: 630,
          alt: 'Sign Up page preview for The Integrity Circle',
        },
      ],
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Sign Up | The Integrity Circle',
      description: 'Register to access projects, resources, and community events.',
      images: ['/images/og-signup.png'],
    },
  };
import Register from './index';  
function SignUp() {
  return (
    <div>
      <Register/>
    </div>
  )
}

export default SignUp

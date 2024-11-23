import React from 'react'
export const metadata = {
    title: 'Sign In | The Integrity Circle',
    description: 'Access your account to explore resources, projects, and updates at The Integrity Circle.',
    keywords: 'Sign In, The Integrity Circle, Account Login, Resources, Community',
    openGraph: {
      title: 'Sign In | The Integrity Circle',
      description: 'Access your account to explore resources, projects, and updates.',
      url: 'https://www.integritycircle.co.ke/signin',
      siteName: 'The Integrity Circle',
      images: [
        {
          url: '/images/og-signin.png',
          width: 1200,
          height: 630,
          alt: 'Sign In page preview for The Integrity Circle',
        },
      ],
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Sign In | The Integrity Circle',
      description: 'Access your account to explore resources and community initiatives.',
      images: ['/images/og-signin.png'],
    },
  };
  import Login from './index'
function SignIn() {
  return (
    <div>
      <Login/>
    </div>
  )
}

export default SignIn

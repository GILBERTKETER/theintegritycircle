
"use client"
import React from 'react'
import components from '@/components'

function Register() {
    const { SignIn } = components;
    const handleSubmit = () => {
        console.log("submission")
    }
    const handleGoogleSignIn = () => {
        console.log("google sign in")
    }
    return (
        <div>
            <SignIn onGoogleSignIn={handleGoogleSignIn} onSubmit={handleSubmit} />
        </div>
    )
}

export default Register

"use client"
import React from 'react'
import components from '@/components'

function Register() {
    const { SignUp } = components;
    const handleSubmit = () => {
        console.log("submission")
    }
    const handleGoogleSignIn = () => {
        console.log("google sign in")
    }
    return (
        <div>
            <SignUp onSubmit={handleSubmit} onGoogleSignUp={handleGoogleSignIn} />
        </div>
    )
}

export default Register

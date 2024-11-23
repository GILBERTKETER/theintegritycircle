
"use client"
import React from 'react'
import components from '@/components'

function Register() {
    const { ForgotPassword } = components;
    const handleSubmit = () => {
        console.log("submission")
    }

    return (
        <div>
            <ForgotPassword onSubmit={handleSubmit} />
        </div>
    )
}

export default Register


"use client"
import React from 'react'
import components from '@/components'

function Register() {
    const { ResetPassword } = components;
    const handleSubmit = () => {
        console.log("submission")
    }

    return (
        <div>
            <ResetPassword onSubmit={handleSubmit} />
        </div>
    )
}

export default Register

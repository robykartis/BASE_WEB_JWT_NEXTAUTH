import React from 'react'

import FormLogin from '@/components/auth/form-login'
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Auth | Login',
    description: 'Generated by create next app',
}
export default function LoginPage() {

    return (
        <div>
            <FormLogin />
        </div>
    )
}

'use client'
import React from 'react'
import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useSearchParams } from 'next/navigation'
import { signIn } from 'next-auth/react'
import Link from 'next/link'

export default function FormLogin() {
    const searchParams = useSearchParams();
    const error = searchParams.get("error");

    async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();

        const formData = new FormData(event.currentTarget);
        const credentials = Object.fromEntries(formData);
        const callbackUrl = searchParams.get("callbackUrl") || "/";

        signIn("credentials", { ...credentials, callbackUrl });
    }
    return (
        <Card className="w-[550px]">
            <CardHeader>
                <CardTitle className='text-center font-bold'>Create project</CardTitle>
                <CardDescription className='text-center'>Deploy your new project in one-click.</CardDescription>
            </CardHeader>
            <form onSubmit={handleSubmit}>
                <CardContent>
                    <div className="grid w-full items-center gap-4">
                        <div className="flex flex-col space-y-1.5">
                            <Label htmlFor="name">Email</Label>
                            <Input
                                id="email"
                                placeholder="Email of your project"
                                name='email'
                                type="email"
                            />
                        </div>
                        <div className="flex flex-col space-y-1.5">
                            <Label htmlFor="name">Password</Label>
                            <Input
                                id="password"
                                placeholder="Password of your project"
                                name='password'
                                type="password"
                            />
                        </div>
                    </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                    <Link href="/">
                        <Button variant="outline">Cancel</Button>
                    </Link>
                    <Button type="submit">Login</Button>
                </CardFooter>
            </form>
        </Card>
    )
}

"use client"

import { useState } from "react"
import { Button } from "@/app/shared/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/app/shared/components/ui/card"
import { Input } from "@/app/shared/components/ui/input"
import { Label } from "@/app/shared/components/ui/label"
import { Textarea } from "@/app/shared/components/ui/textarea"
import { CalendarIcon, ClockIcon } from 'lucide-react'
import { useToast } from "@/app/shared/hooks/use-toast"

export function UserHome() {
    const [isCheckingIn, setIsCheckingIn] = useState(false)
    const [isRequestingLeave, setIsRequestingLeave] = useState(false)
    const { toast } = useToast()

    const handleAttendance = () => {
        setIsCheckingIn(true)
        // Simulate API call
        setTimeout(() => {
            setIsCheckingIn(false)
            toast({
                title: "Attendance Recorded",
                description: "Your attendance has been successfully recorded.",
            })
        }, 2000)
    }

    const handleLeaveRequest = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        setIsRequestingLeave(true)
        // Simulate API call
        setTimeout(() => {
            setIsRequestingLeave(false)
            toast({
                title: "Leave Request Submitted",
                description: "Your leave request has been successfully submitted.",
            })
            // Reset form
            event.currentTarget.reset()
        }, 2000)
    }

    return (
        <div className="space-y-6">
            <h1 className="text-3xl font-bold">Welcome, User</h1>

            <div className="grid gap-6 md:grid-cols-2">
                <Card className="relative overflow-hidden">
                    <CardHeader className="pb-0">
                        <CardTitle className="flex items-center text-2xl">
                            <ClockIcon className="mr-2 h-6 w-6" />
                            Take Attendance
                        </CardTitle>
                        <CardDescription>Record your daily attendance</CardDescription>
                    </CardHeader>
                    <CardContent className="pt-6">
                        <Button
                            onClick={handleAttendance}
                            disabled={isCheckingIn}
                            className="w-full text-lg py-6"
                        >
                            {isCheckingIn ? "Recording..." : "Check In/Out"}
                        </Button>
                    </CardContent>
                    <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full -mr-16 -mt-16" />
                </Card>

                <Card className="relative overflow-hidden">
                    <CardHeader className="pb-0">
                        <CardTitle className="flex items-center text-2xl">
                            <CalendarIcon className="mr-2 h-6 w-6" />
                            Request Leave
                        </CardTitle>
                        <CardDescription>Submit a leave request</CardDescription>
                    </CardHeader>
                    <CardContent className="pt-6">
                        <form onSubmit={handleLeaveRequest} className="space-y-4">
                            <div className="grid gap-4 md:grid-cols-2">
                                <div className="space-y-2">
                                    <Label htmlFor="start-date">Start Date</Label>
                                    <Input id="start-date" type="date" required />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="end-date">End Date</Label>
                                    <Input id="end-date" type="date" required />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="reason">Reason</Label>
                                <Textarea id="reason" placeholder="Enter the reason for your leave" required />
                            </div>
                            <Button type="submit" disabled={isRequestingLeave} className="w-full">
                                {isRequestingLeave ? "Submitting..." : "Submit Request"}
                            </Button>
                        </form>
                    </CardContent>
                    <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full -mr-16 -mt-16" />
                </Card>
            </div>
        </div>
    )
}

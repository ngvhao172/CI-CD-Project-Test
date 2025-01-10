"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/app/shared/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/app/shared/components/ui/avatar"
import { Badge } from "@/app/shared/components/ui/badge"
import { UserIcon, CalendarIcon, ClockIcon } from "lucide-react"
import { Calendar } from "@/app/shared/components/ui/calendar"

const attendanceData = [
    { date: new Date(2024, 12, 1), status: "present" },
    { date: new Date(2024, 11, 2), status: "present" },
    { date: new Date(2024, 11, 3), status: "absent" },
    { date: new Date(2024, 11, 4), status: "present" },
    { date: new Date(2024, 11, 5), status: "present" },
]

export function UserProfile() {
    const [date, setDate] = useState<Date | undefined>(new Date())

    return (
        <div className="space-y-6">
            <Card>
                <CardHeader>
                    <div className="flex items-center space-x-4">
                        <Avatar className="h-20 w-20">
                            <AvatarImage src="/placeholder.svg?height=80&width=80" alt="User" />
                            <AvatarFallback><UserIcon className="h-10 w-10" /></AvatarFallback>
                        </Avatar>
                        <div>
                            <CardTitle className="text-2xl">John Doe</CardTitle>
                            <CardDescription>Software Developer</CardDescription>
                        </div>
                    </div>
                </CardHeader>
                <CardContent>
                    <div className="grid gap-4 md:grid-cols-2">
                        <div>
                            <h3 className="font-semibold mb-2">Contact Information</h3>
                            <p>Email: john.doe@example.com</p>
                            <p>Phone: +1 234 567 890</p>
                        </div>
                        <div>
                            <h3 className="font-semibold mb-2">Employment Details</h3>
                            <p>Employee ID: EMP001</p>
                            <p>Department: Engineering</p>
                        </div>
                    </div>
                </CardContent>
            </Card>

            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center text-2xl">
                        <CalendarIcon className="mr-2 h-6 w-6" />
                        Attendance Report
                    </CardTitle>
                    <CardDescription>View your attendance history</CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="grid gap-6 md:grid-cols-2">
                        <Calendar
                            mode="single"
                            selected={date}
                            onSelect={setDate}
                            className="rounded-md border"
                            modifiers={{
                                present: attendanceData.filter(d => d.status === "present").map(d => d.date),
                                absent: attendanceData.filter(d => d.status === "absent").map(d => d.date),
                            }}
                        />
                        <div>
                            <h3 className="font-semibold mb-4">Attendance Summary</h3>
                            <div className="space-y-2">
                                <div className="flex items-center">
                                    <Badge variant="outline" className="mr-2">
                                        <div className="h-2 w-2 rounded-full bg-green-500 mr-2" />
                                        Present
                                    </Badge>
                                    <span>{attendanceData.filter(d => d.status === "present").length} days</span>
                                </div>
                                <div className="flex items-center">
                                    <Badge variant="outline" className="mr-2">
                                        <div className="h-2 w-2 rounded-full bg-red-500 mr-2" />
                                        Absent
                                    </Badge>
                                    <span>{attendanceData.filter(d => d.status === "absent").length} days</span>
                                </div>
                            </div>
                            <div className="mt-6">
                                <h4 className="font-semibold mb-2">Recent Activity</h4>
                                <ul className="space-y-2">
                                    {attendanceData.slice(0, 3).map((record, index) => (
                                        <li key={index} className="flex items-center">
                                            <ClockIcon className="mr-2 h-4 w-4" />
                                            <span>{record.date.toDateString()} - {record.status}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}


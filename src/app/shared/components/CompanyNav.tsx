"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/app/shared/components/ui/button"
import { ScrollArea } from "@/app/shared/components/ui/scroll-area"
import { UsersIcon, CalendarIcon, ClipboardIcon } from 'lucide-react'

const navItems = [
    { href: "/company/employees", icon: UsersIcon, label: "Employee Management" },
    { href: "/company/attendance", icon: CalendarIcon, label: "Attendance" },
    { href: "/company/leave-requests", icon: ClipboardIcon, label: "Leave Requests" },
]

export default function CompanyNav() {
    const pathname = usePathname()

    return (
        <nav className="w-64 bg-gray-100 border-r h-screen">
            <div className="p-4">
                <h1 className="text-2xl font-bold">Company Dashboard</h1>
            </div>
            <ScrollArea className="h-[calc(100vh-5rem)]">
                <div className="space-y-2 p-4">
                    {navItems.map((item) => (
                        <Button
                            key={item.href}
                            asChild
                            variant={pathname === item.href ? "secondary" : "ghost"}
                            className="w-full justify-start"
                        >
                            <Link href={item.href}>
                                <item.icon className="mr-2 h-4 w-4" />
                                {item.label}
                            </Link>
                        </Button>
                    ))}
                </div>
            </ScrollArea>
        </nav>
    )
}

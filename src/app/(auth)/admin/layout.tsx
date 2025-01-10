import { AdminNav } from "@/app/shared/components/AdminNav"
import "../../globals.css";

export default function AdminLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <div className="flex min-h-screen">
            <AdminNav />
            <main className="flex-1 p-6 overflow-y-auto">
                {children}
            </main>
        </div>
    )
}


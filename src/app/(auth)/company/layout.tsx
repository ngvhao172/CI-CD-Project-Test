import CompanyNav from "@/app/shared/components/CompanyNav"
import "../../globals.css";

export default function CompanyLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <div className="flex min-h-screen">
            <CompanyNav />
            <main className="flex-1 px-8 overflow-y-auto bg-gray-50 py-8">
                {children}
            </main>
        </div>
    )
}


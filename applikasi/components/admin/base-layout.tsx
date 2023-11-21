


export default function AdminLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <div className="flex h-screen">
            {/* Sidebar */}
            <aside className="w-64 bg-gray-800 text-gray-100">
                {/* Sidebar content */}
            </aside>

            {/* Main content */}
            <main className="flex-1 bg-gray-100">
                {/* Navbar */}
                <nav className="bg-white p-4 shadow">
                    {/* Navbar content */}
                </nav>

                {/* Page content */}
                <div className="p-4">
                    {children}
                </div>
            </main>
        </div>
    )
}

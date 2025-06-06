import SideNav from "../ui/admin/aside"

export default function LayoutAdmin({children}: {
    children: React.ReactNode
}) {
    return (
        <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
            <div className="w-full flex-none md:w-64">
                    <SideNav/>
            </div>
            <div className="flex-grow p-4 md:overflow-y-auto md:p-4">
                {children}
            </div>

        </div>
    )
}
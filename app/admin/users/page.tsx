
import TableUsers from "@/app/ui/admin/users/table-user";

export default function Products() {
    return (
        <div className="bg-gray-500 w-full h-full rounded-lg p-3">
            <h1 className="font-bold text-white">Users</h1>
            <div>
                <TableUsers/>
            </div>
        </div>
    )
}
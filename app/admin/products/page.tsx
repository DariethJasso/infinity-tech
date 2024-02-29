
import TableProducts from "@/app/ui/admin/products/table-products";

export default function Products() {
    return (
        <div className="bg-gray-500 w-full h-full rounded-lg p-3">
            <h1 className="font-bold text-white">Products</h1>
            <div>
                <TableProducts/>
            </div>
        </div>
    )
}
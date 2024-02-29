import PaginationProducss from "@/app/ui/products/pagination";
import Search from "@/app/ui/products/search";
import TableProducts from "@/app/ui/products/table-products";
import SkeletonProducts from "@/app/ui/skeletons/skeletonProducts";
import { Divider, Spinner } from "@nextui-org/react";
import { Suspense } from "react";


export default function Products(){
    
    return (
        <div className="px-2 py-3 h-auto">
                <Divider className="my-3"/>
            <div className="flex flex-col lg:flex-row-reverse lg:gap-4 lg:justify-center">
                <div className="flex flex-col items-end">
                    <h1 className="text-2xl font-bold">Product List</h1>
                    <div className="flex gap-3" >
                        <Search/>
                    </div>
                </div>
                <Divider className="my-3 lg:hidden"  />
                <div>
                    <Suspense fallback={<div className="flex justify-center w-full h-[600px]"><Spinner size="lg" color="primary"/></div>}>

                        <TableProducts/>
                    </Suspense>
                    <div className="flex justify-center pt-6">
                        <PaginationProducss/>   
                    </div>
                </div>
            </div>
        </div>
    )
}
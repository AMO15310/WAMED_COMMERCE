import React from "react"
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import Image from "next/image"

const Sidebar = () => {
    return <>
        <Sheet>
            <SheetTrigger>
                <Image src="/burger.svg" alt="burger.svg" width={50} height={50} className=" ml-[1.2rem] mt-2 relative  cursor-pointer pt-[1.5rem]" />
            </SheetTrigger>
            <SheetContent>
                <SheetHeader>
                    <SheetTitle><div className="text-white flex items-center justify-center">WAMED <Image src="/shop.svg" alt="shop-svg" height={50} width={50} loading="lazy" /></div></SheetTitle>
                    <SheetDescription>
                        <div className=" flex flex-col gap-4 text-white">
                            <hr />
                            <div className="">MY ACCOUNT</div>
                            <div className="font-thin">ORDERS</div>
                            <div className="font-thin">VOUCHERS</div>
                            <div className="font-thin">SAVED ITEMS</div>
                            <hr />
                            <div className="">OUR CATEGORIES</div>
                            <div className=" font-thin">ELECTRONICS</div>
                            <div className=" font-thin">COMPUTING</div>
                            <div className=" font-thin">GAMING</div>
                            <div className=" font-thin">HOME</div>
                            <div className=" font-thin">PHONES AND TABLETS</div>

                        </div>
                    </SheetDescription>
                </SheetHeader>
            </SheetContent>
        </Sheet>
    </>
}
export default Sidebar
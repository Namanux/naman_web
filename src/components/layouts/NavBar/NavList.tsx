'use client'
import Link from "next/link";
import { NavListData,NavListDataType } from "./NavListData";
import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button";
import { usePathname } from 'next/navigation'

function NavList() {
    const pathname = usePathname()
    return (
        <div className="mt-auto mb-auto">
             {NavListData.map((i:NavListDataType)=>(
                <Link
          key={i.id}
          href={i.href}
          className={cn(
            buttonVariants({ variant: "ghost" }),
             pathname === i.href
               ? "bg-muted hover:bg-muted"
               : "hover:bg-transparent hover:underline",
             "justify-start"
          )}
        >
    
          {i.label}
        </Link>
             ))}
    </div>
    );
}

export default NavList;
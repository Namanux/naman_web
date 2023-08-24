"use client"
//import { Separator } from "@radix-ui/react-menubar";
import { Separator } from "@/components/ui/separator";
import NavList from "./NavList";

function Nav() {
    return (
<div>
    <div className="flex justify-between">
        <div className="p-2 ">
            <h2 className="text-1xl font-bold">Naman</h2>
            <h6 className="text-xs">Ui/UX Full stack devloper</h6>
        </div>
            <NavList />
            <div className="mt-auto mb-auto mr-6 text-xs font-bold">talk: 0436 020 363</div>
    </div>
    <Separator   />
</div>
    );
}

export default Nav;
"use client"
//import { Separator } from "@radix-ui/react-menubar";
import { Separator } from "@/components/ui/separator";
import NavList from "./NavList";

function Nav() {
    return (
<div>
    <div className="flex justify-between">
        <div className="p-4 ">
            <div>Naman</div>
            <div>Ui/UX Full stack devloer</div>
        </div>
            <NavList />
            <div className="mt-auto mb-auto mr-6">talk: 0436 020 363</div>
    </div>
    <Separator   />
</div>
    );
}

export default Nav;
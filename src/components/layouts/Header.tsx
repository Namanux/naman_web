
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger,
} from "@/components/ui/menubar"
import { ModeToggle } from "../ModeToggle"
const Header = () => {
  return (

  <div>
  <Menubar className="bg-secondary text-secondary-foreground">
    <MenubarMenu>
    <div>
    <div>Naman</div>
      <div>Ui/UX FUll stack devloer</div>
    </div>
    <MenubarTrigger>Naman</MenubarTrigger>
    <MenubarTrigger>File</MenubarTrigger>
    <MenubarTrigger>File</MenubarTrigger>
    <MenubarTrigger>File</MenubarTrigger>
    <ModeToggle />
    <MenubarContent>
      <MenubarItem>
        New Tab <MenubarShortcut>⌘T</MenubarShortcut>
      </MenubarItem>
      <MenubarItem>New Window</MenubarItem>
      <MenubarSeparator />
      <MenubarItem>Share</MenubarItem>
      <MenubarSeparator />
      <MenubarItem>Print</MenubarItem>
    </MenubarContent>
  </MenubarMenu>
</Menubar>


  </div>
  )
}

export default Header
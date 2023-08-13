
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger,
} from "@/components/ui/menubar"
const Header = () => {
  return (

  <div>
  <Menubar>
    <MenubarMenu>
    <div className="pt-4">
    <div>Naman</div>
      <div>Ui/UX FUll stack devloer</div>
    </div>
    <MenubarTrigger>Naman</MenubarTrigger>
    <MenubarTrigger>File</MenubarTrigger>
    <MenubarTrigger>File</MenubarTrigger>
    <MenubarTrigger>File</MenubarTrigger>
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
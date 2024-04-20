import Link from "next/link";

import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger,
} from "@/components/ui/menubar";
import { ModeToggle } from "..";

export default function NavMenubar() {
  return (
    <Menubar className="flex justify-between">
      <div className="flex">
        <MenubarMenu>
          <MenubarTrigger>
            <Link href="/">Home</Link>
          </MenubarTrigger>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger>
            <Link href="/todos">Todos</Link>
          </MenubarTrigger>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger>Links</MenubarTrigger>
          <MenubarContent>
            <a href="https://github.com/qurashi-akeel/pesto-todo-zeta/blob/master/README.md">
              <MenubarItem>Documentation</MenubarItem>
            </a>
            <a href="https://github.com/qurashi-akeel/pesto-todo-zeta">
              <MenubarItem>Code on Github</MenubarItem>
            </a>
            <a href={"https://www.linkedin.com/in/qurashi"}>
              <MenubarItem>About Developer</MenubarItem>
            </a>
          </MenubarContent>
        </MenubarMenu>
      </div>
      <ModeToggle />
    </Menubar>
  );
}

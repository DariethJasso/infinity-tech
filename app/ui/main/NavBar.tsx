'use client'
import React from "react";
import {Navbar, NavbarBrand, NavbarMenuToggle, NavbarMenuItem, NavbarMenu, NavbarContent, NavbarItem, Button} from "@nextui-org/react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMicrochip, faHome, faList,faPhone } from '@fortawesome/free-solid-svg-icons';
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const pathname = usePathname();
  const menuItems = [
    {
      label: "Home",
      link:"/main",
      color:'foreground',
      icon:<FontAwesomeIcon className="pr-1" icon={faHome} />
    },
    {
      label: "Products",
      link:"/main/products",
      color:'foreground',
      icon:<FontAwesomeIcon className="pr-1" icon={faList} />
    },
    {
      label: "Contact",
      link:"/main/contact",
      color:'foreground',
      icon:<FontAwesomeIcon className="pr-1" icon={faPhone} />
    }
  ];

  return (
    <Navbar
      isBordered
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
    >
      <NavbarContent className="sm:hidden" justify="start">
        <NavbarMenuToggle aria-label={isMenuOpen ? "Close menu" : "Open menu"} />
      </NavbarContent>

      <NavbarContent className="sm:hidden pr-3" justify="center">
        <NavbarBrand>
          <FontAwesomeIcon className="pr-3 text-3xl " icon={faMicrochip} />
          
          {/* <AcmeLogo /> */}
          <p className="font-bold text-inherit">Infinity Tech</p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarBrand>
          {/* <AcmeLogo /> */}
          
          <FontAwesomeIcon className="pr-3 text-3xl " icon={faMicrochip} />
          <p className="font-bold text-inherit">Infinity Tech</p>
        </NavbarBrand>
        <NavbarItem >
          <Link  aria-current="page" href="/main" className={`${pathname === '/main' ? 'text-primary font-extrabold text-[18px]' : "text-foreground"}`}>
            <FontAwesomeIcon icon={faHome} className="pr-1" />Home
          </Link>
        </NavbarItem>
        <NavbarItem >
          <Link href="/main/products" className={`${pathname === '/main/products' ? 'text-primary font-extrabold text-[18px]' : "text-foreground"}`} >
          <FontAwesomeIcon icon={faList} className="pr-1" />Productos
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link  href="/main/contact" className={`${pathname === '/main/contact' ? 'text-primary font-extrabold text-[18px]' : "text-foreground"}`}>
          <FontAwesomeIcon icon={faPhone} className="pr-1" />Contact
          </Link>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent justify="end">
        <NavbarItem className="hidden md:flex">
          <Link href="/admin">Login</Link>
        </NavbarItem>
        <NavbarItem>
          <Button as={Link} color="primary" href="#" variant="flat">
            Sign Up
          </Button>
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu>
        {menuItems.map((item) => (
          <NavbarMenuItem key={item.label}>
            <Link key={item.label} href={item.link} className={`font-semibold ${pathname === item.link ? 'text-primary-500' : "text-foreground"}`} onClick={() => {setIsMenuOpen(false)}}>
              {item.icon}{item.label}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}

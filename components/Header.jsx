import React, { useState, useEffect, useRef } from 'react';
import { Navbar, Button, NavbarContent, NavbarItem, Link, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, DropdownItem, DropdownTrigger, Dropdown, DropdownMenu } from "@nextui-org/react";
import { BiShoppingBag } from "react-icons/bi";
import CustomNavbarToggle from './CustomNavbarToggle';

const Header = () => {

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [header, setHeader] = useState(false);


  const scrollHeader = () => {
    if (window.scrollY >= 40) {
      setHeader(true)
    }
    else { setHeader(false) }
  }

  useEffect(() => {
    window.addEventListener('scroll', scrollHeader);
    return () => {
      window.removeEventListener('scroll', scrollHeader);
    }

  }, [])



  const menuItems = [
    { name: "Úvod", link: "/" },
    { name: "Zateplení stropu", link: "/zatepleni/zatepleni-stropu" },
    { name: "Zateplení střechy", link: "/zatepleni/zatepleni-strechy" },
    { name: "Zateplení fasády", link: "/zatepleni/zatepleni-fasady" },
    { name: "FVE", link: "https://www.damepanely.cz/" },
    { name: "Galerie", link: "/#galerie" },
    { name: "Dotace", link: "/dotace" },
    { name: "Kontakty", link: "/kontakty" },
  ];

  return (
    <header className={`${header ? 'bg-primary-100 shadow-lg' : 'bg-transparent'} top-0 z-50 flex flex-col md:flex-row justify-center py-6 px-10 lg:px-32 w-full fixed md:sticky transition-all duration-300 ease-in-out`}>
      <Navbar isMenuOpen={isMenuOpen} onMenuOpenChange={setIsMenuOpen}>
        <NavbarContent className="lg:hidden" justify="center">
          <CustomNavbarToggle isMenuOpen={isMenuOpen} onMenuOpenChange={setIsMenuOpen} />
        </NavbarContent>
        <img src='/logo/logo_dlouhe_zlute.svg' alt='logo' className='min-w-[160px] max-w-[160px] h-auto hidden md:justify-end md:flex ' />


        <NavbarContent className="hidden lg:flex gap-4 text-lg mx-auto justify-center w-full text-black">

          {[
            { name: "Úvod", link: "/" },
            { name: "Zateplení", link: "/zatepleni" },
            { name: "FVE", link: "https://www.damepanely.cz/" },
            { name: "Galerie", link: "/#galerie" },
            { name: "Dotace", link: "/dotace" },
            { name: "Kontakt", link: "/kontakty" }
          ].map((item) => (
            <NavbarItem key={item.name} className="relative group">
              <Link href={item.link}>
                <span className="rounded-2xl bg-transparent group-hover:bg-primary-400 px-2 py-1 transition-all duration-300">{item.name}</span>
              </Link>
            </NavbarItem>
          ))}
        </NavbarContent>

        <NavbarContent justify="end">
          <NavbarItem className="">
            <Link href='/#poptavka'>
              <div className="gap-4 items-center hidden lg:flex rounded-lg bg-primary-400 ">
                <button className="  py-2 justify-center rounded-lg inline- w-40 flex items-center">
                  <span>Poptávka 💼</span>
                </button>
              </div>
            </Link>
          </NavbarItem>
        </NavbarContent>

        <NavbarMenu className='bg-primary-50 top-20 pt-6 items-center text-lg'>
          {menuItems.map((menuItem, index) => (
            <NavbarMenuItem key={`${menuItem.name}-${index}`} className='opacity-100'>
              <Link
                className="w-full"
                color={
                  index === 2 ? "warning" : index === menuItems.length - 1 ? "danger" : "foreground"
                }
                href={menuItem.link}
                size="lg"
              >
                {menuItem.name}

              </Link>

            </NavbarMenuItem>



          ))}

          <NavbarMenuItem>
            <Link href='/#poptavka'>
              <button type="button" isMenuOpen={isMenuOpen} onMenuOpenChange={setIsMenuOpen} className="flex items-center justify-center w-52 text-gray-900 bg-[#F7BE38] hover:bg-[#F7BE38]/90 focus:ring-4 focus:outline-none focus:ring-[#F7BE38]/50 font-medium rounded-lg text-sm px-5 py-2.5 dark:focus:ring-[#F7BE38]/50">
                <BiShoppingBag className="text-lg me-2" />
                Nezávazná poptávka
              </button>
            </Link>
          </NavbarMenuItem>
        </NavbarMenu>

        <div className="md:hidden w-full flex justify-center mx-[-30px]">
          <img src='/logo/logo-name.png' alt='Lunastav Gold Logo' className='min-w-[150px] max-w-[150px]' />
        </div>
      </Navbar>
    </header>

  );
};

export default Header;

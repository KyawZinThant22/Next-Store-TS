import * as NavigationMenu from '@radix-ui/react-navigation-menu';

import { AccountIcon, CaretDownIcon } from 'assets/icons';
import { Link } from 'react-router-dom';

//component
import { SearchBox } from '.';
import useScroll from 'utils/useScroll';
import { useEffect, useState } from 'react';

const NavBar = () => {
   const [navClassList, setNavClassList] = useState<string[]>([]);
   const scroll = useScroll();

   const [openNav, setOpenNav] = useState(false);

   const closeNav = () => {
      setOpenNav(false);
   };

   useEffect(() => {
      document.body.style.overflowY = openNav ? 'hidden' : 'scroll';
   }, [openNav]);

   // add shadow to nav (with classList) on scroll
   useEffect(() => {
      const _classList = [];

      if (scroll.y > 25) _classList.push('!shadow');

      setNavClassList(_classList);
   }, [scroll.y]);
   return (
      <header className={`sticky top-0 z-20 bg-white ${navClassList.join(' ')}`}>
         <NavigationMenu.Root
            aria-label="primary"
            className="max-width padding-x  flex items-center justify-between  py-4 "
         >
            <div className="mr-8 flex justify-center md:justify-start lg:hidden">
               <Link to="/" className="font-serif text-xl font-[600]  md:text-2xl">
                  Next Store
               </Link>
            </div>
            <NavigationMenu.List className=" text-md hidden  items-center gap-6 font-[500] text-black  lg:flex">
               <div className="mr-8 flex  justify-center md:justify-start">
                  <Link to="/" className="font-serif text-xl font-[600]  md:text-2xl">
                     Next Store
                  </Link>
               </div>
               <NavigationMenu.Item className="nav-menu-dropdown">
                  <NavigationMenu.Trigger aria-controls="category-content">
                     Category
                     <CaretDownIcon
                        aria-hidden
                        className="dropdown-caret h-5 w-5 font-bold transition-transform ease-in-out"
                     />
                  </NavigationMenu.Trigger>
                  <NavigationMenu.Content
                     id="category-content"
                     className="absolute top-10 border bg-skin-mute p-4 shadow-lg"
                  ></NavigationMenu.Content>
               </NavigationMenu.Item>

               <NavigationMenu.Item>
                  <Link to="#">Deals</Link>
               </NavigationMenu.Item>
            </NavigationMenu.List>

            <NavigationMenu.List className="   flex items-center gap-6">
               <NavigationMenu.Item className="hidden items-center lg:flex">
                  <SearchBox />
               </NavigationMenu.Item>
               <NavigationMenu.Item className="flex cursor-pointer items-center  gap-2">
                  <AccountIcon />
                  <Link to="/account">Account</Link>
               </NavigationMenu.Item>
               {/* <NavigationMenu.Item className="flex cursor-pointer items-center gap-2">
                  <CartIcon />
                  Cart
               </NavigationMenu.Item> */}
            </NavigationMenu.List>
         </NavigationMenu.Root>
      </header>
   );
};

export default NavBar;

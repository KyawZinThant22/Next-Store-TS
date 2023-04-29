'use client';

import * as NavigationMenu from '@radix-ui/react-navigation-menu';
import navLinks from 'utils/navlinks';

import { CaretDownIcon } from 'assets/icons/';
import { Link } from 'react-router-dom';

const TopBar = () => {
   return (
      <div className="block bg-skin-jade text-white ">
         <NavigationMenu.Root className="max-width padding-x mx-auto flex items-center justify-between py-1.5  text-xs md:text-sm ">
            <NavigationMenu.List className="flex gap-6">
               {navLinks
                  .filter((nav) => ['top', 'top-only'].includes(nav.position))
                  .map((nav) => (
                     <NavigationMenu.Item key={nav.name} className="font-sans font-light">
                        <Link to={nav.href}>{nav.name}</Link>
                     </NavigationMenu.Item>
                  ))}
            </NavigationMenu.List>

            <NavigationMenu.List>
               <NavigationMenu.Item>
                  <NavigationMenu.Trigger
                     className="flex h-full items-center gap-1"
                     aria-controls="site languages"
                  >
                     English{' '}
                     <CaretDownIcon
                        aria-hidden
                        className="dropdown-caret stroke-white transition-transform ease-in-out"
                     />
                  </NavigationMenu.Trigger>
                  <NavigationMenu.Content
                     id="site-languages"
                     className="absolute top-7 z-30 border bg-skin-mute p-1 text-sm font-thin text-black shadow-lg"
                  >
                     <ul className="List-one">
                        <li>
                           <NavigationMenu.Link asChild>
                              <Link className="inline-block w-full p-1 hover:bg-skin-gray" to="#">
                                 English
                              </Link>
                           </NavigationMenu.Link>
                        </li>{' '}
                        <li>
                           <NavigationMenu.Link asChild>
                              <Link
                                 className="inline-block w-full cursor-not-allowed p-1 opacity-70 hover:bg-skin-gray"
                                 tabIndex={-1}
                                 to="#"
                              >
                                 Burmese
                              </Link>
                           </NavigationMenu.Link>
                        </li>
                     </ul>
                  </NavigationMenu.Content>
               </NavigationMenu.Item>
            </NavigationMenu.List>
         </NavigationMenu.Root>
      </div>
   );
};

export default TopBar;

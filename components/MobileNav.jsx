'use client';

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { CiMenuFries } from "react-icons/ci";

const links = [
  { name: 'home', path: '/' },
  { name: 'services', path: '/services' },
  { name: 'resume', path: '/resume' },
  { name: 'work', path: '/work' },
  { name: 'contact', path: '/contact' },
];

const MobileNav = () => {
  const pathname = usePathname();
  return (
    <Sheet>
      <SheetTrigger className="flex items-center justify-center">
        <CiMenuFries className="text-[32px] text-accent" />
      </SheetTrigger>
      <SheetContent className="flex flex-col p-4 bg-white text-black">
        <div className="mb-4 text-black">logo</div>
        <nav className="flex flex-col gap-4">
          {links.map((link, index) => (
            <Link key={index} href={link.path} legacyBehavior>
              <a
                className={`${pathname === link.path ? "text-accent border-b-2 border-accent" : ""} text-xl capitalize hover:text-accent transition-all text-black`}
              >
                {link.name}
              </a>
            </Link>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;

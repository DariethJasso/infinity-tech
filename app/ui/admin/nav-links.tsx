'use client'
import {faHome ,faList, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

// Map of links to display in the side navigation.
// Depending on the size of the application, this would be stored in a database.
const links = [
  { name: 'Home', href: '/admin', icon: faHome },
  {
    name: 'Products',
    href: '/admin/products',
    icon: faList,
  },
  { name: 'Users', href: '/admin/users', icon: faUser},
];

export default function NavLinks() {
  const pathName = usePathname();
  return (
    <>
      {links.map((link) => {
        const LinkIcon = link.icon;
        return (
          <Link
            key={link.name}
            href={link.href}
            className={`flex h-[48px] text-gray-500 grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-gray-600 md:flex-none md:justify-start md:p-2 md:px-3
            ${pathName === link.href ? 'bg-sky-100 text-gray-600' : ''}
            `}
          >
            <FontAwesomeIcon icon={LinkIcon} />
            <p className="hidden md:block">{link.name}</p>
          </Link>
        );
      })}
    </>
  );
}

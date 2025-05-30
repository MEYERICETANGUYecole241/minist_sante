'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

type NavLink = {
  href: string;
  label: string;
};

type MobileMenuProps = {
  links: NavLink[];
  onClose: () => void;
};

export default function MobileMenu({ links, onClose }: MobileMenuProps) {
  const pathname = usePathname();

  return (
    <nav className="bg-[#28a745] rounded-lg shadow-lg divide-y divide-white/10">
      <ul>
        {links.map(({ href, label }) => (
          <li key={href}>
            <Link
              href={href}
              onClick={onClose}
              className={`block px-4 py-3 hover:underline transition ${
                pathname === href ? 'underline text-yellow-200' : ''
              }`}
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

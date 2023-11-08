import Link from "next/link";
import { cn } from "@/lib/utils";

type NavLinkProps = {
  links: {
    key: string;
    label: string;
    href: string;
  }[];
  path: string;
};

const NavLinks = ({ links, path }: NavLinkProps) => {
  return (
    <nav className="hidden flex-1 lg:block">
      <ul className="mr-20 flex items-center justify-end gap-8">
        {links.map((link) => (
          <li
            key={link.key}
            className={cn(
              "relative text-[.9rem] font-medium text-gray-950 transition duration-200 ease-in-out hover:text-gray-950",
              {
                "text-gray-700/80": path !== link.href,
              },
            )}
          >
            <Link href={link.href}>
              <span>{link.label}</span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavLinks;

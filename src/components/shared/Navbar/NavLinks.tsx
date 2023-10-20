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
    <nav className="hidden flex-1 md:block">
      <ul className="mr-20 flex items-center justify-end gap-10">
        {links.map((link) => (
          <li
            key={link.key}
            className={cn(
              "relative text-sm text-black before:absolute before:bottom-[2px] before:left-0 before:h-[1px] before:w-0 before:bg-black before:transition-all before:duration-300 before:ease-in-out before:hover:w-full",
              {
                "underline underline-offset-[2px] before:hidden":
                  path === link.href,
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

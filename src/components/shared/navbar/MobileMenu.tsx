import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import { ChevronRight, X } from "lucide-react";
import { NAV_LINKS } from "@/constants";
import Link from "next/link";

type Props = {
  isMenuOpen: boolean;
  closeMenu: () => void;
};

export default function MobileMenu({ isMenuOpen, closeMenu }: Props) {
  return (
    <div
      className={cn(
        `fixed right-0 top-[3.55rem] z-[100] flex h-screen w-full flex-col bg-white transition-transform duration-500 ease-in-out lg:hidden ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`,
      )}
    >
      <div className="space-y-10">
        <div className="pl-10">
          {NAV_LINKS.map((tab) => (
            <Link
              onClick={closeMenu}
              key={tab.label}
              href={tab.href}
              className="w-full"
            >
              <div className="flex w-full items-center justify-between border-b border-gray-200 py-6 pr-5">
                <div className="font-medium text-gray-950">{tab.label}</div>
                <ChevronRight className="text-gray-950" />
              </div>
            </Link>
          ))}
        </div>
        <div className="w-full px-10">
          <Link onClick={closeMenu} href="/contact">
            <Button className="h-14 w-full text-xl">Book Larry</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

import Link from "next/link";
import { cn } from "@/lib/utils";

type TabProps = {
  tabs: {
    id: string;
    label: string;
    path: string;
  }[];
  path: string;
};

const Tabs = ({ tabs, path }: TabProps) => {
  return (
    <nav className="hidden md:block">
      <ul className="flex items-center gap-10">
        {tabs.map((tab) => (
          <li
            key={tab.id}
            className={cn(
              "relative text-sm text-black before:absolute before:bottom-[2px] before:left-0 before:h-[1px] before:w-0 before:bg-black before:transition-all before:duration-300 before:ease-in-out before:hover:w-full",
              {
                "underline underline-offset-[3px] before:hidden":
                  path === tab.path,
              },
            )}
          >
            <Link href={tab.path}>
              <span>{tab.label}</span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
export default Tabs;

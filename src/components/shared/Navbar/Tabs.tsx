import Link from "next/link";
import "@/styles/navbar/navbar.css";
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
    <nav>
      <ul className="flex items-center gap-10">
        {tabs.map((tab) => (
          <li
            key={tab.id}
            className={cn("text-sm text-white", {
              "underline-hover-animation": path !== tab.path,
              "underline underline-offset-[3px]": path === tab.path,
            })}
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

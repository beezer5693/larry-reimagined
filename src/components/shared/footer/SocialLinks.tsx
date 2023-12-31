import { SOCIAL_LINKS } from "@/constants";
import { cn } from "@/lib/utils";
import Link from "next/link";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaXTwitter,
  FaYoutube,
} from "react-icons/fa6";

type SocialLinkProps = {
  className?: string;
};

const SocialLinks = ({ className }: SocialLinkProps) => {
  return (
    <div
      className={cn(
        "flex items-center justify-center gap-4 text-white lg:justify-start",
      )}
    >
      <Link
        className={cn(
          "cursor-pointer transition duration-200 ease-in-out",
          className,
        )}
        href={SOCIAL_LINKS[0].href}
      >
        <FaFacebookF size={14} />
      </Link>
      <Link
        className={cn(
          "cursor-pointer transition duration-200 ease-in-out",
          className,
        )}
        href={SOCIAL_LINKS[1].href}
      >
        <FaInstagram size={16} />
      </Link>
      <Link
        className={cn(
          "cursor-pointer transition duration-200 ease-in-out",
          className,
        )}
        href={SOCIAL_LINKS[2].href}
      >
        <FaLinkedinIn size={16} />
      </Link>
      <Link
        className={cn(
          "cursor-pointer transition duration-200 ease-in-out",
          className,
        )}
        href={SOCIAL_LINKS[3].href}
      >
        <FaXTwitter size={16} />
      </Link>
      <Link
        className={cn(
          "cursor-pointer transition duration-200 ease-in-out",
          className,
        )}
        href={SOCIAL_LINKS[4].href}
      >
        <FaYoutube size={16} />
      </Link>
    </div>
  );
};

export default SocialLinks;

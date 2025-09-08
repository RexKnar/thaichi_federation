import { ReactElement } from "react";
import NextLink from "./NextLink";
import clsx from "clsx";
import { usePathname } from "next/navigation";

// =========================================================
interface ListItemLinkProps {
  href: string;
  liClassName?: string;
  linkClassName?: string;
  title: string | ReactElement;
}
// =========================================================

export default function ListItemLink({
  href,
  title,
  liClassName = "nav-item",
  linkClassName = "nav-link"
}: ListItemLinkProps) {
  const pathname = usePathname();
  const isActive = pathname === href;
  return (
    <li className={liClassName}>
      <NextLink className={clsx(linkClassName, {
          active: isActive, // Adds 'active' class if current route matches
        })} href={href} title={title} />
    </li>
  );
}

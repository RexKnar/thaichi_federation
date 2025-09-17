"use client";

import { Fragment, PropsWithChildren } from "react";
import { usePathname } from "next/navigation";
import clsx from "clsx";
// GLOBAL CUSTOM COMPONENTS
import { Footer10, Footer8 } from "components/blocks/footer";
import Navbar from "components/blocks/navbar/navbar-1";
import NextLink from "components/reuseable/links/NextLink";

export default function AboutLayout({ children }: PropsWithChildren) {
  const pathname = usePathname();

  return (
    <Fragment>
      {/* ========== header section ========== */}
      <header className="wrapper bg-gray">
        <Navbar
          fancy
          navClassName="navbar navbar-expand-lg fancy navbar-light navbar-bg-light position-absolute"
          button={
            <NextLink
              title="Contact"
              href="#"
              className="rounded btn btn-sm btn-primary"
            />
          }
        />
      </header>

      <main className="content-wrapper">{children}</main>

      {/* ========== footer section ========== */}
      <Footer10 />
    </Fragment>
  );
}

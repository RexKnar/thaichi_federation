"use client";

import { Fragment, memo, ReactElement, useRef } from "react";
import clsx from "clsx";
// -------- CUSTOM HOOKS -------- //
import useSticky from "hooks/useSticky";
import useNestedDropdown from "hooks/useNestedDropdown";
// -------- CUSTOM COMPONENTS -------- //
import NextLink from "components/reuseable/links/NextLink";
// LOCAL CUSTOM COMPONENTS
import HeaderRight from "../components/header-right";
import FancyHeader from "../components/fancy-header";
import ListItemLink from "components/reuseable/links/ListItemLink";

// ===================================================================
interface NavbarProps {
  info?: boolean;
  cart?: boolean;
  fancy?: boolean;
  logoAlt?: string;
  search?: boolean;
  social?: boolean;
  language?: boolean;
  stickyBox?: boolean;
  navClassName?: string;
  button?: ReactElement;
  navOtherClass?: string;
}
// ===================================================================

export default function NavbarOne({
  button,
  cart = false,
  info = false,
  fancy = false,
  social = false,
  search = false,
  language = false,
  stickyBox = true,
  logoAlt = "logo-dark",
  navOtherClass = "navbar-other w-100 d-flex ms-auto",
  navClassName = "navbar navbar-expand-lg center-nav transparent navbar-light"
}: NavbarProps) {
  useNestedDropdown();
  const sticky = useSticky(350);
  const navbarRef = useRef<HTMLElement | null>(null);

  // dynamically render the logo
  const logo = sticky ? "logo-dark" : logoAlt;

  // all main header contents
  const headerContent = (
    <Fragment>
      <div className="navbar-brand w-100">
        <NextLink href="/" title={<img alt="logo" src={`/img/png/${logo}.png`} srcSet={`/img/png/${logo}.png`} />} />
      </div>

      <div id="offcanvas-nav" data-bs-scroll="true" className="navbar-collapse offcanvas offcanvas-nav offcanvas-start">
        <div className="offcanvas-header d-lg-none">
          <h3 className="mb-0 text-white fs-30">TaiChi Federation</h3>
          <button
            type="button"
            aria-label="Close"
            data-bs-dismiss="offcanvas"
            className="btn-close btn-close-white ms-auto"
          />
        </div>

        <div className="offcanvas-body ms-lg-auto d-flex flex-column h-100">
          <ul className="navbar-nav">

            <ListItemLink href="/" title="Home" linkClassName="nav-link " />
            <ListItemLink href="/about" title="About Us" linkClassName="nav-link " />
            <ListItemLink href="/yang-style-tai-chi" title="Yang Style Tai Chi" linkClassName="nav-link " />
            <ListItemLink href="/gallery" title="Gallery" linkClassName="nav-link " />
            <ListItemLink href="/course" title="Courses" linkClassName="nav-link " />
            <ListItemLink href="/contact" title="Contact" linkClassName="nav-link " />


          </ul>

          {/* ============= show contact info in the small device sidebar ============= */}

        </div>
      </div>

      {/* ============= right side header content ============= */}
      <HeaderRight
        cart={cart}
        info={info}
        button={button}
        search={search}
        social={social}
        language={language}
        navOtherClass={navOtherClass}
      />
    </Fragment>
  );

  const navbarClassName = clsx(sticky ? navClassName.replace("navbar-dark", "navbar-light") : navClassName, {
    "navbar-clone fixed navbar-stick": sticky
  });

  return (
    <Fragment>
      {stickyBox && <div style={{ paddingTop: sticky ? navbarRef.current?.clientHeight : 0 }} />}

      <nav ref={navbarRef} className={navbarClassName}>
        {fancy ? (
          <FancyHeader>{headerContent}</FancyHeader>
        ) : (
          <div className="container flex-lg-row flex-nowrap align-items-center">{headerContent}</div>
        )}
      </nav>


    </Fragment>
  );
}

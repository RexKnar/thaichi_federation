import { Hero15 } from "components/blocks/hero";
import { Fragment } from "react";
import Navbar from "components/blocks/navbar/navbar-1";
import { About9 } from "components/blocks/about";
import { Testimonial5 } from "components/blocks/testimonial";

import NextLink from "components/reuseable/links/NextLink";

import { CTA6 } from "components/blocks/call-to-action";
import WhyTaiChi from "./components/Why-TaiChi";
import HomeCourse from "./components/course";
import Footer from "./components/Footer";
export default function Page() {
  return (
    <Fragment>
      {/* ========== header ========== */}
      <header className="wrapper bg-gray">
        <Navbar
          fancy
          navClassName="navbar navbar-expand-lg fancy navbar-light navbar-bg-light position-absolute"
          button={
            <NextLink
              title="Contact"
              href="/contact"
              className="rounded btn btn-sm btn-primary"
            />
          }
        />
      </header>

      <main className="content-wrapper">
        {/* ========== hero section ========== */}
        <Hero15 />

        <section className="wrapper bg-soft-primary">
          <div className="container pt-16 pb-6 pt-md-18">
            <About9 />
          </div>
        </section>

        <section className="wrapper bg-light">
          <div className="container py-10 py-md-12">
            <WhyTaiChi />
          </div>
        </section>
        <section className="wrapper bg-soft-primary">
          <div className="container py-10  ">
            <HomeCourse />
          </div>
          <div className="container-fluid">
            <Testimonial5 />
          </div>
        </section>
        <section className="wrapper bg-soft-light py-10 py-lg-0">
          <CTA6 />
        </section>
        <Footer />
      </main>
    </Fragment>
  );
}

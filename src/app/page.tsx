import { Hero15 } from "components/blocks/hero";
import { Fragment } from "react";
import Navbar from "components/blocks/navbar/navbar-1";
import { Services18, Services7 } from "components/blocks/services";
import { About28, About30, About9 } from "components/blocks/about";
import { Testimonial5 } from "components/blocks/testimonial";
import { Footer10 } from "components/blocks/footer";
import data from "data/career-page-2";
import { ServiceCard3 } from "components/reuseable/service-cards";
import { JobPostCard2 } from "components/reuseable/job-cards";
import Accordion from "components/reuseable/accordion";
import { courseList } from "data/data";
import NextLink from "components/reuseable/links/NextLink";
import { BlogCard2 } from "components/reuseable/blog-cards";
import Image from "next/image";
import { CTA6 } from "components/blocks/call-to-action";
import { Process19 } from "components/blocks/process";
import WhyTaiChi from "./components/Why-TaiChi";
import HomeCourse from "./components/course";
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
          <div className="container py-16 py-md-18">
            {/* <About30 /> */}
            <WhyTaiChi />
          </div>
        </section>
        <section className="wrapper bg-soft-primary">
          <div className="container py-16 py-md-18">
            <HomeCourse />

            {/* <div className="row">
              <div className="mx-auto col-12 col-md-5">
                <BlogCard2
                  link="/course"
                  category="30–45 min demo session"
                  title="Free Demo Session"
                  description="The forst demo session if FREE for all interested participants!"
                  cardTop={
                    <figure className=" card-img-top overlay overlay-1 hover-scale">
                      <a className="link-dark" href="/course">
                        <Image width={960} height={600} src="/img/martialarts/training-1.jpg" alt="blog" className="h-auto w-100" />
                        <span className="bg" />
                      </a>

                      <figcaption className="pt-10 text-start">
                        <h2>Ideal for groups of 10 or more participants</h2>
                        <p>Suitable for All Ages & Fitness Levels</p>
                        <h2>Session includes:</h2>
                        <ul>
                          <li>Introduction to TaiChi – What is TaiChi?</li>
                          <li>Overview of TaiChi Forms</li>
                          <li>Live Demonstration of TaiChi Forms</li>

                          <li>
                            The first demo session is FREE for all interested
                            participants!{" "}
                          </li>
                        </ul>{" "}
                      </figcaption>
                    </figure>
                  }
                />

              </div>
            </div> */}





          </div>
          <div className="container-fluid">
            <Testimonial5 />
          </div>
        </section>
        <section className="wrapper bg-soft-light py-10">
          <CTA6 />
        </section>
        <Footer10 />
      </main>
    </Fragment>
  );
}

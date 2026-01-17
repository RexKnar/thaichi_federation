import { Hero15 } from "components/blocks/hero";
import { Fragment } from "react";
import Navbar from "components/blocks/navbar/navbar-1";
import { Services18, Services7 } from "components/blocks/services";
import { About28, About30, About9 } from "components/blocks/about";
import { Process19 } from "components/blocks/process";
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
              href="#"
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
            <About30 />
         </div>
         </section>
         <section className="wrapper bg-soft-primary">
          <div className="container py-16 py-md-18">
            {/* <Process19 /> */}
            <div className="row text-center">
        <div className="col-md-10 col-lg-7 mx-auto position-relative">
          <img
            data-delay="1800"
            src="/img/svg/doodle5.svg"
            className="w-15 position-absolute d-none d-lg-block"
            style={{ bottom: "-60%", right: "10%" }}
            alt=""
          />

          <img
            data-delay="1800"
            src="/img/svg/doodle6.svg"
            className="h-15 position-absolute d-none d-lg-block"
            style={{ top: "-40%", left: "-5%" }}
            alt=""
          />

          
          <h3 className="display-3 mb-8 px-xl-6">
          Our Training Program
          </h3>
        </div>
      </div>
      <div className="row">
           <div className="mx-auto col-12 col-md-5">
            <BlogCard2
              link="#"
              category="30–45 min demo session"
              title="Structured Yang Style Tai Chi Training"
              description="Can be done in formal clothes, no equipment"
              cardTop={
                <figure className=" card-img-top overlay overlay-1 hover-scale">
                  <a className="link-dark" href="#">
                    <Image width={960} height={600} src="/img/martialarts/card-banner.jpg" alt="blog" className="h-auto w-100" />
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
            <div className="mx-auto col-12 col-md-5">
            <BlogCard2
              link="#"
              category="30–45 min demo session"
              title="Free Demo Session"
              description="The forst demo session if FREE for all interested participants!"
              cardTop={
                <figure className=" card-img-top overlay overlay-1 hover-scale">
                  <a className="link-dark" href="#">
                    <Image width={960} height={600} src="/img/martialarts/card-banner.jpg" alt="blog" className="h-auto w-100" />
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
      </div>
           
            



          </div>
          <div className="container-fluid">
            <Testimonial5 />
          </div>
        </section>
        <Footer10 />
      </main>
    </Fragment>
  );
}

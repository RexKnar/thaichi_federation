import { Fragment } from "react";
// GLOBAL CUSTOM COMPONENTS
import Navbar from "components/blocks/navbar/navbar-1";
import { Tiles3 } from "components/elements/tiles";
import { Footer8 } from "components/blocks/footer";
import ContactForm from "components/common/ContactForm";
import Breadcrumb from "components/reuseable/Breadcrumb";
import NextLink from "components/reuseable/links/NextLink";

// CUSTOM DATA
const breadcrumb = [
  { id: 1, title: "Home", url: "/" },
  { id: 2, title: "Contact", url: "#" }
];

export default function Page() {
  return (
    <Fragment>
      {/* ========== header section ========== */}
      <header className="wrapper bg-gray">
    
    <Navbar  fancy navClassName="navbar navbar-expand-lg fancy navbar-light navbar-bg-light position-absolute"  button={<NextLink title="Contact" href="#" className="rounded btn btn-sm btn-primary" />}/>
  </header>

      <main className="content-wrapper ">
        {/* ========== page title section ========== */}
        <section className="wrapper bg-soft-primary">
            <div className="container pb-5 text-center pt-18 pt-md-18 pb-md-5">
                <div className="row">
                    <div className="mx-auto mb-6 col-xl-5">
                        <h1 className="mb-3 display-1">Get In Touch</h1>
                        <p className="mb-0 lead">TaiChi Federation Of India</p>
                    </div>
                </div>
            </div>
        </section>

        <div className="wrapper bg-light angled upper-end">
          <div className="container py-14 py-md-16">
            {/* ========== contact info section ========== */}
            <div className="mb-16 row gy-10 gx-lg-8 gx-xl-12 align-items-center">
              <div className="col-lg-7 position-relative">
                <div className="shape bg-dot primary rellax w-18 h-18" style={{ top: 0, left: "-1.4rem", zIndex: 0 }} />

                <Tiles3 />
              </div>

              <div className="col-lg-5">
                <h2 className="mb-8 display-4">Convinced yet? Let's make something great together.</h2>
                <div className="flex-row d-flex">
                  <div>
                    <div className="icon text-primary fs-28 me-6 mt-n1">
                      <i className="uil uil-location-pin-alt" />
                    </div>
                  </div>

                  <div>
                    <h5 className="mb-1">Address</h5>
                    <address>
                    O-Block, 2nd Floor, ApptaMarket, <br className="d-none d-md-block" />
                    Near Ozhuginasery Bridge, Therekalputhur,<br className="d-none d-md-block" />
                    Thirupathisaram(P.0), Kanyakumari District-629901.
                    </address>
                  </div>
                </div>

                <div className="flex-row d-flex">
                  <div>
                    <div className="icon text-primary fs-28 me-6 mt-n1">
                      <i className="uil uil-phone-volume" />
                    </div>
                  </div>

                  <div>
                    <h5 className="mb-1">Phone</h5>
                    <p>+91 9442079982 , +91 9791825549 , +91 9789894184.</p>
                  </div>
                </div>

                <div className="flex-row d-flex">
                  <div>
                    <div className="icon text-primary fs-28 me-6 mt-n1">
                      <i className="uil uil-envelope" />
                    </div>
                  </div>

                  <div>
                    <h5 className="mb-1">E-mail</h5>
                    <p className="mb-0">
                      <a href="mailto:shanmugam.taichi@gmail.com" className="link-body">
                      shanmugam.taichi@gmail.com
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* ========== contact form section ========== */}
            <div className="row">
              <div className="col-lg-10 offset-lg-1 col-xl-8 offset-xl-2">
                <h2 className="mb-3 text-center display-4">Drop Us a Line</h2>
                <p className="mb-10 text-center lead">
                  Reach out to us from our contact form and we will get back to you shortly.
                </p>

                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* ========== footer section ========== */}
      <Footer8 />
    </Fragment>
  );
}

import { Fragment } from "react";
// GLOBAL CUSTOM COMPONENTS
import Navbar from "components/blocks/navbar/navbar-1";
import { Footer10 } from "components/blocks/footer";
import ContactForm from "components/common/ContactForm";
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

        <Navbar fancy navClassName="navbar navbar-expand-lg fancy navbar-light navbar-bg-light position-absolute" button={<NextLink title="Contact" href="#" className="rounded btn btn-sm btn-primary" />} />
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
        <div className="wrapper bg-light">
          <div className="container pb-14 pb-md-160">
            {/* ========== newsletter section ========== */}
            <div className="row">
              <div className="col mt-n19 mb-16">
                <div className="card shadow-lg">
                  <div className="row gx-0">
                    <div
                      className="col-lg-6 image-wrapper bg-image bg-cover rounded-top rounded-lg-start d-none d-md-block"
                      style={{ backgroundImage: "url(/img/martialarts/about.jpg)" }}
                    />

                    <div className="col-lg-6">
                      <div className="p-10 p-md-11 p-lg-13">
                        <h2 className="display-4 mb-3">Contact Us!</h2>

                        <p className="lead fs-lg">
                          Get in Touch with TaiChi Federation of India
                        </p>

                        <p>
                          We welcome your interest in traditional Yang Style Tai Chi training. Whether you are a beginner, an
                          experienced practitioner, or someone seeking instructor or master-level guidance, the TaiChi
                          Federation of India (TFI) is here to support your journey.

                        </p>
                        <p>Feel free to contact us for course details, registrations, seminars, certifications, or general enquiries.</p>


                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-xl-10 mx-auto">
                <div className="row gy-10 gx-lg-8 gx-xl-12">
                  {/* ========== contact form section ========== */}

                  {/* ========== contact info section ========== */}
                  <div className="row">
                    <div className="d-flex flex-row col-12 col-md-4">
                      <div>
                        <div className="icon text-primary fs-28 me-4 mt-n1">
                          <i className="uil uil-location-pin-alt" />
                        </div>
                      </div>
                      <div>
                        <h5 className="mb-1">Address</h5>
                        <address>
                          O-Block, 2nd Floor, ApptaMarket, <br className="d-none d-md-block" />
                          Nagercoil, Kanyakumari District,<br className="d-none d-md-block" />
                          Tamil Nadu, India.
                        </address>
                      </div>
                    </div>

                    <div className="d-flex flex-row col-12 col-md-4">
                      <div>
                        <div className="icon text-primary fs-28 me-4 mt-n1">
                          <i className="uil uil-phone-volume" />
                        </div>
                      </div>
                      <div>
                        <h5 className="mb-1">Phone</h5>
                        <p><b>B. Shanmugam: </b>+91 9442079982 ,
                          <br /><b>S. Karthikheyan: </b> +91 9791825549 ,<br />
                          <b>R. Nagarajan:</b> +91 9789894184.</p>

                      </div>
                    </div>

                    <div className="d-flex flex-row col-12 col-md-4">
                      <div>
                        <div className="icon text-primary fs-28 me-4 mt-n1">
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
                    <p className="text-center">(Please call during reasonable hours. WhatsApp enquiries are also welcome.)</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <section className="wrapper bg-light ">
          <div className="container card bg-soft-primary mb-8">
            <div className="card-body p-lg-12">
              <div className="row gx-md-8 gx-xl-12 gy-10">
                <div className="col-lg-6">
                  <h2 className="display-4 mb-3 pe-lg-10">Class Timing</h2>
                  <p><b>Regular Classes (Daily):</b></p>
                  <ul>
                    <li> Morning: 7:00 AM – 10:00 AM</li>
                    <li> Evening: 5:00 PM – 9:00 PM</li></ul>
                  <p><b>Private Classes:</b><br />
                    One-on-one and small group private training sessions are available upon request.</p>
                  <h2>What You Can Contact Us For</h2>
                  <ul>
                    <li>Course details and fee structure </li>
                    <li>Enrollment and registration support</li>
                    <li>Beginner, intermediate, and advanced training</li>
                    <li>Instructor and master training programs</li>
                    <li>Seminars, workshops, and retreats</li>
                    <li>Private and customized Tai Chi classes</li>
                    <li>Federation membership and certification</li>
                  </ul>

                </div>

                <div className="col-lg-6">
                  <ContactForm />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========== map section ========== */}
        <section className="wrapper bg-light">
          <div className="map">
            <iframe
              width="100%"
              height={500}
              allowFullScreen
              style={{ border: 0 }}
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d25387.23478654725!2d-122.06115399490332!3d37.309248660190086!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fb4571bd377ab%3A0x394d3fe1a3e178b4!2sCupertino%2C%20CA%2C%20USA!5e0!3m2!1sen!2str!4v1645437305701!5m2!1sen!2str"
            />
          </div>
        </section>


      </main>

      {/* ========== footer section ========== */}
      <Footer10 />
    </Fragment>
  );
}

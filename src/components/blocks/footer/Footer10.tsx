import Link from "types/link";
// GLOBAL CUSTOM COMPONENTS
import NextLink from "components/reuseable/links/NextLink";
import SocialLinks from "components/reuseable/SocialLinks";
// CUSTOM DATA
import { helps, learnMore } from "data/footer";

export default function Footer10() {
  // common links section
  const widget = (list: Link[], title: string) => {
    return (
      <div className="widget">
        <h4 className="mb-3 text-white widget-title">{title}</h4>
        <ul className="mb-0 list-unstyled text-reset">
          {list.map(({ url, title, id }) => (
            <li key={id}>
              <NextLink href={url} title={title} />
            </li>
          ))}
        </ul>
      </div>
    );
  };

  return (
    <footer className="bg-dark text-inverse">
      <div className="container pt-20 pt-lg-21 pb-7">
        <div className="row gy-6 gy-lg-0">
          <div className="col-lg-6">
            <div className="widget">
              <h3 className="mb-3 text-white h2">taiChi Federation of India</h3>
              <p className="mb-5 lead">
                Promoting health, harmony and peace through authentic TaiChi practice since 2005.
              </p>
              <NextLink title="Join Us" href="#" className="btn btn-white rounded-pill" />
            </div>
          </div>

     

          <div className="col-md-3 col-lg-3">{widget(learnMore, "Learn More")}</div>

          <div className="col-md-3 col-lg-3">
            <div className="widget">
              <h4 className="mb-3 text-white widget-title">Get in Touch</h4>
              <address>Moonshine St. 14/05 Light City, London, United Kingdom</address>
              <a href="mailto:first.last@email.com">info@email.com</a>
              <br /> 00 (123) 456 78 90
            </div>
          </div>
        </div>

        <hr className="mt-13 mt-md-15 mb-7" />

        <div className="d-md-flex align-items-center justify-content-between">
          <p className="mb-2 mb-lg-0">© 2025 taiChi Federation of India. All rights reserved.</p>
          <SocialLinks className="nav social social-white text-md-end" />
        </div>
      </div>
    </footer>
  );
}

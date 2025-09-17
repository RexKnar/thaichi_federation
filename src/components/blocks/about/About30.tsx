import { Fragment } from "react";
// CUSTOM DATA
import { abouts } from "data/demo-29";
import { whyTaiChi } from "data/data";
import Share from "icons/solid-mono/Share";

export default function About30() {
  return (
    <Fragment>
      <div className="text-center row">
        <div className="mx-auto col-md-11 col-lg-9 col-xl-8 col-xxl-7 position-relative">
          <img
            src="/img/svg/doodle3.svg"
            className="h-11 position-absolute d-none d-lg-block"
            style={{ top: "-20%", right: "-12%" }}
            alt=""
          />

          <img
            src="/img/svg/doodle9.svg"
            className="h-17 position-absolute d-none d-lg-block"
            style={{ bottom: "5%", left: "-17%" }}
            alt=""
          />

          <h2 className="mb-3 text-center fs-16 text-uppercase text-muted">Why Practice TaiChi?</h2>

          <h3 className="mb-12 text-center display-3">
            Here are a few reasons why you should <span className="text-primary">Practice TaiChi.</span>
          </h3>
        </div>
      </div>

      <div className="row d-flex align-items-start mb-19">
        <div className="col-lg-6 position-lg-sticky" style={{ top: "8rem" }}>
          <figure>
            <img src="/img/martialarts/training-1.jpg" srcSet="/img/martialarts/training-1.jpg" alt=""  className="rounded-full"/>
          </figure>
        </div>

        <div className="col-lg-5 ms-auto">
          {whyTaiChi.map(({ Icon, id, title, description, color }) => (
            <div className="flex-row mb-8 d-flex" key={id}>
              <div>
                <div className={`svg-bg svg-bg-lg bg-${color} rounded-xl me-5`}>
                  <Icon className="text-white icon-svg-xs" />
                </div>
              </div>

              <div>
                <h4 className="fs-20">{title}</h4>
                <p>{description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Fragment>
  );
}

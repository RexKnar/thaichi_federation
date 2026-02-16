import { Fragment } from "react";
// CUSTOM DATA
import { abouts } from "data/demo-29";
import { whyTaiChi } from "data/data";
import Share from "icons/solid-mono/Share";

export default function WhyTaiChi() {
    return (
        <Fragment>
            <div className="text-center row">
                <div className="mx-auto col-md-11 col-lg-9 col-xl-8 col-xxl-7 position-relative">



                    <h3 className="mb-12 text-center display-3 text-primary">
                        Here are a few reasons why you should <span className="text-primary">Practice TaiChi.</span>
                    </h3>
                </div>
            </div>

            <div className="row d-flex align-items-start ">

                <div className="col-12 ms-auto">
                    <div className="row g-3 justify-content-center">
                        {whyTaiChi.map(({ Icon, id, title, description, color }) => (
                            <div className="col-12 col-md-6 col-lg-6 mb-8 px-5 d-flex justify-content-center align-items-center" key={id}>
                                <div>
                                    <div className={`svg-bg svg-bg-sm bg-${color} rounded-xl me-5`}>
                                        <Icon className="text-white icon-svg-xs" />
                                    </div>
                                </div>

                                <div>
                                    <h4 className="fs-20">{title}</h4>
                                    <p className="text-justify" style={{ textAlign: "justify" }}>{description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </Fragment >
    );
}

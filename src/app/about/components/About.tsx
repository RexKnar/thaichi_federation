import { zoomInAnimate } from "utils/animation";


export default function About() {
    return (
        <>
            <div className="row gx-lg-0 gx-xl-8 gy-10 gy-md-13 gy-lg-0 mb-2 mb-md-5 mb-lg-5 align-items-center">
                {
                    /* <div
                        className="col-md-8 offset-md-2 col-lg-6 offset-lg-1 position-relative order-lg-2"
                        style={zoomInAnimate("0ms")}>
                        <div className="shape bg-dot primary rellax w-17 h-19" style={{ top: "-1.7rem", left: "-1.5rem" }} />
                        <div
                            className="rounded shape bg-primary rellax d-md-block"
                            style={{ width: "85%", height: "90%", right: "-0.8rem", bottom: "-1.8rem" }} />
    
                        <figure className="rounded">
                            <img src="/img/martialarts/about.jpg" srcSet="/img/martialarts/about.jpg" alt="hero" />
                        </figure>
                    </div> */
                }

                <div className="text-center col-lg-8  text-lg-start mx-auto text-align-center">
                    <h2 className="mb-3 display-4 text-center">Who We Are</h2>

                    <p className="mb-6 text-center">
                        We are a traditional Tai Chi school dedicated to preserving and sharing <b>authentic Yang Style Tai Chi</b>. For over <b>25 years</b>, our school has guided students of all ages toward better health, balance, and inner calm through disciplined and mindful practice.
                    </p>
                    <p className="mb-6 text-center">
                        Our focus is not just on physical movement, but on nurturing overall well-being—body, mind, and breath.</p>


                </div>
                <div className="text-center col-lg-8  text-lg-start mx-auto text-align-center">
                    <h2 className="mb-3 display-4 text-center">Our Lineage & Tradition</h2>

                    <p className="mb-6 text-center">
                        We follow the <b>authentic Yang Style Tai Chi</b> lineage, passed down through traditional masters. This lineage ensures that the principles, forms, and philosophy remain pure and unchanged.
                    </p>
                    <p className="mb-6 text-center">
                        By respecting tradition, we preserve the true essence of Tai Chi—slow, mindful movements combined with proper posture, breathing, and internal awareness.</p>


                </div>
            </div></>
    );
}

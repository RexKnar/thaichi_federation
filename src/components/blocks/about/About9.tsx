import { zoomInAnimate } from "utils/animation";


export default function About9() {
  return (
    <>
    <div className="row gx-lg-0 gx-xl-8 gy-10 gy-md-13 gy-lg-0 mb-7 mb-md-10 mb-lg-16 align-items-center">
        <div
          className="col-md-8 offset-md-2 col-lg-6 offset-lg-1 position-relative order-lg-2"
          style={zoomInAnimate("0ms")}>
          <div className="shape bg-dot primary rellax w-17 h-19" style={{ top: "-1.7rem", left: "-1.5rem" }} />
          <div
            className="rounded shape bg-primary rellax d-md-block"
            style={{ width: "85%", height: "90%", right: "-0.8rem", bottom: "-1.8rem" }} />

          <figure className="rounded">
            <img src="/img/martialarts/about.jpg" srcSet="/img/martialarts/about.jpg" alt="hero" />
          </figure>
        </div>

        <div className="text-center col-lg-5 mt-lg-n10 text-lg-start">
        <h2 className="mb-3 display-4">Welcome to Authentic Yang Style Tai Chi India</h2>
        <p className="lead fs-lg">
          Balance Your Body. Calm Your Mind. Energize Your Life.

        </p>
        <p className="mb-6">
          At <span className="underline">Authentic Yang Style Tai Chi India</span>,
          we offer a peaceful and friendly space to learn the ancient art of TaiChi — a graceful form of exercise known for promoting balance,
          flexibility, inner strength, and peace of mind.
        </p>
        <p className="mb-6">
          Whether you're a beginner looking to start your journey, or an experienced practitioner
          seeking deeper mastery, our classes are designed to meet you where you are.
        </p>

          
        </div>
      </div></>
  );
}

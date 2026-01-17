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
        <h2 className="mb-3 display-4">TaiChi Federation of India</h2>
        <p className="lead fs-lg">
          Preserving Tradition • Building Health • Cultivating Balance

        </p>
        <p className="mb-6">
          <span className="underline">The TaiChi Federation of India (TFI)</span> is dedicated to the authentic teaching and promotion of traditional Yang Style Tai Chi (Taijiquan) in India. Rooted in classical lineage and disciplined practice, TFI offers structured training that nurtures physical health, mental clarity, and inner balance.
        
        </p>
        <p className="mb-6">
          Tai Chi is more than slow movement—it is a profound internal martial art that harmonizes  <span className="underline">body, breath, and mind</span>. At TFI, we guide practitioners to experience Tai Chi as a lifelong path of wellness and self-cultivation.
        </p>

          
        </div>
      </div></>
  );
}

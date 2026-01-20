
import Process from "./components/process";
import Masters from "./components/masters";
import About from "./components/About";

export default function Page() {
  return (

    <><section className="wrapper bg-soft-primary">
      <div className="container pb-5 text-center pt-18 pt-md-18 pb-md-5">
        <div className="row">
          <div className="mx-auto mb-6 col-xl-5">
            <h1 className="mb-3 display-1">About Us</h1>
            <p className="mb-0 lead">TaiChi Federation Of India.</p>
          </div>
        </div>
      </div>
    </section>
      <section className="wrapper bg-light">
        <div className="container pt-12 pb-6 pt-md-18">
          <About />
        </div>
      </section>
      <section className="wrapper bg-soft-primary">
        <div className="container pt-16 pb-16 py-md-18">
          <Process />
        </div>
      </section>
      <section className="wrapper bg-light">
        <div className="container ">
          <Masters />
          <h3 className="text-center">Our Commitment</h3>
          <p className="text-center">The Tai Chi Federation of India is committed to preserving the dignity, depth, and discipline of Tai Chi. Through quality education, regular practice, and community engagement, we aim to contribute positively to individual well-being and to the broader understanding of traditional internal martial arts in India.</p>
        </div>
      </section>
    </>

  )
}
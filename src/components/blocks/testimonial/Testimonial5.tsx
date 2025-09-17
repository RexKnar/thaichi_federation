import Carousel from "components/reuseable/Carousel";
import { TestimonialCard2 } from "components/reuseable/testimonial-cards";


export default function Testimonial5() {
  const testimonialList2 = [
    {
      name: '',
      image: '/img/martialarts/training-2.jpg',
      designation: '“Tai Chi is not just a form, it’s a way of life.”',
      review: ` Our Master, B. Shunmugam, has over 25 years of experience in Yang Style Tai Chi. He was trained under the traditional lineage of the late Master Micheal A. Selvaraj, whose passion for sharing authentic yang style Tai Chi continues to inspire and guide our teaching.`
    },
  ];
  
  return (
    <section className="wrapper bg-soft-aqua">
      <div className="container pt-16 pb-14 pb-md-0">
        <div className="row gx-lg-8 gx-xl-0 align-items-center">
          <div className="col-md-5 col-lg-5 col-xl-4 offset-xl-1 d-none d-md-flex position-relative align-self-end">
            <div
              className="shape rounded-circle bg-pale-primary rellax w-21 h-21 d-md-none d-lg-block"
              style={{ top: "7rem", left: "1rem" }}
            />

            <figure>
              <img src="/img/martialarts/master.png" srcSet="/img/martialarts/master.png" alt="" />
            </figure>
          </div>

          <div className="col-md-7 col-lg-6 col-xl-6 col-xxl-5 offset-xl-1">
            <div className="swiper-container dots-start dots-closer mt-md-10 mb-md-15">
              <Carousel grabCursor slidesPerView={1} navigation={false}>
                {testimonialList2.map((item, i) => (
                  <TestimonialCard2
                    {...item}
                    key={i}
                    blockClassName="icon fs-lg"
                    blockDetailsClassName="blockquote-details"
                  />
                ))}
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import LightBox from "components/LightBox";
import Carousel from "components/reuseable/Carousel";

export default function Hero15() {
  return (
    <div className="wrapper bg-dark">
      {/* USED FOR IMAGE LIGHTBOX */}
      <LightBox />

      <div className="swiper-container swiper-hero dots-over">
        <Carousel slidesPerView={1} autoplay={{ delay: 7000, disableOnInteraction: false }}>
          <div
            className="swiper-slide bg-overlay bg-overlay-400 bg-dark bg-image"
            style={{ backgroundImage: 'url("/img/martialarts/selvaraj-master.png")', backgroundPositionY: '0px' }}>
            <div className="container h-100">
              <div className="row h-100">
                <div className="position-absolute bottom-0 col-md-10 offset-md-1 col-lg-8 offset-lg-0 col-xl-7 col-xxl-7 text-center text-lg-start justify-content-center align-self-center align-items-start">
                  <h2 className="display-1 fs-56 mb-4 text-white animate__animated animate__slideInDown animate__delay-1s">
                    Move Gently. Live Strong.
                  </h2>

                  <p className="lead fs-23 lh-sm mb-7 text-white animate__animated animate__slideInRight animate__delay-2s">
                    Traditional Tai Chi for Health, Balance &amp; Inner Calm
                  </p>

                </div>
              </div>
            </div>
          </div>

          <div
            className="swiper-slide bg-overlay bg-overlay-400 bg-dark bg-image"
            style={{ backgroundImage: 'url("/img/martialarts/TFI_Banner.jpeg")' }}>
            <div className="container h-100">
              <div className="row h-100">
                <div className="col-md-11 col-lg-8 col-xl-7 col-xxl-6 mx-auto text-center justify-content-center align-self-center">



                </div>
              </div>
            </div>
          </div>
          <div
            className="swiper-slide bg-overlay bg-overlay-400 bg-dark bg-image"
            style={{ backgroundImage: 'url("/img/martialarts/training-1.jpg")' }}>
            <div className="container h-100">
              <div className="row h-100">
                <div className="position-absolute bottom-0 col-md-11 col-lg-8 col-xl-7 col-xxl-6 mx-auto text-start justify-content-start align-self-center">
                  <h2 className="display-1 fs-56 mb-4 text-white animate__animated animate__slideInDown animate__delay-1s">
                    Begin Your Tai Chi Journey Today
                  </h2>

                  <p className="lead fs-23 lh-sm mb-7 text-white animate__animated animate__slideInRight animate__delay-2s">
                    Experience Health, Harmony &amp; Balance
                  </p>


                </div>
              </div>
            </div>
          </div>
        </Carousel>
      </div>
    </div>
  );
}

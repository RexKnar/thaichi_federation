import CountUp from "components/reuseable/CountUp";

export default function Tiles3() {
  return (
    <div className="row gx-md-5 gy-5">
      <div className="col-md-6">
        <figure className="rounded mt-md-10 position-relative">
          <img src="/img/martialarts/training-3.jpg" srcSet="/img/martialarts/training-3.jpg" alt="" />
        </figure>
      </div>

      <div className="col-md-6">
        <div className="row gx-md-5 gy-5">
          <div className="col-md-12 order-md-2">
            <figure className="rounded">
              <img src="/img/martialarts/training-1.jpg" srcSet="/img/martialarts/training-1.jpg" alt="" />
            </figure>
          </div>

          <div className="col-md-10">
            <div className="text-center card bg-pale-primary">
              <div className="card-body py-11 counter-wrapper">
                <h3 className=" counter text-nowrap">
                  <CountUp end={5000} suffix="+" />
                </h3>

                <p className="mb-0">Satisfied Students</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

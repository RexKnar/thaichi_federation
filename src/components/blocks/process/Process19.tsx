import { serviceList } from "data/data";
import { Fragment } from "react";

// =================================================================
type ItemProps = { index:number; no: string; title: string; className?: string };
// =================================================================

const Item = ({ index,no, title, className = "" }: ItemProps) => {

  const data= serviceList[index];
  return (
    <div className={className}>
      <span className="fs-60 lh-1 mb-3 fw-normal text-primary">{no}</span>
      <h4 className="fs-20">{data.title}</h4>
      <p className="mb-0 px-xl-7">
        {data.description}
      </p>
    </div>
  );
};

export default function Process19() {
  return (
    <Fragment>
      <div className="row text-center">
        <div className="col-md-10 col-lg-7 mx-auto position-relative">
          <img
            data-delay="1800"
            src="/img/svg/doodle5.svg"
            className="w-15 position-absolute d-none d-lg-block"
            style={{ bottom: "-60%", right: "10%" }}
            alt=""
          />

          <img
            data-delay="1800"
            src="/img/svg/doodle6.svg"
            className="h-15 position-absolute d-none d-lg-block"
            style={{ top: "-40%", left: "-5%" }}
            alt=""
          />

          
          <h3 className="display-3 mb-8 px-xl-6">
          Our Programs
          </h3>
        </div>
      </div>

      <div className="row ">
        <div className="col-xxl-11 mx-auto">
          <div className="row gy-10 gy-lg-0 text-center d-flex align-items-center">
            <div className="col-md-6 col-lg-4 mx-auto mb-n10 mb-lg-0">
              <figure className="mx-auto">
                <img src="/img/png/martialarts-02.png" srcSet="/img/png/martialarts-02.png" alt="" />
              </figure>
            </div>

            <div className="w-100 d-lg-none" />

            <div className="col-md-6 col-lg-4 order-lg-first">
              <Item no="01" index={0} title="Download Application" className="mb-8" />
              <Item no="02" index={1} title="Quick Registration" />
            </div>

            <div className="col-md-6 col-lg-4">
              <Item no="03" index={2} title="Track Your Spending" className="mb-8" />
              <Item no="04" index={3} title="Have Total Control" />
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

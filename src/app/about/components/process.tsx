import { Fragment } from "react";
// CUSTOM DATA

export default function Process() {
     const processList = [
  {
    no: "01",
    title: "Correct posture, alignment, and movement principles",
    subtitle: "Nulla vitae elit libero elit non porta gravida eget metus cras. Aenean eu leo quam. Pellentesque ornare."
  },
  {
    no: "02",
    title: "Coordination of body, breath, and awareness",
    subtitle: "Vestibulum id ligula porta felis euismod semper. Sed posuere consectetur est at lobortis."
  },
  {
    no: "03",
    title: "Development and refinement of internal energy (Qi)",
    subtitle: "Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Nulla vitae elit libero."
  },
  {
    no: "04",
    title: "Consistent practice and long-term discipline",
    subtitle: "Integer posuere erat, consectetur adipiscing elit. Fusce dapibus, tellus ac cursus commodo."
  }
];
  return (
    <Fragment>
      <h2 className="display-4 mb-3">Our Approach</h2>
      <p className="lead fs-lg mb-8">
        The Tai Chi Federation of India follows a<span className="underline">traditional, systematic, and lineage-based approach</span> training. <br/>Our methodology emphasizes:
      </p>

      <div className="row gx-lg-8 gx-xl-12 gy-6 process-wrapper line">
        {processList.map(({ no, title, subtitle }, i) => {
          const iconColor = i === 1 ? "btn-primary" : "btn-soft-primary";

          return (
            <div className="col-md-6 col-lg-3" key={no}>
              <span className={`icon btn btn-circle btn-lg pe-none mb-4 ${iconColor}`}>
                <span className="number">{no}</span>
              </span>

              <h4 className="mb-1">{title}</h4>
             
            </div>
          );
        })}
      </div>
    </Fragment>
  );
}

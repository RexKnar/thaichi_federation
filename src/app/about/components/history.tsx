import { Fragment } from "react";
import Image from "next/image";

export default function History() {
  const timelines = [
    {
      id: 1,
      duration: "1799 - 1872",
      imgPath: "/img/generation/Gen1.png",
      title: "Yang Lu Chan",
      description: `Founder of Yang Style Tai Chi. Learned Chen style, modified it to create a softer, more accessible form while retaining martial effectiveness. Known as “Yang the Invincible.”`,
    },
    {
      id: 2,
      duration: "1839 - 1917",
      imgPath: "/img/generation/Gen2.png",
      title: "Yang Jian Hou",
      description: `Third son of Yang Lu Chan. Renowned for mastering the middle frame, blending softness with internal strength, and passing the art to his sons.`,
    },
    {
      id: 3,
      duration: "1883 - 1936",
      imgPath: "/img/generation/Gen3.png",
      title: "Yang Cheng Fu",
      description: `Son of Yang Jian Hou. Standardized Yang style into the large, open, and flowing form practiced worldwide today, promoting Tai Chi for health and well-being.`,
    },
    {
      id: 4,
      duration: "1903 - 1994",
      imgPath: "/img/generation/Gen4.png",
      title: "Fu Zhong Wen",
      description: `Direct disciple and close family relative of Grandmaster Yang Cheng Fu. Dedicated his life to preserving and spreading traditional Yang Style Tai Chi.`,
    },
    {
      id: 5,
      duration: "1926 - 2020",
      imgPath: "/img/generation/Gen5.png",
      title: "Fu Sheng Yuan",
      description: `Son of Fu Zhong Wen. Dedicated his life to spreading Yang Style Tai Chi internationally. Founded the International Yang Style Tai Chi Chuan Association.`,
    },
    {
      id: 6,
      duration: "1968 - PRESENT",
      imgPath: "/img/generation/Gen6.png",
      title: "Fu Qing Quan",
      description: `Grandson of Fu Zhong Wen. Current lineage holder and president of the International Yang Style Tai Chi Chuan Association, continuing to promote Yang Style globally.`,
    },
  ];
  return (
    <Fragment>
      <div className="text-center row">
        <div className="mx-auto col-md-11 col-lg-9 col-xl-8 col-xxl-7 position-relative">
          <h2 className="mb-3 text-center fs-16 text-uppercase text-muted">
            Generations
          </h2>

          <h3 className="mb-12 text-center display-3">
            Six Generations of{" "}
            <span className="text-primary">Yang Style Tai Chi</span>
          </h3>
        </div>
      </div>

      <div className="row d-flex align-items-start mb-19">
        <div className="col-lg-7 position-lg-sticky" style={{ top: "8rem" }}>
          <div className="mb-6 text-center row">
            {timelines.map((generation) => (
              <div
                className="col-6 col-md-4 d-flex flex-column align-items-center mb-10"
                key={generation.id}
              >
                <div
                  className="overflow-hidden rounded-pill mb-4 shadow-sm"
                  style={{ width: 130, height: 170 }}
                >
                  <Image
                    src={generation.imgPath}
                    width={500}
                    height={500}
                    alt="Team Member"
                    className="h-100 w-100"
                    style={{ objectFit: "cover" }}
                  />
                </div>

                <h4 className="mb-0 text-center">{generation.title}</h4>
              </div>
            ))}
          </div>
        </div>

        <div className="col-lg-5 ">
          <ul className="timeline">
            {timelines.map(({ description, duration, id, title }) => (
              <li className="timeline-item" key={id}>
                <div className="timeline-info meta fs-14">{duration}</div>
                <div className="timeline-marker" />

                <div className="timeline-content">
                  <h3 className="timeline-title">{title}</h3>
                  <p>{description}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Fragment>
  );
}

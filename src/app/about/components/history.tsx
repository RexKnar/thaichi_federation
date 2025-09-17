
import { Fragment } from "react";


import Carousel from "components/reuseable/Carousel";
import NextLink from "components/reuseable/links/NextLink";
import { TeamCard2 } from "components/reuseable/team-cards";
// CUSTOM UTILS LIBRARY FUNCTIONS
import carouselBreakpoints from "utils/carouselBreakpoints";
// CUSTOM DATA
import teams from "data/team-list";
import Image from "next/image";


export default function History() {
 const timelines = [
  {
    id: 1,
    duration: '1799 - 1872',
    imgPath:'/img/generation/Gen1.png',
    title: 'Yang Luchan',
    description: `Founder of Yang Style Tai Chi. Learned Chen style, modified it to create a softer, more accessible form while retaining martial effectiveness. Known as “Yang the Invincible.”`
  },
  {
    id: 2,
    duration: '1837 - 1892',
    imgPath:'/img/generation/Gen2.png',
    title: 'Yang Banhou',
    description: `Second son of Yang Luchan. Famous for a small-frame, highly martial version of Yang style, taught mainly to royal guards.`
  },
  {
    id: 3,
    duration: '1839 - 1917',
    imgPath:'/img/generation/Gen3.png',
    title: 'Yang Jianhou',
    description: `Third son of Yang Luchan. Known for a gentler approach than his elder brother, making Tai Chi accessible to more students.`
  },
  {
    id: 4,
    duration: '1883 - 1936',
    imgPath:'/img/generation/Gen4.png',
    title: 'Yang Chengfu',
    description: `Son of Yang Jianhou. Modernized Yang style into the large, open, and flowing form practiced worldwide today. Promoted Tai Chi for health and well-being.`
  },
  {
    id: 5,
    duration: '1926 - 2020',
    imgPath:'/img/generation/Gen5.png',
    title: 'Yang Zhenduo',
    description: `Grandson of Yang Chengfu. Dedicated his life to spreading Yang Style Tai Chi internationally. Founded the International Yang Style Tai Chi Chuan Association.`
  },
  {
    id: 6,
    duration: '1968 - PRESENT',
    imgPath:'/img/generation/Gen6.png',
    title: 'Yang Jun',
    description: `Great-great-grandson of Yang Luchan. Current lineage holder and president of the International Yang Style Tai Chi Chuan Association, continuing to promote Yang Style globally.`
  }
]
;
  return (
    <Fragment>
      <div className="text-center row">
        <div className="mx-auto col-md-11 col-lg-9 col-xl-8 col-xxl-7 position-relative">
          <img
            src="/img/svg/doodle3.svg"
            className="h-11 position-absolute d-none d-lg-block"
            style={{ top: "-20%", right: "-12%" }}
            alt=""
          />

          <img
            src="/img/svg/doodle9.svg"
            className="h-17 position-absolute d-none d-lg-block"
            style={{ bottom: "5%", left: "-17%" }}
            alt=""
          />

          <h2 className="mb-3 text-center fs-16 text-uppercase text-muted">Generations</h2>

          <h3 className="mb-12 text-center display-3">
          Six Generations of  <span className="text-primary">Yang Style Tai Chi</span>
          </h3>
        </div>
      </div>

      <div className="row d-flex align-items-start mb-19">
    
        <div className="col-lg-7 position-lg-sticky" style={{ top: "8rem" }}>
        <div className="mb-6 text-center swiper-container">
          <Carousel grabCursor navigation={false} breakpoints={carouselBreakpoints}>
            {timelines.map((generation) => (
             <div className="text-center" key={generation.id}>
             <div className="w-20 mx-auto mb-4 overflow-hidden rounded-circle">
               <Image src={generation.imgPath} width={500} height={500} alt="Team Member" className="h-auto w-100" />
             </div>
       
             <h4 className="mb-1">{generation.title}</h4>
           
           </div>
            ))}
          </Carousel>
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

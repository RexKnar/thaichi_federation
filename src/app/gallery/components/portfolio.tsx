"use client";

import clsx from "clsx";
// GLOBAL CUSTOM COMPONENTS
import LightBox from "components/LightBox";
// GLOBAL CUSTOM HOOKS
import useIsotope from "hooks/useIsotope";
// CUSTOM DATA
import { portfolioList4, portfolioList6 } from "data/portfolio";
import { Portfolio11 } from "components/blocks/portfolio";
import { ProjectCard3 } from "components/reuseable/project-cards";

export default function Portfolio() {
  const { filterKey, handleFilterKeyChange } = useIsotope();

  const filterList = [
    { id: 1, title: "All", value: "*" },
    { id: 2, title: "Practice", value: ".practice" },
    { id: 3, title: "Match", value: ".matche" },
    { id: 4, title: "Events", value: ".events" },
  ];
  const portfolioList = [
    { id: 1, image: '1', title: 'TaiChi Federation Of India', category: 'matche events' },
    { id: 2, image: '2', title: 'TaiChi Federation Of India', category: 'events' },
    { id: 3, image: '3', title: 'TaiChi Federation Of India', category: 'pastries events' },
    { id: 4, image: '4', title: 'TaiChi Federation Of India', category: 'events' },
    { id: 5, image: '5', title: 'TaiChi Federation Of India', category: 'pastries events' },
    { id: 6, image: '6', title: 'TaiChi Federation Of India', category: 'practice' },
    { id: 7, image: '7', title: 'TaiChi Federation Of India', category: 'practice matche' },
    { id: 8, image: '8', title: 'TaiChi Federation Of India', category: 'events' },
    { id: 9, image: '9', title: 'TaiChi Federation Of India', category: 'events' },
    { id: 10, image: '10', title: 'TaiChi Federation Of India', category: 'practice' },
    { id: 11, image: '11', title: 'TaiChi Federation Of India', category: 'matche' },
    { id: 12, image: '12', title: 'TaiChi Federation Of India', category: 'practice' },
    { id: 13, image: '13', title: 'TaiChi Federation Of India', category: 'matche' }
  ];



  return (
    <section id="portfolio">
      <div className="wrapper bg-gray">
        <div className="container text-center py-15 py-md-17">

          {/* USED FOR IMAGE LIGHTBOX */}
          <LightBox />

          <div className="grid grid-view projects-masonry">
            <div className="mb-10 isotope-filter filter">
              <ul>
                {filterList.map(({ id, title, value }) => (
                  <li key={id}>
                    <a
                      onClick={handleFilterKeyChange(value)}
                      className={clsx({ "filter-item": true, active: filterKey === value })}>
                      {title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="row gx-md-6 gy-6 isotope">
              {portfolioList.map(({ category, id, image, title }) => (
                <div className={`project item col-md-6 col-xl-4 ${category}`} key={id}>
                  <figure className="rounded overlay overlay-1">
                    <a href={`/img/gallery/${image}.jpg`} data-glightbox data-gallery="shots-group">
                      <img src={`/img/gallery/${image}.jpg`} alt={title} />
                      <span className="bg" />
                    </a>

                    <figcaption>
                      <h5 className="mb-0 from-top">{title}</h5>
                    </figcaption>
                  </figure>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import { Hero15} from "components/blocks/hero";
import { Fragment } from "react";
import Navbar from "components/blocks/navbar/navbar-1";
import { Services18, Services7 } from "components/blocks/services";
import { About28, About30, About9 } from "components/blocks/about";
import { Process19 } from "components/blocks/process";
import { Testimonial5 } from "components/blocks/testimonial";
import { Footer10 } from "components/blocks/footer";
import data from "data/career-page-2";
import { ServiceCard3 } from "components/reuseable/service-cards";
import { JobPostCard2 } from "components/reuseable/job-cards";
import Accordion from "components/reuseable/accordion";
import { courseList } from "data/data";
import NextLink from "components/reuseable/links/NextLink";
export default function Page() {
  return (
    <Fragment>
    {/* ========== header ========== */}
    <header className="wrapper bg-gray">
    
      <Navbar  fancy navClassName="navbar navbar-expand-lg fancy navbar-light navbar-bg-light position-absolute"  button={<NextLink title="Contact" href="#" className="btn btn-sm btn-primary rounded" />}/>
    </header>

    <main className="content-wrapper">
      {/* ========== hero section ========== */}
      <Hero15 />

      <section className="wrapper bg-light">
          <div className="container py-16 py-md-18">
          <About9 />
            {/* ========== why choose us section ========== */}
            <About30 />
            {/* <Services7 /> */}
            <Process19 />
           
              <div className="job-list">
                {/* <h3 className="mb-4">Development</h3> */}

                {courseList.map((item,index) => (
                    <JobPostCard2  key={item.id} {...item} body={
                        <><p>Ideal for groups of 10 or more participants</p><p>Suitable for All Ages & Fitness Levels</p>
<div>Session includes:</div>
<ul>
<li>Introduction to TaiChi – What is TaiChi?</li>
<li>Overview of TaiChi Forms</li>
<li>Live Demonstration of TaiChi Forms</li>

<li>The first demo session is FREE for all interested participants! </li></ul> </>

                    } expand={true}  no={index+1 as any} />
                //   <JobPostCard2 {...item} key={item.id} />
                ))}
              </div>
          </div>
          <div className="container-fluid">
          <Testimonial5 />
          </div>
         
        </section>
        <Footer10/>
      

    
    </main>
  </Fragment>
  );
}
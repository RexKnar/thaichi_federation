
import Navbar from "components/blocks/navbar/navbar-1";
import { Fragment } from "react";
import NextLink from "components/reuseable/links/NextLink";
import Portfolio from "./components/portfolio";
import { Footer10, Footer8 } from "components/blocks/footer";

export default function Page() {
    return (
        <Fragment>
      {/* ========== header section ========== */}
      <header className="wrapper bg-gray">
    
    <Navbar  fancy navClassName="navbar navbar-expand-lg fancy navbar-light navbar-bg-light position-absolute"  button={<NextLink title="Contact" href="#" className="rounded btn btn-sm btn-primary" />}/>
  </header>

      <main className="content-wrapper ">
        {/* ========== page title section ========== */}
        <section className="wrapper bg-soft-primary">
            <div className="container pb-5 text-center pt-18 pt-md-18 pb-md-5">
                <div className="row">
                    <div className="mx-auto mb-6 col-xl-5">
                        <h1 className="mb-3 display-1">Gallery</h1>
                        <p className="mb-0 lead">TaiChi Federation Of India</p>
                    </div>
                </div>
            </div>
        </section>
        <div>
             <Portfolio />
   
        </div>
        </main>
         {/* ========== footer section ========== */}
         <div className="mt-18">
         <Footer10 />
         </div>
        </Fragment>
    );
}
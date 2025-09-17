import { About34, About35, About9 } from "components/blocks/about";
import ProgressList from "components/common/ProgressList";
import History from "./components/history";
import { Team2 } from "components/blocks/team";
import AboutHistory from "./components/historyDetail";

export default function About() {
    return (
       
      <><section className="wrapper bg-soft-primary">
            <div className="container pb-5 text-center pt-18 pt-md-18 pb-md-5">
                <div className="row">
                    <div className="mx-auto mb-6 col-xl-5">
                        <h1 className="mb-3 display-1">About Us</h1>
                        <p className="mb-0 lead">TaiChi Federation Of India.</p>
                    </div>
                </div>
            </div>
        </section>
                    <section className="wrapper bg-light">
          <div className="container pt-12 pb-6 pt-md-18">
            <About9 />
           </div>
           </section>
            <section className="wrapper bg-soft-primary">
                <div className="container pt-10 pb-6 pt-md-10">
                <AboutHistory/>
                </div>
            </section>
            <section className="wrapper bg-soft-primary">
               
            <div className="container pt-16 pb-6 pt-md-18">
            <History />
            </div>
            </section></>

    ) }
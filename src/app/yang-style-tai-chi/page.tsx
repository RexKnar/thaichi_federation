
import History from "app/about/components/history";
import AboutHistory from "app/about/components/historyDetail";
import { Process6 } from "components/blocks/process";

export default function About() {
    return (
       
      <><section className="wrapper bg-soft-primary">
            <div className="container pb-5 text-center pt-18 pt-md-18 pb-md-5">
                <div className="row">
                    <div className="mx-auto mb-6 col-xl-5">
                        <h1 className="mb-3 display-1">History of Tai Chi</h1>
                        <p className="mb-0 lead">History • Lineage • Masters</p>
                    </div>
                </div>
            </div>
        </section>
            <section className="wrapper bg-light">
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
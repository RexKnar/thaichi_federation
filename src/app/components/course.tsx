import { BlogCard2 } from "components/reuseable/blog-cards";
import { serviceList } from "data/data";
import Image from "next/image";
import { Fragment } from "react";

// =================================================================
type ItemProps = { index: number; no: string; title: string; className?: string };
// =================================================================

const Item = ({ index, no, title, className = "" }: ItemProps) => {

    const data = serviceList[index];
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

export default function HomeCourse() {
    return (
        <Fragment>
            <div className="row text-center">
                <div className="col-md-10 col-lg-7 mx-auto position-relative">


                    <h3 className="display-3 mb-8 px-xl-6 text-primary">
                        Training & Programs
                    </h3>
                </div>
            </div>


            <div className="row">
                <div className="col-xxl-11 mx-auto">
                    <div className="row gy-10 gy-lg-0 text-center d-flex align-items-center">
                        <div className="col-md-6 col-lg-4 mx-auto mb-n10 mb-lg-0">
                            <BlogCard2
                                link="/course"
                                category=""
                                title="Regular Tai Chi Classes"
                                description="Easy-to-learn classes that help improve health, flexibility, balance, and mental calm."
                                cardTop={
                                    <figure className=" card-img-top overlay overlay-1 hover-scale">
                                        <a className="link-dark" href="/course">
                                            <Image width={960} height={600} src="/img/martialarts/Training5.jpg" alt="blog" className="h-auto w-100" />
                                            <span className="bg" />
                                        </a>

                                    </figure>
                                }
                            />


                        </div>
                        <div className="col-md-6 col-lg-4 mx-auto mb-n10 mb-lg-0">
                            <BlogCard2
                                link="/course"
                                category=""
                                title="Advanced Master Training Courses"
                                description="Higher-level training for students who wish to deepen their Tai Chi practice and skills."
                                cardTop={
                                    <figure className=" card-img-top overlay overlay-1 hover-scale">
                                        <a className="link-dark" href="/course">
                                            <Image width={960} height={600} src="/img/martialarts/Image_Wed2.JPG" alt="blog" className="h-auto w-100" />
                                            <span className="bg" />
                                        </a>


                                    </figure>
                                }
                            />

                            {/* </div> */}
                        </div>
                        <div className="col-md-6 col-lg-4 mx-auto mb-n10 mb-lg-0">
                            <BlogCard2
                                link="/course"
                                category=""
                                title="Instructor Development Programs"
                                description="Training for those who want to become confident and qualified Tai Chi teachers."
                                cardTop={
                                    <figure className=" card-img-top overlay overlay-1 hover-scale">
                                        <a className="link-dark" href="/course">
                                            <Image width={960} height={600} src="/img/martialarts/Master_Teach1.jpeg" alt="blog" className="h-auto w-100" />
                                            <span className="bg" />
                                        </a>

                                    </figure>
                                }
                            />


                        </div>

                    </div>
                    <div className="row mt-10 gy-10 gy-lg-0 text-center d-flex align-items-center">
                        <div className="col-md-6 col-lg-4 mx-auto mb-n10 mb-lg-0">
                            <BlogCard2
                                link="/course"
                                category=""
                                title="Certification under Tai Chi Federation of India"
                                description="Recognized certification that confirms proper training and learning standards."
                                cardTop={
                                    <figure className=" card-img-top overlay overlay-1 hover-scale">
                                        <a className="link-dark" href="/course">
                                            <Image width={960} height={600} src="/img/martialarts/Cheif_Instructor_Award.jpg" alt="blog" className="h-auto w-100" />
                                            <span className="bg" />
                                        </a>

                                    </figure>
                                }
                            />


                        </div>
                        <div className="col-md-6 col-lg-4 mx-auto mb-n10 mb-lg-0">
                            <BlogCard2
                                link="/course"
                                category="30–45 min demo session"
                                title="Free Demo Session"
                                description="The forst demo session if FREE for all interested participants!"
                                cardTop={
                                    <figure className=" card-img-top overlay overlay-1 hover-scale">
                                        <a className="link-dark" href="/course">
                                            <Image width={960} height={600} src="/img/martialarts/Taichi_Classes.JPG" alt="blog" className="h-auto w-100" />
                                            <span className="bg" />
                                        </a>

                                        <figcaption className="pt-10 text-start">
                                            <h2>Ideal for groups of 10 or more participants</h2>
                                            <p>Suitable for All Ages & Fitness Levels</p>
                                            <h2>Session includes:</h2>
                                            <ul>
                                                <li>Introduction to TaiChi – What is TaiChi?</li>
                                                <li>Overview of TaiChi Forms</li>
                                                <li>Live Demonstration of TaiChi Forms</li>

                                                <li>
                                                    The first demo session is FREE for all interested
                                                    participants!{" "}
                                                </li>
                                            </ul>{" "}
                                        </figcaption>
                                    </figure>
                                }
                            />


                        </div>

                    </div>
                </div>
            </div>
        </Fragment>
    );
}

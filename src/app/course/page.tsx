import { Fragment } from "react";
// CUSTOM DATA
import ListColumn from "components/reuseable/ListColumn";
import NextLink from "components/reuseable/links/NextLink";
import { JobPostCard1 } from "components/reuseable/job-cards";
// CUSTOM DATA
import data from "data/job-details-page";
import internal from "stream";

export async function generateStaticParams() {
    return [1, 2, 3, 4, 5, 6].map((item) => ({ id: item.toString() }));
}



// ==============================================================
interface Props {
    params: Promise<{ id: number }>;
}
// ==============================================================

export default async function CourseDetails({ params }: Props) {
    const { id } = await params;
    console.log({ id });

    const responsiblities = [
        ['13 Tai Chi Health Exercises (for flexibility, balance, and vitality)', '8 Form – Introduction to basic Tai Chi form movements'],
        ['13 Form – Progressive form sequence for coordination and flow', 'Basic stance training and alignment principles']
    ];

    const intermediateCourse = [
        ['28 Form – Traditional Yang Style sequence', 'Refinement of posture, structure, and transitions'],
        ['Coordination of body, breath, and mind', 'Development of internal energy (Qi)'],
        ['Flow, continuity, and balance training']
    ];
    const advancedCourse = [
        ['85 Form – Traditional Yang Style classical form', 'Detailed form correction and precision training'],
        ['Internal power development and balance', 'Advanced breathing and mental focus techniques'],
        ['Meditative and internal martial art principles']
    ];
    return (
        <Fragment>
            {/* ========== page section ========== */}
            <section className="wrapper bg-soft-primary">
                <div className="container pb-19 text-center pt-18 pt-md-18 pb-md-20">
                    <div className="row">
                        <div className="mx-auto mb-6 col-xl-5">
                            <h1 className="mb-3 display-1">Structured Yang Style Tai Chi Training</h1>
                            <p className="mb-0 lead">TaiChi Federation Of India.</p>
                        </div>
                    </div>
                </div>
            </section>


            {/* ========== job description section ========== */}
            <section className="wrapper bg-light">
                <div className="container pb-14 pb-md-16">
                    <div className="row">
                        <div className="col-lg-10 mx-auto">
                            <div className="blog single mt-n17">
                                <div className="card shadow-lg">
                                    <div className="card-body">
                                        <h2 className="h1 mb-3">Course Details</h2>
                                        <p>
                                            The TaiChi Federation of India (TFI) offers a clear, progressive course structure rooted in traditional
                                            Yang Style Tai Chi. Each course is designed to build correct foundation, internal strength, and form
                                            accuracy, guiding students from beginner level to advanced mastery.
                                        </p>
                                        <p>
                                            Our training emphasizes discipline, consistency, and authentic practice under experienced guidance.
                                        </p>

                                        <h3 className="h3 mb-3 mt-9">Beginner Course</h3>
                                        <p>
                                            <b>Duration:</b>  6 Months<br />
                                            <b>Course Fee:</b> ₹6,000 INR <br />
                                            <b>Ideal for:</b> Beginners, wellness seekers, seniors, and those new to Tai Chi<br />
                                            The Beginner Course focuses on building a strong foundation through correct posture, balance, and
                                            mindful movement. Students are gradually introduced to traditional forms and health-oriented
                                            exercises.
                                        </p>
                                        <h6 className="h6 mb-3 mt-9">Course Includes:</h6>
                                        <ListColumn rowClass="gx-xl-8" list={responsiblities} />
                                        <p><b>Outcome:</b> Students develop body awareness, improved balance, reduced stress, and a solid
                                            foundation in Yang Style Tai Chi.</p>
                                        <h3 className="h3 mb-3 mt-9">Intermediate Course</h3>
                                        <p>
                                            <b>Duration:</b> 6 Months<br />
                                            <b>Course Fee:</b> ₹8,000 INR <br />
                                            <b>Ideal for:</b> Practitioners who have completed beginner training or have prior Tai Chi experience<br />
                                            The Intermediate Course deepens technical understanding and refines movement quality while
                                            introducing longer and more complex Yang Style forms.
                                        </p>

                                        <h6 className="h6 mb-3 mt-9">Course Includes:</h6>
                                        <ListColumn rowClass="gx-xl-8" list={intermediateCourse} />
                                        <p><b>Outcome:</b> Students gain smoother movement, improved internal strength, better coordination, and
                                            deeper understanding of Tai Chi principles.</p>




                                        <h3 className="h3 mb-3 mt-9">Advanced Course</h3>
                                        <p>
                                            <b>Duration:</b> 6 Months<br />
                                            <b>Course Fee:</b> ₹12,000 INR <br />
                                            <b>Ideal for:</b> Dedicated practitioners seeking mastery and deeper internal development<br />
                                            The Advanced Course focuses on classical Yang Style Tai Chi training and mastery of traditional long
                                            forms.
                                        </p>

                                        <h6 className="h6 mb-3 mt-9">Course Includes:</h6>
                                        <ListColumn rowClass="gx-xl-8" list={intermediateCourse} />
                                        <p><b>Outcome:</b> Practitioners develop advanced control, endurance, internal strength, and deeper insight
                                            into Tai Chi as a lifelong art.</p>

                                        <h2 className="h2 mb-3 mt-9">Advanced Traditional Training (Optional)</h2>
                                        <p>For senior students and advanced practitioners, TFI also offers training in traditional Tai Chi
                                            disciplines:
                                        </p>
                                        <ul>
                                            <li><b>Tai Chi Saber (Broadsword)</b></li>
                                            <li><b>Tai Chi Sword (Jian)</b></li>
                                            <li><b>Push Hands (Tui Shou)</b> – Partner practice for sensitivity, balance, and application</li>
                                        </ul>
                                        <p>These modules are offered based on eligibility and instructor approval.</p>

                                        <div>
                                            <h2 className="h2 mb-3 mt-9">Course Comparison Overview</h2>
                                            <div className="table table-responsive">
                                                <table className="table w-100">
                                                    <thead>
                                                        <tr>
                                                            <th scope="col">Level</th>
                                                            <th scope="col">Durtion</th>
                                                            <th scope="col">Forms & Training</th>
                                                            <th scope="col">Course Fee</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td scope="row"> Beginner Course</td>
                                                            <td scope="row">6 Months</td>
                                                            <td scope="row">13 Health Exercises, 8 Form, 13 Form</td>
                                                            <td scope="row">₹6,000 INR</td>

                                                        </tr>
                                                        <tr>
                                                            <td>Intermediate Course</td>

                                                            <td>6 Months</td>
                                                            <td>28 Form</td>
                                                            <td>₹8,000 INR</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Advanced Course</td>
                                                            <td>6 Months</td>


                                                            <td>85 Form (Classical Yang Style)</td>
                                                            <td>₹12,000 INR</td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>


                                        </div>
                                        <div>
                                            <h2 className="h2 mb-3 mt-9">Class Timings</h2>
                                            <h4 className="h4 mb-3 mt-9">Regular Classes: <span className="text-muted">(Classes conducted daily)</span></h4>
                                            <ul>
                                                <li>Morning: 7:00 AM – 10:00 AM</li>
                                                <li>Evening: 5:00 PM – 9:00 PM</li>
                                            </ul>
                                            <h4 className="h4 mb-3 mt-9">Private Classes: </h4>
                                            <ul>
                                                <li>One-on-one and small group private sessions available</li>
                                                <li>Customized training based on individual goals</li>
                                            </ul>
                                        </div>
                                        <div>
                                            <h2 className="h2 mb-3 mt-9">Enrollment &amp; Guidance</h2>
                                            <p>Students are placed in appropriate levels based on experience and assessment. Progression follows
                                                disciplined practice and instructor evaluation.</p>
                                        </div>
                                        <div className="text-center ">
                                            <a href="/contact" className="btn btn-primary rounded-pill">
                                                Enroll Now
                                            </a>
                                            <p className="text-muted text-center">Contact us today to register or enquire about courses and private classes.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </Fragment>
    );
}

import { Fragment } from "react";
// CUSTOM DATA

const faq = [
    {
      id: 1,
      title: "Can I cancel my subscription?",
      description: `<b>Senior citizens</b> looking to improve mobility, flexibility, and fall prevention`
    },
    {
      id: 2,
      title: "Which payment methods do you accept?",
      description: `<b>People with joint stiffness, arthritis, or balance issues</b> through gentle, low-impact movements`
    },
    {
      id: 3,
      title: "How can I manage my Account?",
      description: `<b>Preventive health and active aging,</b> supporting longevity and overall vitality`
    },
    {
      id: 4,
      title: "Is my credit card information secure?",
      description: `<b>Professionals with sedentary lifestyles</b> seeking posture correction, reduced back pain, and improved focus`
    },
    {
      id: 5,
      title: "Is my credit card information secure?",
      description: `<b>Individuals pursuing natural healing and wellness,</b> combining breath control, meditation, and slow movement`
    },
    {
      id: 6,
      title: "Is my credit card information secure?",
      description: `<b>Fitness enthusiasts</> looking for a complementary practice to enhance strength, coordination, and energy flow`
    },
    {
        id: 7,
        title: "Is my credit card information secure?",
        description: `<b>Stress management and mental relaxation,</b> helping reduce anxiety and improve emotional well-being`
      }
  ];
  

export default function Wellness() {

  return (
    <Fragment>
      <h2 className="display-4 mb-3 text-center text-primary">Health & Wellness Through Tai Chi
      </h2>
      <p className="lead fs-lg mb-8 text-center">
      Tai Chi is a proven <b>mind–body practice </b> that promotes holistic health, making it ideal for individuals seeking long-term wellness and balance. It is especially beneficial for:
      </p>

      <div className="row gx-md-8 gx-xl-12 gy-10">
            {faq.map(({ description, title, id }) => (
              <div className="col-lg-6" key={id}>
                <div className="d-flex flex-row">
                  <div>
                    <span className="icon btn btn-sm btn-circle btn-primary pe-none me-5">
                      <i className="uil uil-comment-exclamation" />
                    </span>
                  </div>

                  <div>
                    {/* <h3 className="fs-21 ls-xs mb-1">{title}</h3> */}
                    <p className="mb-0" dangerouslySetInnerHTML={{ __html: description }}></p>
                  </div>
                </div>
              </div>
            ))}
          </div>
    </Fragment>
  );
}

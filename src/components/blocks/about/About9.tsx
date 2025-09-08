

export default function About9() {
  return (
    <div className="row gx-lg-8 gx-xl-12 gy-10 mb-14 mb-md-18 align-items-center">
      <div className="col-md-8 col-lg-6 position-relative">
        <div
          className="shape bg-soft-primary rounded-circle rellax w-20 h-20"
          style={{ top: "-2rem", left: "-1.9rem" }}
        />

        <figure className="rounded">
          <img src="/img/martialarts/group.jpeg" srcSet="/img/martialarts/group.jpeg 2x" alt="" />
        </figure>
      </div>

      <div className="col-lg-6">
        <h2 className="display-4 mb-3">Welcome to Authentic Yang Style Tai Chi India</h2>
        <p className="lead fs-lg">
        Balance Your Body. Calm Your Mind. Energize Your Life.
         
        </p>
        <p className="mb-6">
        At <span className="underline">Authentic Yang Style Tai Chi India</span>,
         we offer a peaceful and friendly space to learn the ancient art of TaiChi — a graceful form of exercise known for promoting balance, 
         flexibility, inner strength, and peace of mind.
        </p>
        <p className="mb-6">
        Whether you're a beginner looking to start your journey, or an experienced practitioner 
        seeking deeper mastery, our classes are designed to meet you where you are.
        </p>

      </div>
    </div>
  );
}

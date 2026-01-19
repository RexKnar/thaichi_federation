export default function AboutHistory() {
  return (
    <section className="wrapper bg-light">
      <div className="container px-10 py-10 py-md-10 px-md-12">
        <div className="row">
          <div className="mx-auto text-center col-md-10 offset-md-1 col-lg-8 offset-lg-2 position-relative">

            <h3 className="mb-10 display-2 ls-xs px-xl-10 px-xxl-15">
              <span className="underline-3 style-2 yellow">History</span>
            </h3>
          </div>
        </div>

        <ul className="nav nav-tabs nav-tabs-bg d-flex justify-content-between nav-justified flex-lg-row flex-column">
          <li className="nav-item">
            <a className="flex-row nav-link d-flex active" data-bs-toggle="tab" href="#tab2-1">
              <div>
                <span className="mt-2 fs-50 d-block me-4">01</span>
              </div>
              <div>
                <h3 className="mb-1 fs-21 ls-xs">History Of Taichi</h3>

              </div>
            </a>
          </li>
          <li className="nav-item">
            <a className="flex-row nav-link d-flex" data-bs-toggle="tab" href="#tab2-2">
              <div>
                <span className="mt-2 fs-50 d-block me-4">02</span>
              </div>
              <div>
                <h3 className="mb-1 fs-21 ls-xs">History of Yang Style Tai Chi</h3>

              </div>
            </a>
          </li>
        </ul>

        <div className="mt-6 mb-5 tab-content mt-lg-8">
          <div className="tab-pane fade show active" id="tab2-1">
            <div className="row gx-lg-8 gx-xl-12 gy-10 align-items-center">
              <div className="col-lg-6 order-lg-2">
                <figure className="rounded">
                  <img src="/img/martialarts/training-2.jpg" srcSet="/img/martialarts/master-sunset-solo.png " alt="" />
                </figure>
              </div>

              <div className="col-lg-6">
                <h2 className="mb-3 ls-xs">13th century</h2>
                <p>
                  In the 13th century, a profound question arose in the mind of the chief physician to the Chinese Emperor
                </p>
                <p> Humans, though gifted with intellect, were physically fragile, prone to disease, and burdened by anxiety. Animals, on the other hand, lived naturally—strong, healthy, fearless, and capable of self-defense.</p>
                <p>Moved deeply by this realization, the physician Chang San Feng resigned from his prestigious position and retreated into the forests. There, in solitude and deep observation, he studied the movements, instincts, and lifestyles of animals and birds.</p>
                <p>Through years of contemplation, Chang San Feng recognized a vital truth:
                </p><ul>
                  <li>Animals live in harmony with nature</li>
                  <li>They are disciplined, instinctive, and free from stress</li>
                  <li>Their natural way of living preserves strength and balance</li>
                </ul>

                <p>Humans, however, weaken themselves through stress, lack of discipline, improper diet, and lifestyles disconnected from nature. These imbalances give rise to fear, illness, and inner conflict.</p>
                <p>From this realization, Chang San Feng received what he believed to be a divine gift—a system designed to restore harmony between body, mind, and nature.</p>
                <p>That gift was Tai Chi.
                </p><ul>
                  <li>Tai Chi was created as a practice to:</li>
                  <li>Strengthen the body</li>
                  <li>Calm the mind</li>
                  <li>Restore natural balance</li>
                  <li>Cultivate inner awareness and self-defense</li>
                </ul>

              </div>
            </div>
          </div>

          <div className="tab-pane fade" id="tab2-2">
            <div className="row gx-lg-8 gx-xl-12 gy-10 align-items-center">
              <div className="col-lg-6 ">
                <figure className="rounded">
                  <img src="/img/martialarts/training-3.jpg" srcSet="/img/martialarts/training-3.jpg " alt="" />
                </figure>
              </div>

              <div className="col-lg-6">
                <h2 className="mb-3 ls-xs">Yang Style Tai Chi </h2>
                <p>
                  Yang Style Tai Chi is the most widely practiced form of Tai Chi in the world today.
                </p>
                <p>It was founded in the mid-19th century by Yang Luchan (1799–1872), a legendary martial artist from Hebei Province, China. Yang Luchan originally learned Chen Style Tai Chi from the Chen family in Chenjiagou village.</p>
                <p>
                  Through years of mastery, refinement, and experience, Yang Luchan adapted the practice into a form that was:
                </p> <ul>
                  <li>Softer and more flowing</li>
                  <li>Accessible to a wider population</li>
                  <li>Yet fully effective as a martial art</li>
                </ul>
                <p> His extraordinary skill earned him the title:
                  <br />
                  <b>“Yang the Invincible”
                  </b>
                </p>
                <p>Thus, Yang Style Tai Chi was born—preserving martial integrity while emphasizing grace, balance, and internal strength.</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

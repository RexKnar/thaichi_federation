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
                <div className="col-lg-6">
                  <figure className="rounded">
                    <img src="/img/martialarts/training-2.jpg" srcSet="/img/martialarts/training-2.jpg " alt="" />
                  </figure>
                </div>
  
                <div className="col-lg-6">
                  <h2 className="mb-3 ls-xs">13th century</h2>
                  <p>
                  In the 13th century, the chief physician of the Chinese Emperor was struck by a profound question.
                  </p>
                  <p> Among all the living beings created by God, why is it that only humans—endowed with the gift of the sixth sense—live in fear, unable to defend themselves from their fellow beings? Humans are physically weaker, prone to illness, and burdened by anxiety. In contrast, animals live differently. They are strong, healthy, and capable of defending themselves.</p>
                 <p>Chang San Feng, moved by this question, resigned from his position as the Emperor’s chief physician and retreated to the forest. There, with a peaceful mind and unwavering focus, he observed the ways of animals and birds.</p>
                 <p>In time, insight dawned upon him: animals live in harmony with nature, free from stress. Their disciplined, instinctive lives keep them strong and self-reliant. Humans, however, weaken themselves through stress, lack of discipline, poor dietary habits, and lifestyles that stray from nature’s balance. As a result, they live in fear for much of their lives.</p>
                 <p>Chang San Feng received what he believed to be a divine gift from God to address these human weaknesses. That gift was Tai Chi—a practice to restore harmony, strengthen the body, and calm the mind.</p>
                 
                </div>
              </div>
            </div>
  
            <div className="tab-pane fade" id="tab2-2">
              <div className="row gx-lg-8 gx-xl-12 gy-10 align-items-center">
                <div className="col-lg-6 order-lg-2">
                  <figure className="rounded">
                  <img src="/img/martialarts/training-3.jpg" srcSet="/img/martialarts/training-3.jpg " alt="" />
                  </figure>
                </div>
  
                <div className="col-lg-6">
                  <h2 className="mb-3 ls-xs">Yang Style Tai Chi </h2>
                  <p>
                  Yang Style Tai Chi is the most widely practiced form of Tai Chi in the world. It was founded in the mid-19th century by Yang Luchan (1799–1872), a martial artist from Hebei Province, China. Yang Luchan initially learned the Chen style of Tai Chi from the Chen family in Chenjiagou village. Renowned for his exceptional skill, he earned the nickname “Yang the Invincible.”
                  </p>
                  
                </div>
              </div>
            </div>
  
            <div className="tab-pane fade" id="tab2-3">
              <div className="row gx-lg-8 gx-xl-12 gy-10 align-items-center">
                <div className="col-lg-6">
                  <figure className="rounded">
                    <img src="/img/photos/se7.jpg" srcSet="/img/photos/se7@2x.jpg 2x" alt="" />
                  </figure>
                </div>
  
                <div className="col-lg-6">
                  <h2 className="mb-3 ls-xs">Finalize Product</h2>
                  <p>
                    Etiam porta sem malesuada magna mollis euismod. Donec ullamcorper nulla non metus auctor fringilla.
                    Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Fusce dapibus, tellus ac cursus commodo,
                    tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Nullam quis risus eget urna.
                  </p>
                  <ul className="icon-list bullet-bg bullet-soft-primary">
                    <li>
                      <i className="uil uil-check" />
                      Aenean eu leo quam. Pellentesque ornare.
                    </li>
                    <li>
                      <i className="uil uil-check" />
                      Nullam quis risus eget urna mollis ornare.
                    </li>
                    <li>
                      <i className="uil uil-check" />
                      Donec id elit non mi porta gravida at eget.
                    </li>
                  </ul>
                  <a href="#" className="mt-2 btn btn-primary">
                    Learn More
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
  
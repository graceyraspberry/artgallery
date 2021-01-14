export default function AboutScreen() {
  return (
    <div class="about">
      <div className="card card-body-normal">
        <div>
          <h1>Black Lives Matter.</h1>
        </div>
        <div>
          <p class="justify">
            Recognizing the ongoing tensions as part of an enduring history of
            racial injustice is only the first step. We, as an organization for
            social impact, would like to devote our responsibility toward and
            state our solidarity in uplifting and supporting Black communities.
            The loss of innocent Black lives like George Floyd, Breonna Taylor,
            Ahmaud Arbery, Jake Blake, and many more whose names deserve to be
            remembered is deeply felt. May they Rest In Power.
          </p>
          <></>
          <p class="justify" id="more">
            Given that the rampant and obvious police brutality against Black
            citizens is only a single facet of the extensive systems of
            oppression we are fighting against, we would like to add to the
            reparations owed to a variety of Black communities by donating the
            proceeds from our collective artwork to the selection of non-profits
            that are committed to justice and equity as well below. We realize
            it is not enough to denounce police brutality—it is equally crucial
            to oppose educational, employment, housing, health, and voting
            discrimination that remains present across this nation. Let this be
            a reminder that the fight for a truly equitable future is a
            persistent practice of un-learning, decolonizing, advocacy, and
            action.
          </p>
        </div>
        <div className="row">
          <div className="col-1-b">
            <div className="card card-body-normal">
              <img src="images/blm-solidarity.svg" alt="BLM"></img>
            </div>
          </div>
          <div className="col-2-b">
            <div className="card card-body-normal">
              <div>
                <p>In Solidarity,</p>
                <p>Invention Corps of Berkeley</p>
                <p className="italic">
                  For our full Solidarity Statement & BLM
                </p>
                <p className="italic">
                  {" "}
                  Resource Document, click{" "}
                  <strong>
                    <a href="http://bit.ly/blmxicbstatement" target="blank">
                      here.
                    </a>
                  </strong>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="card card-body-normal">
        <div>
          <h1>What is our goal?</h1>
        </div>
        <div>
          <p class="justify">
            As members of a social impact club, we hope to contribute to the
            Black Lives Matter Movement through selling our digital artworks to
            raise funds. 100% of funds are donated to local non-profits that
            directly serve, uplift, and organize for Black communities in the
            Bay Area and beyond.{" "}
          </p>
          <p class="justify">
            This gallery was created through the contributions of over a dozen
            artist within Invention Corps. We began developing the site since
            last July and are so grateful to finally share this gallery with our
            community. We have democratically selected non-profits that we feel
            are actively addressing racial injustice through youth empowerment,
            health, and community-oriented initiatives. We hope you can explore
            the gallery and find pieces that inspire and reasonate with you.
            Thank you for your support.{" "}
          </p>
        </div>
      </div>
      <div className="card card-body-normal">
        <div>
          <h1>RYSE Center x ICB</h1>
        </div>
        <div className="row">
          <div className="col-1-p">
            <div className="card card-body-normal">
              <p class="justify">
                We are equally excited to announce our 1st partnership with RYSE
                Center. We had been in contact with RYSE Center since last
                summer and are grateful to have their community provide pieces
                to our shared gallery.
              </p>
              <p class="justify">
                RYSE Center creates safe spaces grounded in social justice for
                young people of color to love, learn, educate, heal, and
                transform lives and communities. Located in Richmond, CA, RYSE
                provides and upholds underserved communities in Richmond and the
                broader Bay Area through youth empowerment programs like
                restorative justice education, multimedia workshops, and
                community health. Below is selection of work by Youth Black
                Artists from the RYSE Center.{" "}
              </p>
            </div>
          </div>
          <div className="col-2-p">
            <div className="card card-body-normal">
              <img src="images/ryse_icb.png" alt="ryse-icb"></img>
            </div>
          </div>
        </div>
        <div>
          <p class="justify">
            Part of your donation will be made directly toward supporting the
            artist themselves. To learn more about our partnership with the RYSE
            Center, click <strong>here.</strong>
          </p>
        </div>
      </div>
      <div class="row-org">
        <div class="col-6 col-lg-4 d-flex justify-content-center">
          <div class="square">
            <div class="blurb">
              <p>
                <b>Afrotectopia</b> is a social institution fostering
                interdisciplinary innovation at the intersections of art,
                design, technology, Black culture, and activism. <br />
                <b>LEARN MORE</b>
              </p>
            </div>
            <div class="img-container">
              <a href="https://www.afrotectopia.org/" target="blank">
                <img
                  src="images/logo-1.png"
                  alt="Afrotectopia"
                  class="img-fluid organization"
                />
              </a>
            </div>
          </div>
        </div>
        <div class="col-6 col-lg-4 d-flex justify-content-center">
          <div class="square">
            <div class="blurb">
              <p>
                <b>RYSE Center</b> creates safe spaces grounded in social
                justice for young people of color to love, learn, educate, heal,
                and transform lives and communities, via a variety of youth
                empowerment programs. <br />
                <b>LEARN MORE</b>
              </p>
            </div>
            <div class="img-container">
              <a href="https://rysecenter.org/" target="blank">
                <img
                  src="images/logo-2.png"
                  alt="RYSE Center"
                  class="img-fluid organization"
                />
              </a>
            </div>
          </div>
        </div>

        <div class="col-6 col-lg-4 d-flex justify-content-center">
          <div class="square">
            <div class="blurb">
              <p class="square-text">
                <b>Oakland LGBTQ Community Center</b> is Oakland's first
                multi-cultural and multi-generational LGBTQ community service
                provider with a variety of all-inclusive programs and
                activities. <br />
                <b>LEARN MORE</b>
              </p>
            </div>
            <div class="img-container">
              {/* <a href="https://www.oaklandlgbtqcenter.org/" target="blank"> */}
              <img
                src="images/logo-3.png"
                alt="Oakland LGBTQ Community Center"
                class="img-fluid organization"
              />
              {/* </a> */}
            </div>
          </div>
        </div>

        <div class="col-6 col-lg-4 d-flex justify-content-center">
          <div class="square">
            <div class="blurb">
              <p>
                <b>Techbridge Girls</b> was founded in Oakland to equip and
                educate low-income and Title I students through high-quality
                STEM education. Their current chapters have reached 70,000 youth
                across the nation. <br />
                <b>LEARN MORE</b>
              </p>
            </div>
            <div class="img-container d-flex justify-content-center">
              <a href="https://techbridgegirls.org/" target="blank">
                <img
                  src="images/logo-4.png"
                  alt="Techbridge Girls"
                  class="img-fluid organization"
                />
              </a>
            </div>
          </div>
        </div>

        <div class="col-6 col-lg-4 d-flex justify-content-center">
          <div class="square">
            <div class="blurb">
              <p>
                <b>Roots Community Health Center</b> was founded in Oakland to
                uplift those impacted by systemic inequities & poverty. They
                work to create healthy, self-sufficient, and self-determined
                communities of African descent. <br />
                <b>LEARN MORE</b>
              </p>
            </div>
            <div class="img-container">
              <a href="https://rootsclinic.org/history/" target="blank">
                <img
                  src="images/logo-5.png"
                  alt="Roots Community Health Center"
                  class="img-fluid organization"
                />
              </a>
            </div>
          </div>
        </div>

        <div class="col-6 col-lg-4 d-flex justify-content-center">
          <div class="square">
            <div class="blurb">
              <p>
                <b>Transgender Gender-Variant Intersex (TGI) Justice Project</b>
                is a Black-led San Francisco-based organization that supports
                trans women of color in the prison system and after release.
                <br />
                <b>LEARN MORE</b>
              </p>
            </div>
            <div class="img-container">
              <a href="http://www.tgijp.org/" target="blank">
                <img
                  src="images/logo-6.png"
                  alt="TGI Justice"
                  class="img-fluid organization"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

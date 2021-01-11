import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { saveOrganization } from "../actions/cartActions";
import CheckoutSteps from "../components/CheckoutSteps";

export default function ShippingAddressScreen(props) {
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;
  const cart = useSelector((state) => state.cart);
  const { orgCart } = cart;
  if (!userInfo) {
    props.history.push("/signin");
  }
  const [org, setOrganization] = useState("Organization");

  const dispatch = useDispatch();
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(saveOrganization(org));
    props.history.push("/payment");
  };
  return (
    <div>
      <CheckoutSteps step1 step2></CheckoutSteps>
      <form className="form" onSubmit={submitHandler}>
        <div>
          <h1>Select an Organization</h1>
        </div>
        <div>
          <div>
            <input
              type="radio"
              id="afrotectopia"
              value="afrotectopia"
              name="org"
              required
              checked
              onChange={(e) => setOrganization(e.target.value)}
            ></input>
            <label htmlFor="paypal">Afrotectopia</label>
          </div>
        </div>
        <div>
          <div>
            <input
              type="radio"
              id="ryse"
              value="Ryse"
              name="org"
              required
              onChange={(e) => setOrganization(e.target.value)}
            ></input>
            <label htmlFor="ryse">RYSE Center</label>
          </div>
        </div>
        <div>
          <div>
            <input
              type="radio"
              id="oakland"
              value="OaklandLGBTQ"
              name="org"
              required
              onChange={(e) => setOrganization(e.target.value)}
            ></input>
            <label htmlFor="oakland">Oakland LGBTQ Community Center</label>
          </div>
        </div>
        <div>
          <div>
            <input
              type="radio"
              id="techbridge"
              value="Techbridge"
              name="org"
              required
              onChange={(e) => setOrganization(e.target.value)}
            ></input>
            <label htmlFor="techbridge">Techbridge Girls</label>
          </div>
        </div>
        <div>
          <div>
            <input
              type="radio"
              id="roots"
              value="ROOTS"
              name="org"
              required
              onChange={(e) => setOrganization(e.target.value)}
            ></input>
            <label htmlFor="roots">ROOTS Community Health Center</label>
          </div>
        </div>
        <div>
          <div>
            <input
              type="radio"
              id="tgi"
              value="TGIJustice"
              name="org"
              required
              onChange={(e) => setOrganization(e.target.value)}
            ></input>
            <label htmlFor="tgi">TGI Justice</label>
          </div>
        </div>
        <div>
          <label />
          <button className="primary" type="submit">
            Continue
          </button>
        </div>
      </form>

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
              <p>
                <b>Oakland LGBTQ Community Center</b> is Oakland's first
                multi-cultural and multi-generational LGBTQ community service
                provider with a variety of all-inclusive programs and
                activities. <br />
                <b>LEARN MORE</b>
              </p>
            </div>
            <div class="img-container">
              <a href="https://www.oaklandlgbtqcenter.org/" target="blank">
                <img
                  src="images/logo-3.png"
                  alt="Oakland LGBTQ Community Center"
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

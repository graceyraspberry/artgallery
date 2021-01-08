import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { saveDeliveryAddress } from "../actions/cartActions";
import CheckoutSteps from "../components/CheckoutSteps";

export default function OrganizationScreen(props) {
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;
  const cart = useSelector((state) => state.cart);
  const { deliverAddress } = cart;
  if (!userInfo) {
    props.history.push("/signin");
  }
  const [fullName, setFullName] = useState(deliverAddress.fullName);
  const [emailAddress, setEmailAddress] = useState(deliverAddress.emailAddress);

  const dispatch = useDispatch();
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(saveDeliveryAddress({ fullName, emailAddress }));
    props.history.push("/payment");
  };
  return (
    <div>
      <CheckoutSteps step1 step2></CheckoutSteps>
      <form className="form" onSubmit={submitHandler}>
        <div>
          <h1>Delivery Info</h1>
        </div>
        <div>
          <label htmlFor="fullName">Full Name</label>
          <input
            type="text"
            id="fullName"
            placeholder="Enter full name"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            required
          ></input>
        </div>
        <div>
          <label htmlFor="emailAddress">Email Address</label>
          <input
            type="text"
            id="address"
            placeholder="Enter address"
            value={emailAddress}
            onChange={(e) => setEmailAddress(e.target.value)}
            required
          ></input>
        </div>

        <div>
          <label />
          <button className="primary" type="submit">
            Continue
          </button>
        </div>
      </form>
    </div>
  );
}

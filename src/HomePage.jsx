import axios from "axios";
import React from "react";

const BACKEND_URL = "https://localhost:5000/api";

const SUBSCRIPTION_PRICE = {
  BASIC: process.env.REACT_APP_SUBSCRIPTION_BASIC,
  PREMIUM: process.env.REACT_APP_SUBSCRIPTION_PREMIUM,
};

const HomePage = () => {
  const subscribePremium = async () => {
    const response = await axios.post(
      `${BACKEND_URL}/payments/create-checkout-session`,
      {
        priceId: SUBSCRIPTION_PRICE.PREMIUM,
      }
    );

    const checkoutSessionLocation = response.headers.get("Location");
    window.location.href = checkoutSessionLocation;
  };

  const subscribeBasic = async () => {
    const response = await axios.post(
      `${BACKEND_URL}/payments/create-checkout-session`,
      {
        priceId: SUBSCRIPTION_PRICE.BASIC,
      }
    );

    const checkoutSessionLocation = response.headers.get("Location");
    window.location.href = checkoutSessionLocation;
  };

  return (
    <div style={{ padding: "16px" }}>
      <h3>Premium product </h3>
      <button onClick={subscribePremium} type="submit">
        Checkout
      </button>

      <h3>Basic product </h3>
      <button onClick={subscribeBasic}>Checkout</button>
    </div>
  );
};

export default HomePage;

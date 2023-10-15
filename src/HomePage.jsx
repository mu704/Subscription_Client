import axios from "axios";
import React from "react";

const BACKEND_URL = "https://localhost:5000/api";

const SUBSCRIPTION_PRICE = {
  BASIC: process.env.REACT_APP_SUBSCRIPTION_BASIC,
  PREMIUM: process.env.REACT_APP_SUBSCRIPTION_PREMIUM,
};

const HomePage = () => {
  const subscribePremium = async () => {
    try {
      const response = await axios.post(
        `${BACKEND_URL}/payments/create-checkout-session`,
        {
          priceId: SUBSCRIPTION_PRICE.PREMIUM,
        }
      );

      const stipeCheckoutUrl = response.data.url;
      window.location.href = stipeCheckoutUrl;
    } catch (error) {
      console.log(error);
    }
  };

  const subscribeBasic = async () => {
    try {
      const response = await axios.post(
        `${BACKEND_URL}/payments/create-checkout-session`,
        {
          priceId: SUBSCRIPTION_PRICE.BASIC,
        }
      );

      const stipeCheckoutUrl = response.data.url;
      window.location.href = stipeCheckoutUrl;
    } catch (error) {
      console.log(error);
    }
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

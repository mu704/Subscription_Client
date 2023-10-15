import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import axios from "axios";

const BACKEND_URL = "https://localhost:5000/api";

const SuccessPage = () => {
  const [session, setSession] = useState();
  const [searchParams] = useSearchParams();

  const sessionId = searchParams.get("session_id");

  const manageBilling = async () => {
    try {
      const response = await axios.post(
        `${BACKEND_URL}/payments/customer-portal?sessionId=${sessionId}`
      );

      window.location.href = response.data.url;
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const loadSession = async () => {
      try {
        const response = await axios.get(
          `${BACKEND_URL}/payments/checkout-session?sessionId=${sessionId}`
        );

        setSession(response);
      } catch (error) {
        console.log(error);
      }
    };

    loadSession();
  }, []);

  console.log(session);
  return (
    <div>
      <h3>Manage Billing Information</h3>
      <p>{/* {session} */}</p>
      <button onClick={manageBilling}> Manage Billing </button>
    </div>
  );
};

export default SuccessPage;

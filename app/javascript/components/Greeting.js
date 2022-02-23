import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getGreetingAction } from "../store/greeting/greeting";
import axios from "axios";

const Greeting = () => {
  const dispatch = useDispatch();
  const message = useSelector((state) => state.greeting);
  useEffect(() => {
    loadMessage();
  }, [dispatch]);

  const loadMessage = async () => {
    try {
      const { data } = await axios.get("v1/greetings");
      dispatch(getGreetingAction(data.message));
    } catch (error) {
      console.log("error", error.message);
    }
  };

  return (
    <div class="center-items">
      {message !== null && (
        <>
          <h1>{message}</h1>
          <button type="submit" onClick={loadMessage}>
            {" "}
            Get Greeting{" "}
          </button>
        </>
      )}
    </div>
  );
};

export default Greeting;

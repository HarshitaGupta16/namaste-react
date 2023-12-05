import React, { useEffect, useState } from "react";

const User = ({ name }) => {
  const [count] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      console.log("NAMASTE REACT FUNC");
    }, 1000);

    console.log("useEffect");

    return () => {
      clearInterval(timer);
      console.log("useEffect Return");
    };
  }, []);

  return (
    <div className="user-card">
      <h1>Count = {count}</h1>
      <h2>Name: {name}</h2>
      <h3>Location: Aligarh</h3>
      <h4>contact: HarshitaGupta16</h4>
    </div>
  );
};

export default User;

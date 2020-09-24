import React from "react";

function MyInfo() {
  const fistName = "Tuan";
  const lastName = "Nguyen";

  return (
    <div>
      <h1>My name is {fistName + " " + lastName}</h1>
    </div>
  );
}

export default MyInfo;

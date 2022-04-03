import React, { useState } from "react";
import PhoneInput from "react-phone-number-input";

const ReactPhoneNumber = () => {
  const [value, setValue] = useState();
  return (
    <PhoneInput placeholder="Enter number" value={value} onChange={setValue} />
  );
};

export default ReactPhoneNumber;

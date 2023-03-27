import React, { useState } from "react";
import ProfilePicture from "../ProfilePicture/ProfilePicture";
import SignUp from "../SignUpInfo/SignUp";
import UserName from "../UserName/UserName";
import WorkingInfo from "../WorkingInfo/WorkingInfo";

const MultiStepFn = () => {
  const [step, setStep] = useState(1);
  const [data, setData] = useState({});

  const handleStep = (data) => {
    setData({ ...data, ...data });
    setStep(step + 1);
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  switch (step) {
    case 1:
      return <SignUp handleStep={"a"}></SignUp>;
    case 2:
      return <UserName></UserName>;

    default:
      return null;
  }
};

export default MultiStepFn;

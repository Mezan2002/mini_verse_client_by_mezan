import React, { useState } from "react";
import { useForm } from "react-hook-form";
import LinkSocialMedia from "../LinkSocialMedia/LinkSocialMedia";
import LocationInfo from "../LocationInfo/LocationInfo";
import ProfilePicture from "../ProfilePicture/ProfilePicture";
import SignUp from "../SignUpInfo/SignUp";
import UserName from "../UserName/UserName";
import WorkingInfo from "../WorkingInfo/WorkingInfo";

function MultiStepForm() {
  const { handleSubmit } = useForm();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({});

  const onSubmit = (data) => {
    setFormData({ ...formData, ...data });
    if (step === 6) {
      console.log("Form data:", formData);
    } else {
      setStep(step + 1);
    }
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <div>
            <SignUp></SignUp>
          </div>
        );
      case 2:
        return (
          <div>
            <UserName></UserName>
          </div>
        );
      case 3:
        return (
          <div>
            <ProfilePicture></ProfilePicture>
          </div>
        );
      case 4:
        return (
          <div>
            <LocationInfo></LocationInfo>
          </div>
        );
      case 5:
        return (
          <div>
            <WorkingInfo></WorkingInfo>
          </div>
        );
      case 6:
        return (
          <div>
            <LinkSocialMedia></LinkSocialMedia>
          </div>
        );
      default:
        return null;
    }
  };

  return <form onSubmit={handleSubmit(onSubmit)}>{renderStep()}</form>;
}

export default MultiStepForm;

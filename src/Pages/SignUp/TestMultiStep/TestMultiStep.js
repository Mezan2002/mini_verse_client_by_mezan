import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import LinkSocialMedia from "../LinkSocialMedia/LinkSocialMedia";
import LocationInfo from "../LocationInfo/LocationInfo";
import ProfilePicture from "../ProfilePicture/ProfilePicture";
import SignUp from "../SignUpInfo/SignUp";
import UserName from "../UserName/UserName";
import WorkingInfo from "../WorkingInfo/WorkingInfo";

function MultiStepForm() {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({});

  const onSubmit = (data) => {
    setFormData({ ...formData, ...data });
  };
  useEffect(() => {
    const signUpInfo = {
      firstName: formData.firstName,
      lastName: formData.lastName,
      email: formData.email,
      phone: formData.phoneNumber,
      password: formData.newPassword,
      dateOfBirth: {
        date: formData.date,
        month: formData.month,
        year: formData.year,
      },
      gender: formData.gender,
      terms: formData.terms,
    };

    const userName = {
      userName: formData.userName,
    };
    const profilePicture = {
      profilePicture: formData.profilePicture,
    };

    const locationInfo = {
      country: formData.country,
      city: formData.city,
      state: formData.state,
      zipCode: formData.zipCode,
      hometown: formData.hometown,
      street: formData.street,
    };

    const workingInfo = {
      comapany: formData.comapany,
      position: formData.position,
      city: formData.city,
      description: formData.description,
      date: formData.date,
      month: formData.month,
      year: formData.year,
      working: formData.working,
    };

    const socialMedia = {
      facebook: formData.facebook,
      instagram: formData.instagram,
      github: formData.github,
      linkedin: formData.linkedin,
    };

    const userData = {
      basicInfo: signUpInfo,
      userName: userName,
      profilePicture: profilePicture,
      locationInfo: locationInfo,
      workingInfo: workingInfo,
      socialMedia: socialMedia,
    };

    console.log(userData);
  }, [formData]);

  const stepNext = () => {
    setStep(step + 1);
  };
  const stepPrevious = () => {
    setStep(step - 1);
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <div>
            <SignUp
              stepNext={stepNext}
              register={register}
              errors={errors}
            ></SignUp>
          </div>
        );
      case 2:
        return (
          <div>
            <UserName
              stepNext={stepNext}
              stepPrevious={stepPrevious}
              register={register}
              errors={errors}
            ></UserName>
          </div>
        );
      case 3:
        return (
          <div>
            <ProfilePicture
              stepNext={stepNext}
              stepPrevious={stepPrevious}
              register={register}
              errors={errors}
            ></ProfilePicture>
          </div>
        );
      case 4:
        return (
          <div>
            <LocationInfo
              stepNext={stepNext}
              stepPrevious={stepPrevious}
              register={register}
              errors={errors}
            ></LocationInfo>
          </div>
        );
      case 5:
        return (
          <div>
            <WorkingInfo
              stepNext={stepNext}
              stepPrevious={stepPrevious}
              register={register}
              errors={errors}
            ></WorkingInfo>
          </div>
        );
      case 6:
        return (
          <div>
            <LinkSocialMedia
              stepNext={stepNext}
              stepPrevious={stepPrevious}
              register={register}
              errors={errors}
            ></LinkSocialMedia>
          </div>
        );
      default:
        return null;
    }
  };

  return <form onSubmit={handleSubmit(onSubmit)}>{renderStep()}</form>;
}

export default MultiStepForm;

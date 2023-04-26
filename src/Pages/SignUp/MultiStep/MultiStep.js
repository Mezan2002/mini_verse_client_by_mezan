import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import LinkSocialMedia from "../LinkSocialMedia/LinkSocialMedia";
import LocationInfo from "../LocationInfo/LocationInfo";
import ProfilePicture from "../ProfilePicture/ProfilePicture";
import SignUp from "../SignUpInfo/SignUp";
import UserName from "../UserName/UserName";
import WorkingInfo from "../WorkingInfo/WorkingInfo";
import {
  fetchingError,
  fetchingStart,
  fetchingSuccessfull,
} from "../../../Redux/ActionCreator/ActionCreator";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loadLoggedInUserData } from "../../../Redux/Thunk/LoadLoggedInUserData/LoadLoggedInUserData";
import Swal from "sweetalert2";

function MultiStepForm() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [profilePic, setProfilePic] = useState("");
  const [userCode, setUserCode] = useState(0);
  const {
    register,
    handleSubmit,
    formState,
    formState: { errors },
  } = useForm({
    mode: "onBlur",
  });
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({});

  const onSubmit = (data) => {
    setFormData({ ...formData, ...data });
  };
  useEffect(() => {
    if (formData.firstName !== undefined) {
      const signUpInfo = {
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        phone: formData.phoneNumber,
        password: formData.newPassword,
        dateOfBirth: {
          date: formData.birthDate,
          month: formData.birthMonth,
          year: formData.birthYear,
        },
        gender: formData.gender,
        terms: formData.terms,
        userName: formData.userName,
        profilePicture: profilePic,
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
        date: formData.startingDate,
        month: formData.startingMonth,
        year: formData.startingYear,
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
        locationInfo: locationInfo,
        workingInfo: workingInfo,
        socialMedia: socialMedia,
        userCode: JSON.stringify(userCode),
      };
      if (userCode !== 0) {
        dispatch(fetchingStart);
        fetch("https://miniverse-server.vercel.app/signUp", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(userData),
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.acknowledged) {
              localStorage.setItem("randomNumber", parseInt(userCode));
              dispatch(fetchingSuccessfull(userData));
              dispatch(loadLoggedInUserData());
              Swal.fire("Sign Up Successfully!", "", "success");
              navigate("/");
            }
          })
          .catch((e) => dispatch(fetchingError));
      }
    }
  }, [formData, dispatch, profilePic, navigate, userCode]);

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
              formState={formState}
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
              formState={formState}
            ></UserName>
          </div>
        );
      case 3:
        return (
          <div>
            <ProfilePicture
              setProfilePic={setProfilePic}
              stepNext={stepNext}
              stepPrevious={stepPrevious}
              register={register}
              errors={errors}
              formState={formState}
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
              formState={formState}
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
              formState={formState}
            ></WorkingInfo>
          </div>
        );
      case 6:
        return (
          <div>
            <LinkSocialMedia
              setUserCode={setUserCode}
              stepNext={stepNext}
              stepPrevious={stepPrevious}
              register={register}
              errors={errors}
              formState={formState}
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

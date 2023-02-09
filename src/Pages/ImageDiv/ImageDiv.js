import React, { useState } from "react";
import { useForm } from "react-hook-form";

const ImageDiv = () => {
  const [image, setImage] = useState(null);
  const { handleSubmit, reset } = useForm();

  const handleImageChange = (event) => {
    setImage(URL.createObjectURL(event.target.files[0]));
    reset();
  };

  const onSubmit = (data) => {};

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input type="file" name="image" onChange={handleImageChange} />
      {image && (
        <div style={{ width: "400px", overflow: "hidden" }}>
          <img src={image} alt="SelectedImage" style={{ width: "100%" }} />
        </div>
      )}
    </form>
  );
};

export default ImageDiv;

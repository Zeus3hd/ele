import React, { useState } from "react";
import { ProductForm, TextInput, SubmitButton, FileField } from "./index.style";
const PostProduct = () => {
  const [name, setName] = useState("");
  const [img, setImg] = useState();
  const newPost = () => {
    const uploadData = new FormData();
    uploadData.append("name", name);
    uploadData.append("img", img);
    console.log(uploadData);
    fetch("/api/product/", {
      mode: "no-cors",
      method: "POST",
      body: uploadData,
    })
      .then((res) => {
        console.log("uplaoded");
      })
      .catch((e) => console.log(e));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const uploadData = new FormData();
    uploadData.append("name", name);
    uploadData.append("img", img);
    fetch("/api/product/", {
      mode: "no-cors",
      method: "POST",
      body: uploadData,
    })
      .then((res) => {
        console.log("uplaoded");
      })
      .catch((e) => console.log(e));
  };
  return (
    <ProductForm>
      <TextInput
        placeholder="title"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <FileField type="file" onChange={(e) => setImg(e.target.files[0])} />
      <SubmitButton onClick={handleSubmit}>Post</SubmitButton>
    </ProductForm>
  );
};

export default PostProduct;

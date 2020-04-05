import React, { useState } from "react";
import { ProductForm, TextInput, SubmitButton, FileField } from "./index.style";
const PostProduct = () => {
  const [name, setName] = useState("");
  const [img, setImage] = useState("");
  return (
    <ProductForm>
      <TextInput placeholder="title" />
      <FileField type="file" />
      <SubmitButton>Post</SubmitButton>
    </ProductForm>
  );
};

export default PostProduct;

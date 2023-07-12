import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import "../Styles/AddProduct.scss"
import { addProduct } from '../utils/utils'
import axios from 'axios'
import Category from '../components/Category'
import SavedAs from '../components/SavedAs'

const AddProduct = () => {
  const [category,setCategory] = useState("watches");
  const [saved,setSaved] = useState("product");
  const handleSubmit =async(e)=>{
    e.preventDefault();
    const name = e.target[0].value;
    const desc = e.target[1].value;
    const price = e.target[2].value;
    const stock = e.target[3].value;
    const files = e.target[4].files;
    let formData = new FormData();
    {
      for(let i=0;i<files.length;i++){
        formData.append("images",files[i]);
      }
    }
    formData.append("name",name);
    formData.append("description",desc);
    formData.append("price",price);
    formData.append("stock",stock);
    formData.append("category",category);
    formData.append("savedAs",saved);


    axios({
      method: "post",
      url: "http://localhost:5000/product/createProduct",
      data: formData,
      headers: { "Content-Type": "multipart/form-data" },
    })
      .then(function (response) {
        //handle success
        console.log(response);
      })
      .catch(function (response) {
        //handle error
        console.log(response);
      });

  }
  return (
    <>
      <Navbar />
    <div className='productForm'>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" id="" placeholder='name'/>
        <input type="text" name="description" id="" placeholder='Description'/>
        <input type="number" name="price" id="" placeholder='Price'/>
        <input type="number" name="stock" id="" placeholder='Stock'/>
        <label>Upload multiple profile picture</label>
        <input type="file" name="image" required multiple />
        <Category state={{category,setCategory}}/>
        <SavedAs state={{saved,setSaved}}/>
        <button type="submit">Submit</button>
      </form>
    </div>
    </>
  )
}

export default AddProduct
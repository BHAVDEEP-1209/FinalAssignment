import axios from "axios";

export const SignUp = (values) =>(axios.post("http://localhost:5000/auth/register",values));

export const SignIn = (values) =>(axios.post("http://localhost:5000/auth/login",values));

// export const addProduct = (values) =>(axios.post("http://localhost:5000/product/createProduct",
// {data: values},
// {headers: { "Content-Type": "multipart/form-data" }},
// ));

// export const addProduct = (values) =>(axios.post("http://localhost:5000/product/createProduct",
// {values},
// ));
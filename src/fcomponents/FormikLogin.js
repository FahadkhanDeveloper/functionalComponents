import React from 'react'
import {useFormik} from 'formik'
import * as Yup from "yup"
// Yup is used for validation
// formik is hook
const FormikLogin = () => {
    const formik = useFormik({
        // here we set inital value of username and password
        initialValues : {
            username : "",
            password : ""
            // we pass oject to formik function in argument
        },
        onSubmit: (value) => {
            console.log(value)
        },
        validationSchema : Yup.object({
            username:Yup.string().required().max(15," username should not exceed 15 characters").min(3,"Minimum of three characters are required"),
            password:Yup.string().required().max(15," Password should not exceed 15 characters").min(8,"Minimum of three characters are required")
        })

    })
    
  return (
    <div>
        <form onSubmit={formik.handleSubmit}>
        <label htmlFor="username">Username</label>
        <input 
           type="text"
           id="username"
           name="username"
           value={formik.username}
           onChange={formik.handleChange}
           onBlur={formik.handleBlur}
         />
         {formik.touched.username && formik.errors.username ? formik.errors.username : null}

<label htmlFor="password">Password</label>
        <input 
           type="password"
           id="password"
           name="password"
           value={formik.password}
           onChange={formik.handleChange}
           onBlur={formik.handleBlur}
         />
         {formik.touched.username && formik.errors.password ? formik.errors.password : null}
         <button type="submit">Submit</button>
         </form>
    </div>
  )
}

export default FormikLogin
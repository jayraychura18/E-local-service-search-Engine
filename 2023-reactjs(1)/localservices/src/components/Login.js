import axios from 'axios'
import React from 'react'
import { Helmet } from 'react-helmet'
import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'

const Login = () => {

    const {register,handleSubmit} = useForm()
    var navigate = useNavigate()
   const submit = (data) => {

       console.log(data)
   axios.post("http://localhost:4000/user/login",data).then((res) => {

   console.log(res)
   alert("user logged in sucessfully")
   }).catch((err)=> {
       console.log(err)    
   })

//    navigate("/")
   }

  return (
    <div>

        <Helmet>
        <meta charset="utf-8"/>
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>
    <title>Corona Admin</title>
    {/* <link rel="stylesheet" href="../../assets/vendors/mdi/css/materialdesignicons.min.css"/>
    <link rel="stylesheet" href="../../assets/vendors/css/vendor.bundle.base.css"/> */}
   
    <link rel="stylesheet" href="../../assets/css/style.css"/>
    <link rel="shortcut icon" href="../../assets/images/favicon.png" />
        </Helmet>
      <body>
    <div class="container-scroller">
      <div class="container-fluid page-body-wrapper full-page-wrapper">
        <div class="row w-100 m-0">
          <div class="content-wrapper full-page-wrapper d-flex align-items-center auth login-bg">
            <div class="card col-lg-4 mx-auto">
              <div class="card-body px-5 py-5">
                <h3 class="card-title text-left mb-3">Login</h3>
                <form  onSubmit={handleSubmit(submit)} >
                  <div class="form-group">
                    <label>Username or email *</label>
                    <input type="text" class="form-control p_input"/>
                  </div>
                  <div class="form-group">
                    <label>Password *</label>
                    <input type="text" class="form-control p_input"/>
                  </div>
                  <div class="form-group d-flex align-items-center justify-content-between">
                    <div class="form-check">
                      <label class="form-check-label">
                        <input type="checkbox" class="form-check-input"/> Remember me </label>
                    </div>
                    <a href="#" class="forgot-pass">Forgot password</a>
                  </div>
                  <div class="text-center">
                    <button type="submit" class="btn btn-primary btn-block enter-btn">Login</button>
                  </div>
                  <div class="d-flex">
                    <button class="btn btn-facebook mr-2 col">
                      <i class="mdi mdi-facebook"></i> Facebook </button>
                    <button class="btn btn-google col">
                      <i class="mdi mdi-google-plus"></i> Google plus </button>
                  </div>
                  <p class="sign-up">Don't have an Account?<Link to="/register"> Sign Up</Link></p>
                </form>
              </div>
            </div>
          </div>
       </div>
      </div>
    </div>
  
    <script src="../../assets/vendors/js/vendor.bundle.base.js"></script>
  
    <script src="../../assets/js/off-canvas.js"></script>
    <script src="../../assets/js/hoverable-collapse.js"></script>
    <script src="../../assets/js/misc.js"></script>
    <script src="../../assets/js/settings.js"></script>
    <script src="../../assets/js/todolist.js"></script>
  </body>
    </div>
  )
}

export default Login

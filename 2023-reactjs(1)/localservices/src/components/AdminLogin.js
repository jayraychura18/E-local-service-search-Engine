import axios from 'axios'
import React from 'react'
import { Helmet } from 'react-helmet'
import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'
import Profile from './Profile'

const AdminLogin = () => {

    const {register,handleSubmit} = useForm()
     var navigate = useNavigate()
    const submit = (data) => {

        console.log(data)
    axios.post("http://localhost:4000/admin/login"  ,data).then((res) => {
    window.alert("admin login successfully")
    console.log(res.data.data._id)
    // localStorage.setItem("_id",res.data.data?._id)
    navigate("/admin")
    }).catch((err)=> {
        console.log(err)    
    })

    
    
    }
    
  return (
    <div>

<Helmet>
    
<meta charset="UTF-8"/>
    <title> LS Login</title>
    <link rel="stylesheet" href="assets/css/register.css"/>
     <meta name="viewport" content="width=device-width, initial-scale=1.0"/>


     <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet"/>

{/* <title>Local services</title> */}


<link href="vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet"/>



<link rel="stylesheet" href="assets/css/fontawesome.css"/>
<link rel="stylesheet" href="assets/css/templatemo-cyborg-gaming.css"/>
<link rel="stylesheet" href="assets/css/owl.css"/>
<link rel="stylesheet" href="assets/css/animate.css"/>
<link rel="stylesheet"href="https://unpkg.com/swiper@7/swiper-bundle.min.css"/>
     
</Helmet>
<body>
<header class="header-area header-sticky">
  <div class="container">
      <div class="row">
          <div class="col-12">
              <nav class="main-nav">
                  <a href="index.html" class="logo">
                      <img src="assets/images/logo4.png" alt=""/>
                  </a>
                  {/* <div class="search-input">
                    <form id="search" action="#">
                      <input type="text" placeholder="Type Something" id='searchText' name="searchKeyword" onkeypress="handle" />
                      <i class="fa fa-search"></i>
                    </form>
                  </div> */}
                  

                  {/* {isServiceProvider && (
                  <ul class="nav">
                    <li><a href="browse.html">Browse</a></li>
                  </ul>
                )} */}

                
                  
                  <ul class="nav">
                      <li>
                        <Link to="/" >Home</Link>
                      </li>
                      {/* {isServiceProvider ? (
        <li><a href="browse.html">serviceProvider</a></li>
      ) : (
        <li><a href="browse.html">user</a></li>
      )} */}

                      <li><a href="browse.html">Browse</a></li>
                      <li>
                         <Link to="/login" class="active">Login</Link>
                      </li>
                      <li>
                        <Link to="/register">Sign up</Link>
                      </li>
                      {/* <li>
                        <Link to="/profile">Profile <img src="assets/images/profile-header.jpg" alt=""/></Link>
                      </li> */}
                      <li>
                        <img src="assests/images/service-01.jpg" />
                      </li>
                  </ul>   
                  <a class='menu-trigger'>
                      <span>Menu</span>
                  </a>
              </nav>
          </div>
      </div>
  </div>
</header>



      <div class="container">
    <div class="title">Log In</div>
    <div class="content">
      <form action="#" onSubmit={handleSubmit(submit)}>
        <div class="user-details">
          {/* <div class="input-box">
            <span class="details">Full Name</span>
            <input type="text" placeholder="Enter your name" required  {...register("name")}/>
          </div> */}
          {/* <div class="input-box">
            <span class="details">Username</span>
            <input type="text" placeholder="Enter your username" required  {...register("username")}/>
          </div> */}
          <div class="input-box">
            <div class="input-boxx">
            <span class="details">Email</span>
            <input type="text" placeholder="Enter your email" required  {...register("email")}/>
            </div>
          </div>
          
          <div class="input-box">
            <div class="input-boxx">
            <span class="details">password</span>
            <input type="text" placeholder="Enter your password" required  {...register("password")}/>
            </div>
          </div>
          {/* <div class="input-box">
            <span class="details">Phone no.</span>
            <input type="text" placeholder="Enter your contact no." required {...register("phone")}/>
          </div>
          <div class="input-box">
            <span class="details">role</span>
            <input type="text" placeholder="Enter your role" required {...register("role")}/>
          </div> */}
          {/* <div class="input-box">
            <span class="details">Confirm Password</span>
            <input type="text" placeholder="Confirm your password" required/>
          </div> */}
        </div>
        {/* <div class="gender-details">
          <input type="radio" name="gender" id="dot-1"  value="user" {...register("role")} />
          <input type="radio" name="gender" id="dot-2" value="service provider" {...register("role")}/>
          <input type="radio" name="gender" id="dot-3"  value="prefer not to say" {...register("role")}/>
          <span class="gender-title">role</span>
          <div class="category">
            <label for="dot-1">
            <span class="dot one"></span>
            <span class="gender">User</span>
          </label>
          <label for="dot-2">
            <span class="dot two"></span>
            <span class="gender">service provider</span>
          </label>
          <label for="dot-3">
            <span class="dot three"></span>
            <span class="gender">Prefer not to say</span>
            </label>
          </div>
        </div> */}
        <div class="button">
          <input type="submit" value="submit"/>
        </div>
        <div className="button" >
          <Link to={'/'}>home page</Link>
          {/* <p class="sign-up">Don't have an Account?<Link to="/register"> Sign Up</Link></p> */}
          

        </div>
      </form>
    </div>
  </div>
  </body>
    </div>
  )
}

export default AdminLogin

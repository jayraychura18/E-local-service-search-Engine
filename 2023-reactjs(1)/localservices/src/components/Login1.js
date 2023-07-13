import axios from 'axios'
import React from 'react'
import { Helmet } from 'react-helmet'
import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'
import Profile from './Profile'

const Login1 = () => {

    const {register,handleSubmit} = useForm()
     var navigate = useNavigate()
    const submit = (data) => {

        console.log(data)
    axios.post("http://localhost:4000/user/login",data).then((res) => {
    window.alert("user login successfully")
    console.log(res.data.data._id)
    localStorage.setItem("_id",res.data.data?._id)
    navigate("/")
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
<header className="header-area header-sticky">
  <div className="container">
      <div className="row">
          <div className="col-12">
              <nav className="main-nav">
                  <a href="index.html" className="logo">
                      <img src="assets/images/logo4.png" alt=""/>
                  </a>
                  {/* <div className="search-input">
                    <form id="search" action="#">
                      <input type="text" placeholder="Type Something" id='searchText' name="searchKeyword" onkeypress="handle" />
                      <i className="fa fa-search"></i>
                    </form>
                  </div> */}
                  

                  {/* {isServiceProvider && (
                  <ul className="nav">
                    <li><a href="browse.html">Browse</a></li>
                  </ul>
                )} */}

                
                  
                  <ul className="nav">
                      <li>
                        <Link to="/" >Home</Link>
                      </li>
                      {/* {isServiceProvider ? (
        <li><a href="browse.html">serviceProvider</a></li>
      ) : (
        <li><a href="browse.html">user</a></li>
      )} */}

                      {/* <li><a href="browse.html">Browse</a></li> */}
                      <li>
                         <Link to="/login" className="active">Login</Link>
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
                  <a className='menu-trigger'>
                      <span>Menu</span>
                  </a>
              </nav>
          </div>
      </div>
  </div>
</header>



      <div className="container">
    <div className="title">Log In</div>
    <div className="content">
      <form action="#" onSubmit={handleSubmit(submit)}>
        <div className="user-details">
          {/* <div className="input-box">
            <span className="details">Full Name</span>
            <input type="text" placeholder="Enter your name" required  {...register("name")}/>
          </div> */}
          {/* <div className="input-box">
            <span className="details">Username</span>
            <input type="text" placeholder="Enter your username" required  {...register("username")}/>
          </div> */}
          <div className="input-box">
            <div className="input-boxx">
            <span className="details">Email</span>
            <input type="text" placeholder="Enter your email" required  {...register("email")}/>
            </div>
          </div>
          
          <div className="input-box">
            <div className="input-boxx">
            <span className="details">password</span>
            <input type="text" placeholder="Enter your password" required  {...register("password")}/>
            </div>
          </div>
          {/* <div className="input-box">
            <span className="details">Phone no.</span>
            <input type="text" placeholder="Enter your contact no." required {...register("phone")}/>
          </div>
          <div className="input-box">
            <span className="details">role</span>
            <input type="text" placeholder="Enter your role" required {...register("role")}/>
          </div> */}
          {/* <div className="input-box">
            <span className="details">Confirm Password</span>
            <input type="text" placeholder="Confirm your password" required/>
          </div> */}
        </div>
        {/* <div className="gender-details">
          <input type="radio" name="gender" id="dot-1"  value="user" {...register("role")} />
          <input type="radio" name="gender" id="dot-2" value="service provider" {...register("role")}/>
          <input type="radio" name="gender" id="dot-3"  value="prefer not to say" {...register("role")}/>
          <span className="gender-title">role</span>
          <div className="category">
            <label for="dot-1">
            <span className="dot one"></span>
            <span className="gender">User</span>
          </label>
          <label for="dot-2">
            <span className="dot two"></span>
            <span className="gender">service provider</span>
          </label>
          <label for="dot-3">
            <span className="dot three"></span>
            <span className="gender">Prefer not to say</span>
            </label>
          </div>
        </div> */}
        <div className="button">
          <input type="submit" value="submit"/>
        </div>
        <div className="button" >
          <Link to={'/'}>home page</Link>
          <p className="sign-up">Don't have an Account?<Link to="/register"> Sign Up</Link></p>
          <p className="sign-up">are you admin<Link to="/adminlogin"> admin log in </Link></p>

        </div>
      </form>
    </div>
  </div>
  </body>
    </div>
  )
}

export default Login1

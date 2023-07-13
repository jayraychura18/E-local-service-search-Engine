import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet'
import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'

const Service = () => {

  var style1 ={
    width : "300px",
    height : "40px",
    borderRadius : "7px",
    borderColor : "#d9d9d9"
    
  }
    const [categories,setcategories] = useState()
    const [subcategories, setsubcategories] = useState()
    const {register,handleSubmit} = useForm()
    var navigate = useNavigate()

    const submit = (data) => {

        // console.log(data)
    axios.post("http://localhost:4000/service/add",data).then((res) => {

    console.log(res)
    }).catch((err)=> {
        console.log(err)    
    })

    navigate("/")
    }

    const getCategory = () => {
      axios.get("http://localhost:4000/category/getall").then((res) => {
        // console.log(res.data.data)
        setcategories(res.data.data)
        // console.log(categories)
      }).catch((err)=>{
        console.log(err)
      })
     
    }

    const getSubcategory = () => {
      axios.get("http://localhost:4000/subcategory/getall").then((res) => {
        // console.log(res.data.data)
        setsubcategories(res.data.data)
        // console.log(subcategories)
      }).catch((err)=>{
        console.log(err)
      })
     
    }

    useEffect(() => {
        getCategory();
        getSubcategory();
    }, [])
    
    
  return (
    <div>

<Helmet>
    
<meta charset="UTF-8"/>
    <title> LS service</title>
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

                      {/* <li><a href="browse.html">Browse</a></li> */}
                      {/* <li>
                         <Link to="/login">Login</Link>
                      </li>
                      <li>
                        <Link to="/register" class="active">Sign up</Link>
                      </li> */}
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
    <div class="title">service Registration</div>
    <div class="content">
      <form action="#" onSubmit={handleSubmit(submit)}>
        <div class="user-details">
          <div class="input-box">
            <span class="details"> Name</span>
            <input type="text" placeholder="Enter your name" required  {...register("name")}/>
          </div>
          {/* <div class="input-box">
            <span class="details">Username</span>
            <input type="text" placeholder="Enter your username" required  {...register("username")}/>
          </div> */}
           <div class = "input-box">
          <span class="details">Category</span>
          <select style={style1} {...register("category")}>
            {
              categories?.map((category) => {
                // console.log(category._id)
                return(
                  <option value={category._id}>{category.name}</option>
                )

              })
            }
          
          </select>
          </div>
          <div class = "input-box">
          <span class="details">Subcategory</span>
          <select style={style1} {...register("subcategory")}>
          {
              subcategories?.map((subcategory) => {
                return(
                  <option value={subcategory._id}>{subcategory.name}</option>
                )

              })
            }
          </select>
          </div>
          <div class="input-box">
            <span class="details">description</span>
            <input type="text" placeholder="Enter fees for servcie" required {...register("description")}/>
          </div>
          <div class="input-box">
            <span class="details">Fees</span>
            <input type="text" placeholder="Enter fees for servcie" required {...register("fees")}/>
          </div>
          <div class="input-box">
            <span class="details">Area</span>
            <input type="text" placeholder="Enter your  Area" required {...register("area")}/>
          </div>
          <div class="input-box">
            <span class="details">City</span>
            <input type="text" placeholder="Enter your city" required {...register("city")}/>
          </div>
          <div class="input-box">
            <span class="details">State</span>
            <input type="text" placeholder="enter your state" required {...register("state")}/>
          </div>
          {/* <div class="input-box">
            <span class="details">role</span>
            <input type="text" placeholder="Enter your role" required {...register("role")}/>
          </div> */}

          {/* <div class = "input-box">
          <span class="details">role</span>
          <select style={style1} {...register("role")}>
            <option value='user' style={style1} >User</option>
            <option value='serviceProvider' style={style1}>Service-provider</option>
          </select>
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
        {/* <div className="button" >
          <Link to={'/'}>home page</Link>
          <p class="sign-up">Already have an Account?<Link to="/login"> Log in</Link></p>

        </div> */}
      </form>
    </div>
  </div>
    </div>
  )
}

export default Service

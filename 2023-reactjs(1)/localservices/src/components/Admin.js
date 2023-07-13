import axios from 'axios'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet'


const Admin = () => {
    const [users,setusers] = useState()

    const getapi =() => {
  
      axios.get("http://localhost:4000/user/getallusers").then((res) => {
  
        console.log(res.data.data)
        // setusers(res.data.users)
        setusers(res.data.data)
  
      }).catch((err) => {
      
        console.log(err)
      })
      
  
    }
  
    const deleteUser = (id) => {
  
      axios.delete("http://localhost:4000/user/delete/" + id).then((res) => {
  
        getapi()
  
      }).catch((err) => {
        console.log(err)
        
      })
    }
  return (
    <div>
        <Helmet>

<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet"/>

<title>Local services</title>


<link href="vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet"/>



<link rel="stylesheet" href="assets/css/fontawesome.css"/>
<link rel="stylesheet" href="assets/css/templatemo-cyborg-gaming.css"/>
<link rel="stylesheet" href="assets/css/owl.css"/>
<link rel="stylesheet" href="assets/css/animate.css"/>
<link rel="stylesheet"href="https://unpkg.com/swiper@7/swiper-bundle.min.css"/>

</Helmet>


{/* <div id="js-preloader" class="js-preloader">
<div class="preloader-inner">
<span class="dot"></span>
<div class="dots">
<span></span>
<span></span>
<span></span>
</div>
</div>
</div> */}

<header >
<div class="container header-area header-sticky">
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
          

              <li>  
                <Link to="/browse" class="active">Browse</Link>
              </li>
              <li>
                 <Link to="/login">Login</Link>
              </li>
              <li>
                <Link to="/register">Sign up</Link>
              </li>
              <li>
                <Link to="/profile">Profile <img src="assets/images/profile-header.jpg" alt=""/></Link>
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
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>


      <button className='btn btn-primary' onClick={() => {getapi()}}>get all users</button>
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-KK94CHFLLe+nY2dmCWGMq91rCGa5gtU4mk92HdvYe+M/SXH301p5ILy+dN9+nJOZ" crossorigin="anonymous"/>


<table class= "table" className='table  table-dark'>
  <thead>
    <tr>
      <th>id</th>
      <th>name</th>
      <th>email</th>
      <th>password</th>
      <th>phone</th>
      <th>role</th>
      <th>action</th>
    </tr>
  </thead>
  <tbody>
    {
      users?.map((u) => {
        return(
          <tr>
            <td>{u._id}</td>
            <td>{u.name}</td>
            <td>{u.email}</td>
            <td>{u.password}</td>
            <td>{u.phone}</td>
            <td>{u.role}</td>
            <td>
              <button className='btn btn-danger' onClick={() => {deleteUser(u._id)}}>remove</button>
            </td>
          </tr>
        )
      })
    }
  </tbody>
</table>
<div className="button" >
          <Link to={'/'}>home page</Link>
          </div>
    </div>
  )
}

export default Admin

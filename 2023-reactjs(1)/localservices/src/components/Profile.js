import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet'
import { Link, useNavigate } from 'react-router-dom'
import Home from './Home'

const Profile = () => {
    var style1 = {
        borderRadius : "23px"
    }

    var style2 = {
      border:"0",
      width:  "100%"
    }

    

    
    var navigate = useNavigate()

    const logout = () => {
      localStorage.clear()
      navigate("/")

    }

   


    const [user,setuser] = useState({})
  
    const id = localStorage.getItem('_id')

         axios.get("http://localhost:4000/user/getuser/"+ id).then((res) => {
        // console.log(res.data.data)
        setuser(res.data.data)

        }).catch((err) => {
        console.log(err)
})


const signout = () => {

  axios.delete("http://localhost:4000/user/delete/"+ id).then((res) => {
        // console.log(res.data.data)
        localStorage.clear()
        navigate("/")
        }).catch((err) => {
        console.log(err)
})
  
}


// console.log(user.role)

const [isServiceProvider,setisServiceProvider] = useState(false)

  const getrole = () => {
    const id = localStorage.getItem('_id')
   

    axios.get("http://localhost:4000/user/getuser/"+ id).then((res) => {
      // console.log(res.data.data)
  
       
      console.log(res.data.data.role)
      if(res.data.data.role == 'serviceProvider'){
        // isServiceProvider = true;
        setisServiceProvider(true)
      }
      // console.log(isServiceProvider)

      }).catch((err) => {
      console.log(err)
})


  }

  useEffect(()=> {
    
    getrole()
   
  },[])
  

  return (
    <div>
        <Helmet>
        <meta charset="utf-8"/>
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>

    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet"/>

    <title>profile</title>

    <link href="vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet"/>


    <link rel="stylesheet" href="assets/css/fontawesome.css"/>
    <link rel="stylesheet" href="assets/css/templatemo-cyborg-gaming.css"/>
    <link rel="stylesheet" href="assets/css/owl.css"/>
    <link rel="stylesheet" href="assets/css/animate.css"/>
    <link rel="stylesheet"href="https://unpkg.com/swiper@7/swiper-bundle.min.css"/>
        </Helmet>
      <body>

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
               
                  <ul class="nav">
                      <li><Link to="/">Home</Link></li>
                      {isServiceProvider ? (
        <li><Link to="/service" >updata or add service</Link></li>
      ) : (
        <li><a href="browse.html">user</a></li>
      )}
                      {/* <li><a href="browse.html">Browse</a></li> */}
                      <li>
                         <Link to="/login">Login</Link>
                      </li>
                      <li>
                        <Link to="/register">Sign up</Link>
                      </li>
                      <li><Link to="/profile" class="active">Profile <img src="assets/images/profile-header.jpg" alt=""/></Link></li>
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
  <div class="row">
    <div class="col-lg-12">
      <div class="page-content">

        <div class="row">
          <div class="col-lg-12">
            <div class="main-profile ">
              <div class="row">
                <div class="col-lg-4">
                  <img src="assets/images/profile.jpg" alt="" style={style1} />
                </div>
                
                <div class="col-lg-4 align-self-center">
                  {/* <div class="main-info header-text">
                    <span>Offline</span>
                    
                    <h3> Name : {user.name}</h3>

                    <p>You Haven't Gone Live yet. Go Live By Touching The Button Below.</p>
                    <div class="main-border-button">
                      <a href="#">Start Live Stream</a>
                    </div>
                  </div> */}
                </div>
                <div class="col-lg-4 align-self-center">
                  <ul>
                    <li>Name<br/> <span>{user.name}</span></li>
                    <li>E-mail <br/><span>{user.email}</span></li>
                    <li>Phone <br/> <span>{user.phone}</span></li>
                    <li>Role <br/><span>{user.role}</span></li>
                    <button onClick={logout} className='btn btn-danger'>Log out</button>
                    <br/><br/>
                    <button onClick={signout} className='btn btn-danger'> delete account</button>
                  </ul>
                </div>
              </div>
              {/* <div class="col-md-6">
                     <div class="map_main">
                        <div class="map-responsive">
                           <iframe src="https://www.google.com/maps/embed/v1/place?key=AIzaSyA0s1a7phLN0iaD6-UE7m4qP-z21pH0eSc&amp;q=Eiffel+Tower+Paris+France" width="600" height="360" frameborder="0" style={style2} allowfullscreen=""></iframe>
                        </div>
                     </div>
                  </div> */}
              <div class="row">
                <div class="col-lg-12">
                  <div class="clips">
                    <div class="row">
                      <div class="col-lg-12">
                        <div class="heading-section">
                          <h4><em>Your Most Popular</em> Clips</h4>
                        </div>
                      </div>
                      <div class="col-lg-3 col-sm-6">
                        <div class="item">
                          <div class="thumb">
                            <img src="assets/images/clip-01.jpg" alt="" />
                            <a href="https://www.youtube.com/watch?v=r1b03uKWk_M" target="_blank"><i class="fa fa-play"></i></a>
                          </div>
                          <div class="down-content">
                            <h4>First Clip</h4>
                            <span><i class="fa fa-eye"></i> 250</span>
                          </div>
                        </div>
                      </div>
                      <div class="col-lg-3 col-sm-6">
                        <div class="item">
                          <div class="thumb">
                            <img src="assets/images/clip-02.jpg" alt=""/>
                            <a href="https://www.youtube.com/watch?v=r1b03uKWk_M" target="_blank"><i class="fa fa-play"></i></a>
                          </div>
                          <div class="down-content">
                            <h4>Second Clip</h4>
                            <span><i class="fa fa-eye"></i> 183</span>
                          </div>
                        </div>
                      </div>
                      <div class="col-lg-3 col-sm-6">
                        <div class="item">
                          <div class="thumb">
                            <img src="assets/images/clip-03.jpg" alt="" />
                            <a href="https://www.youtube.com/watch?v=r1b03uKWk_M" target="_blank"><i class="fa fa-play"></i></a>
                          </div>
                          <div class="down-content">
                            <h4>Third Clip</h4>
                            <span><i class="fa fa-eye"></i> 141</span>
                          </div>
                        </div>
                      </div>
                      <div class="col-lg-3 col-sm-6">
                        <div class="item">
                          <div class="thumb">
                            <img src="assets/images/clip-04.jpg" alt="" />
                            <a href="https://www.youtube.com/watch?v=r1b03uKWk_M" target="_blank"><i class="fa fa-play"></i></a>
                          </div>
                          <div class="down-content">
                            <h4>Fourth Clip</h4>
                            <span><i class="fa fa-eye"></i> 91</span>
                          </div>
                        </div>
                      </div>
                      <div class="col-lg-12">
                        <div class="main-button">
                          <a href="#">Load More Clips</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div class="gaming-library profile-library">
          <div class="col-lg-12">
            <div class="heading-section">
              <h4><em>Your Gaming</em> Library</h4>
            </div>
            <div class="item">
              <ul>
                <li><img src="assets/images/game-01.jpg" alt="" class="templatemo-item"/></li>
                <li><h4>Dota 2</h4><span>Sandbox</span></li>
                <li><h4>Date Added</h4><span>24/08/2036</span></li>
                <li><h4>Hours Played</h4><span>634 H 22 Mins</span></li>
                <li><h4>Currently</h4><span>Downloaded</span></li>
                <li><div class="main-border-button border-no-active"><a href="#">Donwloaded</a></div></li>
              </ul>
            </div>
            <div class="item">
              <ul>
                <li><img src="assets/images/game-02.jpg" alt="" class="templatemo-item"/></li>
                <li><h4>Fortnite</h4><span>Sandbox</span></li>
                <li><h4>Date Added</h4><span>22/06/2036</span></li>
                <li><h4>Hours Played</h4><span>745 H 22 Mins</span></li>
                <li><h4>Currently</h4><span>Downloaded</span></li>
                <li><div class="main-border-button border-no-active"><a href="#">Donwloaded</a></div></li>
              </ul>
            </div>
            <div class="item last-item">
              <ul>
                <li><img src="assets/images/game-03.jpg" alt="" class="templatemo-item"/></li>
                <li><h4>CS-GO</h4><span>Sandbox</span></li>
                <li><h4>Date Added</h4><span>21/04/2022</span></li>
                <li><h4>Hours Played</h4><span>632 H 46 Mins</span></li>
                <li><h4>Currently</h4><span>Downloaded</span></li>
                <li><div class="main-border-button border-no-active"><a href="#">Donwloaded</a></div></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<footer>
  <div class="container">
    <div class="row">
      <div class="col-lg-12">
        <p>Copyright © 2036 <a href="#">Cyborg Gaming</a> Company. All rights reserved. 
        
        <br/>Design: <a href="https://templatemo.com" target="_blank" title="free CSS templates">TemplateMo</a></p>
      </div>
    </div>
  </div>
</footer>


<script src="vendor/jquery/jquery.min.js"></script>
<script src="vendor/bootstrap/js/bootstrap.min.js"></script>

<script src="assets/js/isotope.min.js"></script>
<script src="assets/js/owl-carousel.js"></script>
<script src="assets/js/tabs.js"></script>
<script src="assets/js/popup.js"></script>
<script src="assets/js/custom.js"></script>


</body>
    </div>
  )
}

export default Profile

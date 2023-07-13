import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet'
import { Link, useNavigate } from 'react-router-dom'

const Home = () => {

  const style1 = {
    width : '100px',
    backgroundColor : "#d166ae",
    borderColor : "transparent"
  }
  
  const style2 ={
    marginTop : '50px',
    width : '50%',
    margin : "auto",
    padding : "25px"
  }

  const style3 = {
    display: "flex",
    flexDirection : "column",
    padding: "24px",
    background: "#fff",
    // margin: "64px auto",
    // width: "1200px",
    borderRadius: "4px",
    boxShadow: "0 8px 26px 0 rgba(0,0,0,0.08)",
    backgroundColor: "#ffffff",
    position: "relative",
    top: "40px",
    margin: "0 auto !important"

  }

  const style4 = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center"
  }

  const style5 = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "160px",
    height: "112px",
    cursor: "pointer",
    padding: "24px 16px 16px 16px",
    overflow: "hidden",
    fontSize: "13px"
  }

  const style6 = {
    height: '100%',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    position : 'relative',
    zIndex: '2',
   
    margin: '0 auto',
   
    userSelect: 'none'
  }

  // var isServiceProvider = false

  const [isServiceProvider,setisServiceProvider] = useState(false)
  const [services,setservices] = useState()
  
 


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

  const getservcies = () => {
    axios.get("http://localhost:4000/service/getall").then((res) => {
      // console.log(res)
      setservices(res.data.data)
    }).catch((err) => {
      console.log(err)
    })
  }

  useEffect(()=> {
    
    getrole()
    getservcies()
   
  },[])
  // console.log(isServiceProvider)
 
  var navigate = useNavigate()

 const xyz =() =>{
  navigate("/login")
 }


const searchHandler = (e) => {

  console.log(e.target.value)
  const searchValue = e.target.value
  axios.get(`http://localhost:4000/service/search/${searchValue}`).then((res)=> {

    console.log(res.data)
    setservices(res.data.data)

  }).catch((err) => {
    getservcies()

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
                  

                  {/* {isServiceProvider && (
                  <ul class="nav">
                    <li><a href="browse.html">Browse</a></li>
                  </ul>
                )} */}

                
                  
                  <ul class="nav">
                      <li>
                        <Link to="/" class="active">Home</Link>
                      </li>
                      {isServiceProvider ? (
        <li><Link to="/service" >update or add service</Link></li>
      ) : (
        <li></li>
      )}

                      {/* <li>  
                        <Link to="/admin">Browse</Link>
                      </li> */}
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

<div class="container">
  <div class="row">
    <div class="col-lg-12">
      <div class="page-content">

        <div class="main-banner">
          <div class="row">
            <div class="col-lg-7">
              <div class="header-text">
                <h6>Welcome To local services</h6>
                <h4><em>Browse</em> Our Popular Services Here</h4>
                <div class="main-button">
                  <a href="browse.html">Browse Now</a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <div class="container"> */}
{/* <div class="row"> */}
    {/* <div class="col-lg-12 card-margin"> */}
    {/* <div class="search-input">
        <div class="card search-form">
            <div class="card-body p-0"> */}
                <form id="search-form" style={style2}>
                    <div class="row">
                        <div class="col-12" >
                            <div class="row no-gutters">
                                <div class="col-lg-3 col-md-3 col-sm-12 p-0">
                                    <select class="form-control" id="exampleFormControlSelect1">
                                    {/* {
                      services?.map((service) => {
                        return(
                          
                              <option>{service.city}</option>
                     
                        )
                      })
                    } */}
                                        <option>Location</option>
                                        <option>mehsana</option>
                                        <option>kalol</option>
                                        <option>ahemdabad</option>
                                        <option>surat</option>
                                        <option>kadi</option>
                                        <option>patan</option>
                                    </select>
                                </div>
                                <div class="col-lg-8 col-md-6 col-sm-12 p-0">
                                    <input type="text" placeholder="Search..." class="form-control" id="search" name="search" onChange={(e) => {searchHandler(e)}}/>
                                </div>
                                <div class="col-lg-1 col-md-3 col-sm-12 p-0">
                                    <button type="submit" class="btn btn-base btn-danger" style={style1} onClick={xyz}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-search"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            {/* </div>
        </div>
        </div> */}
    {/* </div> */}
{/* </div> */}
{/* </div> */}

<div class="QQv2Sq6z oQ0CIPUz" style={style3}>
<div class="E8EIc1Ll" style={style4}>
  <div class="WWGV0VF3" style={style5} title="Salon for Women">
<div class="EQxRuUQL d61TmRDY">
<img class="xuIDb25f" src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_64/t_high_res_template/images/growth/home-screen/1609757635235-1a139e.png" alt="" itemscope="" itemprop="image" loading="eager" fetchpriority="high"/>
</div>
<span class="bJdW2Qf5">Salon for women</span>
</div>
<div class="WWGV0VF3" style={style5} title="Hair, Skin &amp; Nails">
<div class="EQxRuUQL d61TmRDY">
  <img class="xuIDb25f" src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_64/t_high_res_template/images/growth/home-screen/1629973621437-ce5af9.png" alt="" itemscope="" itemprop="image" loading="eager" fetchpriority="high"/>
</div>
<span class="bJdW2Qf5">Hair, Skin, Nails</span>
</div>
<div class="WWGV0VF3" style={style5} title="Women's Therapies">
<div class="EQxRuUQL d61TmRDY">
<img class="xuIDb25f" src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_64/t_high_res_template/images/growth/home-screen/1672911239762-895917.jpeg" alt="" itemscope="" itemprop="image" loading="eager" fetchpriority="high"/>
</div>
<span class="bJdW2Qf5">Women's Therapies</span>
</div>
<div class="WWGV0VF3" style={style5} title="Salon for Men">
  <div class="EQxRuUQL d61TmRDY">
    <img class="xuIDb25f" src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_64/t_high_res_template/images/growth/home-screen/1609757629780-2b2187.png" alt="" itemscope="" itemprop="image" loading="eager" fetchpriority="high"/>
</div>
<span class="bJdW2Qf5">Salon for Men</span>
</div>
<div class="WWGV0VF3" style={style5} title="Men's Therapies">
  <div class="EQxRuUQL d61TmRDY">
    <img class="xuIDb25f" src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_64/t_high_res_template/images/growth/home-screen/1609757731250-ba3308.png" alt="" itemscope="" itemprop="image" loading="eager" fetchpriority="high"/>
    </div>
    <span class="bJdW2Qf5">Men's Therapies</span>
    </div>
    <div class="WWGV0VF3" style={style5} title="AC/Appliance Repair">
      <div class="EQxRuUQL d61TmRDY">
        <img class="xuIDb25f" src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_64/t_high_res_template/images/growth/home-screen/1672912455342-3123f1.jpeg" alt="" itemscope="" itemprop="image" loading="eager" fetchpriority="high"/>
        </div>
        <span class="bJdW2Qf5">AC/Appliance Repair</span>
        </div>
        </div>
        <div class="E8EIc1Ll" style={style4}>
          <div class="WWGV0VF3" style={style5} title="Home Painting">
            <div class="EQxRuUQL d61TmRDY">
              <img class="xuIDb25f" src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_64/t_high_res_template/images/growth/home-screen/1631679515206-a69389.png" alt="" itemscope="" itemprop="image" loading="eager" fetchpriority="high"/>
            </div>
            <span class="bJdW2Qf5">Home Painting</span>
          </div>
            <div class="WWGV0VF3" style={style5} title="Cleaning &amp; Pest Control">
              <div class="EQxRuUQL d61TmRDY">
                <img class="xuIDb25f" src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_64/t_high_res_template/categories/category_v2/category_6b1f5250.png" alt="" itemscope="" itemprop="image" loading="eager" fetchpriority="high"/>
              </div>
                <span class="bJdW2Qf5">Cleaning &amp; Pest Control</span>
            </div>
            <div class="WWGV0VF3" style={style5} title="Home Repairs">
                  <div class="EQxRuUQL d61TmRDY">
                    <img class="xuIDb25f" src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_64/t_high_res_template/images/growth/home-screen/1672912452485-cbbbc5.jpeg" alt="" itemscope="" itemprop="image" loading="eager" fetchpriority="high"/>
                    </div>
                    <span class="bJdW2Qf5">Home Repairs</span>
             </div>
         </div>
 </div>



// Appliances part commented out

{/* <div class="v70iryFl xBZ0gsA2" style={style6}>
  <div class="vRRzMQAS">
    <h1 class="QN1NtL_h">Appliances</h1>
    <span class="QpvuWbjE">Servicing, Repair, Installation &amp; Uninstallation</span>
    </div><div class="STndLDlO">
      <div class="_kZwyvaL" style={style6}><span class="cJL0Y75D Z1WKGOiR OkDWLsSD QAntiXYn">
        <span class="XUrUEAVT" data-icon=""></span>
        </span>
        <span class="uCPIptd9 riiVwa6I OkDWLsSD QAntiXYn">
          <span class="ZrqPBULn" data-icon=""></span>
          </span>
          <div class="v9UPpDWi" >
            <ul class="Jh9weeDK" >
              <li  class="sAL9gYM8">
                <div class="gD17WxI_"><div class="EQxRuUQL JRK9UwNs">
                  <img class="meNGvYr5" src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_532/t_high_res_category/categories/category_v2/category_bf5acc80.png" alt="" itemscope="" itemprop="image" loading="lazy"/>
                  </div>
                  <p class="OHkaHYtx">Refrigerator</p>
                  </div>
                  </li>
                  <li  class="sAL9gYM8">
                    <div class="gD17WxI_">
                      <div class="EQxRuUQL JRK9UwNs">
                        <img class="meNGvYr5" src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_532/t_high_res_category/categories/category_v2/category_c0667020.png" alt="" itemscope="" itemprop="image" loading="lazy"/>
                        </div>
                        <p class="OHkaHYtx">Geyser Repair</p>
                        <p class="Wj8Hv5pf">Starts at ₹249</p>
                        </div>
                        </li>
                        <li  class="sAL9gYM8"><div class="gD17WxI_"><div class="EQxRuUQL JRK9UwNs"><img class="meNGvYr5" src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_532/t_high_res_category/categories/category_v2/category_bbb8c690.png" alt="" itemscope="" itemprop="image" loading="lazy"/></div><p class="OHkaHYtx">Water Purifier Repair</p><p class="Wj8Hv5pf">Up to 45% Off</p></div></li><li  class="sAL9gYM8"><div class="gD17WxI_"><div class="EQxRuUQL JRK9UwNs"><img class="meNGvYr5" src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_532/t_high_res_category/categories/category_v2/category_b78221c0.png" alt="" itemscope="" itemprop="image" loading="lazy"/></div><p class="OHkaHYtx">Washing Machine Repair</p></div></li></ul></div></div></div></div>                     */}




        <div class="most-popular">
          <div class="row">
            <div class="col-lg-12">
              <div class="heading-section">
                <h4><em>Most Searched</em> Right Now</h4>
              </div>
              <div class="row">
                
                    {/* <h4>Fortnite<br/><span>Sandbox</span></h4> */}

                    {/* <h4>medical clinic<br/><span></span></h4> */}
                    {
                      services?.map((service) => {
                        return(
                          <div class="col-lg-3 col-sm-6">
                           <div class="item">
                            <img src="assets/images/saloon.jpg" alt="" />
                              <h4>{service.name}<br/><span></span></h4>
                           <ul>
                               <li><i class="fa fa-star"></i> 4.8</li>
                      {/* <li><i class="fa fa-download"></i> 2.3M</li> */}
                          </ul>
                    </div>
                </div>
                        )
                      })
                    }
                    
                {/* <div class="col-lg-3 col-sm-6"> */}
                  {/* <div class="item"> */}
                  {/* <img class="xuIDb25f" src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_64/t_high_res_template/images/growth/home-screen/1609757635235-1a139e.png" alt="" itemscope="" itemprop="image" loading="lazy" style={style3}/> */}
                    {/* <h4>PubG<br/><span>Battle S</span></h4> */}
                    {/* <br/> */}
                    {/* <h4>grocery store<br/><span></span></h4>
                    <ul>
                      <li><i class="fa fa-star"></i> 4.8</li>
                      <li><i class="fa fa-download"></i> 2.3M</li>
                    </ul>
                  </div>
                </div>
                <div class="col-lg-3 col-sm-6">
                  <div class="item">
                    <img src="assets/images/popular-03.jpg" alt=""/> */}
                    {/* <h4>Dota2<br/><span>Steam-X</span></h4> */}
                    {/* <h4>beauty parlor<br/><span></span></h4>
                    <ul>
                      <li><i class="fa fa-star"></i> 4.8</li> */}
                      {/* <li><i class="fa fa-download"></i> 2.3M</li> */}
                    {/* </ul>
                  </div>
                </div>
                <div class="col-lg-3 col-sm-6"> */}
                  {/* <div class="item">
                    <img src="assets/images/popular-04.jpg" alt=""/> */}
                    {/* <h4>CS-GO<br/><span>Legendary</span></h4> */}
                    {/* <h4>hospital<br/><span></span></h4>
                    <ul>
                      <li><i class="fa fa-star"></i> 4.8</li> */}
                      {/* <li><i class="fa fa-download"></i> 2.3M</li> */}
                    {/* </ul>
                  </div>
                </div>
                <div class="col-lg-6">
                  <div class="item">
                    <div class="row">
                      <div class="col-lg-6 col-sm-6">
                        <div class="item inner-item">
                          <img src="assets/images/popular-05.jpg" alt=""/> */}
                          {/* <h4>Mini Craft<br/><span>Legendary</span></h4> */}
                          {/* <h4>broadband services<br/><span></span></h4>
                          <ul>
                            <li><i class="fa fa-star"></i> 4.8</li> */}
                            {/* <li><i class="fa fa-download"></i> 2.3M</li> */}
                          {/* </ul>
                        </div>
                      </div> */}
                      {/* <div class="col-lg-6 col-sm-6">
                        <div class="item">
                          <img src="assets/images/popular-06.jpg" alt=""/>
                          <h4>Eagles Fly<br/><span>Matrix Games</span></h4>
                          <ul>
                            <li><i class="fa fa-star"></i> 4.8</li>
                            <li><i class="fa fa-download"></i> 2.3M</li>
                          </ul>
                        </div>
                      </div> */}
                    {/* </div>
                  </div>
                </div> */}
                {/* <div class="col-lg-3 col-sm-6">
                  <div class="item">
                    <img src="assets/images/popular-07.jpg" alt=""/>
                    <h4>Warface<br/><span>Max 3D</span></h4>
                    <ul>
                      <li><i class="fa fa-star"></i> 4.8</li>
                      <li><i class="fa fa-download"></i> 2.3M</li>
                    </ul>
                  </div>
                </div> */}
                {/* <div class="col-lg-3 col-sm-6">
                  <div class="item">
                    <img src="assets/images/popular-08.jpg" alt=""/>
                    <h4>Warcraft<br/><span>Legend</span></h4>
                    <ul>
                      <li><i class="fa fa-star"></i> 4.8</li>
                      <li><i class="fa fa-download"></i> 2.3M</li>
                    </ul>
                  </div>
                </div> */}
                <div class="col-lg-12">
                  <div class="main-button">
                    <a href="browse.html">Discover Popular</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
       
        <div class="gaming-library">
          <div class="col-lg-12">
            <div class="heading-section">
              <h4><em>Your previous</em> search history</h4>
            </div>
            <div class="item">
              <ul>
                <li><img src="assets/images/game-01.jpg" alt="" class="templatemo-item"/></li>
                <li><h4>medical clinic</h4><span>_______</span></li>
                <li><h4>Date Searched</h4><span>24/08/2036</span></li>
                {/* <li><h4>Hours Played</h4><span>634 H 22 Mins</span></li>
                <li><h4>Currently</h4><span>Downloaded</span></li> */}
                <li><div class="main-border-button "><a href="#">Search</a></div></li>
              </ul>
            </div>
            <div class="item">
              <ul>
                <li><img src="assets/images/game-02.jpg" alt="" class="templatemo-item"/></li>
                <li><h4>barber shop</h4><span> _______ </span></li>
                <li><h4>Date Searched</h4><span>22/06/2036</span></li>
                {/* <li><h4>Hours Played</h4><span>740 H 52 Mins</span></li>
                <li><h4>Currently</h4><span>Downloaded</span></li> */}
                <li><div class="main-border-button"><a href="#">Search</a></div></li>
              </ul>
            </div>
            <div class="item last-item">
              <ul>
                <li><img src="assets/images/game-03.jpg" alt="" class="templatemo-item"/></li>
                <li><h4>broadband services</h4><span>_______</span></li>
                <li><h4>Date Searched</h4><span>21/04/2036</span></li>
                {/* <li><h4>Hours Played</h4><span>892 H 14 Mins</span></li>
                <li><h4>Currently</h4><span>Downloaded</span></li> */}
                <li><div class="main-border-button"><a href="#">Search</a></div></li>
              </ul>
            </div>
          </div>
          <div class="col-lg-12">
            <div class="main-button">
              <a href="profile.html">View Your full history</a>
            </div>
          </div>
        </div>
       
      </div>
    </div>
  </div>
</div>

<footer>
  <div class="container">
    {/* <div class="row">
      <div class="col-lg-12">
        <p>Copyright © 2036 <a href="#">Cyborg Gaming</a> Company. All rights reserved. 
        
        <br/>Design: <a href="https://templatemo.com" target="_blank" title="free CSS templates">TemplateMo</a></p>
      </div>
    </div> */}
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

export default Home

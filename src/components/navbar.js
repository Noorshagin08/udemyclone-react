 function Navbar(){
    return(
         <div className="navbar">
        <div class="navbar__s1">
            <h1 class="navbar__s1__title">Udemy</h1>

        </div>
        <div class="navbar__s2">
            <i class="fa-solid fa-magnifying-glass" style={{color: "rgb(2, 2, 2)"}}></i>
            <input placeholder="Search for anything here.Tech, Business,Art..."></input>

        </div>
        <div class="navbar__s3">
            <p>Courses</p>
            <p>My Learning</p>
             <div class="mylearning">
              <p>My Learning</p>
              <div class="mylearning__popup">
                <p>you did not purchase anything yet</p>

              </div>
             </div>
            <i class="fa-solid fa-cart-shopping" style={{color:"rgb(2, 2, 2)"}}></i>
            <i class="fa-solid fa-bell" style={{color:"rgb(2, 2, 2)"}}></i>
            <i class="fa-solid fa-user" style={{color:"rgb(2, 2, 2)"}}></i>

        </div>
        <div class="navbar__s4">
          <i class="fa-solid fa-bars" style={{color:"rgb(3, 3, 3)"}}></i> 

        </div>
       </div>

    )
 }
 export default Navbar

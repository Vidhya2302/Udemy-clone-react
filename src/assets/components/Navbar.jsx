
//navbar
function Navbar() {
    return (
      <div className="navbar">
        <div className="navbar__s1">
          <h1 className="navbar__s1__title">Udemy</h1>
  
        </div>
        <div className="navbar__s2">
          <i className="fa-solid fa-magnifying-glass" style= {{color: "#080a0c"}}></i>
          <input placeholder="Search for anything here. Tech, Business, Art..." />
  
        </div>
        <div className="navbar__s3">
          <p>Courses</p>
          <div className="mylearning">
            <p>My Learning</p>
            <div className="mylearning__popup">
              <p>You didn't purchase anything yet</p>
            </div>
          </div>
  
          <i className="fa-solid fa-cart-shopping" style={{ color: "#0c0d0d" }}></i>
          <i className="fa-solid fa-bell" style={{ color: "#0a0a0a" }}></i>
          <i className="fa-solid fa-user" style={{ color: "#0a0a0a" }}></i>
        </div>
        <div className="navbar__s4">
          <i className="fa-solid fa-bars"></i>
        </div>
      </div>
    )
  }

  export default Navbar
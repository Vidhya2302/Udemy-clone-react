import c1 from "../images/c1.jpg"
 import c5 from "../images/c5.jpg"
 import c2 from "../images/c2.jpg"
 import c3 from "../images/c3.jpg"
 

 function Recommended(){
  return(
    <div class="recommended">
        <h1 className="recommended__title">Recommended for you</h1>
        <p>Pick the best fit</p>
        <div className="recommended__container">
            <div className="course-card">
                <img src= {c1} />
                <h3>2024 Python Data Visaulisation Materclass</h3>
                <p>Col Steele</p>
                <p>4.9 ⭐⭐⭐⭐</p>
                <p>449 <del>1999</del></p>
            </div>
            <div className="course-card">
                <img src= {c5} />
                <h3>Web Development Bootcamp 2024 | Advance</h3>
                <p>shree nee</p>
                <p>3.9⭐⭐⭐</p>
                <p>449 <del>1999</del></p>
            </div>
            <div className="course-card">
                <img src= {c2} />
                <h3>Master UI/UX Designing with Figma</h3>
                <p>Evan paul</p>
                <p>4.5⭐⭐⭐⭐</p>
                <p>449 <del>1999</del></p>
            </div>

            <div className="course-card">
                <img src= {c3} />
                <h3>Basic to Advance Java core Trainning</h3>
                <p>krithick raj</p>
                <p>4.2⭐⭐⭐⭐</p>
                <p>449 <del>1999</del></p>
            </div>
        </div>
    </div>

  )
 }

 export default Recommended
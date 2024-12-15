
import c1 from "../images/c1.jpg"
import c2 from "../images/c2.jpg"
import c3 from "../images/c3.jpg"
import c4 from "../images/c4.jpg"
import c6 from "../images/c6.jpg"
import c7 from "../images/c7.jpg"
import c8 from "../images/c8.jpg"

function Popular(){
  return(

    <div className="popular">
    <h1 class="popular__title">Most popular</h1>
    <p className="popular__subtitle">Pick the best fit</p>
    <div className="popular__container">
        <div className="course-card">
            <img src= {c1} />
            <h3>2024 Python Data Visaulisation Materclass</h3>
            <p> Ranjith perk</p>
            <p>4.9 ⭐⭐⭐⭐</p>
            <p>449 <del>1999</del></p>
        </div>
        <div className="course-card">
            <img src= {c8} />
            <h3>Web Development Bootcamp 2024 | Advance</h3>
            <p>Vidhy K B</p>
            <p>3.9⭐⭐⭐</p>
            <p>449 <del>1999</del></p>
        </div>
        <div className="course-card">
            <img src= {c2} />
            <h3>Master UI/UX Designing with Figma</h3>
            <p>srini Vdamulu</p>
            <p>4.5⭐⭐⭐⭐</p>
            <p>449 <del>1999</del></p>
        </div>

        <div className="course-card">
            <img src= {c3} />
            <h3>Basic to Advance Java core Trainning</h3>
            <p>Jon Duckett</p>
            <p>4.2⭐⭐⭐⭐</p>
            <p>449 <del>1999</del></p>
        </div>
        <div className="course-card">
            <img src= {c7} />
            <h3>2024 Python Data Visaulisation Materclass</h3>
            <p>Aravind Adiga</p>
            <p>4.9 ⭐⭐⭐⭐</p>
            <p>449 <del>1999</del></p>
        </div>
        <div className="course-card">
            <img src= {c4} />
            <h3>Web Development Bootcamp 2024 | Advance</h3>
            <p>Tim Berners-Lee</p>
            <p>3.9⭐⭐⭐</p>
            <p>449 <del>1999</del></p>
        </div>
        <div className="course-card">
            <img src= {c1} />
            <h3>Master UI/UX Designing with Figma</h3>
            <p>Col Steele</p>
            <p>4.5⭐⭐⭐⭐</p>
            <p>449 <del>1999</del></p>
        </div>

        <div className="course-card">
            <img src= {c6} />
            <h3>Basic to Advance Java core Trainning</h3>
            <p>Mulk Raj Anand</p>
            <p>4.2⭐⭐⭐⭐</p>
            <p>449 <del>1999</del></p>
        </div>
    </div>
</div>
    
  )
}

export default Popular
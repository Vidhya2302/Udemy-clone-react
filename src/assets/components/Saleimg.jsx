import saleimg from "../images/sales img.jpg"
function Saleimg()
 {
  return(
    <div className="sales-image">
        <img src={saleimg}  alt="Sale Image" className="sales-img__one" />
        <div className="sales-image__offer">
            <h2>Udemy Flash Sale!
                24 hours to save.
            </h2>
            <p>Get the top courses for just 499. Just one day to save but a lifetime to learn</p>
        </div>
    </div>
  )
 }

 export default Saleimg


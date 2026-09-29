import img1 from "../assets/images/c1.avif"
import img2 from "../assets/images/c2.avif"
import img3 from "../assets/images/c3.avif"
import img4 from "../assets/images/c4.avif"

function Popular() {
  return (
    <>
      <div className="popular">
        <h1 className="popular__title">Most Popular</h1>
        <p className="popular__des">Pick the best fit</p>

        <div className="container">

          <div className="Course-card">
            <img src={img4} alt="img4" />
            <h3>Web Development Bootcamp 2023</h3>
            <p>col steele</p>
            <p>3.9 ⭐⭐⭐</p>
            <p>₹249 <del>1999</del></p>
          </div>

          <div className="Course-card">
            <img src={img3} alt="img3" />
            <h3>2023 Advance AI Masterclass</h3>
            <p>col steele</p>
            <p>4.4 ⭐⭐⭐⭐</p>
            <p>₹549 <del>999</del></p>
          </div>

          <div className="Course-card">
            <img src={img2} alt="img2" />
            <h3>Master UI/UX Designing Class</h3>
            <p>col steele</p>
            <p>3.8 ⭐⭐⭐</p>
            <p>₹399 <del>899</del></p>
          </div>

          <div className="Course-card">
            <img src={img1} alt="img1" />
            <h3>2023 python Data Visualization Masterclass</h3>
            <p>col steele</p>
            <p>4.8 ⭐⭐⭐⭐</p>
            <p>₹449 <del>799</del></p>
          </div>

          <div className="Course-card">
            <img src={img1} alt="c1" />
            <h3>2023 python Data Visualization Masterclass</h3>
            <p>col steele</p>
            <p>4.8 ⭐⭐⭐⭐</p>
            <p>₹449 <del>799</del></p>
          </div>

          <div className="Course-card">
            <img src={img4} alt="img4" />
            <h3>Master UI/UX Designing Class</h3>
            <p>col steele</p>
            <p>3.8 ⭐⭐⭐</p>
            <p>₹399 <del>899</del></p>
          </div>

          <div className="Course-card">
            <img src={img3} alt="img3" />
            <h3>2023 Advance AI Masterclass</h3>
            <p>col steele</p>
            <p>4.4 ⭐⭐⭐⭐</p>
            <p>₹549 <del>999</del></p>
          </div>

          <div className="Course-card">
            <img src={img2} alt="img2" />
            <h3>Web Development Bootcamp 2023</h3>
            <p>col steele</p>
            <p>3.9 ⭐⭐⭐</p>
            <p>₹249 <del>1999</del></p>
          </div>

        </div>
      </div>
    </>
  );
}




export default Popular
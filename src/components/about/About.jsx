import "./about.css"
import hello from "../../img/hello.jpg"
import review from "../../img/review.png"

const About = () => {
    return (
        <div className="a">
           <div className="a-left">
               <div className="a-card bg"></div>
               <div className="a-card">
                  <img src={hello} alt="" className="a-img" />
               </div>
           </div>
           <div className="a-right">
               <h1 className="a-title">About Me</h1>
               <p className="a-sub">
                   I am a web developer.
               </p>
               <p className="a-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
               Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
               <div className="a-award">
                   <img src={review} alt="" className="a-award-img" />
                   <div className="a-award-texts">
                    <h4 className="a-award-title">SKills You Can Trust</h4>
                    <p className="a-award-desc">
                    Working with Akira to redesign my website page was great. I gave her my ideas & she executed it perfectly. She was also extremely patient and made adjustments in a timely manner. I will definitely use her again in the future.
                    <p>-DeAngela Hale, Personal Training by Dee</p>
                    </p>
                   </div>
               </div>
           </div>
        </div>
    )
}

export default About
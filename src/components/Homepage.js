import "./homepage.css";
import { Button } from "react-bootstrap";
import { SocialIcon } from "react-social-icons";
import dfwlogo from "./dfwlogo.png";

function Homepage() {
  return (
    <div className="homepage-container">
        <div className="homepage-text-container">
            <div className="homepage-grid-item1">
                <img src={dfwlogo} alt="" width="300" height="175" />
            </div>
            <div className="homepage-grid-item2">
                <h1>DFW<br></br>Sports <br></br>Scanner</h1>
            </div>
            <div className="homepage-grid-item3">
                <p>Your one-stop-shop for all things DFW sports</p>
            </div>
        </div>
        <div className="homepage-link-panel">
            <ul className="homepage-links">
                <li><a href="/dallascowboys"><Button id="homepage-first-button" className="homepage-button">Dallas Cowboys</Button></a></li>
                <li><a href="/dallasmavericks"><Button className="homepage-button">Dallas Mavericks</Button></a></li>
                <li><a href="/texasrangers"><Button className="homepage-button">Texas Rangers</Button></a></li>
                <li><a href="/dallasstars"><Button className="homepage-button">Dallas Stars</Button></a></li>
                <li><a href="/dallaswings"><Button className="homepage-button">Dallas Wings</Button></a></li>
                <li><a href="/fcdallas"><Button className="homepage-button">FC Dallas</Button></a></li>
            </ul>
            <div>
                <ul className="homepage-social-links-ul">
                    <li className="homepage-social-links"><SocialIcon fgColor={"#423f32"} bgColor={"transparent"} style={{width:"5rem"}} url="https://www.facebook.com/" /></li>
                    <li className="homepage-social-links"><SocialIcon fgColor={"#423f32"} bgColor={"transparent"} style={{width:"5rem"}} url="https://www.instagram.com/" /></li>
                    <li className="homepage-social-links"><SocialIcon fgColor={"#423f32"} bgColor={"transparent"} style={{width:"5rem"}} url="https://www.twitter.com/" /></li>
                </ul>
            </div>
        </div>
    </div>
  );
}

export default Homepage;

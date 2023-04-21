import "./texasrangerspage.css";
import { Button } from "react-bootstrap";
import rangersLogo from "./rangers-logo.png";

function TexasRangersPage({navigate}) {
  return (
    <div className="texas-rangers-page-container">
        <Button 
        className="back-button"
        onClick={() => {
          navigate("/");
        }}
        >Back</Button>
        <div className="rangers-header-container">
          <img className="rangers-page-grid-item-1 cowboys-logo-image" src={rangersLogo} alt="Cowboys Logo" width="100" height="100" />
          <div className="rangers-page-grid-item-2">
            <h1 className="rangers-page-h1">Texas Rangers</h1>
            <p className="rangers-page-p1">Record: 12-6 | 1st West</p>
          </div>
        </div>
    </div>
  );
}

export default TexasRangersPage;
import React from 'react';
import location from "../../../logos/map-marker-alt-solid 1.png";
import facebook from "../../../logos/Vector.png";
import instagram from '../../../logos/Vector-1.png';
import linkedin from '../../../logos/Vector-2.png';
import youtube from "../../../logos/Vector-3.png";
const Footer = () => {
    return (
        <div className="row  pt-2 pl-3 text-white" style={{ backgroundColor: "#275A53" }}>
            < div className="col-md-4 mt-3   d-flex"><img style={{ filter: 'brightness(4)', height: "40px" }} className="white" src={location} />
                <p>H#340 (4th Floor), Road #24,<br />
                    New DOHS, Mohakhali, Dhaka, Bangladesh<br />
                    Phone: 018XXXXXXXX<br />
                    E-mail: info@company.com</p></div>
            <div className="col-md-8">
                <div className="row">
                    <div className="col-md-4"><ul style={{ listStyleType: 'none' }}><li className="" style={{ fontWeight: 'bolder' }}>Company</li>
                        <li className="">About</li>
                        <li className="" >Site Map</li>
                        <li className="">Support Center</li>
                        <li className="">Terms Condition</li>
                        <li className="">Submit listing</li></ul></div>
                    <div className="col-md-4"><ul style={{ listStyleType: 'none' }}><li style={{ fontWeight: 'bolder' }}>Quick Links</li>
                        <li>Quick Links</li>
                        <li>Rentals</li>
                        <li>Sales</li>
                        <li>Contact</li>
                        <li>Terms conditions</li>
                        <li>Our blog</li></ul ></div>
                    <div className="col-md-4">
                        <ul style={{ listStyleType: 'none' }}><li className="mr-3" style={{ fontWeight: 'bolder' }}>About us</li>
                        </ul>
                        <small>We are the top real estate <br />
                            agency in Sydney, with agents<br />
                            available to answer any <br />
                            question 24/7.</small>
                        <div className="ml-3 d-flex">
                            <img style={{ height: "40px" }} className="mr-2" src={facebook} />
                            <img style={{ height: "40px" }} className="mr-2" src={instagram} />
                            <img style={{ height: "40px" }} className="mr-2" src={linkedin} />
                            <img style={{ height: "40px" }} className="mr-2" src={youtube} />

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
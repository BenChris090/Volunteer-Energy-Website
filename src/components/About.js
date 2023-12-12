import Navbar from "./Navbar";
import FootBar from "./Footbar";
import { NavLink,Link } from "react-router-dom";
import { FaAt, FaStar, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

const About = () => {
    let INDEXP = require("../images/INDEXP.jpg");
    let QM = require("../images/GM.jpg");
    let TYPEWRITER = require("../images/CE.jpg");
    let CCA = require("../images/CCA.jpg");

    return ( 
        <div className="about h-full">
            <Navbar/>
            
            <div className="header text-white px-6 lg:px-24 py-10 bg-[url('./images/bg4.jpg')] bg-no-repeat bg-cover bg-center space-y-2">
                <h1 className="text-2xl lg:text-4xl"><b>About Volunteer Energy</b></h1>
                <p className="text-xl text-justify lg:max-w-xl">At Volunteer Energy, we illuminate paths to success in the energy and general merchandise sectors. 
                Established on the pillars of innovation, sustainability, and client-centricity, Volunteer Energy is your comprehensive partner in oil and gas consulting 
                and high-quality general merchandise services.</p>
                <ul className="flex text-white items-center lg:pt-5 lg:px-2">
                    <FaAt className="text-3xl lg:text-4xl hover:text-pink-600 ease-in duration-500"/>
                    <Link to="https://twitter.com"><FaTwitter className="text-3xl lg:text-4xl ml-4 lg:ml-20 hover:text-pink-600 ease-in duration-500"/></Link>
                    <Link to="https://instagram.com"><FaInstagram className="text-3xl lg:text-4xl ml-4 lg:ml-20 hover:text-pink-600 ease-in duration-500"/></Link>
                    <Link to="https://linkedin.com"><FaLinkedin className="text-3xl lg:text-4xl ml-4 lg:ml-20 hover:text-pink-600 ease-in duration-500"/></Link>
                </ul>
            </div>
            <div className="body text-left space-y-2 px-6 lg:px-24 py-8">
                <h1 className="text-2xl lg:text-3xl p-2"><b>Our Story</b></h1>
                <p className="text-lg lg:text-xl lg:text-justify text-gray-700 font-medium py-2 px-2">Founded with a vision to redefine excellence, 
                Volunteer Energy is the product of industry expertise and a passion for making a positive impact. Our journey began with a commitment to providing innovative solutions 
                and a diverse range of top-quality general merchandise.</p>                
                <h1 className="text-2xl lg:text-3xl p-2"><b>What Sets Us Apart</b></h1>
                <ul className="space-y-2">
                    <li className="flex text-lg px-2 text-gray-700 font-medium items-center"><FaStar className="text-pink-600 mr-2"></FaStar> Industry Expertise</li>
                    <li className="flex text-lg px-2 text-gray-700 font-medium items-center"><FaStar className="text-pink-600 mr-2"></FaStar> Quality Merchandise</li>
                    <li className="flex text-lg px-2 text-gray-700 font-medium items-center"><FaStar className="text-pink-600 mr-2"></FaStar> Reliable customer service</li>
                    <li className="flex text-lg px-2 text-gray-700 font-medium items-center"><FaStar className="text-pink-600 mr-2"></FaStar> Client-Centric Approach</li>
                </ul>
                <h1 className="text-2xl lg:text-3xl p-2"><b>Our Commitment</b></h1>
                <p className="text-lg text-justify lg:text-xl lg:text-justify text-gray-700 font-medium py-2 px-2">Volunteer Energy is more than a business; 
                it's a commitment to excellence, sustainability, and positive impact across the energy and general merchandise sectors. We are dedicated to creating a brighter 
                and more sustainable future for our clients, partners, and communities..</p>   
            </div>
            <div className="body text-center space-y-2 px-6 lg:px-48 py-8">
                <h1 className="text-2xl lg:text-3xl p-2"><b>World Leading Energy Institution</b></h1>
                <p className="text-lg lg:text-xl text-gray-700 font-medium py-2 px-2">Our dedication to excellence is demonstrated through rigorous adherence to industry standards and transparent practices. 
                Whether in oil and gas consulting or general merchandise services, our commitment to quality extends to every facet of our operations, ensuring exceptional client experiences.</p>
            </div>
            <div className="body text-left px-6 lg:px-24 py-8 space-y-4 lg:space-x-4 lg:space-y-0 lg:flex">
                <div className="w-full space-y-2 shadow-xl rounded-xl border-2 border-black lg:w-1/4 py-10 px-4 hover:scale-105">
                    <img src={INDEXP} alt="debit_card" className="w-1/4"/>
                    <h2 className="text-xl font-semibold">Industry Expertise</h2>
                    <p>Our seasoned professionals bring extensive experience to the table, 
                        ensuring strategic insights and effective solutions in both oil 
                        and gas consulting and the general merchandise landscape..</p>
                </div>
                <div className="w-full space-y-2 shadow-xl rounded-xl border-2 border-black lg:w-1/4 py-10 px-4 hover:scale-105">
                    <img src={QM} alt="credit_card" className="w-1/4"/>
                    <h2 className="text-xl font-semibold">Quality Merchandise</h2>
                    <p>At Volunteer Energy, we pride ourselves on curating a diverse range of high-quality general merchandise. 
                        Our commitment to excellence extends to every product we offer</p>
                </div>
                <div className="w-full space-y-2 shadow-xl rounded-xl border-2 border-black lg:w-1/4 py-10 px-4 hover:scale-105">
                    <img src={TYPEWRITER} alt="prepaid_card" className="w-1/4"/>
                    <h2 className="text-xl font-semibold">Reliable customer service</h2>
                    <p>We are synonymous with innovation, building excellence, 
                        superior financial performance and creating role models for society.</p>
                </div>
                <div className="w-full space-y-2 shadow-xl rounded-xl border-2 border-black lg:w-1/4 py-10 px-4 hover:scale-105">
                    <img src={CCA} alt="mobile_wallet" className="w-1/4"/>
                    <h2 className="text-xl font-semibold">Client-Centric Approach</h2>
                    <p>We don't just do business; we build relationships. Our client-centric approach 
                        involves understanding the unique needs of our clients and delivering tailored solutions that contribute to their success.</p>
                </div>
            </div>
            <FootBar/>
        </div>
     );
}
 
export default About;
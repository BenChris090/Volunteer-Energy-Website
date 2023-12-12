import Navbar from "./Navbar";
import FootBar from "./Footbar";
import { NavLink,Link } from "react-router-dom";
import { FaAt, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa"
import { BsApple,BsAndroid2 } from "react-icons/bs"

const Home = () => {
    let HOME_PIC1 = require('../images/CE.jpg');
    let HOME_PIC2 = require('../images/GM.jpg');
    let HOME_PIC3 = require('../images/CCA.jpg');

    return ( 
        <div className="home h-full bg-white">
            <Navbar/>
            <div className="p-6 w-full bg-[url('./images/bg4.jpg')] bg-no-repeat bg-cover bg-center items-center space-y-4 lg:p-24 lg:space-y-4 lg:justify-around lg:h-[28rem] lg:max-h-[29rem]">
                <h1 class="top-3 text-pink-600 font-bold text-3xl lg:text-5xl lg:max-w-4xl">Everyone Can...<br/><b className="text-black text-lg lg:text-xl">Experience Unmatched Consulting Expertise,
                    Explore a Diverse Range of General Merchandise Services,
                    And Enjoy a Client-Centric Approach,
                    All With Zero Compromise.</b>
                </h1>
                <h1><NavLink className="p-2 border-2 text-white rounded-lg  bg-black hover:bg-pink-600  ease-in duration-500"><b>Learn More......</b></NavLink></h1>

                <ul className="flex lg:pt-10">
                    <FaAt className="text-3xl lg:text-4xl text-black hover:text-pink-600 ease-in duration-500"/>
                    <Link to="https://twitter.com"><FaTwitter className="text-3xl lg:text-4xl text-black ml-4 lg:ml-20 hover:text-pink-600 ease-in duration-500"/></Link>
                    <Link to="https://instagram.com"><FaInstagram className="text-3xl lg:text-4xl text-black ml-4 lg:ml-20 hover:text-pink-600 ease-in duration-500"/></Link>
                    <Link to="https://linkedin.com"><FaLinkedin className="text-3xl lg:text-4xl text-black ml-4 lg:ml-20 hover:text-pink-600 ease-in duration-500"/></Link>
                </ul>
            </div>
            <div className="apps bg-sky-600 px-6 py-4 items-center text-white lg:flex lg:px-24 lg:space-x-48">
                <h1 className="text-lg lg:text-2xl">Download Our Mobile app & Get Swift, Efficient service just for you.</h1>
                <ul className="flex text-sky-600 space-x-4">
                    <Link to="#" className="flex p-2 items-center border-2 bg-white rounded-md hover:text-sky-600 ease-in duration-500"><BsApple className="text-lg mr-2 my-auto hover:text-sky-600 ease-in duration-500 lg:text-xl lg:mr-4"/><b>App Store</b></Link>
                    <Link to="#" className="flex p-2 items-center border-2 bg-white rounded-md hover:text-sky-600 ease-in duration-500"><BsAndroid2 className="text-lg mr-2 my-auto hover:text-sky-600 ease-in duration-500 lg:text-xl lg:mr-4"/><b>Play Store</b></Link>
                </ul>
            </div>
            <div className="learn p-2 lg:mt-10">
                <h1 className="text-lg text-center lg:text-4xl"><b>Innovate Good Energy, Elevate Commerce</b></h1>
                <p className="text-lg text-center text-sky-600 md:font-semibold lg:text-2xl">World Leading Energy Institution</p>
                <section className="px-4 py-10 justify-center items-center space-y-4 lg:flex lg:space-y-0 lg:space-x-4 lg:px-24">
                    <div className="p-4 space-y-2 lg:px-4 lg:h-[25rem] lg:w-1/3 lg:max-w-52">
                        <img src={ HOME_PIC1 } className=" w-full lg:mx-auto lg:h-52" alt="Dog Pic" />
                        <h2 className="text-lg lg:text-xl"><b>Consulting Expertise</b></h2>
                        <p className="text-justify">Discover tailored consulting expertise packages with complimentary 
                        and premium add-ons for complete customization. Download, complete, 
                        and submit your application at our office to get started</p>
                    </div>
                    <div className="p-4 space-y-2 lg:px-4 lg:h-[25rem] lg:w-1/3 lg:max-w-52">
                        <img src={ HOME_PIC2 } className=" w-full lg:mx-auto lg:h-52" alt="Dog Pic" />
                        <h2 className="text-lg lg:text-xl"><b>General Merchandise Services</b></h2>
                        <p className="text-justify">We embody a commitment to excellence, 
                        ensuring our merchandise reflects the highest quality and sets the standard for the industry.</p>
                    </div>
                    <div className="p-4 space-y-2 lg:px-4 lg:h-[25rem] lg:w-1/3 lg:max-w-52">
                        <img src={ HOME_PIC3 } className=" w-full lg:mx-auto lg:h-52" alt="Dog Pic" />
                        <h2 className="text-lg lg:text-xl"><b>Client-Centric Approach</b></h2>
                        <p className="text-justify">Discover personalized solutions with convenient access to crucial information and secure transactions, 
                        placing your needs at the forefront. Your satisfaction is our dedication, wherever your merchandise ventures lead</p>
                    </div>
                </section>
            </div>
            <FootBar/>
        </div>
     );
}
 
export default Home
import Footer from "../Footer";
import Navbar from "../Navbar";
import OpenAcc from "../OpenAcc";
import Education from "./Eductaion";
import Invest from "./Invest";
import Pricing from "./Pricing";
import Trust from "./Trust";

export default function HomePage(){
    return(
        <>
            <Invest/>
            <Trust/>
            <Pricing/>
            <Education/>
            <OpenAcc/>
        </>
    )
}
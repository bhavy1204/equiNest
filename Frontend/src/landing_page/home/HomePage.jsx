import Footer from "../Footer";
import Navbar from "../Navbar";
import OpenAcc from "../OpenAcc";
import Education from "./Eductaion";
import Invest from "./Invest";
import Pricing from "./Pricing";
import Trust from "./Trust";
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';


export default function HomePage(){
    return(
        <>
            <AccessAlarmIcon/>
            <Navbar/>
            <Invest/>
            <Trust/>
            <Pricing/>
            <Education/>
            <OpenAcc/>
            <Footer/>
        </>
    )
}
import Footer from "../Footer";
import Navbar from "../Navbar";
import Benifits from "./Benifits";
import Explore from "./Explore";
import Faq from "./Faq";
import InvestmentOptions from "./InvestmentOptions";
import Signup from "./Signup";
import Steps from "./Steps";

export default function SignupPage(){
    return(
        <>
            <Signup/>
            <InvestmentOptions/>
            <Steps/>
            <Benifits/>
            <Explore/>
            <Faq/>
        </>
    )
}
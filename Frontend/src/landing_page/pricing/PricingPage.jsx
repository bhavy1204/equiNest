import Footer from "../Footer";
import Navbar from "../Navbar";
import Brokerage from "./Brokerage";
import Charges from "./Charges";

export default function PricingPage() {
    return (
        <>
            <Navbar/>
            <Brokerage />
            <Charges />
            <Footer/>
        </>
    )
}
import XIcon from '@mui/icons-material/X';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
import TelegramIcon from '@mui/icons-material/Telegram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

export default function Footer() {
    return (
        <footer className="border-top" style={{ backgroundColor: "#e4e0e0ff" }}>
            <div className="container mt-4">
                <div className="row">
                    <div className="col-3">
                        <img src="media/logo.svg" alt="" style={{ height: "20px" }} />
                        <p className="" style={{ fontSize: "16px" }}>&copy; 2010 - 2025, Zerodha Broking Ltd. All rights reserved.</p>
                        <p style={{ color: "gray", marginBottom: "20px" }} > <XIcon /> <FacebookIcon /> <InstagramIcon /> <LinkedInIcon /> </p>
                        <hr />
                        <p style={{ color: "gray" }}> <YouTubeIcon /> <WhatsAppIcon /> <TelegramIcon /> </p>
                    </div>
                    <div className="col-1"></div>
                    <div className="col-8 mb-5">
                        <div className="row">

                            <div className="col">
                                <h5 className="mb-3" style={{ overflow: "hidden" }}>Account</h5>
                                <a href="" className='d-block mb-3' style={{ fontSize: "15px", textDecoration: "none", color: "gray" }}> Open demat account </a>
                                <a href=""className='d-block mb-3' style={{ fontSize: "15px", textDecoration: "none", color: "gray" }}> Minor demat account </a>
                                <a href=""className='d-block mb-3' style={{ fontSize: "15px", textDecoration: "none", color: "gray" }}> NRI demat account</a>
                                <a href=""className='d-block mb-3' style={{ fontSize: "15px", textDecoration: "none", color: "gray" }}> Commodity</a>
                                <a href=""className='d-block mb-3' style={{ fontSize: "15px", textDecoration: "none", color: "gray" }}> Dematerialisation</a>
                                <a href="" className='d-block mb-3'style={{ fontSize: "15px", textDecoration: "none", color: "gray" }}> Fund transfer</a>
                                <a href=""className='d-block mb-3' style={{ fontSize: "15px", textDecoration: "none", color: "gray" }}> MTF</a>
                                <a href=""className='d-block mb-3' style={{ fontSize: "15px", textDecoration: "none", color: "gray" }}> Referral program</a>
                            </div>
                            <div className="col">
                                <h5 className="mb-3" style={{ overflow: "hidden" }}>Support</h5>
                                <a href="" className='d-block mb-3' style={{ fontSize: "15px", textDecoration: "none", color: "gray" }}>Contact us</a>
                                <a href="" className='d-block mb-3' style={{ fontSize: "15px", textDecoration: "none", color: "gray" }}> Support portal </a>
                                <a href="" className='d-block mb-3' style={{ fontSize: "15px", textDecoration: "none", color: "gray" }}> How to file a complaint?</a>
                                <a href="" className='d-block mb-3' style={{ fontSize: "15px", textDecoration: "none", color: "gray" }}> Status of your complaints</a>
                                <a href="" className='d-block mb-3' style={{ fontSize: "15px", textDecoration: "none", color: "gray" }}>Bulletin</a>
                                <a href="" className='d-block mb-3' style={{ fontSize: "15px", textDecoration: "none", color: "gray" }}> Circular</a>
                                <a href="" className='d-block mb-3' style={{ fontSize: "15px", textDecoration: "none", color: "gray" }}> Z-Connect blog</a>
                                <a href="" style={{ fontSize: "15px", textDecoration: "none", color: "gray" }}>Downloads</a>
                            </div>
                            <div className="col">
                                <h5 className="mb-3" style={{ overflow: "hidden" }}>Company</h5>
                                <a href=""className='d-block mb-3' style={{ fontSize: "15px", textDecoration: "none", color: "gray" }}>About</a> 
                                <a href=""className='d-block mb-3' style={{ fontSize: "15px", textDecoration: "none", color: "gray" }}> Philosophy</a>
                                <a href=""className='d-block mb-3' style={{ fontSize: "15px", textDecoration: "none", color: "gray" }}>Press & media</a>
                                <a href=""className='d-block mb-3' style={{ fontSize: "15px", textDecoration: "none", color: "gray" }}>Careers</a>
                                <a href=""className='d-block mb-3' style={{ fontSize: "15px", textDecoration: "none", color: "gray" }}>Zerodha Cares (CSR)</a>
                                <a href=""className='d-block mb-3' style={{ fontSize: "15px", textDecoration: "none", color: "gray" }}> Zerodha.tech</a>
                                <a href=""className='d-block mb-3' style={{ fontSize: "15px", textDecoration: "none", color: "gray" }}> Open source</a>
                            </div>
                            <div className="col">
                                <h5 className="mb-3" style={{ overflow: "hidden" }}>Quick links</h5>
                                <a href="" className='d-block mb-3' style={{ fontSize: "15px", textDecoration: "none", color: "gray" }}>Upcoming IPOs</a>
                                <a href="" className='d-block mb-3' style={{ fontSize: "15px", textDecoration: "none", color: "gray" }}> Brokerage charges</a>
                                <a href="" className='d-block mb-3' style={{ fontSize: "15px", textDecoration: "none", color: "gray" }}>Market holidays</a>
                                <a href="" className='d-block mb-3'  style={{ fontSize: "15px", textDecoration: "none", color: "gray" }}>Economic calendar</a> 
                                <a href="" className='d-block mb-3' style={{ fontSize: "15px", textDecoration: "none", color: "gray" }}>Calculators</a>
                                <a href=""className='d-block mb-3'  style={{ fontSize: "15px", textDecoration: "none", color: "gray" }}>Markets</a>
                                <a href=""className='d-block mb-3'  style={{ fontSize: "15px", textDecoration: "none", color: "gray" }}>Sectors</a> 
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <p style={{ fontSize: "12px" }} className='text-muted'>Zerodha Broking Ltd.: Member of NSE, BSE​ &​ MCX – SEBI Registration no.: INZ000031633 CDSL/NSDL: Depository services through Zerodha Broking Ltd. – SEBI Registration no.: IN-DP-431-2019 Commodity Trading through Zerodha Commodities Pvt. Ltd. MCX: 46025; NSE-50001 – SEBI Registration no.: INZ000038238 Registered Address: Zerodha Broking Ltd., #153/154, 4th Cross, Dollars Colony, Opp. Clarence Public School, J.P Nagar 4th Phase, Bengaluru - 560078, Karnataka, India. For any complaints pertaining to securities broking please write to complaints@zerodha.com, for DP related to dp@zerodha.com. Please ensure you carefully read the Risk Disclosure Document as prescribed by SEBI | ICF</p>
                </div>
            </div>
        </footer>
    )
}
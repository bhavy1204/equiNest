import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

export default function Trust() {
    return (
        <div className="container">
            <div className=" row">
                <div className="col-4" >
                    <h2 style={{ overflow: "hidden" }}>Trust with confidence</h2>
                    <h5 className="mt-5 " style={{ overflow: "hidden" }}>Customer-first always</h5>
                    <p className="text-muted mb-4 fs-9">That's why 1.6+ crore customers trust Zerodha with ~ ₹6 lakh crores of equity investments and contribute to 15% of daily retail exchange volumes in India.</p>
                    <h5 style={{ overflow: "hidden" }}>No spam or gimmicks</h5>
                    <p className="text-muted mb-4 fs-9">That's why 1.6+ crore customers trust Zerodha with ~ ₹6 lakh crores of equity investments and contribute to 15% of daiNo gimmicks, spam, "gamification", or annoying push notifications. High quality apps that you use at your pace, the way you like. <a href="" style={{ textDecoration: "none" }}>Our philosophies.</a></p>
                    <h5 style={{ overflow: "hidden" }}>The Zerodha universe</h5>
                    <p className="text-muted mb-4 fs-9">Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer you tailored services specific to your needs.</p>
                    <h5 style={{ overflow: "hidden" }}>Do better with money</h5>
                    <p className="text-muted mb-4 fs-9">With initiatives like <a href="" style={{ textDecoration: "none" }}> Nudge</a> and <a href="" style={{ textDecoration: "none" }}> Kill Switch</a>, we don't just facilitate transactions, but actively help you do better with your money.</p>


                </div>
                <div className="col-8">
                    <img src="media/ecosystem.png" alt="" style={{ width: "100%" }} />
                    <div className="row text-center" style={{margin:"0 auto"}}>
                        <p>
                            <a href="" style={{ textDecoration: "none" }} className='mr-3'>Explore our products <ArrowRightAltIcon /></a> <a href="" style={{ textDecoration: "none" }}>Try Kite demo <ArrowRightAltIcon /> </a>
                        </p>
                    </div>
                </div>
            </div>
            <div className="row mt-5" style={{width:"70%", margin:"0 auto"}}>
                <img src="media/pressLogos.png" alt="" />
            </div>
        </div>
    )
}  
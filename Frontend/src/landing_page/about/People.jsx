export default function People() {
    return (
        <div className="container">
            <div className="row text-center mt-5 mb-3">
                <h2 style={{ overflow: "hidden" }}>People</h2>
            </div>
            <div className="row mt-5 " >
                <div className="col-6 text-center mt-5 " style={{ paddingRight: "0" }}>
                    <img src="media/nithinKamath.jpg" alt="" style={{ borderRadius: "50%", width: "50%" }} />
                    <h5 className="fw-thin mt-3" style={{ overflow: "hidden" }}>Nithin Kamath</h5>
                    <p className="mt-2" style={{ fontSize: "15px" }} >Founder, CEO</p>
                </div>
                <div className="col-6 mt-5" style={{ paddingLeft: "0", width: "50%", fontSize: "15px", lineHeight: "1.8em", paddingRight: "10%" }}>
                    <p >
                        Nithin bootstrapped and founded Zerodha in 2010 to overcome the hurdles he faced during his decade long stint as a trader. Today, Zerodha has changed the landscape of the Indian broking industry.
                    </p>
                    <p>
                        He is a member of the SEBI Secondary Market Advisory Committee (SMAC) and the Market Data Advisory Committee (MDAC).
                    </p>
                    <p>
                        Playing basketball is his zen.
                    </p>
                    <p>
                        Connect on <a href="" style={{ textDecoration: "none" }}>  Homepage </a> / <a href="" style={{ textDecoration: "none" }}> TradingQnA </a> / <a href="" style={{ textDecoration: "none" }}> Twitter </a>
                    </p>
                </div>
            </div>
        </div>
    )
}
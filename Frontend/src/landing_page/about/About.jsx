export default function About() {
    return (
        <div className="container mt-5 ">
            <div className="row text-center mt-5 " >
                <h3 style={{ overflow: "hidden" }}>We pioneered the discount broking model in India. <br />
                    Now, we are breaking ground with our technology.</h3>
            </div>
            <div className="row mt-5 text-small border-top">
                <div className="col-6 mt-5 text-muted "  style={{lineHeight:"1.8em", width:"50%", paddingLeft:"15%", paddingRight:"5%"}}>
                    <p>
                        We kick-started operations on the 15th of August, 2010 with the goal of breaking all barriers that traders and investors face in India in terms of cost, support, and technology. We named the company Zerodha, a combination of Zero and "Rodha", the Sanskrit word for barrier.
                    </p>
                    <p>
                        Today, our disruptive pricing models and in-house technology have made us the biggest stock broker in India.
                    </p>
                    <p>
                        Over 1.6+ crore clients place billions of orders every year through our powerful ecosystem of investment platforms, contributing over 15% of all Indian retail trading volumes.
                    </p>
                </div>
                <div className="col-6 mt-5 text-muted text-small"  style={{lineHeight:"1.8em", width:"50%", paddingRight:"15%", paddingLeft:"5%"}}>
                    <p>
                        In addition, we run a number of popular open online educational and community initiatives to empower retail traders and investors.
                    </p>
                    <p>
                        <a href="" style={{textDecoration:"none"}}>Rainmatter</a> , our fintech fund and incubator, has invested in several fintech startups with the goal of growing the Indian capital markets.
                    </p>
                    <p>
                        And yet, we are always up to something new every day. Catch up on the latest updates on our <a href="" style={{textDecoration:"none"}}>blog</a>  or see what the media is <a href="" style={{textDecoration:"none"}}>saying about us</a> or learn more about our business and product <a href="" style={{textDecoration:"none"}}>philosophies.</a>
                    </p>
                </div>
            </div>
        </div>
    )
}
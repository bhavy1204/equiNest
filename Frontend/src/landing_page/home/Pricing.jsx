import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
export default function Pricing() {
    return (
        <div className="container mt-5" >
            <div className="row">
                <div className="col-6">
                    <h2 style={{ overflow: "hidden" }}>Unbeatable pricing</h2>
                    <p className='fs-9'>We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges.</p>
                    <p><a href="" style={{ textDecoration: "none" }}> See pricing<ArrowRightAltIcon /> </a></p>
                </div>
                <div className="col-6">
                    <div className="row">
                        <div className="col">
                            <div className="row position-relative">
                                <div className="col-6"><img src="media/pricing-eq.svg" alt="" /></div>
                                <div className="col-6 fw-lighter  position-absolute bottom-0 end-0 " style={{ fontSize: "11px" }}>Free account opening</div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="row position-relative">
                                <div className="col-6"><img src="media/pricing-eq.svg" alt="" /></div>
                                <div className="col-6 fw-lighter position-absolute bottom-0 end-0  " style={{ fontSize: "11px" }}>Free equity delivery and direct mutual funds</div>
                            </div>

                        </div>
                        <div className="col">
                            <div className="row position-relative">
                                <div className="col-6"><img src="media/other-trades.svg" alt="" /></div>
                                <div className="col-6 fw-lighter position-absolute bottom-0 end-0 " style={{ fontSize: "11px" }}>Intraday and F&O </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
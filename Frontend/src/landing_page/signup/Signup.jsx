export default function Signup() {
    return (
        <div className="container mt-5">
            <div className="row text-center mt-5">
                <h1>Open a free demat and trading account online</h1>
                <h5 className="mt-3 text-muted fw-normal fs-5">Start investing brokerage free and join a community of 1.6+ crore investors and traders</h5>
            </div>
            <div className="row mt-5pr-2">
                <div className="col-6   text-center mt-5">
                    <img src="media/account_open.svg" alt="" style={{ width: "90%" }} />
                </div>
                <div className="col-6 mt-5">
                    <h1 style={{ paddingLeft: "0px" }}>Signup now</h1>
                    <h5 className="mt-4">Or track your existing application</h5>

                    <form action="" className="mt-4 mb-4">
                        <div className="" style={{border:"1px solid gray", width:"70%"}} >
                            <img src="media/india-flag.svg" className=" p-2 " style={{ height: "50px" }} alt="" />+91
                            <input type="text" style={{ height: "50px", width: "300px", borderRight: "none",borderTop: "none", borderBottom: "none",borderLeft:"1px solid gray",marginLeft:"10px", paddingBottom:"0px" }} /> <br />
                        </div>
                        <button className="btn  btn-primary mt-5">Get OTP</button>
                    </form>
                    <p className="text-muted" style={{ fontSize: "14px" }}>By proceeding, you agree to the Zerodha <a href=""> terms</a> & <a href=""> privacy policy</a></p>
                </div>
            </div>
        </div>
    )
}
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

export default function Education() {
    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-6">
                    <img src="media/index-education.svg" alt="" />
                </div>
                <div className="col-6">
                    <h2 style={{ overflow: "hidden" }} className='mb-4'>Free and open market education</h2>
                    <p className='fs-6'>Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading.</p>
                    <p><a href="" style={{textDecoration:"none"}}>Varsity <ArrowRightAltIcon /> </a></p>
                    <p>TradingQ&A, the most active trading and investment community in India for all your market related queries.</p>
                    <p><a href="" style={{textDecoration:"none"}}>TradingQ&A <ArrowRightAltIcon /> </a></p>
                </div>
            </div>
        </div>
    )
}
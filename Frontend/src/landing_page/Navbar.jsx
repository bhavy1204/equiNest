import MenuIcon from '@mui/icons-material/Menu';
export default function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg border-bottom ">
            <div className="conatainer-fluid container d-flex justify-content-around  ">
                <div>
                    <img src="media/logo.svg" alt="" style={{ height: "18px" }} className='ml-5' />
                </div>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse ml-5" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <a class="nav-link" aria-current="page" href="#">Home</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Link</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" aria-disabled="true">Disabled</a>
                        </li>
                        <li>
                            <MenuIcon />
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
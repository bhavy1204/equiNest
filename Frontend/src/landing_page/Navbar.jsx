import MenuIcon from '@mui/icons-material/Menu';
export default function Navbar() {
    return (

        <nav class="navbar navbar-expand-lg border-bottom " style={{ backgroundColor: "#ffffff" , height:"70px", overflow:"hidden"}}>
            <div class="container p-2">
                <a class="navbar-brand" href="#">
                    <img src="media/logo.svg" alt="" style={{ width: "20%" }} />
                </a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <form class="d-flex" role="search">
                        <ul class="navbar-nav mb-lg-0">
                            <li class="nav-item">
                                <a class="nav-link" href="#">Signup</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">About</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Products</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Pricing</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Support</a>
                            </li>
                            <li class="menu-icon" style={{marginLeft:"30px"}}>
                                <MenuIcon fontSize='large'/>
                            </li>
                        </ul>

                    </form>
                </div>
            </div>
        </nav>
    )
}
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
export default function Navbar() {
    return (

        <nav class="navbar navbar-expand-lg border-bottom " style={{ backgroundColor: "#ffffff", height: "70px", overflow: "hidden" }}>
            <div class="container p-2">
                <Link class="navbar-brand" to='/'>
                    <img src="media/logo.svg" alt="" style={{ width: "20%" }} />
                </Link>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <form class="d-flex" role="search">
                        <ul class="navbar-nav mb-lg-0">
                            <li class="nav-item">
                                <Link class="nav-link" to='/signup' >Signup</Link >
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" to='/about' >About</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" to='/products'>Products</Link >
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" to='/pricing'>Pricing</Link >
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" to='/support' >Support</Link >
                            </li>
                            <li class="menu-icon" style={{ marginLeft: "30px" }}>
                                <MenuIcon fontSize='large' />
                            </li>
                        </ul>

                    </form>
                </div>
            </div>
        </nav>
    )
}
import CartWidget from "../CartWidget/CartWidget";

const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid ">
                {/* Brand */}
                <a className="navbar-brand" href="#">Mestizo Hummus</a>
                {/* Links */}
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">

                    <li className="nav-item">
                        <a className="nav-link" href="#">Nosotros</a>
                    </li>

                    <li className="nav-item">
                        <a className="nav-link" href="#">Productos</a>
                    </li>

                    <li className="nav-item">
                        <a className="nav-link" href="#">Tienda</a>
                    </li>

                </ul>
                {/* Cart Widget */}
                <div>
                    <CartWidget/>
                </div>
                </div>
            
        </nav>
    );
};

export default NavBar;
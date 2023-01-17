import {Link, useMatch, useResolvedPath} from "react-router-dom";

function Header() {
    const path = window.location.pathname;
    return (
        <nav className="nav-bar">
            <Link to="/" className="site-title">
                Meal Planner
            </Link>
            <ul>
                <CustomLink to="/recipes">Recipes</CustomLink>
                <CustomLink to="/cart">Cart</CustomLink>
            </ul>
        </nav>
    )
}

function CustomLink({ to, children, ...props }) {
    const resolvedPath = useResolvedPath(to);
    const isActive = useMatch({path: resolvedPath.pathname, end: true});
    return (
        <li className={isActive ? "active" : ""}>
            <Link to={to} {...props}>{children}</Link>
        </li>
    )
}

export default Header;
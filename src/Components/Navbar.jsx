import {NavLink} from "react-router-dom";

const Navbar = () => {
    const checkIsactive = ({ isActive }) => {
        return {
            display: "block",
            margin: "1rem 0",
            color: isActive ? "orange" : "",
        }
    }

    return (
        <nav>
            <ul>
                <li>
                    <NavLink style={checkIsactive} to="/">
                        HOME
                    </NavLink>
                </li>
                <li>
                    <NavLink style={checkIsactive} to="/add-post">
                        ADD POST
                    </NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar;

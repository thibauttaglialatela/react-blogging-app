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
        <nav style={{display: "flex", gap: '15px'}}>
                    <NavLink style={checkIsactive} to="/">
                        HOME
                    </NavLink>


                    <NavLink style={checkIsactive} to="/add-post">
                        ADD POST
                    </NavLink>

        </nav>
    )
}

export default Navbar;

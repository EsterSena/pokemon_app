import { Link } from "react-router-dom";

function Menu() {
    return (
        <>
            <nav>
                <ul>
                    <Link to="/">Home</Link>
                </ul>
                <ul>
                    <Link to="/pokemon">Pokemon</Link>
                </ul>
                <ul>
                    <Link to="/posts/">Posts</Link>
                </ul>
            </nav>
        </>
    );
}


export default Menu;
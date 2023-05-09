import {Link} from 'react-router-dom'

function Navbar(){
    return(

        <div class="container">
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <div class="container-fluid">
                <Link to="/">Home</Link>|
                <Link to="/search">Search Article</Link>|
                <Link to="/status">Published Lists</Link>|
                <Link to="/new">Create New Article</Link>
                </div>
            </nav>
        </div>
       
    )
}
export default Navbar;
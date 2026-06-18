import { auth } from "../firebase";
import { signOut } from "firebase/auth";

function Navbar(){

const logout = async () => {
await signOut(auth);
window.location.reload();
};

return(

<nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow px-3">

<div className="container-fluid">

{/* Brand */}
<span className="navbar-brand fw-bold text-warning">
 Flechazo Gold
</span>

{/* Toggle button for mobile */}
<button
className="navbar-toggler"
type="button"
data-bs-toggle="collapse"
data-bs-target="#navbarContent"
>
<span className="navbar-toggler-icon"></span>
</button>

{/* Menu */}
<div className="collapse navbar-collapse" id="navbarContent">

<ul className="navbar-nav me-auto mb-2 mb-lg-0">

<li className="nav-item">
<a className="nav-link text-white" href="#">
🏠 Home
</a>
</li>

<li className="nav-item">
<a className="nav-link text-white" href="#">
👤 Profile
</a>
</li>

<li className="nav-item">
<a className="nav-link text-white" href="#">
📦 Orders
</a>
</li>

<li className="nav-item">
<a className="nav-link text-white" href="#">
📍 Location
</a>
</li>

</ul>

{/* Logout Button */}
<button
className="btn btn-outline-warning"
onClick={logout}
>
Logout
</button>

</div>

</div>

</nav>

);

}

export default Navbar;
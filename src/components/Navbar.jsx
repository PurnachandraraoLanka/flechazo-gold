import { auth } from "../firebase";
import { signOut } from "firebase/auth";
import { useState } from "react";

function Navbar({ cart = [], setShowCart }) {

const [location,setLocation]=useState(
"Madhapur"
);

const logout=async()=>{

await signOut(auth);

window.location.reload();

};

return(

<nav

className="
navbar
navbar-dark
bg-dark
px-4
shadow
sticky-top
"

>

<div className="d-flex align-items-center">

<span
className="
navbar-brand
text-warning
fw-bold
fs-3
me-4
"
>

Flechazo Gold

</span>


<select

className="form-select"

style={{

width:"180px"

}}

value={location}

onChange={(e)=>
setLocation(
e.target.value
)
}

>

<option>Madhapur</option>

<option>Gachibowli</option>

<option>Kukatpally</option>

<option>Hitech City</option>

<option>Kondapur</option>

<option>Banjara Hills</option>

<option>Jubilee Hills</option>

<option>Ameerpet</option>

</select>

</div>


<div className="d-flex gap-3">

<button

className="btn btn-warning position-relative"

onClick={()=>

setShowCart(
true
)

}

>

🛒 Cart

{

cart.length>0 && (

<span

className="
position-absolute
top-0
start-100
translate-middle
badge
rounded-pill
bg-danger
"

>

{cart.length}

</span>

)

}

</button>


<button

className="
btn
btn-outline-warning
"

onClick={logout}

>

Logout

</button>

</div>

</nav>

);

}

export default Navbar;
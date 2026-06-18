import Navbar from "../components/Navbar";
import { useState } from "react";


function Home({user}){

const [page,setPage]=useState("home");

return(

<div className="bg-light min-vh-100">

<Navbar setPage={setPage} />

{page==="home" && (

<div className="container text-center mt-5">

<h1>Welcome</h1>
<p></p>

</div>

)}

{page==="profile" && <Profile user={user} />}

</div>

);

}

export default Home;
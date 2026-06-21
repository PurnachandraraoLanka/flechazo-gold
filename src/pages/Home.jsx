import Navbar from "../components/Navbar";

import biryani1 from "../assets/images/biryani1.avif";
import biryani2 from "../assets/images/biryani2.avif";
import biryani3 from "../assets/images/biryani3.avif";
import starter1 from "../assets/images/starter1.avif";
import starter2 from "../assets/images/starter2.avif";

import image1 from "../assets/images/image1.avif";
import image2 from "../assets/images/image2.avif";
import image3 from "../assets/images/image3.avif";
import image4 from "../assets/images/image4.avif";
import image5 from "../assets/images/image5.avif";
import image6 from "../assets/images/image6.avif";
import image7 from "../assets/images/image7.avif";
import image8 from "../assets/images/image8.avif";
import image9 from "../assets/images/image9.avif";
import image10 from "../assets/images/image10.avif";
import image11 from "../assets/images/image11.avif";
import image12 from "../assets/images/image12.avif";
import image13 from "../assets/images/image13.avif";
import image14 from "../assets/images/image14.avif";
import image15 from "../assets/images/image15.avif";
import image16 from "../assets/images/image16.avif";
import image17 from "../assets/images/image17.avif";
import image18 from "../assets/images/image18.avif";
import image19 from "../assets/images/image19.avif";
import image20 from "../assets/images/image20.webp";
import image21 from "../assets/images/image21.avif";
import image22 from "../assets/images/image22.avif";
import image23 from "../assets/images/image23.avif";
import image24 from "../assets/images/image24.avif";
import image25 from "../assets/images/image25.avif";
import image26 from "../assets/images/image26.avif";
import image27 from "../assets/images/image27.webp";

import drink1 from "../assets/images/drink1.avif";
import drink2 from "../assets/images/drink2.avif";
import drink3 from "../assets/images/drink3.avif";
import drink4 from "../assets/images/drink4.avif";
import drink5 from "../assets/images/drink5.avif";
import drink6 from "../assets/images/drink6.avif";
import drink7 from "../assets/images/drink7.avif";
import drink8 from "../assets/images/drink8.avif";
import drink9 from "../assets/images/drink9.avif";
import drink10 from "../assets/images/drink10.avif";
import drink11 from "../assets/images/drink11.avif";
import drink12 from "../assets/images/drink12.avif";

import { useState } from "react";

function Home(){

const [cart,setCart]=useState([]);
const [showCart,setShowCart]=useState(false);

const images=[
biryani1,
biryani2,
biryani3,
starter1,
starter2
];

const categories=[
image1,image2,image3,
image4,image5,image6,
drink1,drink2,drink3,
image7,image8,image9,
image10,image20,image19,
drink4,drink5,drink6,
image18,image17,image16,
image15,image14,image13,
drink7,drink8,drink9,
image12,image11,image21,
image22,image23,image24,
drink10,drink11,drink12,
image25,image26,image27
];


const addToCart=(item,index)=>{

const food={

id:index,

image:item,

name:`Food ${index+1}`,

price:[
149,
179,
199,
229,
249,
279,
299
][index%7]

};

setCart(

[...cart,food]

);

};
const removeFromCart=(id)=>{

setCart(

cart.filter(
(item)=>
item.id!==id
)

);

};

return(

<div className="bg-light min-vh-100">

<Navbar

cart={cart}

setShowCart={
setShowCart
}

/>

{/* AUTO SLIDER */}

<div
id="foodSlider"
className="carousel slide"
data-bs-ride="carousel"
data-bs-interval="2000"
data-bs-pause="false"
>

<div className="carousel-inner">

{

images.map(
(image,index)=>(

<div
key={index}
className={`carousel-item ${index===0?"active":""}`}
>

<img
src={image}
className="d-block w-100"
style={{
height:"55vh",
objectFit:"cover"
}}
/>

</div>

)

)

}

</div>

</div>


{/* INSTALL */}

<div
className="
container
d-flex
justify-content-center
mt-5
"
>

<div
className="
card
shadow
rounded-5
p-4
"
style={{
width:"75%"
}}
>

<div className="row align-items-center">

<div className="col-md-8">

<h2>

Flechazo Gold App

</h2>

<p>

Order your favourite food faster.

</p>

</div>

<div className="col-md-4 text-end">

<button
className="
btn
btn-warning
btn-lg
"
>

Install

</button>

</div>

</div>

</div>

</div>


{/* CART */}

{

showCart && (

<div className="container mt-5">

<div className="card shadow p-4 rounded-5">

<h2 className="mb-4">

🛒 My Cart

</h2>

{

cart.length===0 ?

(

<h4 className="text-center">

No Items Added

</h4>

)

:

(

<>

{

cart.map(
(item)=>(

<div

key={item.id}

className="d-flex justify-content-between align-items-center mb-4"

>

<div className="d-flex align-items-center">

<img

src={item.image}

style={{

width:"90px",
height:"90px",
objectFit:"cover",
borderRadius:"20px"

}}

/>

<div className="ms-3">

<h5>

{item.name}

</h5>

<h6 className="text-warning">

₹{item.price}

</h6>

</div>

</div>

<button

className="btn btn-danger"

onClick={()=>

removeFromCart(
item.id
)

}

>

Remove

</button>

</div>

)

)

}

<hr/>

<h4>

Total ₹{

cart.reduce(

(sum,item)=>

sum+item.price,

0

)

}

</h4>

<button

className="btn btn-success w-100 mt-3"

>

Buy Items

</button>

</>

)

}

</div>

</div>

)

}


{/* FOOD CARDS */}

<div className="container mt-5">

<h2
className="
text-center
fw-bold
mb-5
"
>
Popular Foods
</h2>

<div className="row">

{

categories.map(
(item,index)=>(

<div
key={index}

className="
col-md-4
mb-5
"
>

<div

className="
card
border-0
rounded-5
h-100
text-center
food-card
"

style={{

transition:
"all 0.4s ease",

cursor:
"pointer"

}}

>

<img

src={item}

className="
card-img-top
rounded-top-5
"

style={{
height:"230px",
objectFit:"cover"
}}

/>

<div className="card-body">

<h5>

Food {index+1}

</h5>

<p
className="
text-warning
fw-bold
fs-5
"
>

₹{
[
149,
179,
199,
229,
249,
279,
299,
349
][index%8]
}

</p>

<p>

⭐⭐⭐⭐☆

</p>

<button

className="
btn
btn-warning
w-100
"

onClick={()=>

addToCart(
item,
index
)

}

>

🛒 Add To Cart

</button>

</div>

</div>

</div>

)

)

}

</div>

</div>

</div>

);

}

export default Home;
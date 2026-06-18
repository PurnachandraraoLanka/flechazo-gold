import { useState, useRef } from "react";

import { auth } from "../firebase";
import Home from "./Home";

import {
RecaptchaVerifier,
signInWithPhoneNumber
}
from "firebase/auth";

import {
ToastContainer,
toast
}
from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

function Login(){

const [phone,setPhone]=useState("");
const [showOtp,setShowOtp]=useState(false);
const [home,setHome]=useState(false);
const [confirm,setConfirm]=useState(null);

const [otp,setOtp]=useState([
"",
"",
"",
"",
"",
""
]);

const refs=[
useRef(),
useRef(),
useRef(),
useRef(),
useRef(),
useRef()
];

const sendOtp=async()=>{

try{

if(phone.length!==10){

toast.error(
"Enter Valid Number"
);

return;

}

if(window.recaptchaVerifier){

window.recaptchaVerifier.clear();

}

window.recaptchaVerifier=
new RecaptchaVerifier(
auth,
"recaptcha",
{
size:"invisible"
}
);

const result=
await signInWithPhoneNumber(
auth,
`+91${phone}`,
window.recaptchaVerifier
);

setConfirm(result);

setShowOtp(true);

toast.success(
"OTP Sent");

}

catch(error){

console.log(error);

toast.error(
"OTP Failed"
);

}

};

const handleOtp=(value,index)=>{

if(!/^\d?$/.test(value))
return;

const copy=[...otp];

copy[index]=value;

setOtp(copy);

if(
value &&
index<5
){

refs[index+1]
.current
.focus();

}

};

const back=(e,index)=>{

if(
e.key==="Backspace"
&&
otp[index]===""
&&
index>0
){

refs[index-1]
.current
.focus();

}

};

const verify=async()=>{

try{

await confirm.confirm(
otp.join("")
);

toast.success(
"Login Done ✅"
);

setTimeout(()=>{

setHome(true);

},1500);

}

catch{

toast.error(
"Invalid OTP"
);

}

};

if(home){
return <Home/>;
}

return(

<div className="container mt-5">

<ToastContainer/>

<div
className="
card
shadow
p-5
mx-auto
"
style={{
maxWidth:"450px"
}}
>

<h2
className="
text-center
mb-4
"
>

Flechazo Gold

</h2>

{

!showOtp ?

<>

<input

className="
form-control
mb-3
"

placeholder=
"Enter Number"

value={phone}

onChange={
(e)=>
setPhone(
e.target.value
)
}

/>

<button

className="
btn
btn-warning
w-100
"

onClick={
sendOtp
}

>

Send OTP

</button>

<div id="recaptcha"></div>

</>

:

<>

<div
className="
d-flex
justify-content-between
"
>

{

otp.map(
(
item,
index
)=>(

<input

key={index}

ref={refs[index]}

value={item}

maxLength={1}

onChange={
(e)=>

handleOtp(

e.target.value,

index

)

}

onKeyDown={
(e)=>

back(
e,
index
)

}

className="
form-control
text-center
mx-1
"

style={{
width:"55px",
height:"55px"
}}

/>

)

)

}

</div>

<button

className="
btn
btn-success
w-100
mt-4
"

onClick={
verify
}

>

Verify OTP

</button>

</>

}

</div>

</div>

);

}

export default Login;
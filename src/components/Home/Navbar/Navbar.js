import React from 'react';
import logo from '../../../logos/Logo.png'
const Navbar = () => {
    return (
        <nav class="navbar navbar-expand-lg navbar-light ">
        <img src={logo}  style={{height:'40px'}} alt=""/>
         <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
           <span class="navbar-toggler-icon"></span>
         </button>
       
         <div class="collapse navbar-collapse" id="navbarSupportedContent">
           <ul class="navbar-nav ml-auto">
             <li class="nav-item active  mr-3">
               <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
             </li>
             <li class="nav-item mr-3">
               <a class="nav-link" href="#">About</a>
             </li>
             <li class="nav-item mr-3">
               <a class="nav-link" href="#">Service</a>
             </li>
             <li class="nav-item mr-3">
               <a class="nav-link" href="#">Concerns</a>
             </li>
             <li class="nav-item mr-3">
               <a class="nav-link" href="#">Event</a>
             </li>
             <li class="nav-item mr-3">
               <a class="nav-link" href="#">Contact</a>
             </li>
             <li class="nav-item  ">
              <button class="btn text-white"style={{backgroundColor:"#275A53"}}>Log In</button>
             </li>
             
           </ul>
        
         </div>
       </nav>
    );
};

export default Navbar;
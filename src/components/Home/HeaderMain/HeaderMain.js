import React from 'react';

const HeaderMain = () => {
    return (
        <div>
             <h1>FIND YOUR HOUSE RENT</h1>
             <div class="input-group mb-3 w-50 m-auto">
  <input type="text" class="form-control" placeholder="Search..." aria-label="Recipient's username" aria-describedby="button-addon2"/>
  <div class="input-group-append">
    <button class="btn text-white ml-3" type="button" id="button-addon2" style={{backgroundColor:"#275A53"}}>Find Now</button>
  </div>
</div>
</div>
    );
};

export default HeaderMain;
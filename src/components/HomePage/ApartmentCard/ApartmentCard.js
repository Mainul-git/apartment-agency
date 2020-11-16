import React from 'react';
import location from"../../../logos/map-marker-alt-solid 1.png"
import bathroom from'../../../logos/bath 1.png'
import bedroom from'../../../logos/bed 1.png'
import ApartmentCardChild from '../ApartmentCardChild/ApartmentCardChild';

const Apartment=[{id:1,img:"https://i.ibb.co/0rFr4pd/Rectangle-394.png",title:"Washington Avenue",location:`${location}`,bathroom:`${bathroom}`,bedroom:`${bedroom}` ,price:194},
{id:2,img:"https://i.ibb.co/WgXC5cP/Rectangle-396.png",title:"Family Apartment Three",location:`${location}`,bathroom:`${bathroom}`,bedroom:`${bedroom}`,price:356 },

{ id:3,img:"https://i.ibb.co/P1tTtLj/Rectangle-398.png",title:"Gorgeous House",location:`${location}`,bathroom:`${bathroom}`,bedroom:`${bedroom}`,price:256  },
{ id:4,img:"https://i.ibb.co/8rtyhF3/Rectangle-405.png" ,title:"Luxury Villa",location:`${location}`,bathroom:`${bathroom}`,bedroom:`${bedroom}`,price:345},
{id:5,img:"https://i.ibb.co/17MqxBf/Rectangle-403.png",title: "Epic Huda Palacio",location:`${location}`,bathroom:`${bathroom}`,bedroom:`${bedroom}`,price:536},
{id:6,img:"https://i.ibb.co/7V4CrwM/Rectangle-404.png",title:"Washington Avenue",location:`${location}`,bathroom:`${bathroom}`,bedroom:`${bedroom}`,price:283}]
const ApartmentCard = () => {
    return (
        <div style={{backgroundColor:' #E5E5E5'}} className="pt-3">
            <div className="flex-column mb-3 text-center">
                <small>House Rent</small>
                <h2>Discover the latest Rent</h2>
                <h2>available today</h2>
            </div>
            <section className="row w-75 m-auto ">
            {
                    Apartment.map(apartment => <ApartmentCardChild apartment={apartment} key={apartment.title}></ApartmentCardChild >)
                }
            </section>
        </div>
    );
};

export default ApartmentCard;
import React from 'react';
import './SideBar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faHouseUser, faCommentAlt, faPlus, faUserPlus } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';
import logo from '../../../logos/Logo.png'

const SideBar = () => {

    const isAdmin = JSON.parse(localStorage.getItem("isAdmin"));
    let active = window.location.pathname;
    console.log(active);

    return (
        <div className="side-bar">
            <Link to="/"><img className="img-fluid m-5" src={logo} alt="" /></Link>
            {/* {!isAdmin ? */}
                <div>
                    <div className="ml-5 pl-5 mb-2">
                        <a className={active == '/dashboard/booking' ? 'active-class' : 'text-secondary'} href="/dashboard/booking"><FontAwesomeIcon icon={faHome} /> Booking List</a>
                    </div>
                    <div className="ml-5 pl-5 mb-2">
                        <a className={active == '/dashboard/add-house' ? 'active-class' : 'text-secondary'} href="/dashboard/add-house"><FontAwesomeIcon icon={faPlus} /> Add House</a>
                    </div>
                    <div className="ml-5 pl-5 mb-2">
                        <a className={active == '/dashboard/my-rent' ? 'active-class' : 'text-secondary'} href="/dashboard/my-rent"><FontAwesomeIcon icon={faHouseUser} /> My Rent</a>
                    </div>
                </div>
                {/* : */}
                <div>
                    <div className="ml-5 pl-5 mb-2">
                        <a className={active == '/dashboard/make-admin' ? 'active-class' : 'text-secondary'} href="/dashboard/make-admin"><FontAwesomeIcon icon={faUserPlus} /> Make Admin</a>
                    </div>
                </div>
            {/* } */}

        </div>
    );
};

export default SideBar;
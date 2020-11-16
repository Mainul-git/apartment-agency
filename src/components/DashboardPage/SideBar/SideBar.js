import React from 'react';
import './SideBar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faTaxi, faCommentAlt, faPlus, faUserPlus } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';

const SideBar = () => {

    const isAdmin = JSON.parse(localStorage.getItem("isAdmin"));
    let active = JSON.parse(localStorage.getItem("active"));

    const handleOrderClick = () => {
        active = 'order';
    }

    const handleUserOrderListClick = () => {
        active = 'your-order-list'
    }

    const review = () => {
        active = 'review';
    }

    const allOrderList = () => {
        active = 'all-order-list';
    }

    const addService = () => {
        active = 'add-service';
    }

    const makeAdmin = () => {
        active = 'make-admin'
    }

    // I didn't have enough time to implement change colour of the side bar menu. Sorry.

    return (
        <div className="side-bar">
            <Link to="/"><img className="img-fluid m-5" src="https://i.ibb.co/cgrXbTz/logo.png" alt="" /></Link>
            {!isAdmin ?
                <div>
                    <div className="ml-5 pl-5 mb-2">
                        <Link onClick={handleOrderClick} className={active == 'order' ? 'active-class' : 'text-secondary'} to="/dashboard/order"><FontAwesomeIcon icon={faShoppingCart} /> Order</Link>
                    </div>
                    <div className="ml-5 pl-5 mb-2">
                        <Link onClick={handleUserOrderListClick} className={active == 'your-order-list' ? 'active-class' : 'text-secondary'} to="/dashboard/service-list"><FontAwesomeIcon icon={faTaxi} /> Your Order List</Link>
                    </div>
                    <div className="ml-5 pl-5 mb-2">
                        <Link onClick={review} className={active == 'review' ? 'active-class' : 'text-secondary'} to="/dashboard/review"><FontAwesomeIcon icon={faCommentAlt} /> Review</Link>
                    </div>
                </div>
                :
                <div>
                    <div className="ml-5 pl-5 mb-2">
                        <Link onClick={allOrderList} className={active == 'all-order-list' ? 'active-class' : 'text-secondary'} to="/dashboard/service-list-admin"><FontAwesomeIcon icon={faTaxi} /> All Order List</Link>
                    </div>
                    <div className="ml-5 pl-5 mb-2">
                        <Link onClick={addService} className={active == 'add-service' ? 'active-class' : 'text-secondary'} to="/dashboard/add-service"><FontAwesomeIcon icon={faPlus} /> Add Service</Link>
                    </div>
                    <div className="ml-5 pl-5 mb-2">
                        <Link onClick={makeAdmin} className={active == 'make-admin' ? 'active-class' : 'text-secondary'} to="/dashboard/make-admin"><FontAwesomeIcon icon={faUserPlus} /> Make Admin</Link>
                    </div>
                </div>
            }

        </div>
    );
};

export default SideBar;
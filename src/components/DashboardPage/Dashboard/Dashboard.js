import React from 'react';
import SideBar from '../SideBar/SideBar';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import SplitPane from 'react-split-pane';
import MyRent from '../MyRent/MyRent';
import AddHouse from '../AddHouse/AddHouse';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import Booking from '../Booking/Booking';
// import PrivateRouteAdmin from '../../LoginComponents/PrivateRouteAdmin/PrivateRouteAdmin'
// import PrivateRouteUser from '../../LoginComponents/PrivateRouteUser/PrivateRouteUser';

const Dashboard = () => {
    return (
        <SplitPane split="vertical" minSize={300}>
            <SideBar />
            <div>
                <Route path="/dashboard/booking">
                    <Booking />
                </Route>
                <Route path="/dashboard/my-rent">
                    <MyRent />
                </Route>
                <Route path="/dashboard/add-house">
                    <AddHouse/>
                </Route>
                <Route path="/dashboard/make-admin">
                    <MakeAdmin/>
                </Route>
            </div>
        </SplitPane>
    );
};

export default Dashboard;
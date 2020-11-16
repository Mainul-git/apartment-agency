// import React from 'react';
// import SideBar from '../SideBar/SideBar';
// import {
//     BrowserRouter as Router,
//     Switch,
//     Route,
// } from "react-router-dom";
// import SplitPane from 'react-split-pane';
// import Order from '../Order/Order';
// import OrderListUser from '../OrderListUser/OrderListUser';
// import Review from '../Review/Review';
// import OrderListAdmin from '../OrderListAdmin/OrderListAdmin';
// import AddService from '../AddService/AddService';
// import MakeAdmin from '../MakeAdmin/MakeAdmin';
// import PrivateRouteAdmin from '../../LoginComponents/PrivateRouteAdmin/PrivateRouteAdmin'
// import PrivateRouteUser from '../../LoginComponents/PrivateRouteUser/PrivateRouteUser';

// const Dashboard = () => {
//     return (
//         <SplitPane split="vertical" minSize={300}>
//             <SideBar />
//             <div>
//                 <PrivateRouteUser path="/dashboard/order">
//                     <Order/>
//                 </PrivateRouteUser>
//                 <PrivateRouteUser path="/dashboard/service-list">
//                     <OrderListUser/>
//                 </PrivateRouteUser>
//                 <PrivateRouteUser path="/dashboard/review">
//                     <Review/>
//                 </PrivateRouteUser>
//                 <PrivateRouteAdmin path="/dashboard/service-list-admin">
//                     <OrderListAdmin/>
//                 </PrivateRouteAdmin>
//                 <PrivateRouteAdmin path="/dashboard/add-service">
//                     <AddService/>
//                 </PrivateRouteAdmin>
//                 <PrivateRouteAdmin path="/dashboard/make-admin">
//                     <MakeAdmin/>
//                 </PrivateRouteAdmin>
//             </div>
//         </SplitPane>
//     );
// };

// export default Dashboard;
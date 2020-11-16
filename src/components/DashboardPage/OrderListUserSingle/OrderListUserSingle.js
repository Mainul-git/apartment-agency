import React from 'react';
import './OrderListUserSingle.css';
import { useSpring, animated } from 'react-spring';

const calc = (x, y) => [-(y - window.innerHeight / 2) / 20, (x - window.innerWidth / 2) / 20, 1.1]
const trans = (x, y, s) => `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`

const OrderListUserSingle = ({ order }) => {

    const email = JSON.parse(localStorage.getItem("email"));

    const [props, set] = useSpring(() => ({ xys: [0, 0, 1], config: { mass: 5, tension: 350, friction: 40 } }))

    return (
        // <div>
        //     { email === order.email &&

        //         <div className="card" style={{ width: '18rem' }}>
        //             <div className="d-flex justify-content-around">
        //                 <img width='200px' className="img-fluid mt-3 service-img" src={`data:image/png;base64,${order.image.img}`} alt="Card image cap" />
        //                 <div>
        //                     <button className="mt-5 btn btn-primary">Pending</button>
        //                 </div>
        //             </div>

        //             <div>
        //                 <h5>{order.name}</h5>
        //                 <p>{order.productDetails}</p>
        //             </div>
        //         </div>
        //     }
        // </div>

        <div>
            {email === order.email &&
                <div className="col-md-4 mb-5">
                    <animated.div
                        className="order-card"
                        onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
                        onMouseLeave={() => set({ xys: [0, 0, 1] })}
                        style={{ transform: props.xys.interpolate(trans) }}
                    >
                        <div style={{ height: '30ch' }}>
                            <div className="p-3">
                                <div className="d-flex justify-content-between">
                                    <div>
                                        <img className="img-fluid mt-3 service-img" src={`data:image/png;base64,${order.image.img}`} alt="Card image cap" />
                                    </div>
                                    <div>
                                        <button className="mt-4 btn btn-primary">Pending</button>
                                    </div>
                                </div>
                                <div className="mt-3">
                                    <h5>{order.productName}</h5>
                                    <p className="text-muted">{order.productDetails}</p>
                                </div>
                            </div>
                        </div>

                    </animated.div>
                </div>
            }
        </div>



    );
};

export default OrderListUserSingle;
import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
// import InputLabel from '@material-ui/core/InputLabel';
// import MenuItem from '@material-ui/core/MenuItem';
// import FormHelperText from '@material-ui/core/FormHelperText';
// import FormControl from '@material-ui/core/FormControl';
// import Select from '@material-ui/core/Select';
import'./BookingSingle.css';
const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
}));

const BookingSingle = ({ customer,handleChange}) => {

    // const classes = useStyles();
    const [status, setStatus] = useState('');
    return (
        <tr>
            <td>{customer.name}</td>
            <td>{customer.email}</td>
            <td>{customer.number}</td>
            <td>{customer.message}</td>
            <td>{
                                                <select style={{color:'none',backgroundColor:'white',border:'none'} }className={customer.status} value={customer.status}  onChange={(e) => handleChange(e, customer._id)}>
                                                    <option value="pending" className="text-danger">pending</option>
                                                    <option value="done"className="text-success">done</option>
                                                </select>
                                            }
                                            </td>
        </tr>
    );
};

export default BookingSingle;
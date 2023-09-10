import {useState} from "react";

export default function Item({title, id, status}){

    const [checked, setChecked] = useState(status)
    const classes = ['todo'];

    if(checked){
        classes.push('status');
    }

    const updateStatus = () =>{
        setChecked(!checked)
    }

    return (
        <li className={classes.join(' ')}>
            <label>
                <input type="checkbox"
                checked={checked}
                onChange={updateStatus}/>
                <span>{title}</span>
                <i className='material-icons red-text'>X</i>
            </label>
        </li>
    )
}
import React from 'react';
import { withStyles } from '@material-ui/core/styles'; 
import Radio from '@material-ui/core/Radio';
import './styles.css';

function RadioButton(){
    const CustomRadio = withStyles({
        root: {
            color: '#FFD3CA','&$checked' : {color: '#EB8F7A',},
        },
        checked: {},
    })((props) => <Radio color="default" {...props} />);

    return(
       <>
            <div className="radioOptions">
                <CustomRadio />
                <span>Todos</span>
            </div>

            <div className="radioOptions">
                <CustomRadio />
                <span>Todos</span>
            </div>

            <div className="radioOptions">
                <CustomRadio />
                <span>Todos</span>
            </div>
        </>
    )
}

export default RadioButton;
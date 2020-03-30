
import React from 'react';


function Virus(props) {

    return(
        <div className="col s12">
            {props.country}:<br />
            # of Cases - {props.num}<br />
            # of Deaths - {props.deaths}

            <hr />
        </div>
    )
};


export default  Virus;
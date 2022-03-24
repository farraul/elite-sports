import axios from 'axios';
import React, { useState, useEffect } from 'react';

const Teams = () => {

    useEffect( () => {
        takeData();
    }, [] );

    const takeData = async () => {
            let res = await axios.get( "http://api.football-api.com/2.0/competitions?Authorization=565ec012251f932ea4000001fa542ae9d994470e73fdb314a8a56d76" );
            console.table(res.data)
    }

    return (
        <div>Teams</div>
    )
};


export default Teams;
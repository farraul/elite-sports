import axios from 'axios';
import React, { useState, useEffect } from 'react';
import './Teams.css';
import ModalInfo from '../../Components/ModalInfo/ModalInfo';

const Teams = () => {

    const [teams, setTeams] = useState([]);
    const [showModalInfo, setShowModalInfo] = useState(false);
    const [dataModal, setDataModal] = useState("");


    useEffect(() => {
        takeData();
    }, []);

    const takeData = async () => {
        let res = await axios.get("http://api.football-api.com/2.0/competitions?Authorization=565ec012251f932ea4000001fa542ae9d994470e73fdb314a8a56d76");
        setTeams(res.data);
        console.table(teams);
    }

    const seePopUp = (league) => {
        setShowModalInfo(true);
        setDataModal(league);
        console.log("xx", dataModal);
    }

    return (
        <div className='teams-container'>
            {teams[0] &&

                <div className='teams-container-table'>
                    <div className='teams-container-table-headers'>
                        <div className='teams-container-table-unique-id'>ID</div>
                        <div className='teams-container-table-unique-name'>Nombre</div>
                        <div className='teams-container-table-unique-region'>Región</div>

                    </div>


                    {teams.map((league) =>
                        <div key={league.id} className='teams-container-table-unique'>
                            <div className='teams-container-table-unique-id'>
                                {league.id}
                            </div>
                            <div className='teams-container-table-unique-name'>
                                {league.name}
                            </div>
                            <div className='teams-container-table-unique-region'>
                                {league.region}
                            </div>

                            <div onClick={() => seePopUp(league)} className='teams-container-table-unique-see'>
                            🔎
                            </div>

                        </div>
                    )}
                </div>
            }

        {showModalInfo &&
        <ModalInfo  dataModal={dataModal} setShowModalInfo={setShowModalInfo}/>
        }


        </div>
    )
};


export default Teams;
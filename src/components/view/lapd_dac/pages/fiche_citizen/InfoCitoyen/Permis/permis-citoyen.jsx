import React, { useEffect, useState } from 'react';
import {listeCitoyenData} from "../../ListeCitoyen/listeCitoyenData";

function PermisCitoyen({ citizenId, onPermisChange }) {

    // Utilisez les données du citoyen pour initialiser les permis
    const citoyenData = listeCitoyenData.find(citizen => citizen.citizenId === citizenId);

    // Mettez à jour les permis en fonction des données du citoyen
    const defaultPermis = {
        pistol: citoyenData.permisPistol,
        smg: citoyenData.permisSmg,
        pompe: citoyenData.permisShotgun,
        assaut: citoyenData.permisRifle,
        sniper: citoyenData.permisSnip,

        vehicle: citoyenData.permisVehicle,
        air: citoyenData.permisAir,
        boat: citoyenData.permisBoat,
    };

    const [citoyenPermis, setCitoyenPermis] = useState(defaultPermis);

    const togglePermis = (data) => {
        const updatedCitoyenPermis = {
            ...citoyenPermis,
            [data]: !citoyenPermis[data],
        };

        setCitoyenPermis(updatedCitoyenPermis);

        // Appelez la fonction de gestion des permis avec les données mises à jour
        onPermisChange(updatedCitoyenPermis);
    }

    useEffect(() => {
        const citoyenData = listeCitoyenData.find(citizen => citizen.citizenId === citizenId);
        const updatedPermis = {
            pistol: citoyenData.permisPistol,
            smg: citoyenData.permisSmg,
            pompe: citoyenData.permisShotgun,
            assaut: citoyenData.permisRifle,
            sniper: citoyenData.permisSnip,

            vehicle: citoyenData.permisVehicle,
            air: citoyenData.permisAir,
            boat: citoyenData.permisBoat,
        };
        setCitoyenPermis(updatedPermis);
    }, [citizenId]);


    return (
        <>
            <div>
                <h4>Permis de conduire : </h4>
                <ul>
                    <li className={citoyenPermis.vehicle ? 'allowed' : ''} onClick={() => togglePermis('vehicle')}>
                        <img style={{ width: "20px" }} src="/assets/icon/citizen/car.svg" alt="permis voiture" />
                    </li>
                    <li className={citoyenPermis.air ? 'allowed' : ''} onClick={() => togglePermis('air')}>
                        <img style={{ width: "20px" }} src="/assets/icon/citizen/air.svg" alt="permis avion" />
                    </li>
                    <li className={citoyenPermis.boat ? 'allowed' : ''} onClick={() => togglePermis('boat')}>
                        <img style={{ width: "20px" }} src="/assets/icon/citizen/boat.svg" alt="permis bateau" />
                    </li>
                </ul>
            </div>
            <div>
                <h4>Permis d'arme : </h4>
                <ul>
                    <li className={citoyenPermis.pistol ? 'allowed' : ''} onClick={() => togglePermis('pistol')}>
                        <img style={{ width: '20px' }} src="/assets/icon/citizen/pistol.svg" alt="Permis pistolet" />
                    </li>
                    <li className={citoyenPermis.smg ? 'allowed' : ''} onClick={() => togglePermis('smg')}>
                        <img style={{ width: '20px' }} src="/assets/icon/citizen/smg.svg" alt="Permis SMG" />
                    </li>
                    <li className={citoyenPermis.pompe ? 'allowed' : ''} onClick={() => togglePermis('pompe')}>
                        <img style={{ width: '20px' }} src="/assets/icon/citizen/shotgun.svg" alt="Permis pompe" />
                    </li>
                    <li className={citoyenPermis.assaut ? 'allowed' : ''} onClick={() => togglePermis('assaut')}>
                        <img style={{ width: '20px' }} src="/assets/icon/citizen/rifle.svg" alt="Permis Assaut" />
                    </li>
                    <li className={citoyenPermis.sniper ? 'allowed' : ''} onClick={() => togglePermis('sniper')}>
                        <img style={{ width: '20px' }} src="/assets/icon/citizen/snip.svg" alt="Permis Sniper" />
                    </li>
                </ul>
            </div>
        </>

    );
}

export default PermisCitoyen;
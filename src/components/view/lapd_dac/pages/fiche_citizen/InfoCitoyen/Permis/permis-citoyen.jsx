import React, { useState } from 'react';

function PermisCitoyen() {

    const [permis, setPermis] = useState({
        pistol: false,
        smg: false,
        pompe: false,
        assaut: false,
        sniper: false,

        vehicle: false,
        air: false,
        boat: false,
    });

    const togglePermis = (data) => {
        setPermis({
            ...permis,
            [data]: !permis[data],
        });
    };

    return (
        <>
            <div>
                <h4>Permis de conduire : </h4>
                <ul>
                    <li className={permis.vehicle ? 'allowed' : ''} onClick={() => togglePermis('vehicle')}>
                        <img style={{ width: "20px" }} src="/assets/icon/citizen/car.png" alt="permis voiture" />
                    </li>
                    <li className={permis.air ? 'allowed' : ''} onClick={() => togglePermis('air')}>
                        <img style={{ width: "20px" }} src="/assets/icon/citizen/plane.png" alt="permis voiture" />
                    </li>
                    <li className={permis.boat ? 'allowed' : ''} onClick={() => togglePermis('boat')}>
                        <img style={{ width: "20px" }} src="/assets/icon/citizen/bateau.png" alt="permis voiture" />
                    </li>
                </ul>
            </div>
            <div>
                <h4>Permis d'arme : </h4>
                <ul>
                    <li className={permis.pistol ? 'allowed' : ''} onClick={() => togglePermis('pistol')}>
                        <img style={{ width: '20px' }} src="/assets/icon/citizen/pistol.png" alt="Permis pistolet" />
                    </li>
                    <li className={permis.smg ? 'allowed' : ''} onClick={() => togglePermis('smg')}>
                        <img style={{ width: '20px' }} src="/assets/icon/citizen/smg.png" alt="Permis SMG" />
                    </li>
                    <li className={permis.pompe ? 'allowed' : ''} onClick={() => togglePermis('pompe')}>
                        <img style={{ width: '20px' }} src="/assets/icon/citizen/pompe.png" alt="Permis pompe" />
                    </li>
                    <li className={permis.assaut ? 'allowed' : ''} onClick={() => togglePermis('assaut')}>
                        <img style={{ width: '20px' }} src="/assets/icon/citizen/rifle.png" alt="Permis Assaut" />
                    </li>
                    <li className={permis.sniper ? 'allowed' : ''} onClick={() => togglePermis('sniper')}>
                        <img style={{ width: '20px' }} src="/assets/icon/citizen/snip.png" alt="Permis Sniper" />
                    </li>
                </ul>
            </div>
        </>

    );
}

export default PermisCitoyen;
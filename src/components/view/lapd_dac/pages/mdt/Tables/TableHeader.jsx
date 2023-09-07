import React from 'react';

function TableHeader() {
    return (
        <tr>
            <th style={{ maxWidth: '15px' }}>Rang unit.</th>
            <th style={{ width: '100px' }}>Type d’unité</th>
            <th style={{ width: '240px' }}>Officiers</th>
            <th style={{ width: '140px' }}>Véhicule</th>
            <th>Localisation</th>
            <th>Dispo</th>
            <th>Statut</th>
        </tr>
    );
}

export default TableHeader;

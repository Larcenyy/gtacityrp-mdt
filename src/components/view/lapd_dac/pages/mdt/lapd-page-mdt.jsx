import React, {useEffect, useState} from "react";
import 'leaflet';
import 'leaflet/dist/leaflet.css';
import {attachModalListeners} from "../../../../../dist/js/modalToogle";
import LapdAlert from "../home/lapd-alert";
import TableHeader from "./Tables/TableHeader";
import TableRow from "./Tables/TableRow";
import {rowsData} from "./Tables/tableData";
import ContainerCom from "./Messages/ContainerCom";
import CardDispatchContainer from "./Dispatch/CardDispatchContainer";
import ModalManager from "../../Modals/ModalMap";

const PageMDT = () => {
    const [tableData, setTableData] = useState(rowsData);

    const addRowData = () => {
        const newRowData = {
            id: Math.random(), // Vous pouvez utiliser une meilleure logique pour l'ID
            unitRank: "Un Rang",
            unitType: "Un Type",
            officers: [],
            vehicles: [],
            location: "Indisponible",
            availability: "Disponible",
            status: "10-01",
        };

        console.log("Adding row data:", newRowData);

        setTableData((prevData) => [...prevData, newRowData]);
        // Autres actions après l'ajout
    };



    useEffect(() => {
        attachModalListeners();
        // Handle Delete Buttons
        const deleteButtons = document.querySelectorAll(".officer__delete, .vehicle__delete");

        deleteButtons.forEach(button => {
            button.addEventListener("click", (event) => {
                const isOfficer = event.currentTarget.classList.contains("officer__delete");
                const elementClass = isOfficer ? ".officer" : ".vehicle";

                const elementToRemove = event.currentTarget.closest(elementClass);
                if (elementToRemove) elementToRemove.remove();
            });
        });

        // Handle Officer Cards Click
        const officerCards = document.querySelectorAll(".officer__card");

        officerCards.forEach(card => {
            card.addEventListener("click", () => {
                card.classList.toggle("selected");
            });
        });

        // Handle Dispo Status Click
        const dispoStatus = document.querySelector('.dispo__status');
        const dispoPoint = document.querySelector('.dispo__point');
        const dispoText = document.querySelector('.dispo__text');

        dispoStatus.addEventListener('click', () => {
            dispoPoint.classList.toggle('dnd');
            dispoPoint.classList.contains('dnd') ? dispoText.textContent = 'Indisponible' : dispoText.textContent = 'Disponible';
        });
    }, []);


    return (
        <>
            <div className="app__content app__home">
                <LapdAlert/>
                <div className="mdt content-rooter">
                    <div className="title-content">
                        <div className={'w-rooter'}>
                            <p>Rooter</p>
                        </div>
                        <div className='title-list'>
                            <div className={'separate-title'}>
                                <div>
                                    <span className="online"></span>
                                    <p>En ligne</p>
                                </div>
                                <hr/>
                                <div>
                                    <span className="deleteIcon"></span>
                                    <p>Pas de dispatch en ligne</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="content-mdt">
                        <table>
                            <TableHeader/>
                            {tableData.map((data, index) => (
                                <TableRow data={data} key={index}/>
                            ))}
                        </table>
                    </div>
                    <div className={"addRowAgent"} onClick={addRowData} >
                        <img style={{ width: "15px" }} src="/assets/images/icon/plus.svg" alt="Ajouter une donée" />
                    </div>
                </div>

                {/***************** CALL DISPATCH SECTION *******************/}
                <div className="mdt content-rooter">
                    <div className="title-content">
                        <div className={'w-rooter'}>
                            <p>Call dispatch</p>
                        </div>
                        <div className='title-list'>
                            <div className={'separate-title'}>
                                <div>
                                    <span className="deleteIcon"></span>
                                    <p>Pas de dispatch en ligne</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="content-dispatch">
                        <CardDispatchContainer/>
                        <ContainerCom/>
                    </div>
                </div>
            </div>
        </>
    )
}


export default PageMDT;
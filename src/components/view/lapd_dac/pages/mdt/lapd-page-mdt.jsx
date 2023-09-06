import React, { Component } from "react";
import LapdAlert from "../home/lapd-alert";
import 'leaflet/dist/leaflet.css';
import { attachModalListeners } from "../../../../../dist/assets/modalToogle";
import 'leaflet';
import MapComponent from "../../leaflet-map/leaflet-map";
import Modal from "../../modal/Modal";


class PageMDT extends Component {
    componentDidMount() {
        attachModalListeners();

        // Handle Delete Buttons
        const deleteButtons = document.querySelectorAll(".officer__delete, .vehicle__delete");

        deleteButtons.forEach(button => {
            button.addEventListener("click", (event) => {
                const deleteId = event.currentTarget.getAttribute("data-delete-id");
                const isOfficer = event.currentTarget.classList.contains("officer__delete");

                if (isOfficer) {
                    const officer = event.currentTarget.closest(".officer");
                    if (officer) {
                        officer.remove();
                    }
                } else {
                    const vehicle = event.currentTarget.closest(".vehicle");
                    if (vehicle) {
                        vehicle.remove();
                    }
                }
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

            if (dispoPoint.classList.contains('dnd')) {
                dispoText.textContent = 'Indisponible';
            } else {
                dispoText.textContent = 'Disponible';
            }
        });
    }


    render() {
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
                                <tr>
                                    <th style={{maxWidth: '15px'}}>Rang unit.</th>
                                    <th style={{width: '100px'}}>Type d’unité</th>
                                    <th style={{width: '240px'}}>Officiers
                                    </th>
                                    <th style={{width: '140px'}}>Véhicule</th>
                                    <th>Localisation</th>
                                    <th>Dispo</th>
                                    <th>Statut</th>
                                </tr>
                                <tr>
                                    <td>
                                        <select name="unit_rank" id="unit_rank">
                                            <option value="adam" selected>5</option>
                                            <option value="lincoln">10</option>
                                            <option value="tango">15</option>
                                        </select>
                                    </td>
                                    <td>
                                        <select name="unit_type" id="unit_type">
                                            <option value="adam" selected>Adam</option>
                                            <option value="lincoln">Lincoln</option>
                                            <option value="tango">Tango</option>
                                            <option value="mesaking">Mesaking</option>
                                            <option value="xray">Xray</option>
                                            <option value="marie">Marie</option>
                                            <option value="charlie">Charlie</option>
                                            <option value="king">King</option>
                                        </select>
                                    </td>
                                    <td className="officer__list__table">
                                    <span className="officer">
                                        <span className="officer__name">John Doe</span>
                                        <span className="officer__delete"></span>
                                    </span>

                                        <span className="officer" data-id-officer="1">
                                        <span className="officer__name">John Doe</span>
                                        <span className="officer__delete" data-delete-id="1"></span>
                                    </span>

                                        <div className="add__officer openModal" data-modal="add__officer__mdt"></div>
                                    </td>
                                    <td className="vehicle__list__table">
                                    <span className="vehicle" data-id-vehicle="1">
                                        <span className="vehicle__name">John Doe</span>
                                        <span className="vehicle__delete" data-delete-id="1"></span>
                                    </span>

                                        <div className="add__vehicle openModal" data-modal="add__vehicle__mdt"></div>
                                    </td>
                                    <td>Mission Row <span className="icon__localisation__mdt openModal"
                                                          data-modal="view__location__patrouille"></span></td>
                                    <td>
                            <span className="dispo__status"><span className="dispo__point"></span><span
                                className="dispo__text">Disponible</span></span>
                                    </td>
                                    <td>
                                        <select name="unit_status" id="unit_status">
                                            <option value="10-01" selected>10-01</option>
                                            <option value="10-01">10-01</option>
                                            <option value="10-01">10-01</option>
                                            <option value="10-01">10-01</option>
                                            <option value="10-01">10-01</option>
                                            <option value="10-01">10-01</option>
                                            <option value="10-01">10-01</option>
                                            <option value="10-01">10-01</option>
                                        </select>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <select name="unit_rank" id="unit_rank">
                                            <option value="adam" selected>5</option>
                                            <option value="lincoln">10</option>
                                            <option value="tango">15</option>
                                        </select>
                                    </td>
                                    <td>
                                        <select name="unit_type" id="unit_type">
                                            <option value="adam" selected>Adam</option>
                                            <option value="lincoln">Lincoln</option>
                                            <option value="tango">Tango</option>
                                            <option value="mesaking">Mesaking</option>
                                            <option value="xray">Xray</option>
                                            <option value="marie">Marie</option>
                                            <option value="charlie">Charlie</option>
                                            <option value="king">King</option>
                                        </select>
                                    </td>
                                    <td className="officer__list__table">
                                    <span className="officer">
                                        <span className="officer__name">John Doe</span>
                                        <span className="officer__delete"></span>
                                    </span>

                                        <span className="officer" data-id-officer="1">
                                        <span className="officer__name">John Doe</span>
                                        <span className="officer__delete" data-delete-id="1"></span>
                                    </span>

                                        <div className="add__officer openModal" data-modal="add__officer__mdt"></div>
                                    </td>
                                    <td className="vehicle__list__table">
                                    <span className="vehicle" data-id-vehicle="1">
                                        <span className="vehicle__name">John Doe</span>
                                        <span className="vehicle__delete" data-delete-id="1"></span>
                                    </span>

                                        <div className="add__vehicle openModal" data-modal="add__vehicle__mdt"></div>
                                    </td>
                                    <td>Mission Row <span className="icon__localisation__mdt openModal"
                                                          data-modal="view__location__patrouille"></span></td>
                                    <td>
                            <span className="dispo__status"><span className="dispo__point"></span><span
                                className="dispo__text">Disponible</span></span>
                                    </td>
                                    <td>
                                        <select name="unit_status" id="unit_status">
                                            <option value="10-01" selected>10-01</option>
                                            <option value="10-01">10-01</option>
                                            <option value="10-01">10-01</option>
                                            <option value="10-01">10-01</option>
                                            <option value="10-01">10-01</option>
                                            <option value="10-01">10-01</option>
                                            <option value="10-01">10-01</option>
                                            <option value="10-01">10-01</option>
                                        </select>
                                    </td>
                                </tr>
                            </table>
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
                            <div className={"containerCard"}>
                                <div className={'cardDispatch'}>
                                    <div className={'cardDispatch__left'}>
                                        <div className={'cardDispatch__left__top'}>
                                            <div className={"cardDispatch__left__top__code"}>
                                                <span className={"badgeId"}>#1</span>
                                                <span className={"badgeCode"}>10-31</span>
                                                <h5>Tirs d'arme à feu</h5>
                                            </div>
                                            <div className={"cardDispatch__left__top__info"}>
                                                <p><img style={{width: "12px"}} src="/assets/icon/clock.svg"
                                                        alt="Heures"/>Maintenant</p>
                                                <p><img style={{width: "12px"}} src="/assets/icon/localisation.svg"
                                                        alt="Localisation"/>Vespucci Boulevard</p>
                                            </div>
                                            <span data-modal="call_verif"
                                                  className="claim openModal">Prendre l'appel</span>
                                        </div>
                                    </div>
                                    <div className={'cardDispatch__right'}>
                                        <div className={"cardDispatch__right__icon"}>
                                <span data-modal="call_delete" className={"openModal"}>
                                   <img style={{width: "17px", fill: "#ED1B22", cursor: "pointer"}}
                                        src="/assets/icon/trashCall.png" alt="Supprimer"/>
                                </span>
                                            <span data-modal="call_localisation" className={"openModal"}>
                                    <img style={{width: "12px", cursor: "pointer"}} src="/assets/icon/localisation.svg"
                                         alt="Localisation"/>
                                </span>
                                        </div>
                                    </div>
                                </div>
                                <div className={'cardDispatch'}>
                                    <div className={'cardDispatch__left'}>
                                        <div className={'cardDispatch__left__top'}>
                                            <div className={"cardDispatch__left__top__code"}>
                                                <span className={"badgeId"}>#1</span>
                                                <span className={"badgeCode"}>10-31</span>
                                                <h5>Tirs d'arme à feu</h5>
                                            </div>
                                            <div className={"cardDispatch__left__top__info"}>
                                                <p><img style={{width: "12px"}} src="/assets/icon/clock.svg"
                                                        alt="Heures"/>Maintenant</p>
                                                <p><img style={{width: "12px"}} src="/assets/icon/localisation.svg"
                                                        alt="Localisation"/>Vespucci Boulevard</p>
                                            </div>
                                            <span data-modal="call_verif"
                                                  className="claim openModal">Prendre l'appel</span>
                                        </div>
                                    </div>
                                    <div className={'cardDispatch__right'}>
                                        <div className={"cardDispatch__right__icon"}>
                                <span data-modal="call_delete" className={"openModal"}>
                                   <img style={{width: "17px", fill: "#ED1B22", cursor: "pointer"}}
                                        src="/assets/icon/trashCall.png" alt="Supprimer"/>
                                </span>
                                            <span data-modal="call_localisation" className={"openModal"}>
                                    <img style={{width: "12px", cursor: "pointer"}} src="/assets/icon/localisation.svg"
                                         alt="Localisation"/>
                                </span>
                                        </div>
                                    </div>
                                </div>
                                <div className={'cardDispatch'}>
                                    <div className={'cardDispatch__left'}>
                                        <div className={'cardDispatch__left__top'}>
                                            <div className={"cardDispatch__left__top__code"}>
                                                <span className={"badgeId"}>#1</span>
                                                <span className={"badgeCode"}>10-31</span>
                                                <h5>Tirs d'arme à feu</h5>
                                            </div>
                                            <div className={"cardDispatch__left__top__info"}>
                                                <p><img style={{width: "12px"}} src="/assets/icon/clock.svg"
                                                        alt="Heures"/>Maintenant</p>
                                                <p><img style={{width: "12px"}} src="/assets/icon/localisation.svg"
                                                        alt="Localisation"/>Vespucci Boulevard</p>
                                            </div>
                                            <span data-modal="call_verif"
                                                  className="claim openModal">Prendre l'appel</span>
                                        </div>
                                    </div>
                                    <div className={'cardDispatch__right'}>
                                        <div className={"cardDispatch__right__icon"}>
                                <span data-modal="call_delete" className={"openModal"}>
                                   <img style={{width: "17px", fill: "#ED1B22", cursor: "pointer"}}
                                        src="/assets/icon/trashCall.png" alt="Supprimer"/>
                                </span>
                                            <span data-modal="call_localisation" className={"openModal"}>
                                    <img style={{width: "12px", cursor: "pointer"}} src="/assets/icon/localisation.svg"
                                         alt="Localisation"/>
                                </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={"containerCom"}>
                                <div className={"containerCom__top"}>
                                    <h5>Communication interne</h5>
                                </div>
                                <div className={"containerCom__messageContainer"}>
                                    <div className={"containerMessage_receiver"}>
                                        <div className={"message"}>
                                            <div>
                                                <h5>DOE Jhon - Matricule</h5>
                                                <span>00 : 00 - 10 juin 2000</span>
                                            </div>
                                            <p>
                                                Lorem ipsum dolor sit amet consectetur. Urna odio lectus cursus cursus.
                                                In at id gravida at senectus. Suspendisse nulla mattis consequat netus
                                                pellentesque feugiat in dignissim. Sem tempus neque nec egestas
                                                malesuada tempus sollicitudin et scelerisque. Commodo eget viverra
                                                convallis dignissim egestas.
                                                Lorem ipsum dolor sit amet consectetur. Urna odio lectus cursus cursus.
                                                In at id gravida at senectus. Suspendisse nulla mattis consequat netus
                                                pellentesque feugiat in dignissim. Sem tempus neque nec egestas
                                                malesuada tempus sollicitudin et scelerisque. Commodo eget viverra
                                                convallis dignissim egestas.
                                            </p>
                                        </div>
                                    </div>
                                    <div className={"containerMessage_sender"}>
                                        <div className={"message sender"}>
                                            <div>
                                                <h5>DOE Jhon - Matricule</h5>
                                                <span>00 : 00 - 10 juin 2000</span>
                                            </div>
                                            <p>
                                                Lorem ipsum dolor sit amet consectetur. Urna odio lectus cursus cursus.
                                                In at id gravida at senectus. Suspendisse nulla mattis consequat netus
                                                pellentesque feugiat in dignissim. Sem tempus neque nec egestas
                                                malesuada tempus sollicitudin et scelerisque. Commodo eget viverra
                                                convallis dignissim egestas.
                                                Lorem ipsum dolor sit amet consectetur. Urna odio lectus cursus cursus.
                                                In at id gravida at senectus. Suspendisse nulla mattis consequat netus
                                                pellentesque feugiat in dignissim. Sem tempus neque nec egestas
                                                malesuada tempus sollicitudin et scelerisque. Commodo eget viverra
                                                convallis dignissim egestas.
                                            </p>
                                        </div>
                                    </div>
                                    <div className={"containerMessage_receiver"}>
                                        <div className={"message"}>
                                            <div>
                                                <h5>DOE Jhon - Matricule</h5>
                                                <span>00 : 00 - 10 juin 2000</span>
                                            </div>
                                            <p>
                                                Lorem ipsum dolor sit amet consectetur. Urna odio lectus cursus cursus.
                                                In at id gravida at senectus. Suspendisse nulla mattis consequat netus
                                                pellentesque feugiat in dignissim. Sem tempus neque nec egestas
                                                malesuada tempus sollicitudin et scelerisque. Commodo eget viverra
                                                convallis dignissim egestas.
                                                Lorem ipsum dolor sit amet consectetur. Urna odio lectus cursus cursus.
                                                In at id gravida at senectus. Suspendisse nulla mattis consequat netus
                                                pellentesque feugiat in dignissim. Sem tempus neque nec egestas
                                                malesuada tempus sollicitudin et scelerisque. Commodo eget viverra
                                                convallis dignissim egestas.
                                            </p>
                                        </div>
                                    </div>
                                    <div className={"containerMessage_sender"}>
                                        <div className={"message sender"}>
                                            <div>
                                                <h5>DOE Jhon - Matricule</h5>
                                                <span>00 : 00 - 10 juin 2000</span>
                                            </div>
                                            <p>
                                                Lorem ipsum dolor sit amet consectetur. Urna odio lectus cursus cursus.
                                                In at id gravida at senectus. Suspendisse nulla mattis consequat netus
                                                pellentesque feugiat in dignissim. Sem tempus neque nec egestas
                                                malesuada tempus sollicitudin et scelerisque. Commodo eget viverra
                                                convallis dignissim egestas.
                                                Lorem ipsum dolor sit amet consectetur. Urna odio lectus cursus cursus.
                                                In at id gravida at senectus. Suspendisse nulla mattis consequat netus
                                                pellentesque feugiat in dignissim. Sem tempus neque nec egestas
                                                malesuada tempus sollicitudin et scelerisque. Commodo eget viverra
                                                convallis dignissim egestas.
                                            </p>
                                        </div>
                                    </div>
                                    <div className={"containerMessage_sender"}>
                                        <div className={"message sender"}>
                                            <div>
                                                <h5>DOE Jhon - Matricule</h5>
                                                <span>00 : 00 - 10 juin 2000</span>
                                            </div>
                                            <p>
                                                Lorem ipsum dolor sit amet consectetur. Urna odio lectus cursus cursus.
                                                In at id gravida at senectus. Suspendisse nulla mattis consequat netus
                                                pellentesque feugiat in dignissim. Sem tempus neque nec egestas
                                                malesuada tempus sollicitudin et scelerisque. Commodo eget viverra
                                                convallis dignissim egestas.
                                                Lorem ipsum dolor sit amet consectetur. Urna odio lectus cursus cursus.
                                                In at id gravida at senectus. Suspendisse nulla mattis consequat netus
                                                pellentesque feugiat in dignissim. Sem tempus neque nec egestas
                                                malesuada tempus sollicitudin et scelerisque. Commodo eget viverra
                                                convallis dignissim egestas.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className={"sendMessageContainer"}>
                                    <input type="text"
                                           placeholder={"Communiquer un message aux unités en patrouilles"}/>
                                    <img style={{width: "15px", cursor: "pointer"}} src="/assets/icon/send.svg"
                                         alt="Soumettre"/>
                                </div>
                            </div>
                        </div>
                    </div>


                    {/* Modal POUR AJOUTER UN OFFICIER DU ROOTER */}
                    <div className="modal-background" id="add__officer__mdt">
                        <div className="modal-content">
                            <div className="title">
                                <h1>Ajouter un officier au rooter</h1>
                                <div className="closeModal"></div>
                            </div>
                            <div className="search-container">
                                <input className="search-bar" placeholder="Rechercher un officier"/>
                                <div className="search-icon"></div>
                            </div>
                            <div className="search-result cards-clickable">
                                <div className="officer__card">
                                    <div className="officer__profile"></div>
                                    <div className="officer__informations">
                                        <div className="name">
                                            John Doe
                                        </div>
                                        <div className="matricule">
                                            Matricule
                                        </div>
                                    </div>
                                    <div className="officer__rank rank__off1"></div>
                                </div>
                            </div>
                            <div className="buttons">
                                <button className="button modify">Ajouter l'officier</button>
                                <button className="button cancel closeModal">Annuler</button>
                            </div>
                        </div>
                    </div>

                    {/* Modal pour accepter un appel */}
                    <div className="modal-background" id="call_verif">
                        <Modal title={"Répondre à un appel 911"} descrip={"Êtes vous sûr de vouloir prendre cette appel ?"} >
                            <div>
                                <button className="button modify">Prendre l'appel</button>
                                <button className="button cancel closeModal">Annuler</button>
                            </div>
                        </Modal>
                    </div>

                    {/* Modal pour delete un appel */}
                    <div className="modal-background" id="call_delete">
                        <div className="modal-content">
                            <div className="title">
                                <h1>Supprimer un appel</h1>
                                <div className="closeModal"></div>
                            </div>
                            <div>
                                <h2 style={{fontSize: '15px'}}>Êtes vous sûr de supprimer cet appel 911 ?</h2>
                            </div>
                            <div className="buttons">
                                <button className="button delete">Supprimer l'appel</button>
                                <button className="button cancel closeModal">Annuler</button>
                            </div>
                        </div>
                    </div>

                    {/* Modal pour localiser un appel */}
                    <div className="modal-background" id="call_localisation">
                        <div className="modal-content">
                            <div className="title">
                                <h1>Localiser un appel</h1>
                                <div className="closeModal"></div>
                            </div>
                            <div style={{ width: '90vw', height: '370px'}}>
                                <MapComponent />
                            </div>
                        </div>
                    </div>


                    {/* Modal pour add un véhicule */}
                    <div className="modal-background" id="add__vehicle__mdt">
                        <div className="modal-content">
                            <div className="title">
                                <h1>Ajouter un véhiculer au rooter</h1>
                                <div className="closeModal"></div>
                            </div>
                            <div className="search-container">
                                <input className="search-bar" placeholder="Rechercher un véhicule"/>
                                <div className="search-icon"></div>
                            </div>
                            <div className="search-result cards-clickable">
                                <div className="officer__card">
                                    <div className="officer__profile"></div>
                                    <div className="officer__informations">
                                        <div className="name">
                                            John Doe
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="buttons">
                                <button className="button modify">Ajouter le véhicule</button>
                                <button className="button cancel closeModal">Annuler</button>
                            </div>
                        </div>
                    </div>

                    {/* Modal POUR AFFICHER LA POSITION D'UNE PATROUILLE */}
                    <div className="modal-background" id="view__location__patrouille">
                        <div className="modal-content">
                            <div className="title">
                                <h1>Ajouter un véhiculer au rooter</h1>
                                <div className="closeModal"></div>
                            </div>
                            <div style={{ width: '90vw', height: '350px'}}>
                                <MapComponent />
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
            ;
    }
}


export default PageMDT;
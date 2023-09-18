import React, {useState} from "react";

const PageRapport = () => {
    const [recherche, setRecherche] = useState("");
    const [searchData, setSearchData] = useState([]);
    const [isConfirmationModalVisible, setConfirmationModalVisible] =
        useState(false);
    const [itemToDeleteIndex, setItemToDeleteIndex] = useState(null);
    const [isNotFilter, setIsNotFilter] = useState(true);

    // Gérer l'état actif des filtres
    const [isRapportActive, setIsRapportActive] = useState(false);
    const [isCitoyenActive, setIsCitoyenActive] = useState(false);
    const [isVehiculeActive, setIsVehiculeActive] = useState(false);

    // Fonction pour afficher le modèle de confirmation
    function showConfirmationModal(index) {
        setItemToDeleteIndex(index);
        setConfirmationModalVisible(true);
    }

    // Fonction pour masquer le modèle de confirmation
    function hideConfirmationModal() {
        setItemToDeleteIndex(null);
        setConfirmationModalVisible(false);
    }

    // Fonction pour supprimer un élément du tableau searchData
    function handleDelete() {
        if (itemToDeleteIndex !== null) {
            const updatedSearchData = [...searchData];
            updatedSearchData.splice(itemToDeleteIndex, 1);
            setSearchData(updatedSearchData);
            hideConfirmationModal(); // Masquer le modèle de confirmation
        }
    }

    // Fonction pour basculer l'état d'un filtre
    function handleFilterClick(filter) {
        switch (filter) {
            case "Rapport":
                setIsRapportActive(!isRapportActive);
                setIsCitoyenActive(false);
                setIsVehiculeActive(false);
                break;
            case "Citoyen":
                setIsCitoyenActive(!isCitoyenActive);
                setIsRapportActive(false);
                setIsVehiculeActive(false);
                break;
            case "Véhicule":
                setIsVehiculeActive(!isVehiculeActive);
                setIsRapportActive(false);
                setIsCitoyenActive(false);
                break;
            default:
                break;
        }
    }

    const toggleFilter = () => {
        setIsNotFilter(!isNotFilter);
    };

    const handleAddElement = (e) => {
        e.preventDefault();

        if (recherche.trim() !== "") {
            const formattedDate = `Le ${new Date().toLocaleDateString()} à ${new Date().toLocaleTimeString()}`;
            let nouvelElement;

            if (isRapportActive || isCitoyenActive || isVehiculeActive) {
                // Utiliser le filtre actif
                nouvelElement = {
                    title: recherche,
                    date: formattedDate,
                    filtre: getActiveFilter(),
                };
            } else {
                // Aucun filtre sélectionné
                nouvelElement = {
                    title: recherche,
                    date: formattedDate,
                    filtre: "Aucun filtre",
                };
            }

            setSearchData([...searchData, nouvelElement]);

            setRecherche("");
        }
    };

    // Fonction pour obtenir le filtre actif
    function getActiveFilter() {
        if (isRapportActive) return "Rapport";
        if (isCitoyenActive) return "Citoyen";
        if (isVehiculeActive) return "Véhicule";
        return "Aucun filtre";
    }

    return(
        <>
            <div className={"container-search"}>
                <div className={"container-search__content"}>
                    <div className={"container-search__content__top"}>
                        <img style={{ width: "18px" }} src="/assets/images/icon/search.svg" alt="Rechercher" />
                        <h4>Rechercher</h4>
                    </div>
                    <div className={'input-filter'}>
                        <div className={"search-container"}>
                            <input
                                className="search-bar"
                                type="text"
                                required={true}
                                placeholder={"Rechercher un citoyen, un rapport..."}
                                value={recherche}
                                onChange={(e) => setRecherche(e.target.value)}
                            />
                            <span onClick={handleAddElement}>
                                    <img style={{ width: "18px", marginRight: '15px' }} src="/assets/images/icon/search.svg" alt="Rechercher" />
                            </span>
                        </div>
                        <div
                            className={isNotFilter ? "notActiveFilter" : "activeFilter"}
                            onClick={toggleFilter} >
                            <img
                                style={{ width: "18px" }}
                                src={
                                    isNotFilter
                                        ? "/assets/images/icon/light.svg"
                                        : "/assets/images/icon/lightActive.svg"
                                }
                                alt="Rechercher"
                            />
                        </div>
                    </div>
                    {!isNotFilter && (
                        <div className={"filtre-container"}>
                            <p>Filtres :</p>
                            <ul>
                                <li
                                    onClick={() => handleFilterClick("Rapport")}
                                    className={isRapportActive ? "searchActive" : ""}
                                >
                                    <span>Rapport</span>
                                </li>
                                <li
                                    onClick={() => handleFilterClick("Citoyen")}
                                    className={isCitoyenActive ? "searchActive" : ""}
                                >
                                    <span>Citoyen</span>
                                </li>
                                <li
                                    onClick={() => handleFilterClick("Véhicule")}
                                    className={isVehiculeActive ? "searchActive" : ""}
                                >
                                    <span>Véhicule</span>
                                </li>
                            </ul>
                        </div>
                    )}
                    <div className={"container-history"}>
                        <div className={"history"}>
                            <img style={{ width: "15px" }} src="/assets/images/icon/clock.svg" alt="Date" />
                            <p style={{fontWeight: '800'}}>Votre historique de recherche</p>
                        </div>
                        {searchData.slice(0, 5).map((data, index) => (
                            <div className={"card-search"} key={index}>
                                <div className={"card-search__left"}>
                                    <div className={"card-search__left__icon"}>
                                        <img style={{ width: "18px" }} src="/assets/images/icon/search.svg" alt="Rechercher" />
                                    </div>
                                    <div>
                                        <h4>{data.title}</h4>
                                        <span>{data.date} - [{data.filtre}]</span>
                                    </div>
                                </div>
                                <hr style={{ width: "2px", border: "none", height: "30px", background: "gray" }} />
                                <div className={"card-search__right"}>
                                   <span>
                                        <img style={{ width: "18px" }} src="/assets/images/icon/search.svg" alt="Rechercher" />
                                   </span>
                                   <span onClick={() => showConfirmationModal(index)}>
                                        <img style={{ width: "18px" }} src="/assets/images/icon/trashCall.png" alt="Supprimer" />
                                  </span>
                                </div>
                                {/* Modèle de confirmation (affiché conditionnellement) */}
                                {itemToDeleteIndex === index && isConfirmationModalVisible && (
                                    <div className="confirmation-modal">
                                        <p>Confirmer l'action ?</p>
                                        <button onClick={() => { handleDelete(); hideConfirmationModal(); }}><img style={{ width: "15px" }} src="/assets/images/icon/valid.svg" alt="Supprimer" /></button>
                                        <button onClick={hideConfirmationModal}><img style={{ width: "15px" }} src="/assets/images/icon/invalide.svg" alt="Supprimer" /></button>
                                    </div>
                                )}
                            </div>
                        ))}
                        <small>Uniquement vos 5 dernière recherches vous sont fournis.</small>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PageRapport
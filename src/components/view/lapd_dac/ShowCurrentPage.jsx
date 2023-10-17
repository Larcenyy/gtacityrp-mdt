import React from "react";
import PageHome from "./pages/home/lapd-page-home";
import PageMDT from "./pages/mdt/lapd-page-mdt";
import PageFicheCitizen from "./pages/fiche_citizen/lapd-page-fiche_citizen";
import PageMap from "./pages/map/map";
import CreateFicheCitizen from "./pages/fiche_citizen/CreateFicheCitoyen/create-fiche_citizen";
import PageRapport from "./pages/rapport/lapd-page-rapport";
import SearchHome from "./pages/search/search-home";
import PagePPA from "./pages/ppa/lapd-page-ppa";
import ShowRapportArrest from "./pages/rapport/show-rapport/page-show-rapport";
import ShowEditRapport from "./pages/rapport/edit-rapport/page-edit-rapport";



const ShowCurrentPage = ({ currentPage }) => {
    return (
        <div>
            {currentPage === "accueil" ? <PageHome /> : null}
            {currentPage === "mdt" ? <PageMDT /> : null}

            {currentPage === "fiches-citoyens" ? <PageFicheCitizen /> : null}
            {currentPage === "fiches-patients" ? <PageFicheCitizen /> : null}

            {currentPage === "create-citoyens" ? <CreateFicheCitizen /> : null}
            {currentPage === "map" ? <PageMap /> : null}
            {currentPage === "rapports" ? <PageRapport /> : null}
            {currentPage === "rapport-arrest" ? <PageRapport type={"RapportArrest"} /> : null}
            {currentPage === "rapport-gav" ? <PageRapport type={"RapportGAV"} /> : null}
            {currentPage === "recherches" ? <SearchHome /> : null}
            {currentPage === "port-d'arme" ? <PagePPA /> : null}

            {currentPage === "view-rapportArrest" ? <ShowRapportArrest type={"ARREST"} /> : null}
            {currentPage === "view-rapportGAV" ? <ShowRapportArrest type={"GAV"} /> : null}

            {currentPage === "view-editArrest" ? <ShowEditRapport type={"ARREST"} /> : null}
            {currentPage === "view-editGAV" ? <ShowEditRapport type={"GAV"} /> : null}
        </div>
    );
};

export default ShowCurrentPage;

import React from "react";
import PageHome from "./pages/home/lapd-page-home";
import PageMDT from "./pages/mdt/lapd-page-mdt";
import PageFicheCitizen from "./pages/fiche_citizen/lapd-page-fiche_citizen";
import PageMap from "./pages/map/map";
import CreateFicheCitizen from "./pages/fiche_citizen/CreateFicheCitoyen/create-fiche_citizen";
import PageRapport from "./pages/rapport/lapd-page-rapport";
import SearchHome from "./pages/search/search-home";


const ShowCurrentPage = ({ currentPage }) => {
    return (
        <div>
            {currentPage === "accueil" ? <PageHome /> : null}
            {currentPage === "mdt" ? <PageMDT /> : null}
            {currentPage === "fiches-citoyens" ? <PageFicheCitizen /> : null}
            {currentPage === "create-citoyens" ? <CreateFicheCitizen /> : null}
            {currentPage === "map" ? <PageMap /> : null}
            {currentPage === "rapports" ? <PageRapport /> : null}
            {currentPage === "rapport-arrest" ? <PageRapport type={"RapportArrest"} /> : null}
            {currentPage === "rapport-gav" ? <PageRapport type={"RapportGAV"} /> : null}
            {currentPage === "recherches" ? <SearchHome /> : null}
        </div>
    );
};

export default ShowCurrentPage;

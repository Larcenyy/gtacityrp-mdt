import React from "react";
import PageHome from "./pages/home/lapd-page-home";
import PageMDT from "./pages/mdt/lapd-page-mdt";
import PageFicheCitizen from "./pages/fiche_citizen/lapd-page-fiche_citizen";

const ShowCurrentPage = ({ currentPage }) => {
    return (
        <div>
            {currentPage === "accueil" ? <PageHome /> : null}
            {currentPage === "mdt" ? <PageMDT /> : null}
            {currentPage === "fiches-citoyens" ? <PageFicheCitizen /> : null}
        </div>
    );
};

export default ShowCurrentPage;

import React, {Component} from "react";
import "../../../../../dist/assets/Main.css";
import {Link} from "react-router-dom";  // Import du fichier Main.css depuis le dossier styles

class TabletteHeader extends Component {

    constructor(props) {
        super(props);

        this.state = {
            activeLink: "Accueil", // Lien actif par défaut
        };
    }

    handleLinkClick = (link) => {
        this.setState({ activeLink: link });
    };


    render() {
        const links = [
            "Accueil",
            "MDT",
            "Fiches citoyens",
            "Rapports",
            "Recherches",
            "Map",
            "Port d'arme",
        ];

        return (
            <>
                <div className="header">
                    <div className="logo"></div>
                    <div className="nav">
                        <ul>
                            {links.map((link) => (
                                <li
                                    key={link}
                                    className={this.state.activeLink === link ? "active" : ""}
                                >
                                    <Link
                                        to={`/page/${link.toLowerCase().replace(/\s+/g, "-")}`}
                                        onClick={() => this.handleLinkClick(link)}
                                    >
                                        {link}
                                    </Link>

                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="title">
                        LA Police Department
                        <div className="subtitle">“To Protect and To Serve”</div>
                    </div>
                </div>
            </>
        );
    }
}


export default TabletteHeader;
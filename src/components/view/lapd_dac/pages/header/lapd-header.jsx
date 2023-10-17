import React, { Component } from "react";
import { Link } from "react-router-dom";

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
            "Fiches Citoyens",
            "Rapports",
            "Recherches",
            "Map",
            "Port d'arme",
        ];

        if (this.props.type === "lafd") {
            const indexCitoyen = links.indexOf("Fiches Citoyens");
            if (indexCitoyen !== -1) {
                links[indexCitoyen] = "Fiches Patients";
            }
            const indexPortArme = links.indexOf("Port d'arme");
            if (indexPortArme !== -1) {
                links.splice(indexPortArme, 1);
            }
        }

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
                                        to={`${this.props.type === "lafd" ? "/lafd/" : "/lapd/"}page/${link.toLowerCase().replace(/\s+/g, "-")}`}
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

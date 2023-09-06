import React, {Component} from "react";

class TabletteContentLoad extends Component {
    render() {
        return (
            <>
                <div className={"loadingContainer"}>
                    <div className="tablet-content">
                        <div className={"loadingContent"}>
                            <div className={"loadingContent__top"}>
                                <div style={{ width: '150px', height: "150px" }} className={"logoLapd"}></div>
                                <div className={"title"}>
                                    <h1>Ville de Los Angeles</h1>
                                    <h2>Connexion</h2>
                                </div>
                            </div>
                            <div className={"loadingContent__down"}>
                                <div className={"background"}>
                                    <div className={"infoLogin"}>
                                        <div className="loader"></div>
                                        <div className={"infoLogin__message"}>
                                            <h2>Connexion à votre compte...</h2>
                                            <p>Cela peut prendre quelque secondes</p>
                                        </div>
                                    </div>
                                    <div className={"infoMessage"}>
                                        <span className="icon-advert"></span>
                                        <span className="text-advert">Formulaire de connexion dédié aux agents de la ville (police, pompiers, hopitaux). Son accès est limité et sécurisé.</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}


export default TabletteContentLoad;
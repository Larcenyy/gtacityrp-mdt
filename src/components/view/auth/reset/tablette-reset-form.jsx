import React, {Component} from "react";
import {Link} from "react-router-dom";

class TabletteResetForm extends Component {

    render() {
        return (
            <>
                <div className="form">
                    <div className="username__field">
                        <input type="text" name="username" placeholder="Identifiant" />
                    </div>
                    <div className="submit__field">
                        <Link to="/resetcode" className="submit__field">
                            <input id="btnReset" type="submit" value="Envoyer un code pour réinitialiser" />
                        </Link>
                    </div>
                </div>
                <Link to="/" className="go-back">
                    <span className="icon__go-back"></span>Retourner à l'accueil
                </Link>
                <div className="cert-advert">
                    <span className="icon__cert-advert"></span> <span className="text__cert-advert">Formulaire de connexion dédié aux agents de la ville (police, pompiers, hopitaux). Son accès est limité et sécurisé.</span>
                </div>
            </>
        );
    }
}


export default TabletteResetForm;
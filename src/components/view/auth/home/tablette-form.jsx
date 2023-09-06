import React, {Component} from "react";
import {Link} from "react-router-dom";

class TabletteForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            passwordFieldType: 'password'
        };
    }

    togglePasswordVisibility = () => {
        this.setState(prevState => ({
            passwordFieldType: prevState.passwordFieldType === 'password' ? 'text' : 'password'
        }));
    };

    render() {
        return (
            <>
                <div className="form">
                    <div className="username__field">
                        <input type="text" name="username" placeholder="Identifiant" />
                    </div>
                    <div className="password__field">
                        <input type={this.state.passwordFieldType} name="password" id="password-field" placeholder="Mot de passe" />
                        <span onClick={this.togglePasswordVisibility} className="show-password" toggle="#password-field" title="Voir le mot de passe"></span>
                    </div>
                    <Link to="/connect" className="submit__field">
                        <input type="submit" value="Se connecter" />
                    </Link>
                </div>
                <Link to="/reset" className="forgot-pass">
                    <span className="icon__forgot-pass"></span>Réinitialiser mon mot de passe
                </Link>
                <div className="cert-advert">
                    <span className="icon__cert-advert"></span> <span className="text__cert-advert">Formulaire de connexion dédié aux agents de la ville (police, pompiers, hopitaux). Son accès est limité et sécurisé.</span>
                </div>
            </>
        );
    }
}


export default TabletteForm;
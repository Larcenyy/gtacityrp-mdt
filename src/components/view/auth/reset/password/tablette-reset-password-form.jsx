import React, {Component} from "react";
import {Link} from "react-router-dom";

class TabletteResetForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            passwordFieldType: 'password',
            verifyPasswordFieldType: 'password'
        };
    }

    togglePasswordVisibility = field => {
        this.setState(prevState => ({
            [field]: prevState[field] === 'password' ? 'text' : 'password'
        }));
    };


    render() {
        return (
            <>
                <div className="form">
                    <div className="password__field">
                        <input
                            type={this.state.passwordFieldType}
                            name="password"
                            id="password-field"
                            placeholder="Votre nouveau mot de passe"
                        />
                        <span
                            onClick={() => this.togglePasswordVisibility('passwordFieldType')}
                            className="show-password"
                            title="Voir le mot de passe"
                        ></span>
                    </div>
                    <div className="password__field">
                        <input
                            type={this.state.verifyPasswordFieldType}
                            name="verify_password"
                            id="verify_password-field"
                            placeholder="Vérifier votre mot de passe"
                        />
                        <span
                            onClick={() => this.togglePasswordVisibility('verifyPasswordFieldType')}
                            className="show-password"
                            title="Voir le mot de passe"
                        ></span>
                    </div>
                    <Link to="/" className="submit__field">
                        <input type="submit" value="Réinitialiser le mot de passe"/>
                    </Link>
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
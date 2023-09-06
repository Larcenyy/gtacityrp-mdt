import React, {Component} from "react";
import TabletteResetPasswordForm from "./tablette-reset-password-form";


class TabletteResetPasswordContent extends Component {
    render() {
        return (
            <div className="tablet-content">
                <div className="gtacityrp__login-container">
                    <div className="gtacityrp__logo"></div>
                    <div className="gtacityrp__login-form">
                        <div className="title">
                            <h1>Ville de Los Angeles</h1>
                            <h2>Réinitialiser un mot de passe</h2>
                        </div>
                        <TabletteResetPasswordForm/>
                    </div>
                </div>
            </div>
        );
    }
}


export default TabletteResetPasswordContent;
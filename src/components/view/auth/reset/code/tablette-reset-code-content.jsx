import React, {Component} from "react";
import TabletteResetCodeForm from "./tablette-reset-code-form";


class TabletteResetCodeContent extends Component {
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
                        <TabletteResetCodeForm/>
                    </div>
                </div>
            </div>
        );
    }
}


export default TabletteResetCodeContent;
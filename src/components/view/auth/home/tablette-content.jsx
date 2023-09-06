import React, {Component} from "react";
import TabletteForm from "./tablette-form";

class TabletteContent extends Component {
    render() {
        return (
            <div className="tablet-content">
                <div className="gtacityrp__login-container">
                    <div className="gtacityrp__logo"></div>
                    <div className="gtacityrp__login-form">
                        <div className="title">
                            <h1>Ville de Los Angeles</h1>
                            <h2>Connexion</h2>
                        </div>
                        <TabletteForm/>
                    </div>
                </div>
            </div>
        );
    }
}


export default TabletteContent;
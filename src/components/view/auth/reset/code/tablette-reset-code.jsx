import React, {Component} from "react";
import quitButton from '../../../../assets/mdt.png';
import TabletteResetCodeContent from "./tablette-reset-code-content";

class TabletteReset extends Component {
    render() {
        return (
            <div className={"tablet-container"}>
                <div className="quit__container">
                    <div className="quit__button"></div>
                </div>
                <img src={quitButton} className="App-logo" alt="logo" />
                <TabletteResetCodeContent/>
            </div>
        );
    }
}


export default TabletteReset;
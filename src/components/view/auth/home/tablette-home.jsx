import React, {Component} from "react";
import quitButton from '../../../assets/mdt.png';
import TabletteContent from "./tablette-content";

class TabletteHome extends Component {
    render() {
        return (
            <div className={"tablet-container"}>
                <div className="quit__container">
                    <div className="quit__button"></div>
                </div>
                <img src={quitButton} className="App-logo" alt="logo" />
                <TabletteContent/>
            </div>
        );
    }
}


export default TabletteHome;
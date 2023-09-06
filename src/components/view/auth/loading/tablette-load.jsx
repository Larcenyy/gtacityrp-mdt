import React, {Component} from "react";
import quitButton from '../../../assets/mdt.png';
import TabletteContentLoad from "./tablette-content-load";

class TabletteLoad extends Component {
    render() {
        return (
            <div className={"tablet-container"}>
                <div className="quit__container">
                    <div className="quit__button"></div>
                </div>
                <img src={quitButton} className="App-logo" alt="logo" />
                <TabletteContentLoad/>
            </div>
        );
    }
}


export default TabletteLoad;
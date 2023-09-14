import React, {Component} from "react";
import quitButton from '../../assets/mdt.png';
import MenuContent from "./lapd-content";
import ModalManager from "./pages/Modals/ModalMap";

class TabletLayout  extends Component {
    render() {
        return (
            <div className={"tablet-container"}>
                <div className="quit__container">
                    <div className="quit__button"></div>
                </div>
                <img src={quitButton} className="App-logo" alt="Tablet Frame" />
                <MenuContent currentPage={this.props.currentPage} />
                <ModalManager />
            </div>
        );
    }
}


export default TabletLayout ;
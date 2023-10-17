import React, {Component} from "react";
import LapdAlert from "./lapd-alert";
import LapdAgenda from "./lapd-agenda";
import LapdAgentList from "./lapd-agentlist";
import {agendarData} from "./agendarData";

class PageHome extends Component {
    render() {
        return (
            <>
                <div className="app__content app__home">
                    <LapdAlert/>
                    <LapdAgenda agendaData={agendarData} />
                    <LapdAgentList/>
                </div>
            </>
        );
    }
}


export default PageHome;
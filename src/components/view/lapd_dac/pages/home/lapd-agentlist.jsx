import React, {Component} from "react";

class LapdAgentList extends Component {
    render() {
        return (
            <>
                <div className="officers__list content-item">
                    <div className="title-content">
                        <div className="icon icon__officers__list-title"></div>
                        Officiers en ligne
                    </div>
                    <div className="content__officers__list">
                        <div className="officer__card">
                            <div className="officer__profile"></div>
                            <div className="officer__informations">
                                <div className="name">
                                    John Doe
                                </div>
                                <div className="matricule">
                                    Matricule
                                </div>
                            </div>
                            <div className="officer__rank rank__off1"></div>
                        </div>
                        <div className="officer__card">
                            <div className="officer__profile"></div>
                            <div className="officer__informations">
                                <div className="name">
                                    John Doe
                                </div>
                                <div className="matricule">
                                    Matricule
                                </div>
                            </div>
                            <div className="officer__rank rank__off2"></div>
                        </div>
                        <div className="officer__card">
                            <div className="officer__profile"></div>
                            <div className="officer__informations">
                                <div className="name">
                                    John Doe
                                </div>
                                <div className="matricule">
                                    Matricule
                                </div>
                            </div>
                            <div className="officer__rank rank__off3"></div>
                        </div>
                        <div className="officer__card">
                            <div className="officer__profile"></div>
                            <div className="officer__informations">
                                <div className="name">
                                    John Doe
                                </div>
                                <div className="matricule">
                                    Matricule
                                </div>
                            </div>
                            <div className="officer__rank rank__off3-1"></div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}
export default LapdAgentList;

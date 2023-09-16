import React, { Component } from "react";

class BoxFiche extends Component {
    render() {
        const icon = this.props.icon || "fiche.svg";

        return (
            <div className={this.props.classSpec} style={{marginTop: this.props.myStyle}}>
                <div className="box-container">
                    <div className="box-content">
                        <div>
                            <h5>
                                <img style={{ width: "20px" }} src={`/assets/icon/${icon}`} alt=" Icon" />
                                {this.props.title}
                            </h5>
                        </div>
                        {this.props.children}
                    </div>
                </div>
            </div>
        );
    }
}

export default BoxFiche;

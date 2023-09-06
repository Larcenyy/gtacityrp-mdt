import React, {Component} from "react";


class LapdAlert extends Component {
    render() {
        return (
            <>
                <div className="alert__box alerte">
                    <div className="alert__icon"></div>
                    <div className="alert__text">
                        <div className="title">Niveau d’alerte : Alerte</div>
                        <div className="subtitle">État d’alerte. Les patrouilles sont renforcées et sont misent en
                            alerte sur tout le territoire.
                        </div>
                    </div>
                </div>
            </>
        );
    }
}
export default LapdAlert;

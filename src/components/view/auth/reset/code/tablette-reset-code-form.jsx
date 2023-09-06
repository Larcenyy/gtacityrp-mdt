import React, {Component} from "react";
import {Link} from "react-router-dom";

class TabletteResetForm extends Component {

    constructor(props) {
        super(props);

        this.state = {
            inputValues: Array(6).fill(""),
        };

        this.inputRefs = [];
    }

    splitNumber = (e, index) => {
        let data = e.target.value;
        if (!data) return;
        if (data.length === 1) return;

        this.popuNext(index, data);
    };

    popuNext = (index, data) => {
        const newValues = [...this.state.inputValues];
        newValues[index] = data[0];
        this.setState({ inputValues: newValues });

        data = data.substring(1);

        if (index < this.inputRefs.length - 1 && data.length) {
            this.popuNext(index + 1, data);
        }
    };

    handleFocus = (index) => {
        if (index === 0) return;

        if (this.state.inputValues[0] === '') {
            this.inputRefs[0].focus();
        }

        if (index > 0 && this.state.inputValues[index - 1] === '') {
            this.inputRefs[index - 1].focus();
        }
    };

    handleInput = (e, index) => {
        const newValues = [...this.state.inputValues];
        newValues[index] = e.target.value;
        this.setState({ inputValues: newValues });

        if (e.target.value.length > 1) {
            this.splitNumber(e, index);
        }
    };

    handleKeyDown = (e, index) => {
        if (e.keyCode === 16 || e.keyCode === 9 || e.keyCode === 224 || e.keyCode === 18 || e.keyCode === 17) {
            return;
        }

        if (e.keyCode === 8 || (e.keyCode === 37 && index > 0 && this.inputRefs[index - 1])) {
            this.inputRefs[index - 1].focus();
        }
        else if (e.keyCode !== 8 && index < this.inputRefs.length - 1) {
            this.inputRefs[index + 1].focus();
        }

        if (e.which === 38 || e.which === 40) {
            e.preventDefault();
        }
    };

    render() {
        return (
            <>
                <div className="form">
                    <div className="code__field">
                        {this.state.inputValues.map((value, index) => (
                            <input
                                key={index}
                                ref={(ref) => (this.inputRefs[index] = ref)}
                                type="number"
                                pattern="[0-9]*"
                                value={value}
                                placeholder="·"
                                inputtype="numeric"
                                autoComplete="one-time-code"
                                required
                                onChange={(e) => this.handleInput(e, index)}
                                onFocus={() => this.handleFocus(index)}
                                onKeyDown={(e) => this.handleKeyDown(e, index)}
                            />
                        ))}
                    </div>
                    <div className="submit__field">
                        <Link to="/resetpassword" className="submit__field">
                            <input type="submit" value="Réinitialiser mon mot de passe" />
                        </Link>
                    </div>
                </div>
                <Link to="/" className="go-back">
                    <span className="icon__go-back"></span>Retourner à l'accueil
                </Link>
                <div className="cert-advert">
                    <span className="icon__cert-advert"></span> <span className="text__cert-advert">Formulaire de connexion dédié aux agents de la ville (police, pompiers, hopitaux). Son accès est limité et sécurisé.</span>
                </div>
            </>
        );
    }
}


export default TabletteResetForm;
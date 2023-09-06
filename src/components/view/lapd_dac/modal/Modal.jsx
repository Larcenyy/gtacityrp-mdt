import React from "react";

const Modal = ({children, title, descrip}) => {

    return (
        <div className="modal-content">
            <div className="title">
                <h1>{title ? title : "Aucune donnée"}</h1>
                <div className="closeModal"></div>
            </div>
            <div>
                <h2 style={{fontSize: '15px'}}>{descrip ? descrip : "Aucune donnée"}</h2>
            </div>
            <div className="buttons">
                {children && (
                    children.map((child, index) => {
                        if (child.type === 'div' && child.props.className === 'button') {
                            return (
                                <div key={index} className="map">
                                    {child.props.children}
                                </div>
                            );
                        }
                        return null;
                    })
                )}
            </div>
        </div>
    )
}

export default Modal;
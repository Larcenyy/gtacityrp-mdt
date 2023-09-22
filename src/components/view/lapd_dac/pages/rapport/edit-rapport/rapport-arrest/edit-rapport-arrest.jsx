import React from 'react';


function EditRapportArrest({name, qualif, content}) {
    return(
        <>
            <form action="">
                <div>
                    <p>Citoyen lié : </p>
                    <div className={"search-container"}>
                        <input
                            className="search-bar"
                            type="text"
                            required={true}
                            value={name}
                            placeholder={"Pour lier un citoyen à cette fiche"}
                        />
                        <img style={{ width: "15px" }} src="/assets/images/icon/search.svg" alt="Rechercher" />
                    </div>
                </div>
                <div>
                    <p>Qualification de l'infraction : </p>
                    <input type="text" value={qualif} required={true} placeholder={"Qualification de l'infraction"}/>
                </div>
                <div className={"area"}>
                    <p>Rapport de l'arrestation :</p>
                    <textarea
                        placeholder={"Rapport détaillé menant à l'arrestation"}
                        rows="19"
                        value={content}
                        required={true}>
                    </textarea>
                </div>
                <button className={"claim send"} type='submit'>ENREGISTRER</button>
            </form>
        </>
    );
}

export default EditRapportArrest;

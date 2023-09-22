import React, {useState} from 'react';
import {officierData} from "../../../mdt/Tables/officierData";
import SelectOption from "../../../mdt/Tables/SelectOption";

function EditRapportGAV({ name, qualif, content, hours, date, urlImage, officierID }) {
    const [editedName, setEditedName] = useState(name);
    const [editedQualif, setEditedQualif] = useState(qualif);
    const [editedContent, setEditedContent] = useState(content);
    const [editedHours, setEditedHours] = useState(hours);
    const [editedDate, setEditedDate] = useState(date);
    const [editedUrl, setEditedUrl] = useState(urlImage);


    const officierIdFromRapport = officierID; // Remplacez cela par l'ID de l'officier lié au rapport GAV
    const [selectedOfficier, setSelectedOfficier] = useState(officierIdFromRapport);
    const correspondingOfficier = officierData.find(officier => officier.officierID === officierIdFromRapport);
    const officierName = correspondingOfficier ? correspondingOfficier.name : '';


    const handleInputChange = (field, value) => {
        switch (field) {
            case 'name':
                setEditedName(value);
                break;
            case 'qualif':
                setEditedQualif(value);
                break;
            case 'content':
                setEditedContent(value);
                break;
            case 'hours':
                setEditedHours(value);
                break;
            case 'date':
                setEditedDate(value);
                break;
            case 'url':
                setEditedUrl(value);
                break;
            default:
                break;
        }
    };

    const handleOfficierChange = (event) => {
        setSelectedOfficier(event.target.value);
    };

    const selectOptions = officierData.map(officier => ({
        value: officier.officierID,
        label: officier.name
    }));
    const indexOfCorrespondingAgent = selectOptions.findIndex(option => option.value === selectedOfficier);
    if (indexOfCorrespondingAgent !== -1) {
        const correspondingAgent = selectOptions.splice(indexOfCorrespondingAgent, 1)[0];
        selectOptions.unshift(correspondingAgent);
    }

    return (
        <>
            <form action="">
                <div>
                    <p>Citoyen lié :</p>
                    <div className={"search-container"}>
                        <input
                            className="search-bar"
                            type="text"
                            required={true}
                            value={editedName}
                            onChange={(event) => handleInputChange('name', event.target.value)}
                            placeholder={"Citoyen lié aux rapport"}
                        />
                        <img style={{ width: "15px" }} src="/assets/images/icon/search.svg" alt="Rechercher" />
                    </div>
                </div>
                <div>
                    <p>Lier un officier en charge :</p>
                    <div className={""}>
                        <SelectOption
                            name="officier"
                            id="officier"
                            options={[
                                { value: officierIdFromRapport, label: officierName },
                                ...officierData.map(officier => ({ value: officier.officierID, label: officier.name })),
                            ]}
                            selectedValue={selectedOfficier}
                            onChange={handleOfficierChange}
                        />
                    </div>
                </div>
                <div id={"dateGAV"}>
                    <div>
                        <p>Date et heure de début de la GAV :</p>
                        <div className={"search-container"}>
                            <input
                                className="search-bar"
                                type="text"
                                value={editedDate}
                                onChange={(event) => handleInputChange('date', event.target.value)}
                                placeholder={"Date"}
                            />
                            <img style={{ width: "15px" }} src="/assets/images/icon/calendar.svg" alt="Date" />
                        </div>
                        <div className={"search-container"}>
                            <input
                                className="search-bar"
                                type="text"
                                required={true}
                                value={editedHours}
                                onChange={(event) => handleInputChange('hours', event.target.value)}
                                placeholder={"Heure"}
                            />
                            <img style={{ width: "15px" }} src="/assets/images/icon/clock.svg" alt="Date" />
                        </div>
                    </div>
                </div>
                <div>
                    <p>Photo de l'individu:</p>
                    <div>
                        <input
                            className="search-bar"
                            style={{width: "70%"}}
                            type="text"
                            required={true}
                            value={editedUrl}
                            onChange={(event) => handleInputChange('url', event.target.value)}
                            placeholder={"Url de l'image"}
                        />
                        <img style={{height: '100px', width: '100px', borderRadius: '7px'}} src={urlImage} alt="Avatar"/>
                    </div>
                </div>
                <div>
                    <p>Lier un rapport de saisie:</p>
                    <div className={"search-container"}>
                        <input
                            className="search-bar"
                            type="text"
                            required={true}
                            placeholder={"Pour lier un rapport de saisie"}
                        />
                        <img style={{ width: "15px" }} src="/assets/images/icon/search.svg" alt="Rechercher" />
                    </div>
                </div>
                <div>
                    <p>Qualification de la garde à vue: </p>
                    <input type="text"
                           value={editedQualif}
                           onChange={(event) => handleInputChange('qualif', event.target.value)}
                           required={true}
                           placeholder={"Qualification de l'infraction"}/>
                </div>
                <div className={"area"}>
                    <p>Rapport de le la garde à vue:</p>
                    <textarea
                        placeholder={"Rapport détaillé menant à la mise en garde à vue"}
                        rows="19"
                        value={editedContent}
                        onChange={(event) => handleInputChange('content', event.target.value)}
                        required={true}>
                    </textarea>
                </div>
                <button className={"claim send"} type='submit'>ENREGISTRER</button>
            </form>
        </>
    );
}

export default EditRapportGAV;

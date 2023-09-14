import React, {Component} from "react";
import MapComponent from "../../leaflet-map/leaflet-map";
import BoxFiche from "../../boxFiche/boxFiche";

class PageMap extends Component {
    render() {


        return (
            <>
                <BoxFiche title="Carte de Los Angeles" classSpec={"app__content app__home"}>
                    <div className={"mapFull"} style={{ width: '100%', height: '455px', overflow: "hidden"}}>
                        <MapComponent />
                    </div>
                </BoxFiche>
            </>
        );
    }
}

export default PageMap;
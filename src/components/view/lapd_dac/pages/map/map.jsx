import React, {Component} from "react";
import MapComponent from "../../leaflet-map/leaflet-map";
import BoxFiche from "../../boxFiche/boxFiche";

class PageMap extends Component {
    render() {


        return (
            <>
                <BoxFiche title="Carte de Los Angeles">
                    <div className={"mapFull"} style={{ width: '100%', height: '500px', overflow: "hidden"}}>
                        <MapComponent />
                    </div>
                </BoxFiche>
            </>
        );
    }
}

export default PageMap;
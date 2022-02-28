import Placeholder from "../assets/images/placeholder.jpg";
import solar from "../assets/images/solar.png";
import heatPump from "../assets/images/heatpump.png";
// import boiler from "../assets/images/boiler.png";
import { useEffect, useState } from "react"
import { Renovations } from "../components/constant/constant"
import RenocityHomePage from "../components/Renocity/homepage/homePage";
import RenoBuyModel from "../components/Renocity/renoBuyModel/renoBuyModel";
import RenoModel from "../components/Renocity/renoModel/renoModel";
const RenoCity = () => {
    const ImageHandler = (name) => {
        if (name === "solar") {
            return (solar)
        } else if (name === "heatPump") {
            return (heatPump)
        } else {
            return (Placeholder)
        }
    }
    const NameHAndler = (value) => {
        if (value === "solar") {
            return ("solar")
        } else if (value === "wallCav") {
            return ("wall Cavity")
        }else if(value === "wallExt"){
            return("Wall Exterior")
        }else if(value === "roofAttic"){
            return("Roof ATTIC")
        }else if(value === "roofIn"){
            return("Roof In")
        }else if(value === "roofExt"){
            return("Roof Exterior")
        }else if(value === "condGas"){
            return("condGas")
        }else if(value === "heatPump"){
            return("Heat Pump")
        }
    }
    const [renoCityData, setRenoCityData] = useState();
    console.log("renoCityData", renoCityData)
    useEffect(() => {
        setRenoCityData(Renovations)
    }, [])
    const [showRenoModel, setShowRenoModel] = useState(false);
    console.log("showRenoModel", showRenoModel)
    const [addModelData, setAddModelData] = useState();
    console.log("addModelData", addModelData)
    const [showRenoBuyModel, setShowRenoBuyModel] = useState(false);
    console.log("showRenoBuyModel", showRenoBuyModel)
    const [addBuyModelData, setAddBuyModelData] = useState([]);
    console.log("addBuyModelData", addBuyModelData)
    const [cardIndex, setCardIndex] = useState();
    console.log("cardIndex", cardIndex)
    const CardSelected = () => {
        let duplicate = [...renoCityData]
        duplicate[cardIndex] = { ...duplicate[cardIndex], active: 1 }
        setRenoCityData(duplicate);
    }
    const RemoveCardSelected = (id) => {
        let duplicate = [...renoCityData]
        duplicate[id - 1] = { ...duplicate[id - 1], active: 0 }
        setRenoCityData(duplicate);
    }
    return (
        <div>
            <RenocityHomePage NameHAndler={NameHAndler} ImageHandler={ImageHandler} setCardIndex={setCardIndex} renoCityData={renoCityData} setShowRenoModel={setShowRenoModel} setAddModelData={setAddModelData} setShowRenoBuyModel={setShowRenoBuyModel} />
            {showRenoModel ? <RenoModel CardSelected={CardSelected} addBuyModelData={addBuyModelData} setAddBuyModelData={setAddBuyModelData} setShowRenoBuyModel={setShowRenoBuyModel} setShowRenoModel={setShowRenoModel} addModelData={addModelData} /> : ""}
            {showRenoBuyModel ? <RenoBuyModel RemoveCardSelected={RemoveCardSelected} addBuyModelData={addBuyModelData} setAddBuyModelData={setAddBuyModelData} setShowRenoBuyModel={setShowRenoBuyModel} setShowRenoModel={setShowRenoModel} /> : ""}
        </div>
    )
}
export default RenoCity;
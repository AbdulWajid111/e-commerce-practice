import { useEffect, useState } from "react";
import BuyModel from "../components/newProducts/buyModel/buyModel";
import ProductsMainCards from "../components/newProducts/newpProductMainCards/productsMainCards";
import Model from "../components/newProducts/newProductModel/newProductModel";
import Benz from "../assets/images/benz.jfif";
import Redcar from "../assets/images/redcar.jfif";
import Yellow from "../assets/images/yellow.jfif";
import Blue from "../assets/images/blue.jfif";
import White from "../assets/images/white.jfif";
const NewProducts = () => {
    const [cars, setCars] = useState()
    console.log("cars", cars)
    useEffect(() => {
        let Data = [
            {
                id: 1,
                image: Benz,
                price: "500",
                stock: "50",
            },
            {
                id: 2,
                image: Redcar,
                price: "600",
                stock: "60",
            },
            {
                id: 3,
                image: Yellow,
                price: "800",
                stock: "30",
            },
            {
                id: 4,
                image: Blue,
                price: "400",
                stock: "30",
            },
            {
                id: 5,
                image: White,
                price: "700",
                stock: "20",
            },
        ]
        setCars(Data);
    }, [])

    const [showModel, setShowModel] = useState(false);
    console.log("showModel", showModel)
    const [showCardsData, setShowCardsData] = useState()
    console.log("showCardsData", showCardsData)
    const [showBuyModel, setShowBuyModel] = useState(false)
    console.log("showBuyModel", showBuyModel)
    const [finalData, setFinalData] = useState([])
    console.log("finalData", finalData)
    const [cardIndex, setCardIndex] = useState()
    console.log("cardIndex", cardIndex)
    const CardBorder = () => {
        let duplicate = [...cars]
        duplicate[cardIndex] = { ...duplicate[cardIndex], active: 1 }
        console.log("duplicate",duplicate[cardIndex])
        setCars(duplicate);        
    }
    const RemoveBorder=(id)=>{
        let duplicate=[...cars]
        duplicate[id-1]={...duplicate[id-1],active:0}
        setCars(duplicate);
    }
    return (
        <div>
            <ProductsMainCards setShowBuyModel={setShowBuyModel} setCardIndex={setCardIndex} cars={cars} setShowModel={setShowModel} setShowCardsData={setShowCardsData} />
            {showModel ? <Model CardBorder={CardBorder} setFinalData={setFinalData} finalData={finalData} setShowModel={setShowModel} showCardsData={showCardsData} setShowBuyModel={setShowBuyModel} /> : ""}
            {showBuyModel ? <BuyModel RemoveBorder={RemoveBorder} finalData={finalData} setFinalData={setFinalData} setShowBuyModel={setShowBuyModel} setShowModel={setShowModel} /> : ""}
        </div>
    )
}
export default NewProducts;
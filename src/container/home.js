import Black from "../assets/images/black.jfif";
import Blue from "../assets/images/blue.png";
import red from "../assets/images/red.jfif";
import yellow from "../assets/images/yellow.png";
import { useEffect, useState } from "react";
import BuyProduct from "../components/buy_product_model/buy_product_model";
import MainProducts from "../components/main_products_page/main_products";
import ProductModel from "../components/products_model/product_model";
const Home = () => {
    const [bikes, setbikes] = useState([])
    console.log("bikes", bikes)
    useEffect(() => {
        let Data = [
            {
                id: 1,
                image: Black,
                price: "100",
                stock: "10",
            },
            {
                id: 2,
                image: Blue,
                price: "200",
                stock: "30",
            },
            {
                id: 3,
                image: red,
                price: "300",
                stock: "40",
            },
            {
                id: 4,
                image: yellow,
                price: "400",
                stock: "5",
            },
        ]
        setbikes(Data);
    }, []

    )
    const [showHideModel, setShowHideModel] = useState(false)
    console.log("showHideModel", showHideModel)
    const [productData, setProductModel] = useState();
    console.log("productData", productData)
    const [buyProductModel, setBuyProductModel] = useState(false);
    console.log("buyProductModel", buyProductModel)
    const [showSelectedProducts, setShowSelectedProducts] = useState([])
    console.log("showSelectedProducts", showSelectedProducts)
    const [selectCards, setSelectCards] = useState()
    console.log("selectCards", selectCards)
    const CardSelected = () => {
        let duplicate = [...bikes]
        duplicate[selectCards] = { ...duplicate[selectCards], active: 1 }
        console.log("duplicate", duplicate[selectCards])
        setbikes(duplicate);
        console.log("select", selectCards)
    }
    const RemoveSelectedCard=(id)=>{
       console.log("id",id)
        let duplicate=[...bikes]
        duplicate[id-1]={...duplicate[id-1],active:0}
        setbikes(duplicate);
    }
    return (
        <div>
            <MainProducts  setBuyProductModel={ setBuyProductModel} selectCards={selectCards} bikes={bikes} setbikes={setbikes} setShowHideModel={setShowHideModel} setProductModel={setProductModel} setSelectCards={setSelectCards} />
            {showHideModel ? <ProductModel  CardSelected={CardSelected} setShowHideModel={setShowHideModel} productData={productData} setBuyProductModel={setBuyProductModel} showSelectedProducts={showSelectedProducts} setShowSelectedProducts={setShowSelectedProducts} /> : ""}
            {buyProductModel ? <BuyProduct RemoveSelectedCard={RemoveSelectedCard}   setBuyProductModel={setBuyProductModel} setShowHideModel={setShowHideModel} showSelectedProducts={showSelectedProducts} setShowSelectedProducts={setShowSelectedProducts} /> : ""}
        </div>
    )
}
export default Home;
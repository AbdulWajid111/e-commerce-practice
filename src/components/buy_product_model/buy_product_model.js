import "./style.css"
const BuyProduct = (props) => {
    let { RemoveSelectedCard, setBuyProductModel, setShowHideModel, showSelectedProducts, setShowSelectedProducts } = props;
    let DeleteHandler = (ID) => {
        let remove = showSelectedProducts?.filter((data) => data.id !== ID)
        setShowSelectedProducts(remove) 
    }
    const TotalPriceHandler = () => {
        let totalPrice = 0
        showSelectedProducts?.map((single) => (
            totalPrice = totalPrice + Number(single.price)
        ))
        console.log("totalPrice ", totalPrice)
        return (totalPrice);
    }
    return (
        <div>
            {/* main_buy_product_div */}
            <div className="main_buy_product_div">
                {/* main_flex_div */}
                <div className="main_flex_div ">
                    {/* buy_prodcut_main_content_div */}
                    <div className="buy_prodcut_main_content_div">
                        <button onClick={() => {
                            setShowHideModel(false)
                            setBuyProductModel(false)
                        }}>GO Back</button>
                        {/* image_details_div */}
                        {showSelectedProducts?.map((single) => (
                            <div className=" image_details_div">
                                {/* image_div */}
                                <div className="image_div">
                                    <img src={single.image} alt="" />
                                </div>
                                {/* details_div */}
                                <div className="details_div">
                                    {/* price_div */}
                                    <div className=" price_div ">
                                        <p>price: {single.price}</p>
                                    </div>
                                    {/* stock_div */}
                                    <div className="stock_div ">
                                        <p>stock: {single.stock}</p>
                                    </div>
                                    {/* button_div*/}
                                    <div className="button_div">
                                        <button onClick={() => {
                                            RemoveSelectedCard(single.id)
                                            DeleteHandler(single.id)}}>Remove</button>
                                    </div>
                                </div>
                            </div>
                        ))}
                        {/* total_price_div */}
                        <div className=" total_price_div">
                            <p>Total Price: </p>
                            <p>{TotalPriceHandler()}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default BuyProduct;
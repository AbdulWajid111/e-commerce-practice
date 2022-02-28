import "./style.css"
const BuyModel = (props) => {
    let { RemoveBorder, setShowBuyModel, setShowModel, finalData, setFinalData } = props;
    const DeleteHandler = (ID) => {
        let remove = finalData?.filter((card) => card.id !== ID)
        setFinalData(remove);
    }
    const TotalPriceHandler = () => {
        let totalPrice = 0
        finalData?.map((single) => (
            totalPrice = totalPrice + Number(single.price)
        ))
        return (totalPrice);
    }
    return (
        <div>
            {/* main_buy_model_container */}
            <div className="main_buy_model_container">
                {/* flex_div */}
                <div className=" flex_div ">
                    {/* main_buy_model_content */}
                    <div className="main_buy_model_content">
                        <button onClick={() => {
                            setShowModel(false)
                            setShowBuyModel(false)
                        }}>GO BACK TO MAIN PAGE</button>
                        {/* image_price_button_div */}
                        <div className="image_price_button_div ">
                            {/* main_image_price_div */}
                            {finalData?.map((single) => (
                                <div className="main_image_price_div">
                                    {/* image_div */}
                                    <div className="image_div ">
                                        <img src={single.image} alt="" />
                                    </div>
                                    {/* price_button_div */}
                                    <div className="price_button_div">
                                        {/* price_div */}
                                        <div className=" price_div ">
                                            <p>price:{single.price}</p>
                                        </div>
                                        {/* stock_div*/}
                                        <div className=" stock_div">
                                            <p>stock:{single.stock}</p>
                                        </div>
                                        {/* button_div */}
                                        <div className="button_div ">
                                            <button onClick={() => {
                                                RemoveBorder(single.id)
                                                DeleteHandler(single.id)
                                            }}>Remove</button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                            {/* total_price_div */}
                            <div className="total_price_div">
                                <p>TOTAL PRICE:</p>
                                <p>{TotalPriceHandler()}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
export default BuyModel;
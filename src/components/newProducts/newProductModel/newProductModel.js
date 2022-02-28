import "./style.css"
const Model = (props) => {
    let { setShowModel, showCardsData, setShowBuyModel,finalData,setFinalData,CardBorder } = props;
    return (
        <div>
            {/* model_main_container */}
            <div className=" model_main_container">
                {/* main_flex_div */}
                <div className=" main_flex_div ">
                    {/* model_content_main_div */}
                    <div className="model_content_main_div">
                        <button onClick={() => setShowModel(false)}>Go Back</button>
                        {/* image_div */}
                        <div className="image_div">
                            <img src={showCardsData?.image} alt="" />
                        </div>
                        {/* price_div */}
                        <div className="price_div">
                            <p>price:{showCardsData?.price}</p>
                        </div>
                        {/*stock_div*/}
                        <div className="stock_div">
                            <p>stock:{showCardsData?.stock}</p>
                        </div>
                        {/* button_div*/}
                        <div className=" button_div">
                            <button onClick={() => {
                                setFinalData([...finalData,showCardsData])
                                setShowBuyModel(true) 
                                CardBorder()
                                }}>Add to Cart</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Model;
import "./style.css"
const ProductsMainCards = (props) => {
    let { cars, setShowModel, setShowCardsData, setCardIndex, setShowBuyModel } = props;
    console.log("cars", cars)
    return (
        <div>
            {/* main_cards_container */}
            <div className=" main_cards_container ">
                {/* main_cards_content */}
                {cars?.map((single, index) => (
                    <div className={`${single.active === 1 ? "active" : ""} main_cards_content`}>
                        {/* image_div */}
                        <div className="image_div ">
                            <img src={single.image} alt="" />
                        </div>
                        {/* price_div */}
                        <div className="price_div">
                            <p>price:{single.price}</p>
                        </div>
                        {/* stock_div */}
                        <div className=" stock_div ">
                            <p>stock:{single.stock}</p>
                        </div>
                        {/* button_div */}
                        <div className="button_div ">
                            <button onClick={() => {
                                if (single.active === 1) {
                                    setShowBuyModel(true)
                                } else {
                                    setShowModel(true)
                                }
                                setShowCardsData(single)
                                setCardIndex(index)
                            }}>Add</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>

    )
}
export default ProductsMainCards;
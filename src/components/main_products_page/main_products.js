import "./style.css"
const MainProducts = (props) => {
    let {  setBuyProductModel, bikes, setShowHideModel, setProductModel, setSelectCards } = props;
    console.log("bikesdata", bikes)
    return (
        <div>
            {/* main_products_div */}
            <div className="main_products_div">
                {/* products_main_content_div */}
                {bikes?.map((single, index) => (
                    <div className={`${single.active === 1 ? "active" : ""} products_main_content_div`}>
                        {/* image_div */}
                        <div className="image_div">
                            <img src={single.image} alt="" />
                        </div>
                        {/* price_div */}
                        <div className="price_div">
                            <p> price: {single.price}</p>
                        </div>
                        {/* stock_div */}
                        <div className="stock_div ">
                            <p>stock:{single.stock}</p>
                        </div>
                        {/* button_div */}
                        <div className="button_div">
                            <button onClick={() => {
                                if (single.active === 1) {
                                    setBuyProductModel(true)
                                }
                                else{
                                    setShowHideModel(true)
                                }
                                setSelectCards(index)
                                setProductModel(single)
                                
                            }}>Add</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
export default MainProducts;
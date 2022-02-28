import "./style.css"
const RenocityHomePage = (props) => {
    let { NameHAndler,ImageHandler ,setShowRenoBuyModel, renoCityData, setShowRenoModel, setAddModelData, setCardIndex } = props;
    return (
        <div>
            {/* main_container_reno_city */}
            <div className=" main_container_reno_city ">
                {/* main_content_div */}
                {renoCityData?.map((single, index) => (
                    <div className={`${single.active === 1 ? "active" : ""} main_content_div`}>
                        {/* image_div */}
                        <div className="image_div">
                            <img src={ ImageHandler(single.renovation)} alt="" />
                        </div>
                        {/* product_name */}
                        <div className="product_name">
                            <p>{NameHAndler(single.renovation)}</p>
                        </div>
                        {/* product_price */}
                        <div className=" product_price">
                            <p> PRICE : {parseInt(single.investment_cost)}</p>
                        </div>
                        {/* yearly_saving */}
                        <div className="yearly_saving">
                            <p>SAVING : {parseInt(single.yearly_savings)}</p>
                        </div>
                        {/* co_2_saving */}
                        <div className="co_2_saving ">
                            <p>CO2-SAVINGS : {parseInt(single.co2_savings)}</p>
                            
                        </div>
                        {/* button_div */}
                        <div className="button_div">
                            <button onClick={() => {
                                if (single.active === 1) {
                                    setShowRenoBuyModel(true)
                                }
                                else {
                                    setShowRenoModel(true)
                                }
                                setCardIndex(index)
                                setAddModelData(single)
                            }}>{`${single.active === 1 ? "Selected" :"Add"}`}</button>
                        </div>
                    </div>
                ))}
            </div>

        </div>
    )
}
export default RenocityHomePage;
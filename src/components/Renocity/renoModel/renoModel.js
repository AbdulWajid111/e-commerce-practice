import "./style.css"
import Placeholder from "../../../assets/images/placeholder.jpg"
const RenoModel = (props) => {
    let {CardSelected ,addBuyModelData, setAddBuyModelData, setShowRenoBuyModel, setShowRenoModel, addModelData } = props;
    return (
        <div>
            {/* reno_model_main_container */}
            <div className="reno_model_main_container">
                {/* main_flex_div */}
                <div className="main_flex_div ">
                    {/* reno_model_main_content */}
                    <div className=" reno_model_main_content ">
                        <button onClick={() => {
                            setShowRenoModel(false)
                        }}>BACK</button>
                        {/* image_div */}
                        <div className="image_div ">
                            <img src={Placeholder} alt="" />
                        </div>
                        {/* product_name */}
                        <div className="product_name">
                            <p>{addModelData?.renovation}</p>
                        </div>
                        {/* price_div */}
                        <div className="price_div">
                            <p>PRICE : {addModelData?.investment_cost}</p>
                        </div>
                        {/* yearly_saving */}
                        <div className="yearly_saving">
                            <p>SAVING :{addModelData?.yearly_savings}</p>
                        </div>
                        {/* co_2_saving*/}
                        <div className="co_2_saving">
                            <p>CO2-SAVINGS : {addModelData?.co2_savings}</p>
                        </div>
                        {/* button_div */}
                        <div className="button_div">
                            <button onClick={() => {
                            CardSelected()
                            setAddBuyModelData([...addBuyModelData, addModelData])
                                setShowRenoBuyModel(true)
                            }}>ADD TO CART</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default RenoModel;
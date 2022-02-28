import "./style.css"
import Placeholder from "../../../assets/images/placeholder.jpg"
const RenoBuyModel = (props) => {
    let { setShowRenoModel, setShowRenoBuyModel, addBuyModelData, setAddBuyModelData, RemoveCardSelected } = props;
    const DeleteHandler = (ID) => {
        let remove = addBuyModelData?.filter((data) => data.id !== ID)
        setAddBuyModelData(remove);
    }
    const TotalPrice = () => {
        let totalprice = 0
        addBuyModelData?.map((single) => (
            totalprice = totalprice + Number(single.investment_cost)
        ))
        return (totalprice)
    }
    const YearlySaving = () => {
        let totalprice = 0
        addBuyModelData?.map((single) => (
            totalprice = totalprice + Number(single.investment_cost)
        ))
        return (totalprice)
    }
    const Co2Saving = () => {
        let totalprice = 0
        addBuyModelData?.map((single) => (
            totalprice = totalprice + Number(single.co2_savings)
        ))
        return (totalprice)
    }
    return (
        <div>
            {/* buy_model_main_container */}
            <div className="buy_model_main_container">
                {/* flex_main_div */}
                <div className=" flex_main_div">
                    {/* buy_model_main_content */}
                    <div className=" buy_model_main_content">
                        <button onClick={() => {
                            setShowRenoModel(false)
                            setShowRenoBuyModel(false)
                        }}>GO BACT TO MENU</button>
                        {/* details_totals_main_div */}
                        <div className="details_totals_main_div">
                            {/* details_div */}
                            {addBuyModelData?.map((single) => (
                                <div className="details_div">
                                    {/* image_div */}
                                    <div className="image_div ">
                                        <img src={Placeholder} alt="" />
                                    </div>
                                    {/* details_div_content */}
                                    <div className="details_div_content">
                                        {/* product_name */}
                                        <div className="product_name">
                                            <p>{single.renovation}</p>
                                        </div>
                                        {/* product_price */}
                                        <div className="product_price">
                                            <p>price :{single.investment_cost} </p>
                                        </div>
                                        {/* yearly_saving */}
                                        <div className="yearly_saving">
                                            <p>Saving :{single.yearly_savings} </p>
                                        </div>
                                        {/* Co_2_saving */}
                                        <div className="Co_2_saving">
                                            <p>Co2 Saving :{single.co2_savings} </p>
                                        </div>
                                        {/* button_div */}
                                        <div className=" button_div ">
                                            <button onClick={() => {
                                                RemoveCardSelected(single.id)
                                                DeleteHandler(single.id)
                                            }}>REMOVE</button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                            {/* total_price_div */}
                            <div className="total_price_div">
                                {/* total_price */}
                                <div className="total_price">
                                    <p>Total Price :</p>
                                    <p>{TotalPrice()}</p>
                                </div>
                                {/* yearly_saving_total_price*/}
                                <div className="yearly_saving_total_price">
                                    <p>yearly Saving :</p>
                                    <p>{YearlySaving()}</p>
                                </div>
                                {/* co2_saving_total_price */}
                                <div className="co2_saving_total_price">
                                    <p>Co2Saving:</p>
                                    <p>{Co2Saving ()}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
export default RenoBuyModel;
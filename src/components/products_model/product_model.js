import "./style.css"
const ProductModel = (props) => {
    let { CardSelected, setShowHideModel, productData, setBuyProductModel, setShowSelectedProducts, showSelectedProducts } = props;
    return (
        <div>
            {/* main_product_model_div */}
            <div className="main_product_model_div">
                {/* flex_div */}
                <div className="flex_div">
                    {/* product_model_main_content_div */}
                    <div className="product_model_main_content_div">
                        <button onClick={() => setShowHideModel(false)}>Go Back</button>
                        {/* image_div */}
                        <div className="image_div">
                            <img src={productData?.image} alt="" />
                        </div>
                        {/* price_div */}
                        <div className="price_div">
                            <p>price:{productData?.price}</p>
                        </div>
                        {/* stock_div */}
                        <div className="stock_div">
                            <p>stock:{productData?.stock}</p>
                        </div>
                        {/* button_div */}
                        <div className="button_div">
                            <button onClick={() => {
                                setShowSelectedProducts([...showSelectedProducts, productData])
                                setBuyProductModel(true)
                                CardSelected()
                            }}>Add to Cart</button>
                        </div>

                    </div>

                </div>

            </div>
        </div>

    )
}
export default ProductModel;
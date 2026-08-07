function ProductDetails({productName, price, isDiscount, discountPrice, imageSrc, imageAlt}) {

  return (
    <>
    <img src={imageSrc} alt={imageAlt} width="100" />
    <p>{productName}</p>
    {/* {discount === "yes" && 
      (<del><p>Price: ${price}</p></del>)}

    {discount === "no" && 
      (<p>Price: ${price}</p>)}
    
    {discount === "yes" && 
      (<p>Discount price: ${discountPrice}</p>)} */}
    
    {isDiscount ? <del><p>Price: ${price}</p></del> : <p>Price: ${price}</p>}
    {isDiscount ? <p>Discount price: ${discountPrice}</p> : null}
    <button>Add to Card</button>
    
    </>
  );
}

export default ProductDetails;
function ReactBasics02() {

  const socksPrice = 10;
  const tshirtPrice = 8;
  const productCost = socksPrice + (tshirtPrice * 2);
  console.log(productCost);

  //=================================

  const shippingCost = 2.2;
  const totalCost = productCost + shippingCost;

  //=================================


  return (
    <>
    <button>Good job!</button>
    <p>My name is Aditya</p>

    <hr />

    <p>Cotton socks</p>
    <p>Price: $10</p>
    <button>Add to Cart</button>

    <hr />

    <p>Product cost: ${productCost}</p>
    <p>Shipping cost: ${shippingCost}</p>
    <p>Total cost: ${totalCost}</p>
    <button>Place your order</button>

    </>
  )
  
}

export default ReactBasics02
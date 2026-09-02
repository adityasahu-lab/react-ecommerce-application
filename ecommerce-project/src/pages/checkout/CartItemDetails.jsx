import { useState } from 'react';
import axios from 'axios';
import { formatMoney } from '../../utils/money';

export function CartItemDetails({ cartItem, loadCart }) {
  const [isUpdatingQuantity, setIsUpdatingQuantity] = useState(false);
  const [quantity, setQuantity] = useState(cartItem.quantity);

  // Safe navigation in case cartItem or product is undefined
  const product = cartItem?.product || {};

  const deleteCartItem = async () => {
    await axios.delete(`/api/cart-items/${cartItem.productId}`);
    await loadCart();
  }

  // Function to to get the text in the textbox
  const updateQuantityInput = (event) => {
    setQuantity(event.target.value)
  }

  const updateQuantity = async () => {
    if (isUpdatingQuantity) {
      await axios.put(`/api/cart-items/${cartItem.productId}`, {
        quantity: Number(quantity),
      });
      await loadCart();
      setIsUpdatingQuantity(false);
    } else {
      setIsUpdatingQuantity(true);
    }
  }

  // Function to handle key events 
  const handleQuantityKeyDown = (event) => {
    const keyPressed = event.key;

    if (keyPressed === 'Enter') {
      updateQuantity();
    } else if (keyPressed === 'Escape') {
      setQuantity(cartItem.quantity);
      setIsUpdatingQuantity(false);
    }
  }



  return (
    <>
      <img className="product-image"
        src={product.image} />

      <div className="cart-item-details">
        <div className="product-name">
          {product.name}
        </div>
        <div className="product-price">
          {formatMoney(product.priceCents)}
        </div>
        <div className="product-quantity">
          <span>
            Quantity: {isUpdatingQuantity
              ? <input 
                type="text" 
                className="quantity-textbox" 
                value={quantity} 
                onChange={updateQuantityInput}
                onKeyDown={handleQuantityKeyDown} />
              : <span className="quantity-label" style={{ display: isUpdatingQuantity ? 'none' : 'block' }}>{cartItem.quantity}</span>}
          </span>
          <span className="update-quantity-link link-primary" onClick={updateQuantity}>
            Update
          </span>
          <span className="delete-quantity-link link-primary"
            onClick={deleteCartItem}>
            Delete
          </span>
        </div>
      </div>
    </>
  );
}
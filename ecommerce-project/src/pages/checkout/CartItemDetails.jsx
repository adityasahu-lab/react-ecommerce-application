import { useState } from 'react';
import axios from 'axios';
import { formatMoney } from '../../utils/money';

export function CartItemDetails({ cartItem, loadCart }) {
  const[isUpdatingQuantity, setIsUpdatingQuantity] = useState(false);
  
  const updateQuantity = () => {
    if(isUpdatingQuantity) {
      setIsUpdatingQuantity(false);
    } else {
      setIsUpdatingQuantity(true);
    }
  }

  // Safe navigation in case cartItem or product is undefined
  const product = cartItem?.product || {};

  const deleteCartItem = async () => {
    await axios.delete(`/api/cart-items/${cartItem.productId}`);
    await loadCart(); 
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
              ? <input type="text" className="quantity-textbox" />
              : <span className="quantity-label" style={{display: isUpdatingQuantity ? 'none' : 'block'}}>{cartItem.quantity}</span>}
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
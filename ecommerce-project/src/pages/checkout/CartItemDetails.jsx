import axios from 'axios';
import { formatMoney } from '../../utils/money';

export function CartItemDetails({ cartItem, loadCart }) {
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
            Quantity:
              <input type="text" className="textbox" />
             <span className="quantity-label">{cartItem.quantity}</span>
          </span>
          <span className="update-quantity-link link-primary">
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
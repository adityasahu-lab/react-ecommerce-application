import { CartItemDetails } from './CartItemDetails';
import { DeliveryOptions } from './DeliveryOptions';
import { DeliveryDate } from './DeliveryDate';

export function OrderSummary({ cart, deliveryOptions, loadCart }) {
  return (
    <div className="order-summary">
      {cart.map((cartItem) => {
        return (
          <div key={cartItem.productId} className="cart-item-container">
            <DeliveryDate />
            <div className="cart-item-details-grid">
              <CartItemDetails cartItem={cartItem}/>
              <DeliveryOptions deliveryOptions={deliveryOptions} cartItem={cartItem} loadCart={loadCart} />
            </div>
          </div>
        );
      })}
    </div>

  );
}
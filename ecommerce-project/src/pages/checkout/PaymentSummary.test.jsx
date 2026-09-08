import { it, expect, describe, vi, beforeEach } from 'vitest';
import { render, screen, within } from '@testing-library/react';
import { MemoryRouter, useLocation } from 'react-router';
import axios from 'axios';
import userEvent from '@testing-library/user-event';
import { PaymentSummary } from "./PaymentSummary";

vi.mock('axios');

describe('PaymentSummary component', () => {
  let paymentSummary;
  let loadCart;
  let user;

  beforeEach(() => {
    paymentSummary = {
      totalItems: 6,
      productCostCents: 14073,
      shippingCostCents: 0,
      totalCostBeforeTaxCents: 14073,
      taxCents: 1407,
      totalCostCents: 15480
    }

    loadCart = vi.fn();
    user = userEvent.setup();
  });

  it('displays the correct details', async () => {
    render(
      <MemoryRouter>
        <PaymentSummary
          paymentSummary={paymentSummary}
          loadCart={loadCart}
        />
      </MemoryRouter>
    );

    // There are multiple ways to check the text inside an element.
    expect(
      screen.getByText('Items (6):')
    ).toBeInTheDocument();

    // 1. within() + getByText() + toBeInTheDocument()
    const paymentSummaryRow = await screen.findAllByTestId('payment-summary-product-cost');

    expect(
      within(paymentSummaryRow[0]).getByText('$140.73')
    ).toBeInTheDocument();

    // 2. getByTestId() + toHaveTextContent()
    // (toHaveTextContent() checks the text inside an element)
    // This solution is a little cleaner in this case.
    expect(paymentSummaryRow[0]).toHaveTextContent('$140.73');
    // or
    expect(
      screen.getByTestId('payment-summary-product-cost')
    ).toHaveTextContent('$140.73');

    expect(
      screen.getByTestId('payment-summary-shipping-cost')
    ).toHaveTextContent('$0.00');

    expect(
      screen.getByTestId('payment-summary-total-before-cost')
    ).toHaveTextContent('$140.73');

    expect(
      screen.getByTestId('payment-summary-tax')
    ).toHaveTextContent('$14.07');

    expect(
      screen.getByTestId('payment-summary-total')
    ).toHaveTextContent('$154.80');
  });

  it('places an order', async () => {
    function Location() {
      const location = useLocation();

      return (
        <div data-testId="url-path">{location.pathname}</div>
      );
    }

    render(
      <MemoryRouter>
        <PaymentSummary
          paymentSummary={paymentSummary}
          loadCart={loadCart}
        />
        <Location />
      </MemoryRouter>
    );

    const placeOrderButton = screen.getByTestId('place-order-button');
    await user.click(placeOrderButton);  

    expect(axios.post).toHaveBeenCalledWith('/api/orders');
    expect(loadCart).toHaveBeenCalled();
    expect(screen.getByTestId('url-path')).toHaveTextContent('/orders');;
  });

  
});


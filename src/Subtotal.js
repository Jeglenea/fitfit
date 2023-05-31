import React from 'react'
import "./Subtotal.css"
import CurrencyFormat from 'react-currency-format';
import { useStateValue } from './StateProvider';
import { getBasketTotal } from './reducer';

function Subtotal({decimalScale, value, displayType, thousandSeparator, prefix}) {

  const[{basket}, dispatch] = useStateValue();

  return (
    <div className="subtotal">

      <CurrencyFormat 
              renderText={(value) => (
                <>
                  <p>
                    Subtotal ({basket.length} plans): <strong>{value}</strong>
                  </p>
                  <small className="subtotal__gift"> {/*Bu kısım silinebilir/yeniden düzenlenebilir.*/}
                    <input type="checkbox" /> This order contains a gift
                  </small>
                </>
              )}
              decimalScale={2}
              value={getBasketTotal(basket)}
              displayType={"text"}
              thousandSeparator={true}
              prefix={"₺"}
            />
            <button>Proceed to Checkout</button>

    </div>
  )
}

export default Subtotal
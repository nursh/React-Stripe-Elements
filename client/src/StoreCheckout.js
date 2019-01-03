import React, { Component } from "react";
import { CardNumberElement, injectStripe } from "react-stripe-elements";

class StoreCheckout extends Component {
  render() {
    return (
      <div>
        <p>Check this out!!!</p>
        <CardNumberElement style={{
          base: {
            color: "rebeccapurple",
          }
        }}/>
        <button>Submit</button>
      </div>
    );
  }
}

export default injectStripe(StoreCheckout);

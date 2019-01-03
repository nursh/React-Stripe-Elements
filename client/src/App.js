import React, { Component } from "react";
import { StripeProvider, Elements } from "react-stripe-elements";

import StoreCheckout from "./StoreCheckout";

class App extends Component {
  render() {
    return (
      <StripeProvider apiKey="pk_test_oBVdfkOc88MQrgX4jy2nWneA">
        <div className="app">
          <h1>Checkout Form</h1>
          <Elements>
            <StoreCheckout />
          </Elements>
        </div>
      </StripeProvider>
    );
  }
}

export default App;

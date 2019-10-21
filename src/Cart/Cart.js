import React, {Component} from 'react';
import CartItem from '../CartItem/CartItem';

const USCurrencyFormat = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
});

class Cart extends Component {
    render() {
        
      
        const total = Object.keys(this.props.selected).reduce(
            (acc, curr) => acc + this.props.selected[curr].cost,
            0
        );

        return (
            <section className="main__summary">
                <h2>Your cart</h2>
                {Object.keys(this.props.selected).map((feature, idx) =>
                    <CartItem
                        selected={this.props.selected}
                        feature={feature}
                        idx={idx}
                        featureHash={feature + '-' + idx}
                        selectedOption={this.props.selected[feature]}
                    />
                )}


                <div className="summary__total">
                    <div className="summary__total__label">Total</div>
                    <div className="summary__total__value">
                        {USCurrencyFormat.format(total)}
                    </div>
                </div>
            </section>
        );
    };
}

export default Cart;
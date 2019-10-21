import React, {Component} from 'react';
import CartItem from '../CartItem/CartItem';
import CartTotal from '../CartTotal/CartTotal';

class Cart extends Component {
    render() {
        return (
            <section className="main__summary">
                <h2>Your cart</h2>
                {Object.keys(this.props.selected).map((feature, idx) =>
                    <CartItem
                        selected={this.props.selected}
                        feature={feature}
                        idx={idx}
                        featureHash={feature + '-' + idx}
                        key={feature + '-' + idx}
                        selectedOption={this.props.selected[feature]}
                    />
                )}
                <CartTotal
                    selected={this.props.selected}
                />
            </section>
        );
    };
}

export default Cart;
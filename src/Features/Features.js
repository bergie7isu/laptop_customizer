import React, {Component} from 'react';
import slugify from 'slugify';
import Feature from '../Feature/Feature';

const USCurrencyFormat = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
});

class Features extends Component {
    render() {
        return (
            <form className="main__form">
                <h2>Customize your laptop</h2>
                {Object.keys(this.props.features).map((feature, idx) => {
                    const featureHash = feature + '-' + idx;
                    const options = this.props.features[feature].map(item => {
                        const itemHash = slugify(JSON.stringify(item));
                        return (
                            <div key={itemHash} className="feature__item">
                                <input
                                    type="radio"
                                    id={itemHash}
                                    className="feature__option"
                                    name={slugify(feature)}
                                    checked={item.name === this.props.selected[feature].name}
                                    onChange={e => this.props.updateFeature(feature, item)}
                                />
                                <label htmlFor={itemHash} className="feature__label">
                                    {item.name} ({USCurrencyFormat.format(item.cost)})
                                </label>
                            </div>
                        );
                    });
                    return (
                        <fieldset className="feature" key={featureHash}>
                            <legend className="feature__name">
                                <h3>{feature}</h3>
                            </legend>
                            {options}
                        </fieldset>
                    );
                })}



                {Object.keys(this.props.features).map((feature, idx) => 
                    <Feature 
                        feature={feature}
                        idx={idx}
                        features={this.props.features}
                        selected={this.props.selected}
                        updateFeature={this.props.updateFeature}
                    />)
                };

                    

            </form>
        );
    };
}

export default Features;
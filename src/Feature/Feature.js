import React, {Component} from 'react';
import slugify from 'slugify';
import FeatureOptions from '../FeatureOptions/FeatureOptions'

class Feature extends Component {
    render() {
        const {feature, idx, featureHash} = this.props;
        return (
            <fieldset className="feature" key={featureHash}>
                <legend className="feature__name">
                    <h3>{feature}</h3>
                </legend>
                {this.props.features[feature].map(item =>
                    <FeatureOptions 
                        item={item}
                        feature={feature}
                        idx={idx}
                        key={slugify(JSON.stringify(item))}
                        features={this.props.features}
                        selected={this.props.selected}
                        updateFeature={this.props.updateFeature}
                    />)}
            </fieldset>
        );
    };
}

export default Feature;
import React, {Component} from 'react';
import Feature from '../Feature/Feature';

class Features extends Component {
    render() {
        return (
            <form className="main__form">
                <h2>Customize your laptop</h2>
                {Object.keys(this.props.features).map((feature, idx) => 
                    <Feature 
                        feature={feature}
                        idx={idx}
                        key={feature + '-' + idx}
                        featureHash={feature + '-' + idx}
                        features={this.props.features}
                        selected={this.props.selected}
                        updateFeature={this.props.updateFeature}
                    />)}
            </form>
        );
    };
}

export default Features;
import React from 'react'

type Props = {
    title: string,
    text: string,
    price_min: number,
    price_max: number
};
export class PriceItem extends React.Component {
    props:Props;

    render() {
        const fullPrice = <span>{this.props.price_min} - {this.props.price_max} лей</span>;
        const minPrice = <span>{this.props.price_min} лей</span>;
        return (
            <li className="media">
                <div className="media-body">
                    <h4 className="media-heading">{this.props.title} ({this.props.price_min == this.props.price_max ? minPrice : fullPrice})</h4>
                    {this.props.text}
                </div>
            </li>
        )
    }
}

export default PriceItem


import React from 'react'
import PriceItem from "components/Prices/PriceItem/Prices/PriceItem";

type Props = {

};

const tmpData = [{"id":1,"created_at":"2016-04-28 12:21:57","updated_at":"2016-04-28 12:21:57","price_min":1000,"price_max":1000,"deleted_at":null,"created_by":null,"updated_by":null,"deleted_by":null,"title":"\u0423\u0441\u043b\u0443\u0433\u0430 1","text":"Описание услуги.. Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis."},{"id":2,"created_at":"2016-04-28 12:21:57","updated_at":"2016-04-28 12:21:57","price_min":5000,"price_max":7500,"deleted_at":null,"created_by":null,"updated_by":null,"deleted_by":null,"title":"\u0423\u0441\u043b\u0443\u0433\u0430 2","text":"Описание услуги.. Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis."}];

export class Prices extends React.Component {
  props: Props;

  render () {
    return (
        <div>
          <h1>Цены</h1>
            <ul className="media-list">
                {tmpData.map(record => <PriceItem price_max={record.price_max} price_min={record.price_min} title={record.title} text={record.text}/>)}
            </ul>
        </div>
    )
  }
}

export default Prices

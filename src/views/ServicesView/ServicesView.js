import React from 'react';
import ServicesNaturalSwitcher from "containers/Services/NaturalSwitcher";
import ServicesServiceList from "containers/Services/ServiceList";

type Props = {

};
export class Services extends React.Component {
    props:Props;

    render() {
        return (
            <div>
                <center>
                    <h1>Услуги для</h1>
                    <ServicesNaturalSwitcher/>
                </center>
                <br/>
                <ServicesServiceList/>
            </div>
        )
    }
}

export default Services

import React from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {actions} from "redux/modules/services";
import ServiceItem from "components/Services/ServiceItem/Services/ServiceItem";
import {map, values, filter} from "lodash";

function getVisibleServices(services, isNaturalperson) {
    return filter(services, service => {
        return Boolean(service.naturalperson) == isNaturalperson;
    });
}

type Props = {
    services: object,
    isNaturalperson: Boolean
}
export class ServiceList extends React.Component {
    props:Props;

    componentWillMount() {
        this.props.fetchAll();

    }

    render() {
        return (
            <div>
                {map(this.props.services, (service) =>
                    <ServiceItem service={service} key={service.id}/>
                )}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        services: getVisibleServices(state.services.services.entities ? state.services.services.entities.services : [], state.services.ui.naturalperson),
        // services: state.services.services.entities ? state.services.services.entities.services : [],
        isNaturalperson: state.services.ui.naturalperson
    };
}

export default connect(
    mapStateToProps,
    {
        fetchAll: actions.fetchAll
    }
)(ServiceList)

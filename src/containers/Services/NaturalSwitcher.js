import React from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {actions} from "redux/modules/services";

type Props = {
    fetchAll: Function
}
type State = {
    naturalperson: Boolean
}

export class ServicesNaturalSwitcher extends React.Component {
    props:Props;
    state:State;

    constructor(props) {
        super(props);

        this.state = {
            naturalperson: false
        }
    }

    setNaturalpersonFilter(cond) {
        this.state.naturalperson = cond;
        this.props.setNaturalpersonFilter(cond);
        this.forceUpdate();
    }

    render() {
        const activeClass = 'btn btn-primary';
        const defaultClass = 'btn btn-default';

        return (
            <div>
                <div class="btn-group btn-toggle">
                    <button onClick={() => this.setNaturalpersonFilter(true)}
                            className={this.state.naturalperson ? activeClass : defaultClass}>Физических лиц
                    </button>
                    {' '}
                    <button onClick={() => this.setNaturalpersonFilter(false)}
                            className={!this.state.naturalperson ? activeClass : defaultClass}>Юридических лиц
                    </button>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {}
}

export default connect(
    mapStateToProps,
    {
        fetchAll: actions.fetchAll,
        setNaturalpersonFilter: actions.setNaturalpersonFilter
    }
)(ServicesNaturalSwitcher)

import React from 'react'

type Props = {
  service: Object
};
type State = {
  collapsed: Boolean
};
export class ServicesServiceItem extends React.Component {
  props: Props;
  state: State;

  constructor(props) {
    super(props);
    this.state = {
      collapsed: true
    };
  }

  toggleCollapse() {
    this.state.collapsed = !this.state.collapsed;
    this.forceUpdate();
  }

  render () {
    return (
      <div>
        <div className="panel panel-default">
          <div className="panel-heading" onClick={::this.toggleCollapse}>{this.props.service.title}</div>
          <div className="panel-body" style={{display: this.state.collapsed ? 'none' : null}}>
            {this.props.service.text}
          </div>
        </div>
      </div>
    )
  }
}

export default ServicesServiceItem


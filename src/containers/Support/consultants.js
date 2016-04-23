import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

type Props = {

}
export class SupportConsultants extends React.Component {
  props: Props;

  render() {
    return (
      <div>
        <h2>Консультанты</h2>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {}
}
const mapDispatchToProps = (dispatch) => {
  return {}
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Support/consultants)

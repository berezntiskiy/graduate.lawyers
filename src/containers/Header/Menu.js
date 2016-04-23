import React from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {Link} from "react-router"

type Props = {

}
export class HeaderMenu extends React.Component {
    props:Props;

    render() {
        return (
            <nav className="navbar navbar-default navbar-fixed-top">
                <div className="container">
                    <div className="navbar-header">
                        <Link className="navbar-brand" to="/">Project name</Link>
                    </div>
                    <div id="navbar" className="navbar-collapse collapse">
                        <ul className="nav navbar-nav">
                            <li><Link className="navbar-brand" to="/">Приветствие</Link></li>
                            <li><Link className="navbar-brand" to="/about">О нас</Link></li>
                            <li><Link className="navbar-brand" to="/services">Услуги</Link></li>
                            <li><Link className="navbar-brand" to="/price">Цены</Link></li>
                            <li><Link className="navbar-brand" to="/articles">Статьи</Link></li>
                            <li><Link className="navbar-brand" to="/contacts">Контакты</Link></li>
                        </ul>
                        <ul className="nav navbar-nav navbar-right">
                            <li><Link to="/test">test</Link></li>
                        </ul>
                    </div>
                </div>
            </nav>
        )
    }
}
// <div>
//     <Link to={ {pathname: '/test'} }>/test</Link><br/>
//     <Link to={ {pathname: '/' } }>home</Link>
// </div>

const mapStateToProps = (state) => {
    return {}
}
const mapDispatchToProps = (dispatch) => {
    return {}
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(HeaderMenu)

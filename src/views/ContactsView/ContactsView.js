import React from 'react'

type Props = {

};

export class B extends React.Component {
    render() {
        return <b>{this.props.children}: </b>;
    }
}

export class Row extends React.Component {
    render() {
        return <span>{this.props.children}</span>;
    }
}
export class C extends React.Component {
    render() {
        return <span>{this.props.children}</span>;
    }
}
export class ContactForm extends React.Component {
    render() {
        return <div>
            <form className="form-horizontal" action=" " method="post" id="contact_form">
                <fieldset>

                    <legend>Contact Us Today!</legend>




                    <div className="form-group">
                        <label className="col-md-4 control-label">Last Name</label>
                        <div className="col-md-4 inputGroupContainer">
                            <div className="input-group">
                                <span className="input-group-addon"><i className="glyphicon glyphicon-user"></i></span>
                                <input name="last_name" placeholder="Last Name" className="form-control" type="text"/>
                            </div>
                        </div>
                    </div>

                    <div className="form-group">
                        <label className="col-md-4 control-label">E-Mail</label>
                        <div className="col-md-4 inputGroupContainer">
                            <div className="input-group">
                                <span className="input-group-addon"><i className="glyphicon glyphicon-envelope"></i></span>
                                <input name="email" placeholder="E-Mail Address" className="form-control" type="text"/>
                            </div>
                        </div>
                    </div>



                    <div className="form-group">
                        <label className="col-md-4 control-label">Phone #</label>
                        <div className="col-md-4 inputGroupContainer">
                            <div className="input-group">
                                <span className="input-group-addon"><i className="glyphicon glyphicon-earphone"></i></span>
                                <input name="phone" placeholder="(845)555-1212" className="form-control" type="text"/>
                            </div>
                        </div>
                    </div>

                    <div className="alert alert-success" role="alert" id="success_message">Success <i className="glyphicon glyphicon-thumbs-up"></i> Thanks for contacting us, we will get back to you shortly.</div>

                    <div className="form-group">
                        <label className="col-md-4 control-label"></label>
                        <div className="col-md-4">
                            <button type="submit" className="btn btn-warning">Send <span className="glyphicon glyphicon-send"></span></button>
                        </div>
                    </div>

                </fieldset>
            </form>
        </div>;
    }
}


export class Contacts extends React.Component {
    props:Props;

    render() {
        return (
            <div>
                <h1>Контакты</h1>
                <div className="row clearfix">
                    <div className="pull-right block-yandex-map">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2246.615038132045!2d37.57872331546433!3d55.73044200118445!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46b54ba2196d0f51%3A0x113ee4eec1dbdf80!2z0KXQvtC70YzQt9GD0L3QvtCy0LAg0L_QtdGALiwgONGBMSwg0JzQvtGB0LrQstCwLCAxMTkwMjE!5e0!3m2!1sru!2sru!4v1450682516179"
                            width="360" height="300" frameborder="0" style={{border:0}} allowfullscreen=""></iframe>
                    </div>
                    <div className="grid_6 prefix_1 suffix_1 alpha bordered">
                        <dl className="address">
                            <dt className="light">Бюро адвокатов "..."<br/>123, г. Кишинев,<br/>ул Пушкина 9/1
                            </dt>
                            <dd>
                                <Row>
                                    <B>Тел.</B><C>79 76 68 35</C>
                                </Row>
                                <br/>
                                <Row>
                                    <B>Тел.</B><C>78 76 68 35</C>
                                </Row>
                                <br/>
                                <Row>
                                    <B>Тел.</B><C>69 76 68 35</C>
                                </Row>
                                <br/>

                                <Row>
                                    <B>Сайт</B><C><a href="#">фыв.ru</a></C>
                                </Row>
                                <br/>
                                <Row>
                                    <B>E-mail</B><C><a href="mailto:#">info@asd.ru</a></C>
                                </Row>
                            </dd>
                        </dl>
                    </div>
                </div>
                <br/>
                <div className="row clearfix">
                    <ContactForm/>
                </div>
            </div>
        )
    }
}

export default Contacts

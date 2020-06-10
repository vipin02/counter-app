import React, { Component } from "react";
import { Button, Container, Row, Col } from "react-bootstrap";

class Count extends Component {
    render() {
        return (
            <Container>
                <Row>
                    <Col className="col-md-1">
                        <span style={{ fontSize: 24 }} className={this.getBadgeClasses()}>
                            {this.formatCount()}
                        </span>
                    </Col>
                    <Col className="col-md-4">
                        <Button
                            variant="secondary"
                            onClick={() => this.props.onIncrement(this.props.counter)}
                        >
                            <i className="fa fa-plus-circle" aria-hidden="true" />
                        </Button>
                        <Button
                            variant="info m-2"
                            onClick={() => this.props.onDecrement(this.props.counter)}
                            disabled={this.props.counter.value === 0 ? "disabled" : ""}
                        >
                            <i className="fa fa-minus-circle" aria-hidden="true" />
                        </Button>
                        <Button
                            variant="danger"
                            onClick={() => this.props.onDelete(this.props.counter.id)}
                        >
                            <i className="fa fa-trash-o" aria-hidden="true" />
                        </Button>
                    </Col>
                </Row >
            </Container >
        );
    }

    getBadgeClasses = () => {
        let classes = "badge m-2 badge-";
        classes += this.props.counter.value === 0 ? "warning" : "primary";
        return classes;
    };

    formatCount = () => {
        const { value } = this.props.counter;
        return value === 0 ? "Zero" : value;
    };
}

export default Count;

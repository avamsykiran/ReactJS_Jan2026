import { Component } from "react";
import { Button, Card, CardBody, CardFooter, CardHeader } from "react-bootstrap";

class Counter extends Component<{}, { count: number }> {
    constructor(props: {}) {
        super(props);
        this.state = {
            count: 0
        };
    }

    render() {

        const { count } = this.state;

        return (
            <Card bg="primary">
                <CardHeader>
                    <h3>Counter </h3>
                </CardHeader>
                <CardBody>
                    <p>
                        <strong> Count is {count} </strong>
                    </p>
                </CardBody>
                <CardFooter>
                    <Button type="button" size="sm" variant="danger" className="me-2" onClick={_e => this.setState({ count: count - 1 })}>
                        --
                    </Button>
                    <Button type="button" size="sm" variant="secondary" onClick={_e => this.setState({ count: count + 1 })}>
                        ++
                    </Button>
                </CardFooter>
            </Card>
        );
    }
}

export default Counter;
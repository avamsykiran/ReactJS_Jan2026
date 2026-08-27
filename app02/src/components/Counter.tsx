import { Component } from "react";

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
            <section className="card">
                <h3>Counter </h3>
                <p>
                    <button type="button" onClick={_e => this.setState({ count: count - 1 })}> -- </button>
                    <strong> Count is {count} </strong>
                    <button type="button" onClick={_e => this.setState({ count: count + 1 })}> ++ </button>
                </p>
            </section>
        );
    }
}

export default Counter;
import { Component } from "react";

//Assumption: 10 items make on epack.

class ShoppingCounter extends Component<{}, { items: number,packs:number }> {
    constructor(props: {}) {
        super(props);
        this.state = {
            items:0,
            packs:0
        };
    }

    componentDidMount(): void {
        this.setState({items:1})
    }

    componentDidUpdate(){
        const { items,packs } = this.state;

        if(items===10){
            this.setState({items:0,packs:packs+1});
        } else if(items<0){
            if(packs>0){
                this.setState({items:9,packs:packs-1});
            }else{
                this.setState({items:0});
            }
        }
    }

    render() {

        const { items,packs } = this.state;

        return (
            <section className="card">
                <h3>Shopping Counter </h3>
                <p>
                    <button type="button" onClick={_e => this.setState({ items: items - 1 })}> -- </button>
                    <strong> {items} Items and {packs} Packets. </strong>
                    <button type="button" onClick={_e => this.setState({ items: items + 1 })}> ++ </button>
                </p>
            </section>
        );
    }
}

export default ShoppingCounter;
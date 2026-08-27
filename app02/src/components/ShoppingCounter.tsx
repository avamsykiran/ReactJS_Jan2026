
//Assumption: 10 items make on epack.

import { useEffect, useState } from "react"

function ShoppingCounter() {

    const [items, setItems] = useState<number>(0);
    const [packs, setPacks] = useState<number>(0);

    useEffect(() => {
        setItems(1);
    }, []);

    useEffect(() => {
        if (items === 10) {
            setItems(0);
            setPacks(packs + 1);
        } else if (items < 0) {
            if (packs > 0) {
                setItems(0);
                setPacks(packs - 1);
            } else {
                setItems(0);            
            }
        }
    }, [items]);

    return (
        <section className="card">
            <h3>Shopping Counter </h3>
            <p>
                <button type="button" onClick={_e => setItems(items-1)}> -- </button>
                <strong> {items} Items and {packs} Packets. </strong>
                <button type="button" onClick={_e => setItems(items+1)}> ++ </button>
            </p>
        </section>
    );
}

export default ShoppingCounter;
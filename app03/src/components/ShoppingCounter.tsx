
//Assumption: 10 items make on epack.

import { useEffect, useState } from "react"
import { Button, Card, CardBody, CardFooter, CardHeader } from "react-bootstrap";

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
        <Card bg="info">
            <CardHeader>
                <h3>Shopping Counter </h3>
            </CardHeader>
            <CardBody>
                <p>
                    <strong> {items} Items and {packs} Packets. </strong>
                </p>
            </CardBody>
            <CardFooter>
                <Button type="button" size="sm" variant="danger" className="me-2" onClick={_e => setItems(items - 1)}>
                    --
                </Button>
                <Button type="button" size="sm" variant="secondary" onClick={_e => setItems(items + 1)}>
                    ++
                </Button>
            </CardFooter>
        </Card>
    );
}

export default ShoppingCounter;
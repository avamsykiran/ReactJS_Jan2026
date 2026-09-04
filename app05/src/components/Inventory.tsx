import { useState } from "react"
import { Alert, Button, Card, CardBody, CardHeader, Table } from "react-bootstrap";
import type { Item } from "../models/Item";
import Quantity from "./Quantity";

function Inventory() {

    const [items, setItems] = useState<Item[]>(
        [
            { itemCode: 100, itemName: "apple", rate: 150, unit: "kg", stock: 188 },
            { itemCode: 101, itemName: "Oil", rate: 366, unit: "litre", stock: 28 },
            { itemCode: 102, itemName: "Biscuit", rate: 15, unit: "pack", stock: 4 },
        ]
    )

    const removeStock = (id: number) => {
        setItems(items.map(cx =>
            cx.itemCode === id ? { ...cx, stock: cx.stock - 1 } : cx
        ));
    }

    const addStock = (id: number) => {
        setItems(items.map(cx =>
            cx.itemCode === id ? { ...cx, stock: cx.stock + 1 } : cx
        ));
    }

    return (
        <Card>
            <CardHeader>
                <h3> Inventory </h3>
            </CardHeader>
            <CardBody>
                {
                    !items || items.length === 0 ? (
                        <Alert variant="info">
                            <strong>Inventory is Empty. Please restock</strong>
                        </Alert>
                    ) : (
                        <Table hover bordered striped>
                            <thead>
                                <tr>
                                    <th>ItemCode</th>
                                    <th>ItemName</th>
                                    <th>Rate</th>
                                    <th>Unit</th>
                                    <th>Stock</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    items.map(cx => (
                                        <tr key={cx.itemCode}>
                                            <td>{cx.itemCode}</td>
                                            <td>{cx.itemName}</td>
                                            <td>{cx.rate}</td>
                                            <td>{cx.unit}</td>
                                            <td>
                                                <Quantity
                                                    qty={cx.stock}
                                                    itemCode={cx.itemCode}
                                                    inc={addStock}
                                                    dec={removeStock} />
                                            </td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </Table>
                    )

                }
            </CardBody>

        </Card>
    );

}

export default Inventory;
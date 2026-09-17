import { Alert, Card, CardBody, CardHeader, Table } from "react-bootstrap";
import Quantity from "./Quantity";
import { selectAllItems } from "../lib/services/selectors";
import { useDispatch, useSelector } from "react-redux";
import { decStock, incStock } from "../lib/services/itemsSlice";

function Inventory() {
    const items = useSelector(selectAllItems);

    const dispatch = useDispatch();

    const removeStock = (id: number) => dispatch(decStock(id))

    const addStock = (id: number) => dispatch(incStock(id))

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
                                            <td>{cx.units}</td>
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
import { useState } from "react";
import { Alert, Button, Card, CardBody, CardHeader, Table } from "react-bootstrap";
import type { Consumer } from "../lib/models/Consumer";

function ConsumersList() {

    const [consumers, setConsumers] = useState<Consumer[]>([
        { cid: 1, fullName: "Vamsy", mobile: "9052224753", mailId: "vamsy@gmail.com" },
        { cid: 2, fullName: "Murthy", mobile: "9052224752", mailId: "murthy@gmail.com" },
        { cid: 3, fullName: "Suresh", mobile: "9052224751", mailId: "suresh@gmail.com" },
        { cid: 4, fullName: "Ramesh", mobile: "9052224750", mailId: "ramesh@gmail.com" }
    ]);

    const removeConsumer = (id: number) => {
        setConsumers(consumers.filter(cx => cx.cid !== id));
    }

    return (
        <Card>
            <CardHeader>
                <h3>Consumers List</h3>
            </CardHeader>
            <CardBody>
                {
                    !consumers || consumers.length === 0 ? (
                        <Alert variant="info">
                            <strong>No Consumers.</strong>
                        </Alert>
                    ) : (
                        <Table hover bordered striped>
                            <thead>
                                <tr>
                                    <th>Id#</th>
                                    <th>Full Name</th>
                                    <th>Mobile</th>
                                    <th>Mail Id</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    consumers.map(cx => (
                                        <tr key={cx.cid}>
                                            <td>{cx.cid}</td>
                                            <td>{cx.fullName}</td>
                                            <td>{cx.mobile}</td>
                                            <td>{cx.mailId}</td>
                                            <td>
                                                <Button type="button" variant="danger" size="sm"
                                                    onClick={_e => removeConsumer(cx.cid)}>
                                                    <i className="bi bi-trash" />
                                                </Button>
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

export default ConsumersList;
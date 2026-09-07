
import { Alert, Button, Card, CardBody, CardHeader, Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../lib/services/appStore";
import { deleteConsumer } from "../lib/services/consumersSlice";

function ConsumersList() {

    const consumers = useSelector((state:RootState) => state.consumers.consumers);
    
    const dispatch = useDispatch();

    const removeConsumer = (id:number) => dispatch(deleteConsumer(id));
    
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
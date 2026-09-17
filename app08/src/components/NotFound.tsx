import { Card, CardBody, CardHeader } from "react-bootstrap";

function NotFound(){
    return (
        <Card bg="danger" text="light">
            <CardHeader>
                <h3>Path Not Found</h3>
            </CardHeader>
            <CardBody>
                <p>
                    This page appears only if the requested path is not found.
                    The following are the possible reasons.
                </p>
                <ol>
                    <li>You have clciekd on a link that is not valid any more</li>
                    <li>You have requested for a resource thats deleted or moved.</li>
                    <li>You have typed a url thats misspelled or that doesnt exists.</li>
                </ol>
            </CardBody>
        </Card>
    );
}

export default NotFound;
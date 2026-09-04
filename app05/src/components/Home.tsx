import { Card, CardBody, CardHeader } from "react-bootstrap";

function Home(){
    return (
        <Card bg="primary" text="light">
            <CardHeader>
                <h3>Home Page</h3>
            </CardHeader>
            <CardBody>
                <p>This is a home page of a react js demo application</p>
                <p>The following are the features we are going to demonstrate</p>
                <ol>
                    <li>Bootstrap Integration</li>
                    <li>Property Drilling</li>
                    <li>Routing</li>
                    <li>Local vs Global State Management</li>
                </ol>
            </CardBody>
        </Card>
    );
}

export default Home;
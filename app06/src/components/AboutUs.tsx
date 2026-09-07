import { Card, CardBody, CardHeader } from "react-bootstrap";

function AboutUs(){
    return (
        <Card bg="info">
            <CardHeader>
                <h3>About Us</h3>
            </CardHeader>
            <CardBody>
                <p>Hai, we are a team of developers and associates working for CTS.</p>                
            </CardBody>
        </Card>
    );
}

export default AboutUs;
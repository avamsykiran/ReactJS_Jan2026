import { useState } from "react";
import type { Titles, UserDetails } from "../lib/models/UserDetails";
import { Card, CardBody, CardHeader } from "react-bootstrap";

function Welcome() {

  const [user, setUser] = useState<UserDetails>({ title: "Mr.", userName: "SoemBody" });

  return (
    <Card bg="info">
      <CardHeader>
        <h3>Welcome! </h3>
      </CardHeader>
      <CardBody>

        <p>We are happy to see you here
          <strong> {user.title} {user.userName} </strong>
        </p>

        <form>
          <div className="form-group">
            <label className="form-label">Title: </label>
            <select className="form-control" value={user.title} onChange={e => setUser({ ...user, title: e.target.value as Titles })}>
              <option value="Mr.">Mister</option>
              <option value="Ms.">Miss</option>
              <option value="Dr.">Doctor</option>
              <option value="Prof.">Professor</option>
            </select>
          </div>
          <div className="form-group">
            <label className="form-label">User Name: </label>
            <input className="form-control" type="text" value={user.userName} onChange={e => setUser({ ...user, userName: e.target.value })} />
          </div>
        </form>
      </CardBody>
    </Card>
  );
}

export default Welcome;
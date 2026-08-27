import { useState } from "react";
import type { Titles, UserDetails } from "../lib/models/UserDetails";

function Welcome() {

  const [user, setUser] = useState<UserDetails>({ title: "Mr.", userName: "SoemBody" });

  return (
    <section className="card">
      <h3>Welcome! </h3>
      
      <p>We are happy to see you here
        <strong> {user.title} {user.userName} </strong>
      </p>

      <form>
        <div>
          <label>Title: </label>
          <select value={user.title} onChange={e => setUser({ ...user, title: e.target.value as Titles })}>
            <option value="Mr.">Mister</option>
            <option value="Ms.">Miss</option>
            <option value="Dr.">Doctor</option>
            <option value="Prof.">Professor</option>
          </select>
        </div>
        <div>
          <label>User Name: </label>
          <input type="text" value={user.userName} onChange={e => setUser({ ...user, userName: e.target.value })} />
        </div>
      </form>
    </section>
  );
}


export default Welcome;
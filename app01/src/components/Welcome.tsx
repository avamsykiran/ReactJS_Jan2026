import { Component } from "react";
import type { UserDetails } from "../lib/models/UserDetails";

class Welcome extends Component< {},{user:UserDetails} > {
  constructor(props:{}){
    super(props);
    this.state = {
      user : {title:"Mr.",userName:"SoemBody"}
    };
  }

  render(){

    const {user} = this.state;

    return (
      <section className="card">
        <h3>Welcome! </h3>
        <p>We are happy to see you here 
            <strong> {user.title} {user.userName} </strong>  </p>
      </section>      
    );
  }
}

export default Welcome;
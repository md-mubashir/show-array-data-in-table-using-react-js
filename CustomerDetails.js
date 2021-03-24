import React from 'react';
import { customerList } from './customerList';

class customerDetails extends React.Component{
    constructor(props){
        super();
        this.state={
            customers : customerList
        }
    }
    render(){
        return(
            <React.Fragment>
                <div className="container mt-3">
                    <div className="row">
                        <div className="col">
                            <div className="card">
                                <div className="card-header">
                                    <h4>Customers Detail:</h4>
                                </div>
                                <div className="card-body">
                                    <h4>Customer Information:</h4>
                                    <p className="lead">
                                        Customer is listed in the below table with their information to better facility. It all about the dummy text i.e lorem ispusm and the text is widely used for all the browser. 
                                    </p>
                                    <table className="table table-hover text-center">
                                        <thead className="bg-dark text-white">
                                            <th>Id</th>
                                            <th>Name</th>
                                            <th>Email</th>
                                            <th>Street</th>
                                            <th>Apartment</th>
                                            <th>City</th>
                                            <th>Action</th>
                                        </thead>
                                        <tbody>
                                            {
                                                this.state.customers.map( (customer)=>{
                                                    return(
                                                        <tr>
                                                            <td>{ customer.id }</td>
                                                            <td>{ customer.name }</td>
                                                            <td>{ customer.email }</td>
                                                            <td>{ customer.address.street }</td>
                                                            <td>{ customer.address.suite }</td>
                                                            <td>{ customer.address.city }</td>
                                                            <td><button className="btn btn-info btn-sm">View</button></td>

                                                        </tr>
                                                    )
                                                } )
                                            }
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}
export default customerDetails;
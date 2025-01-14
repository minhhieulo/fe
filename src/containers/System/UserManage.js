/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import './UserManage.scss';
import {getAllUsers} from '../../services/userServices';
class UserManage extends Component {

    constructor(props){
        super(props);
        this.state ={
            arrUsers: []

        }
    }

    async componentDidMount() {
        let response = await getAllUsers('ALL');
       if(response && response.errCode===0){
        this.setState({
            arrUsers: response.users
        })
       }
    }


    render() {
        console.log('check render' , this.state)
        let arrUsers = this.state.arrUsers;

        return (
            <div className="users-container">
               <div className='title text-center'>Manage Users Width Minh Hieu </div>
               <div className='users-table mt-3 mx-1'><table id="customers">
  <tr>
    <th>Email</th>
    <th>Fist Name</th>
    <th>Last Name</th>
    <th>Address</th>
    <th>Action</th>
  </tr>
  
    {
        arrUsers && arrUsers.map((item , index) =>{
            console.log('Minh hieu check map', item,index)
            return(
                <tr key ={index}>
                
                   <td>{item.email}</td>
                   <td>{item.firstName}</td>
                   <td>{item.lastName}</td>
                   <td>{item.address}</td>
                   <td>
                    <button className='btn-edit'><i className="fas fa-pencil"></i></button>
                    <button className='btn-delete'><i className="fas fa-trash-alt"></i></button>
                   </td>

                 </tr>
             
            )

        })
    }
    
 
  
</table></div>
            </div>
        );
    }

}

const mapStateToProps = state => {
    return {
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserManage);


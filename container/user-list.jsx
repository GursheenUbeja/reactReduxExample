import React from 'react';
import ReactDOM from  'react';
import {connect} from 'react-redux';
import {bindActionCreators} from  'redux';

class UserList extends ReactDOM.Component{
   
createList(){
    debugger;
    return this.props.users.map((user)=>{
        return(<li key={user.id}>{user.first}</li>);
    });
}

render(){
    return(
        <div>
            {this.createList()}
        </div>
    );
}
}

const mapStateToProps = (state,props) => {
return{
    users : state.users
    }
}


export default connect(mapStateToProps)(UserList);
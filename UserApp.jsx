import React from 'react';
import UserList from './container/user-list.jsx'

class UserApp extends React.Component {
   render() {
      return (
         <div>
             <h2>UserList</h2>
                <UserList></UserList>
             <h2>User Details</h2>
         </div>
        
      );
   }
}
export default UserApp;
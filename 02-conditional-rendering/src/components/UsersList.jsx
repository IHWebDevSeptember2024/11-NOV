import { useState } from "react";
function UsersList() {
  const [showUsers, setShowUsers] = useState(false);
  if (showUsers) {
    return (
      <>
        <ul>
          <li>John Doe</li>
          <li>Jane Smith</li>
          <li>Michael Johnson</li>
          <li>Emily Davis</li>
          <li>Chris Brown</li>
          <li>Patricia Wilson</li>
        </ul>

        <button onClick={() => setShowUsers(false)}>Hide users</button>
      </>
    );
  } else {
    return (
      <>
        <h2>There is no users to display</h2>
        <button onClick={() => setShowUsers(true)}>Display users</button>
      </>
    );
  }
}

export default UsersList;

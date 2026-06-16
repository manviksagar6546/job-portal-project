import { getUser } from "../../utils/storage";

function Profile() {
  const user = getUser();

  return (
    <div className="container mt-4">

      <h2>Profile</h2>

      <div className="card p-4">

        <h4>{user?.name}</h4>

        <p>Email: {user?.email}</p>

        <p>Role: {user?.role}</p>

      </div>

    </div>
  );
}

export default Profile;
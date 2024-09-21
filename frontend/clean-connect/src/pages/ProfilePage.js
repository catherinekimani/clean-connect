import React, { useState } from "react";
import "../styles/profilePage.css";

const mockUserData = {
  name: "Kevin Wepo",
  email: "wepo@gmailcom.com",
  phone: "+1234567890",
  address: "123 Ngong rd, Laundry City",
  bio: "Lover of fresh clothes and great service!",
  profileImage:
    "https://img.freepik.com/free-vector/blue-circle-with-white-user_78370-4707.jpg?size=626&ext=jpg&uid=R156950503&ga=GA1.1.305839536.1726218127&semt=ais_hybrid",
  userType: "Client",
  servicePreferences: ["Dry Cleaning", "Laundry"],
  orderHistory: [
    { date: "2024-09-20", items: "2 shirts, 1 dress", status: "Completed" },
    { date: "2024-09-10", items: "5 shirts", status: "In Progress" },
  ],
};

const ProfilePage = () => {
  const [user, setUser] = useState(mockUserData);
  const [isEditing, setIsEditing] = useState(false);

  const handleEditToggle = () => {
    setIsEditing((prev) => !prev);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Profile updated successfully!");
    setIsEditing(false);
  };

  return (
    <div className="user-profile-page">
      <div className="profile-container">
        <div className="profile-header">
          <img
            src={user.profileImage}
            alt="Profile"
            className="profile-image"
          />
          <h2>{user.name}</h2>
          <p className="user-type">{user.userType}</p>
          <button onClick={handleEditToggle} className="edit-button">
            {isEditing ? "Cancel" : "Edit Profile"}
          </button>
        </div>

        <div className="profile-info">
          {!isEditing ? (
            <>
              <div className="info-card">
                <h3>Contact Info</h3>
                <p>
                  <strong>Email:</strong> {user.email}
                </p>
                <p>
                  <strong>Phone:</strong> {user.phone}
                </p>
                <p>
                  <strong>Address:</strong> {user.address}
                </p>
              </div>

              <div className="info-row">
                <div className="info-card">
                  <h3>Service Preferences</h3>
                  <p>{user.servicePreferences.join(", ")}</p>
                </div>

                <div className="info-card">
                  <h3>Bio</h3>
                  <p>{user.bio}</p>
                </div>

                <div className="info-card">
                  <h3>Order History</h3>
                  <ul>
                    {user.orderHistory.map((order, index) => (
                      <li key={index}>
                        <strong>{order.date}</strong>: {order.items} -{" "}
                        <span className="status">{order.status}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </>
          ) : (
            <form className="profile-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label>Name:</label>
                <input
                  type="text"
                  name="name"
                  value={user.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label>Email:</label>
                <input
                  type="email"
                  name="email"
                  value={user.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label>Phone:</label>
                <input
                  type="text"
                  name="phone"
                  value={user.phone}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label>Address:</label>
                <input
                  type="text"
                  name="address"
                  value={user.address}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label>Bio:</label>
                <textarea
                  name="bio"
                  value={user.bio}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="button-group">
                <button type="submit" className="save-button">
                  Save Changes
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;

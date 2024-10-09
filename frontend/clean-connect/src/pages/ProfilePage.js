import React, { useEffect, useState } from "react";
import axios from "axios";
import "../styles/profilePage.css";

const ProfilePage = () => {
  const [user, setUser] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const userId = localStorage.getItem("userId");

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const token = localStorage.getItem("token");
        const response = await axios.get(
          `http://127.0.0.1:8000/api/profiles/${userId}/`,
          {
            headers: { Authorization: `Token ${token}` },
          }
        );
        setUser(response.data);
      } catch (error) {
        console.error("Error fetching user data:", error);
        setError(error.response?.data?.detail || "Failed to load user data.");
      } finally {
        setLoading(false);
      }
    };

    if (userId) {
      fetchUserData();
    } else {
      setError("User ID not found.");
      setLoading(false);
    }
  }, [userId]);

  const handleEditToggle = () => setIsEditing((prev) => !prev);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem("token");
      await axios.put(`http://127.0.0.1:8000/api/profiles/${userId}/`, user, {
        headers: { Authorization: `Token ${token}` },
      });
      alert("Profile updated successfully!");
      setIsEditing(false);
    } catch (error) {
      console.error("Error updating profile:", error);
      setError(
        "Failed to update profile. " + (error.response?.data?.detail || "")
      );
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div className="error-message">{error}</div>; // Improved error handling
  }

  return (
    <div className="user-profile-page">
      <div className="profile-container">
        <div className="profile-header">
          <img
            src={user.profileImage || "default-profile-image.png"}
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
              </div>
              <div className="info-card">
                <h3>Bio</h3>
                <p>{user.bio}</p>
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
                  pattern="[0-9]*"
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

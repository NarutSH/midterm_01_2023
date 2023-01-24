import React from "react";

const Table = ({ users }) => {
  console.log(users);

  const bmiCalculate = (w, h) => {
    return w / (h / 100) ** 2;
  };

  return (
    <div>
      <table className="styled-table">
        <thead>
          <tr>
            <th>Profile</th>
            <th>Name</th>
            <th>Gender</th>
            <th>Age</th>
            <th>BMI</th>
            <th>Email</th>
            <th>Tel</th>
            <th>Address</th>
          </tr>
        </thead>

        {users.map((item) => {
          return (
            <tbody key={item.id}>
              <tr>
                <td>
                  <img
                    src={item.image}
                    alt={item.firstName}
                    className="profile-image"
                  />
                </td>
                <td>
                  {item.firstName} {item.maidenName} {item.lastName}
                </td>
                <td>{item.gender}</td>
                <td>{item.age}</td>
                <td>{bmiCalculate(item.weight, item.height).toFixed(2)}</td>
                <td>{item.email}</td>
                <td>{item.phone}</td>
                <td>
                  {item.address.address} {item.address.city}
                  {item.address.state} {item.address.postalCode}
                </td>
              </tr>
            </tbody>
          );
        })}
      </table>
    </div>
  );
};

export default Table;

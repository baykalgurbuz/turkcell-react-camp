import React from "react";
import PropTypes from "prop-types";
function User(props) {
  console.log(props);
  return (
    <div>
      User
      <strong>Baslık :{props.title}</strong>
      <div>İsim:{props.data.name} </div>
      <div>Yas:{props.data.age} </div>
      <div>Memleket:{props.data.city} </div>
      <hr />
    </div>
  );
}
User.propTypes = {
    title:PropTypes.string.isRequired,
  data: PropTypes.exact({
    name: PropTypes.string,
    age: PropTypes.number,
    city: PropTypes.string,
  }),
};

User.defaultProps={
    title:"Kişi"
}
export default User;

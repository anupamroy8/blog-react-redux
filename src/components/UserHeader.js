import React from "react";
import { connect } from "react-redux";
import { fetchUser } from "../actions";

class UserHeader extends React.Component {
  render() {
    const { user } = this.props;
    if (!user) {
      return null;
    }
    return (
      <div>
        <p className="header">{user.name}</p>
      </div>
    );
  }
}

const mapStateToProps = (state, ownprops) => {
  return {
    user: state.users.find((user) => user.id === ownprops.userId),
  };
};

export default connect(mapStateToProps, { fetchUser })(UserHeader);

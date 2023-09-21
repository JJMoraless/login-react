import PropTypes from "prop-types";

export const CardLogin = () => {
  



  return (
    <form className="form-login">
      <div className="title">
        login
        <br />
        <span>sign up to continue</span>
      </div>
      <input type="email" placeholder="Email" name="email" className="input" />
      <input
        type="password"
        placeholder="Password"
        name="password"
        className="input"
      />
      <button className="button-confirm">Let`s go →</button>
    </form>
  );
};

CardLogin.propTypes = {
  title: PropTypes.string,
};

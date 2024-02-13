import React from "react";
import PropTypes from "prop-types";

import { Button } from "./Button";
import "./header.css";

export const Header = ({
  user,
  onLogin,
  onLogout,
  onCreateAccount,
  colorMode,
}) => (
  <header>
    <div className={`storybook-header ${colorMode}`}>
      <div>
        <svg
          width="89"
          height="30"
          viewBox="0 0 89 30"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M27.4524 11.9254C26.1741 4.74956 20.37 0 11.6314 0H0V30H11.6314C20.5171 30 26.3724 25.115 27.5132 17.7434C27.6484 16.8686 27.7185 15.9588 27.7185 15.0187C27.7184 13.9455 27.6274 12.9145 27.4524 11.9254ZM11.7433 24.0724H6.69978V5.92764H11.7433C16.367 5.92764 19.5559 8.07385 20.6243 11.9254C20.6382 11.9791 20.6547 12.035 20.6663 12.091H13.4276V17.909H20.6757C19.6678 21.8748 16.4463 24.0724 11.7433 24.0724Z"
            fill="#6633FF"
          />
          <path
            d="M47.4369 24.1847V29.9995H24.8008V0.000915527H47.1066V5.81573H31.4995V11.9261H45.8185V17.7425H31.4995V24.1847H47.4369Z"
            fill="#6633FF"
          />
          <path
            d="M48.749 0.000915527V5.81555H61.8654V0.000915527H48.749ZM49.0792 24.1847V29.9993H62.1971V24.1847H49.0792Z"
            fill="#6633FF"
          />
          <path
            d="M60.5788 12.092H47.4377V17.9084H60.5788V12.092Z"
            fill="#6633FF"
          />
          <path
            d="M63.5087 25.5656L78.4162 5.83602H64.2449V0.0203247H87.508V4.43741L72.6003 24.1669H88.2441V29.9827H63.5085V25.5656H63.5087Z"
            fill="#6633FF"
          />
        </svg>
      </div>
      <div>
        {user ? (
          <>
            <span className="welcome">
              Welcome, <b>{user.name}</b>!
            </span>
            <Button size="small" onClick={onLogout} label="Log out" />
          </>
        ) : (
          <>
            <Button size="small" onClick={onLogin} label="Log in" />
            <Button
              primary
              size="small"
              onClick={onCreateAccount}
              label="Sign up"
            />
          </>
        )}
      </div>
    </div>
  </header>
);

Header.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }),
  onLogin: PropTypes.func.isRequired,
  onLogout: PropTypes.func.isRequired,
  onCreateAccount: PropTypes.func.isRequired,
  colorMode: PropTypes.oneOf(["light", "dark"]),
};

Header.defaultProps = {
  user: null,
  colorMode: "light",
};

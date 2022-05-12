import "./Header.scss";
import { ReactComponent as Icon } from "../../assets/images/Vector.svg";
import { ReactComponent as UserPhoto } from "../../assets/images/UserPhoto.svg";
import arrow from "../../assets/images/arrow.png";
const Header = () => {
  return (
    <>
      <div className="header_wrapper">
        <div className="left_block">
          <Icon />
          <small className="To-Do">To-Do</small>
          <h3 className="tasks">Tasks</h3>
        </div>
        <div className="right_block">
          <span className="initials">Valera Kozhevnikov</span>
          <UserPhoto className="user_photo" />
          <img src={arrow} alt="arrow" />
        </div>
      </div>
    </>
  );
};
export default Header;

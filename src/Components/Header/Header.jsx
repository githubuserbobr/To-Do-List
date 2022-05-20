import h from "./Header.module.scss";
import { ReactComponent as Icon } from "../../assets/images/Vector.svg";
import { ReactComponent as UserPhoto } from "../../assets/images/UserPhoto.svg";
import arrow from "../../assets/images/arrow.png";
const Header = () => {
  return (
    <>
      <div className={h.header_wrapper}>
        <div className={h.left_block}>
          <div className={h.icon_block}>
            <Icon className={h.icon} />
          </div>
          <div className={h.To_Do}>
            <span>To-Do </span>
          </div>
          <h3 className={h.tasks}>Tasks</h3>
        </div>
        <div className={h.right_block}>
          <span className={h.initials}>Valera Kozhevnikov</span>
          <UserPhoto className={h.user_photo} />
          <img src={arrow} alt="arrow" />
        </div>
      </div>
    </>
  );
};
export default Header;

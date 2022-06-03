import h from "./Header.module.scss";
import { ReactComponent as Icon } from "../../assets/images/Vector.svg";
import { ReactComponent as UserPhoto } from "../../assets/images/UserPhoto.svg";
import { ReactComponent as Arrow } from "../../assets/images/arrow.svg";

const Header = () => {
  return (
    <>
      <div className={h.header_wrapper}>
        <div className={h.left_block}>
          <div className={h.icon_block}>
            <Icon className={h.icon} />
          </div>
          <div className={h.To_Do}>To-Do</div>
          <h3 className={h.tasks}>Tasks</h3>
        </div>
        <div className={h.right_block_wrapper}>
          <div className={h.right_block}>
            <span className={h.initials}>Valera Kozhevnikov</span>
            <span className={h.icons_wrapper}>
              <UserPhoto className={h.user_photo} />
              <Arrow className={h.arrow} alt="arrow" />
            </span>
          </div>
        </div>
      </div>
    </>
  );
};
export default Header;

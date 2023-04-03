import styles from "./headerRightButtons.module.scss";
import cx from "classnames";
import { ThumbsUpIcon, ThumbsDownIcon } from "../../../../assets/icon";

const HeaderRightButtons = ({ up, down, type }) => {
  return (
    <>
      <div className={cx(styles.upDown, styles[type])}>
        <button name="up">
          <ThumbsUpIcon />
          {up}
        </button>
        <button name="down">
          <ThumbsDownIcon />
          {down}
        </button>
      </div>
    </>
  );
};
export default HeaderRightButtons;

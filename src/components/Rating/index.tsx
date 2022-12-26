import { FC } from "react";
import { ReactComponent as StarsIcon } from "../../assets/icons/stars.svg";
import styles from "./index.module.css";

interface IProps {
  rating: number;
}

export const Rating: FC<IProps> = ({ rating }) => {
  return (
    <div className={styles.rating}>
      <progress className={styles.ratingBg} value={rating} max="5"></progress>
      <StarsIcon />
    </div>
  );
};

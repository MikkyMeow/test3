import React, { FC } from "react";
import { TagList } from "@grafana/ui";
import styles from "./index.module.css";
import { IProducts } from "../../types";
import { Rating } from "../Rating";

interface IProps {
  product: IProducts;
}

export const Card: FC<IProps> = ({ product }) => (
  <div className={styles.root}>
    <div className={styles.img}>
      <img src={product.thumbnail} alt={product.title} />
    </div>
    <div className={styles.info}>
      <h2>{product.title}</h2>
      <TagList
        className={styles.tags}
        tags={[product.category, product.brand]}
      />
      <p className={styles.description}>{product.description}</p>

      <Rating rating={product.rating} />
    </div>
    <div className={styles.other}>
      <p className={styles.stock}>Stock: {product.stock}</p>
      <div className={styles.priceContainer}>
        <p className={styles.newPrice}>
          {(
            product.price -
            product.price * (product.discountPercentage / 100)
          ).toFixed(0)}
          $
        </p>
        <p className={styles.oldPrice}>{`${
          product.price
        }$ (${-product.discountPercentage}%)`}</p>
      </div>
    </div>
  </div>
);

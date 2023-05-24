import React from "react";
import style from "../../styles/style.module.css";
import { Product } from "../../../typings";

type Props = {
  data: Product;
};

export const Card = ({ data }: Props) => {
  return (
    <div className={`${style.flipcard}`}>
      <div className={`${style.flipcardinner}`}>
        <div className={`${style.flipcardfront}`}>
          <p className={`${style.title}`}>{data?.Category}</p>
          <p>{data.API}</p>
        </div>
        <div className={`${style.flipcardback}`}>
          <p className={`${style.title}`}>{data.Link}</p>
          <p>{data.Description}</p>
        </div>
      </div>
    </div>
  );
};

// export default Card

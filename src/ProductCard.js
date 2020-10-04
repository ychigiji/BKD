import React from "react";

function ProductCard(props) {
  return (
    <span>
      <div>
        <div class="card ">
          <img src={props.img} class="card-image" alt="..."></img>
        </div>
        <a className=" products-link" href={props.href}>
          <h5 class="card-tittle">{props.name}</h5>
        </a>
      </div>
    </span>
  );
}
export default ProductCard;

import React from "react";

function Card(props) {
  function handleClick() {
    props.onCardClick(props.card);
  }
  return (
    <div className="element">
      <button
        className="element__btn_delete"
        type="button"
        aria-label="Удалить"
      />
      <img
        src={props.card.link}
        onClick={handleClick}
        className="element__img"
        alt={props.card.link}
      />
      <div className="element__description">
        <h2 className="element__name">{props.card.name}</h2>
        <div className="element__like-container">
          <button
            className="element__btn_like"
            type="button"
            aria-label="Нравиться"
          />
          <span className="element__like_counter">
            {props.card.likes.length > 0 ? `${props.card.likes.length}` : 0}
          </span>
        </div>
      </div>
    </div>
  );
}

export default Card;

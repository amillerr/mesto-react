import React from "react";
import { api } from "../utils/api";
import Card from "./Card.js";

function Main(props) {
  const [userName, setUserName] = React.useState("");
  const [userDescription, setUserDescription] = React.useState("");
  const [userAvatar, setUserAvatar] = React.useState("");
  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    api.getServerData().then(([userData, initialCards]) => {
      setUserName(userData.name);
      setUserDescription(userData.about);
      setUserAvatar(userData.avatar);
      setCards(initialCards);
    });
  }, []);

  return (
    <main>
      <section className="profile">
        <div className="profile__image">
          <img
            alt={""}
            style={{ backgroundImage: `url(${userAvatar})` }}
            className="profile__avatar"
          />
          <button
            onClick={props.onEditAvatar}
            className="profile__avatar_change"
            type="button"
          />
        </div>
        <div className="profile__info">
          <div className="profile__edit-form">
            <h1 className="profile__name">{userName}</h1>
            <button
              onClick={props.onEditProfile}
              className="profile__edit-btn"
              type="button"
              aria-label="Редактировать"
            />
          </div>
          <p className="profile__description">{userDescription}</p>
        </div>
        <button
          onClick={props.onAddPlace}
          className="profile__add-btn"
          type="button"
          aria-label="Добавить"
        />
      </section>

      <section className="elements">
        <ul className="elements__list">
          {cards.map((card) => (
            <Card key={card._id} card={card} onCardClick={props.onCardClick} />
          ))}
          )}
        </ul>
      </section>
    </main>
  );
}

export default Main;

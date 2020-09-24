import React                from "react";
import Main                 from "./Main";
import Header               from "./Header";
import Footer               from "./Footer";
import PopupWithForm        from "./PopupWithForm";
import ImagePopup           from "./ImagePopup";
import {api}                from '../utils/api'
import {CurrentUserContext} from "../blocks/contexts/CurrentUserContext";


function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState("");
  const [currentUser, setCurrentUser] = React.useState({})

  React.useEffect(() => {
    api.getUserInfo()
      .then((res) => {
        setCurrentUser(res)
      })
      .catch((error) => {
        console.log(error)
      })
  })

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }

  function closeAllPopups() {
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setSelectedCard("");
  }

  function handleCardClick(card) {
    setSelectedCard(card);
  }

  return (
    <div className="root">
      <div className="page">
        <CurrentUserContext.Provider value={currentUser}>
        <Header />
        <Main
          onEditProfile={handleEditProfileClick}
          onAddPlace={handleAddPlaceClick}
          onEditAvatar={handleEditAvatarClick}
          onCardClick={handleCardClick}
        />
        <Footer />

        <PopupWithForm
          title="Редактировать профиль"
          name="form-profile"
          isOpen={isEditProfilePopupOpen}
          onClose={closeAllPopups}
        >
          <>
            <label className="popup__label">
              <input
                id="name-input"
                type="text"
                className="popup__input popup__input_type_name"
                name="name"
                placeholder="Имя"
                minLength="2"
                maxLength="40"
                required
              />
              <span id="name-input-error" className="popup__error" />
            </label>
            <label className="popup__label">
              <input
                id="about-input"
                type="text"
                className="popup__input popup__input_type_description"
                name="about"
                placeholder="Описание"
                minLength="2"
                maxLength="200"
                required
              />
              <span id="about-input-error" className="popup__error" />
            </label>
            <button className="popup__button" type="submit">
              Сохранить
            </button>
          </>
        </PopupWithForm>

        <PopupWithForm
          title="Новое место"
          name="form-add"
          isOpen={isAddPlacePopupOpen}
          onClose={closeAllPopups}
        >
          <>
            <label className="popup__label">
              <input
                id="title-input"
                type="text"
                className="popup__input popup__input_type_place"
                name="title"
                placeholder="Название"
                minLength="2"
                maxLength="30"
                required
              />
              <span id="title-input-error" className="popup__error" />
            </label>
            <label className="popup__label">
              <input
                id="url-input"
                type="url"
                className="popup__input popup__input_type_link"
                name="url"
                placeholder="Ссылка на картинку"
                required
              />
              <span id="url-input-error" className="popup__error" />
            </label>
            <button className="popup__button" type="submit">
              Создать
            </button>
          </>
        </PopupWithForm>

        <PopupWithForm
          title="Вы уверены?"
          name="form-confirm"
          onClose={closeAllPopups}
        >
          <button
            className="popup__button popup__button_type_confirm"
            type="submit"
          >
            Да
          </button>
        </PopupWithForm>

        <PopupWithForm
          title="Обновить аватар"
          name="avatar"
          isOpen={isEditAvatarPopupOpen}
          onClose={closeAllPopups}
        >
          <>
            <label className="popup__label">
              <input
                id="avatar-input"
                type="url"
                className="popup__input popup__input_type_avatar"
                name="avatar"
                placeholder="Ссылка на изображение"
                required
              />
              <span id="avatar-input-error" className="popup__error" />
            </label>
            <button className="popup__button" type="submit">
              Сохранить
            </button>
          </>
        </PopupWithForm>

        <ImagePopup card={selectedCard} isClose={closeAllPopups} />
        </CurrentUserContext.Provider>
      </div>
    </div>
  );
}

export default App;

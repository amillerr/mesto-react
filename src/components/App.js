import React                from "react";
import Main                 from "./Main";
import Header               from "./Header";
import Footer               from "./Footer";
import ImagePopup           from "./ImagePopup";
import AddPlacePopup        from "./AddPlacePopup";
import {api}                from "../utils/api";
import {CurrentUserContext} from '../context/CurrentUserContext'
import EditAvatarPopup      from "./EditAvatarPopup";
import EditProfilePopup from './EditProfilePopup'
import PopupWithForm    from "./PopupWithForm";

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState("");
  const [currentUser, setCurrentUser] = React.useState({})
  const [cards, setCards] = React.useState([])

  React.useEffect(() => {
    api.getServerData()
      .then(([userData, initialCards]) => {
      setCurrentUser(userData)
      setCards(initialCards);
    })
      .catch(error => console.log(error))
  }, []);

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
    setSelectedCard('');
  }

  function handleCardClick(card) {
    setSelectedCard(card);
  }

  function handleUpdateAvatar(data) {
    api.changeAvatar(data)
      .then((res) => {
        setCurrentUser(res)
        closeAllPopups()
      })
      .catch(error => console.log(error))
  }

  function handleUpdateUser(data) {
    api.setUserInfo(data)
      .then((res) => {
        setCurrentUser(res)
        closeAllPopups()
      })
      .catch(error => console.log(error))
  }

  function handleDeleteCard(card) {
    api.deleteCard(card._id)
      .then(() => {
        const newCards = cards.filter((c) => c._id !== card._id)
        setCards(newCards)
      })
      .catch(error => console.log(error))
  }

  function handleLikeCard(card) {
    const isLiked = card.likes.some(i => i._id === currentUser._id)

    api.likeCard(card._id, !isLiked)
      .then((newCard) => {
        const newCards = cards.map((c) => c._id === card._id ? newCard : c)
        setCards(newCards)
      })
      .catch(error => console.log(error))
  }

  function handleAddPlaceSubmit(item) {
    api.createCard(item)
      .then((res) => {
        setCards([...cards, res])
        closeAllPopups()
      })
      .catch(error => console.log(error))
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
    <div className="root">
      <div className="page">
        <Header />
        <Main
          onEditProfile={handleEditProfileClick}
          onAddPlace={handleAddPlaceClick}
          onEditAvatar={handleEditAvatarClick}
          onCardClick={handleCardClick}
          cards={cards}
          onCardLike={handleLikeCard}
          onCardDelete={handleDeleteCard}
        />
        <Footer />

        <EditProfilePopup
          isOpen={isEditProfilePopupOpen}
          onClose={closeAllPopups}
          onUpdateProfile={handleUpdateUser}
        />

        <AddPlacePopup
          isOpen={isAddPlacePopupOpen}
          onClose={closeAllPopups}
          onAddPlace={handleAddPlaceSubmit}
        />

        <EditAvatarPopup
          isOpen={isEditAvatarPopupOpen}
          onClose={closeAllPopups}
          onUpdateAvatar={handleUpdateAvatar}
        />

        <PopupWithForm
          title="Вы уверены?"
          name="form-confirm"
          onClose={closeAllPopups}>

        </PopupWithForm>

        <ImagePopup
          card={selectedCard}
          isClose={closeAllPopups}
        />
      </div>
    </div>
    </CurrentUserContext.Provider>
  );
}

export default App;

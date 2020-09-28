import React from "react";

function PopupWithForm({name, title, isOpen, onClose, children, onSubmit, submitTitle}) {
  return (
    <section
      className={`popup ${isOpen && 'popup_opened'}`}
    >
      <div className="popup__container">
        <button
          onClick={onClose}
          className="popup__close"
          type="button"
          aria-label="Закрыть"
        />
        <h3 className="popup__title">{title}</h3>
        <form
          className="popup__form popup__form_edit"
          name={name}
          method="POST"
          onSubmit={onSubmit}
          action="#"
          noValidate
        >
          {children}
          {/*<button*/}
          {/*  className="popup__button popup__button_type_confirm"*/}
          {/*  type="submit">{isLoading ? `Сохранение...` : `${submitTitle}`}</button>*/}
        </form>
      </div>
    </section>
  );
}

export default PopupWithForm;

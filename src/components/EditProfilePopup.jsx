import { useState, useEffect, memo } from 'react';

import {
  useCurrentUser,
  useCurrentUserDispatcher,
  sendApiUpdate,
} from '../contexts/CurrentUserContext';

import PopupWithForm from './PopupWithForm';
import PopupInput from './FormInput';

const EditProfilePopup = memo((props) => {
  const [name, setName] = useState('');
  const [about, setAbout] = useState('');

  const currentUser = useCurrentUser();
  const setCurrentUser = useCurrentUserDispatcher();

  useEffect(() => {
    if (!props.isOpen) {
      setName(currentUser.name);
      setAbout(currentUser.about);
    }
  }, [currentUser, props.isOpen]);

  function handleSubmit() {
    return sendApiUpdate(
      setCurrentUser,
      currentUser,
      {
        name,
        about,
      },
      'editProfile'
    ).then((res) => {
      props.onUpdateUser();
      return res;
    });
  }

  function handleNameChange(e) {
    setName(e.target.value);
  }

  function handleAboutChange(e) {
    setAbout(e.target.value);
  }

  return (
    <PopupWithForm
      {...props}
      onSubmit={handleSubmit}
      title="Редактировать профиль"
      name="profile-editor"
    >
      <PopupInput
        isFocused={props.isOpen}
        value={name}
        onChange={handleNameChange}
        autoComplete="name"
        autoCapitalize="words"
        name="name"
        id="profile-name"
        placeholder="Имя"
        maxLength="40"
      />

      <PopupInput
        value={about}
        onChange={handleAboutChange}
        name="about"
        id="profile-about"
        placeholder="О себе"
        maxLength="200"
      />
    </PopupWithForm>
  );
});

export default EditProfilePopup;

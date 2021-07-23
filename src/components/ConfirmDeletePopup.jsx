import { memo, useCallback } from 'react';

import useEnterHandler from '../hooks/useEnterHandler';

import PopupWithForm from './PopupWithForm';

const popupShouldRender = (prevProps, nextProps) => prevProps.isOpen === nextProps.isOpen;

const ConfirmDeletePopup = memo((props) => {
  const { onCardDelete, card, isOpen } = props;

  const handleSubmit = useCallback(() => onCardDelete(card), [card, onCardDelete]);

  const handleEnter = useCallback(() => isOpen && handleSubmit(), [handleSubmit, isOpen]);

  useEnterHandler(handleEnter);

  return (
    <PopupWithForm
      {...props}
      onSubmit={handleSubmit}
      title="Вы уверены?"
      name="delete-confirmation"
      buttonTitle="Да"
    />
  );
}, popupShouldRender);

export default ConfirmDeletePopup;

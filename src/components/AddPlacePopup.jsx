import { memo } from 'react';

import useValidatedForm from '../hooks/useValidatedForm';

import PopupWithForm from './PopupWithForm';
import FormInput from './FormInput';

const defaults = {
  title: '',
  link: '',
};

const AddPlacePopup = memo((props) => {
  const form = useValidatedForm(defaults);

  function handleSubmit() {
    const { title, link } = form.getData();
    return props.onAddPlace(title, link);
  }

  function handleReset() {
    form.reset();
  }

  return (
    <PopupWithForm
      {...props}
      onSubmit={handleSubmit}
      onReset={handleReset}
      title="Новое место"
      name="element-editor"
      buttonTitle="Создать"
      isSubmitDisabled={!form.isValid}
    >
      <FormInput
        isFocused={props.isOpen}
        {...form.register('title')}
        name="title"
        id="element-title"
        placeholder="Название"
        maxLength="30"
      />

      <FormInput
        {...form.register('link')}
        type="url"
        name="link"
        id="element-link"
        placeholder="Ссылка на картинку"
      />
    </PopupWithForm>
  );
});

export default AddPlacePopup;

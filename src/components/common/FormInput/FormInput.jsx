import {
  Label,
  AuthInput,
  SettingsInput,
  Input,
  LableAddEdit,
  ErrorMessage,
} from './FormInput.styled';

const FormInput = ({ inputType, label, error, ...props }) => {
  switch (inputType) {
    case 'auth':
      return (
        <Label>
          {label}
          <AuthInput {...props} />
          {error && <ErrorMessage>{error}</ErrorMessage>}
        </Label>
      );
    case 'settings':
      return (
        <Label>
          {label}
          <SettingsInput {...props} />
          {error && <ErrorMessage>{error}</ErrorMessage>}
        </Label>
      );
    case 'dailyNorma':
      return (
        <Label>
          {label}
          <Input {...props} />
          {error && <ErrorMessage>{error}</ErrorMessage>}
        </Label>
      );
    case 'addEdit':
      return (
        <LableAddEdit>
          {label}
          <Input {...props} />
          {error && <ErrorMessage>{error}</ErrorMessage>}
        </LableAddEdit>
      );
  }
};

export default FormInput;

import React, {useCallback} from 'react';

interface Ivalues {
  name?: string,
  comment?: string
}

interface IErrors {
  name?: string,
  comment?: string
}

export const useFormValidation = () => {
  const [values, setValues] = React.useState<Ivalues>({});
  const [errors, setErrors] = React.useState<IErrors>({});
  const [isValid, setIsValid] = React.useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValues({...values, [e.target.name]: e.target.value});
    setErrors({...errors, [e.target.name]: e.target.validationMessage});
    setIsValid(e.target.closest("form")!.checkValidity());  //TODO попробовать другие варианты
  };

  const resetForm = useCallback((newValues = {}, newErrors = {}, newIsValid = false) => {
    setValues(newValues);
    setErrors(newErrors);
    setIsValid(newIsValid);
  }, [setValues, setErrors, setIsValid]);

  return {values, errors, isValid, handleChange, resetForm};
};

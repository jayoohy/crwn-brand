import { Group, FormInputter, FormInputLabel } from "./form-input.styles.jsx";
const FormInput = (props) => {
  const { label, ...otherProps } = props;

  return (
    <Group>
      <FormInputter {...otherProps} />
      {label && (
        <FormInputLabel shrink={otherProps.value.length}>
          {label}
        </FormInputLabel>
      )}
    </Group>
  );
};

export default FormInput;

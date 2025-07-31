import { FC, InputHTMLAttributes } from "react";
import { Group, FormInputter, FormInputLabel } from "./form-input.styles";

type FormInputProps = { label: string } & InputHTMLAttributes<HTMLInputElement>;

const FormInput: FC<FormInputProps> = (props) => {
  const { label, ...otherProps } = props;

  return (
    <Group>
      <FormInputter {...otherProps} />
      {label && (
        <FormInputLabel
          shrink={Boolean(
            otherProps.value &&
              typeof otherProps.value === "string" &&
              otherProps.value.length
          )}
        >
          {label}
        </FormInputLabel>
      )}
    </Group>
  );
};

export default FormInput;

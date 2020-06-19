import React, { useState } from "react";
import { useField } from "formik";
import {
  TextField,
  FormControlLabel,
  Radio,
  InputAdornment,
  IconButton,
} from "@material-ui/core";
import { Visibility, VisibilityOff } from "@material-ui/icons";
import { CustomProps } from "../types/itsprComponent";

export const CustomRadio: React.FC<CustomProps> = ({ label, ...props }) => {
  const [field] = useField<{}>(props);
  return <FormControlLabel {...field} control={<Radio />} label={label} />;
};

export const CustomTextField: React.FC<CustomProps> = ({
  label,
  placeholder,
  ...props
}) => {
  const [field, meta] = useField<{}>(props);
  const errorText = meta.error && meta.touched ? meta.error : "";

  return (
    <div style={{ marginBottom: "20px" }}>
      <TextField
        {...field}
        label={label}
        helperText={errorText}
        error={!!errorText}
        variant="outlined"
        fullWidth
      />
    </div>
  );
};

export const CustomPasswordField: React.FC<CustomProps> = ({
  label,
  placeholder,
  ...props
}) => {
  const [field, meta] = useField<{}>(props);
  const errorText = meta.error && meta.touched ? meta.error : "";

  const [showPassword, setShowPassword] = useState(false);

  return (
    <div style={{ marginBottom: "20px" }}>
      <TextField
        {...field}
        label={label}
        helperText={errorText}
        type={showPassword ? "text" : "password"}
        error={!!errorText}
        variant="outlined"
        fullWidth
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={() => {
                  setShowPassword(!showPassword);
                }}
                edge="end"
              >
                {showPassword ? <Visibility /> : <VisibilityOff />}
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
    </div>
  );
};

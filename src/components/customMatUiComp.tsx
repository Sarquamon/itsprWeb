import React, { useState } from "react";
import { useField } from "formik";
import {
  Radio,
  Select,
  Checkbox,
  MenuItem,
  TextField,
  IconButton,
  InputLabel,
  InputAdornment,
  FormControlLabel,
  FormControl,
} from "@material-ui/core";
import { Visibility, VisibilityOff } from "@material-ui/icons";
import { CustomProps, FormikSelectProps } from "../types/itsprComponent";

export const CustomCheck: React.FC<CustomProps> = ({
  label,
  labelPlacement,
  ...props
}) => {
  const [field] = useField<{}>(props);
  return (
    <FormControlLabel
      {...field}
      control={<Checkbox />}
      label={label}
      labelPlacement={labelPlacement}
    />
  );
};

export const CustomRadio: React.FC<CustomProps> = ({
  label,
  labelPlacement,
  ...props
}) => {
  const [field] = useField<{}>(props);
  return (
    <FormControlLabel
      {...field}
      control={<Radio />}
      label={label}
      labelPlacement={labelPlacement}
    />
  );
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

export const CustomSelectField: React.FC<FormikSelectProps> = ({
  label,
  items,
  labelId,
  selectId,
  ...props
}) => {
  const [fields] = useField<{}>(props);

  return (
    <FormControl fullWidth variant="outlined">
      <InputLabel id={labelId}>{label}</InputLabel>
      <Select {...fields} labelId={labelId} id={selectId} label={label}>
        {items.map((item) => (
          <MenuItem key={item.value} value={item.value}>
            {item.label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

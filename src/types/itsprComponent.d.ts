import { FieldAttributes } from "formik";
import { string } from "yup";

export interface FormikSelectItems {
  label: string;
  value: string;
}

export type FormikSelectProps = {
  items: FormikSelectItems[];
  label: string;
  labelId: string;
  selectId: string;
} & FieldAttributes<{}>;

export type CustomProps = {
  label?: string;
  labelPlacement?: string;
} & FieldAttributes<{}> &
  FormControlLabelProps;

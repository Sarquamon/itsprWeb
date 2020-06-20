import { FormikSelectItems } from "../types/itsprComponent";

export const dayItems = (): FormikSelectItems[] => {
  const dayItems = [];

  for (let i = 1; i < 32; i++) {
    dayItems.push({
      label: i.toString(),
      value: i.toString(),
    });
  }

  return dayItems;
};

export const monthItems = (): FormikSelectItems[] => {
  const monthItems = [];

  for (let i = 1; i < 13; i++) {
    monthItems.push({
      label: i.toString(),
      value: i.toString(),
    });
  }

  return monthItems;
};

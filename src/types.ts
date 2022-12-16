import React from "react";
import * as HeroIcons from "@heroicons/react/24/outline";

export type IconName = keyof typeof HeroIcons;

export enum environment {
  PRODUCTION = "production",
  DEVELOPMENT = "development",
}

type Formik = {
  fullName: string;
  email: string;
  subject: string;
  message: string;
};

export type OnlyKeys = keyof Formik;

export interface Textfield {
  id?: string;
  label?: string;
  name: string;
  value?: number | string;
  checked?: boolean;
  type: InputTypes;
  placeholder?: string;
  errors?: string | undefined;
  touched?: boolean | undefined;
  labelStyle?: string;
  FieldStyle?: string;
}

export interface Textarea {
  label: string;
  name: string;
  rows: number;
  placeholder: string;
  defaultValue: string;
}

export interface FormikButton {
  disabled?: boolean;
  disabledClasses?: string;
  Text: React.ReactNode;
}

export interface button {
  icon?: IconName;
  iconClassName?: string;
  className?: string;
  type?: JSX.IntrinsicElements["button"]["type"];
  text: string;
  handleClick?: () => void;
}

export enum InputTypes {
  TEXT = "text",
  EMAIL = "email",
  PASSWORD = "password",
  SELECT = "select",
  TEXTAREA = "textarea",
  NUMBER = "text",
  RADIO = "radio",
}

export enum NotificationType {
  success = "toast-success",
  error = "toast-danger",
  warning = "toast-warning",
}

export interface Notify {
  message: string | null;
  messageType: NotificationType | null;
  buttonText?: string | null;
  onClick?: () => void;
}

export enum ViewTypes {
  MOBILE = "mobile",
  DESKTOP = "desktop",
}

export enum ModalTypes {
  DELETE = "delete",
  EDIT = "edit",
  LOGOUT = "logout",
  WARNING = "warning",
}
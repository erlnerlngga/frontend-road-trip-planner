import toast from "react-hot-toast";

export interface ValueTypes {
  name?: string;
  email?: string;
}

function nameVerify(error: ValueTypes = {}, values: ValueTypes) {
  if (!values.name) {
    error.name = toast.error("Name requires");
  } else if (!values.name.trim().length) {
    error.name = toast.error("Invalid name");
  }

  return error;
}

function emailVerify(error: ValueTypes = {}, values: ValueTypes) {
  if (!values.email) {
    error.email = toast.error("Email required");
  } else if (!values.email.trim().length) {
    error.email = toast.error("Invalid email address");
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    error.email = toast.error("Invalid email address");
  }

  return error;
}

export async function signUpValidation(values: ValueTypes) {
  let error = nameVerify({}, values);
  emailVerify(error, values);

  return error;
}

export async function signInValidation(values: ValueTypes) {
  let error = emailVerify({}, values);

  return error;
}

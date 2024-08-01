export const passwordError = {
  icon: 'error',
  title: 'Oops...',
  text: 'Password should be more than 6 symbols!',
};

export const usernameError = (username) => {
  return {
    icon: 'error',
    title: 'Oops...',
    text: `User with username @${username} already exists!`,
  }
}

export const registeredError = {
  position: 'center',
  icon: 'success',
  title: 'Registration was successful!',
  showConfirmButton: false,
  timer: 1800
};

export const usedEmailError = (email) => {
return {
  icon: 'error',
  title: 'Oops...',
  text: `Email ${email} has already been registered!`,
}
};

export const invalidEmailError = (email) => {
  return  {
      icon: 'error',
      title: 'Oops...',
      text: `Email ${email} is invalid!`,
  }
}

export const defaultError = (message) => {
  return {
    icon: 'error',
    title: 'Oops...',
    text: `An error occurred: ${message}`,
  }
}
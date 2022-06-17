import Parse from 'parse';
import {AlertColor} from '@mui/material';

// Initialization Parse when starting application
export const initializeParse = () => {
  Parse.initialize(process.env.NEXT_PUBLIC_PARSE_APPLICATION_ID as string,
    process.env.NEXT_PUBLIC_PARSE_JAVASCRIPT_KEY as string);
  Parse.serverURL = process.env.NEXT_PUBLIC_PARSE_HOST_URL as string;
};

// Check current user. If user is no logged - redirect to login page
export const checkCurrentUser = async (currentUser: any, setCurrentUser: any, router: any): Promise<Boolean> => {
  try {
    const user: (Parse.User | null) = await Parse.User.currentAsync();
    if (user === null || user === undefined) {
      await router.push('/login');
    } else {
      if (currentUser === null) {
        setCurrentUser(user);
        await router.push('/');
      }
    }
    return true;
  } catch (error: any) {}
  return false;
};

// Get information of current user and return it if user exists
const getCurrentUser = async function (setCurrentUser: any): Promise<Parse.User | undefined> {
  const currentUser: (Parse.User | undefined) = await Parse.User.current();
  // Update state variable holding current user
  if(currentUser) {
    setCurrentUser(currentUser);
    return currentUser;
  }
};

// Do user login for login page
export const doUserLogIn = async function (ref: any, actions: any, router: any, setCurrentUser: any): Promise<boolean> {
  // @ts-ignore
  const {username: usernameValue, password: passwordValue} = ref?.current?.values;

  try {
    const loggedInUser: Parse.User = await Parse.User.logIn(usernameValue, passwordValue);
    console.log(`Success! User ${loggedInUser.get('username')} has successfully signed in!`,);
    // @ts-ignore
    const currentUser: Parse.User = await Parse.User.current();
    if (loggedInUser === currentUser) {
      actions.resetForm();
      await router.push('/');
    }
    await getCurrentUser(setCurrentUser);
    return true;
  } catch (error: any) {
    console.log(`Error! ${error.message}`);
    return false;
  }
};

// Do user registration in signup page
export const doUserRegistration: (actions: any, setAlert: any, setAlertType: any, setErrorCode: any, ref: any)
  => Promise<boolean> = async (actions, setAlert, setAlertType, setErrorCode, ref) => {
  // @ts-ignore
  const {username: usernameValue, password: passwordValue, email: emailValue} = ref?.current?.values;
  const showAlert = (type: AlertColor | undefined) => {
    setAlertType(type);
    setAlert(true);
    setTimeout(() => {
      setAlert(false);
    }, 5000);
    if (type === 'success') {
      actions.resetForm();
    }
  };

  try {
    const createdUser = await Parse.User.signUp(usernameValue, passwordValue, {email: emailValue});
    console.log(`Success! User ${createdUser.getUsername()} was successfully created!`);
    showAlert('success');
    return true;
  } catch (error: any) {
    showAlert('error');
    setErrorCode(error.code);
    console.log(`Error ${error}`);
    return false;
  }
};

// Do user logout if user is logged
export const doUserLogOut = async function (setCurrentUser: any, router: any): Promise<boolean> {
  try {
    await Parse.User.logOut();
    // To verify that current user is now empty, currentAsync can be used
    // @ts-ignore
    const currentUser: Parse.User = await Parse.User.current();
    if (currentUser === null || undefined) {
      console.log('Success! No user is logged in anymore!');
      router.push('/login');
    }
    // Update state variable holding current user
    await getCurrentUser(setCurrentUser);
    return true;
  } catch (error: any) {
    console.log(`Error! ${error.message}`);
    return false;
  }
};
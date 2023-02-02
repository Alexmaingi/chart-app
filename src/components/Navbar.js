import React from "react";
import { auth } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import SignIn from "./SignIn";
import LogOut from "./LogOut";

const Navbar = () => {
  const [user] = useAuthState(auth);
  console.log(user);

  const style = {
    nav: `bg-gray-800 h-20 flex  justify-between items-center p-4`,
    hearding: `text-white text-3xl`,
  };

  return (
    <div className={style.nav}>
      <h1 className={style.hearding}>Chart App</h1>
      {user ? <LogOut /> : <SignIn />}
    </div>
  );
};

export default Navbar;

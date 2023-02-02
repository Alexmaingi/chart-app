import React from "react";
import { auth } from "../firebase";

const style = {
  buttton: `bg-gray-200 py-2 px-4 hover:bg-gray-100`,
};

const LogOut = () => {
  const signOut = () => {
    signOut(auth);
  };

  return (
    <buttton onClick={() => auth.signOut()} className={style.buttton}>
      Logout
    </buttton>
  );
};

export default LogOut;

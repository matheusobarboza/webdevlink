import { onAuthStateChanged } from "firebase/auth";
import React, { ReactNode, useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { auth } from "../services/firebaseConnection";

export interface PrivateProps {
  children: ReactNode;
}

export const AuthRoute: React.FunctionComponent<PrivateProps> = (props) => {
  const { children } = props;

  const [isLoading, setIsLoading] = useState(true);
  const [signed, setSigned] = useState(false);

  useEffect(() => {
    const AuthCheck = onAuthStateChanged(auth, (user) => {
      if (user) {
        const userData = {
          uid: user.uid,
          email: user.email
        };

        localStorage.setItem("@detailUser", JSON.stringify(userData));
        setIsLoading(false);
        setSigned(true);
      } else {
        setIsLoading(false);
        setSigned(false);
      }
    });

    AuthCheck();
  }, []);

  if (isLoading) {
    return <div></div>;
  }

  if (!signed) {
    return <Navigate to="/signIn" />;
  }

  return <>{children}</>;
};

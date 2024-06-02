import { useCreateMyUser } from "@/api/MyUserApi";
import { useAuth0 } from "@auth0/auth0-react";
import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

const AuthCallbackPage = () => {
  const navigate = useNavigate();
  /*
   *  information about the user
   */
  const { user } = useAuth0();

  // custom hook
  // creates users in the backend if not already created
  // and uses that information to render user information in the protected routes pages
  const { createUser } = useCreateMyUser();

  const hasCreatedUser = useRef(false);

  useEffect(() => {
    if (user?.sub && user?.email && !hasCreatedUser.current) {
      createUser({ auth0Id: user.sub, email: user.email });

      hasCreatedUser.current = true;
    }
    navigate("/");
  }, [createUser, navigate, user]);

  return <>Loading...</>;
};

export default AuthCallbackPage;

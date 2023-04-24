import { useEffect } from "react";
import { useNavigate} from "react-router-dom";
import { auth } from "./FirebaseConfig";

function withAuth(Component) {
  return function WithAuth(props) {
    const navigate = useNavigate();

    useEffect(() => {
      const unsubscribe = auth.onAuthStateChanged((user) => {
        if (!user) {
          navigate("/login");
        }
      });

      return unsubscribe;
    }, [navigate]);

    return <Component {...props} />;
  };
}

export default withAuth;

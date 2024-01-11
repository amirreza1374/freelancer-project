import { useNavigate } from "react-router-dom";
import useAuthorized from "../features/authentication/useAuthorized";
import { useEffect } from "react";
import Loading from "./Loading";

function ProtectedRoute({ children }) {
  const navigate = useNavigate();

  const { isAuthenticated, isLoading, isAuthorized } = useAuthorized();

  useEffect(() => {
    if (!isAuthenticated && !isLoading) navigate("/auth");
    if (!isAuthorized && !isLoading) navigate("/not-access", { replace: true });
  }, [isAuthenticated, isLoading, isAuthorized, navigate]);

  if (isLoading)
    return (
      <div className="flex items-center justify-center h-screen bg-secondary-100">
        <Loading />
      </div>
    );
  if (isAuthenticated && isAuthorized) return children;
}

export default ProtectedRoute;

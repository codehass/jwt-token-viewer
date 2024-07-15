// ProtectedRoute.tsx
import { useNavigate, Outlet } from "react-router-dom";
import { useEffect } from "react";
import { useAuth } from "./AuthContext";

const ProtectedRoute: React.FC = () => {
  const navigate = useNavigate();
  const { isAuthenticated, isLoading } = useAuth();

  useEffect(() => {
    if (!isAuthenticated && !isLoading) {
      navigate("/login");
    }
  }, [isAuthenticated, isLoading, navigate]);

  if (isLoading) return <div>Loading...</div>;

  if (isAuthenticated) return <Outlet />;

  return null;
};

export default ProtectedRoute;

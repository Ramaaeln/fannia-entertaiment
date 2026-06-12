import { Navigate } from "react-router";
import { useAuth } from "../contexts/AuthContext";
const ADMIN_ID = import.meta.env.ADMIN_USER_ID;
export default function AdminRoute({ children }) {
  const { user, loading } = useAuth();

  const adminIds = [
     ADMIN_ID, 
  ];

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!user || !adminIds.includes(user.id)) {
    return <Navigate to="/" replace />;
  }

  return children;
}
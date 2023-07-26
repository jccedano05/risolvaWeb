import { Navigate, Outlet } from "react-router-dom";

interface Props {
  isAuthenticated: boolean;
  children?: JSX.Element | null;
  redirectTo?: string;
}

export const ProtectedRoute = ({
  isAuthenticated,
  children = null,
  redirectTo = "/landing",
}: Props) => {
  if (!isAuthenticated) {
    return <Navigate to={redirectTo} />;
  }
  return children ? children : <Outlet />;
};

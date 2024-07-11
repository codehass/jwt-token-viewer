import { useNavigate, Outlet } from "react-router-dom";
import { useEffect } from "react";

function ProtectedRoute() {
	const navigate = useNavigate();

	// 1- Load the authenticated user
	const isAuthenticated = true;
	const isLoading = false;

	// 2- If there is no authenticated user, redirect to the login page
	useEffect(() => {
		if (!isAuthenticated && !isLoading) navigate("/login");
	}, [isAuthenticated, isLoading, navigate]);

	// 3- While loading show Spinner
	if (isLoading) return <div>...</div>;

	// 4- If there is a user, render the app
	if (isAuthenticated) return <Outlet />;

	// 5- If not authenticated, you might want to return null or some fallback
	return null;
}

export default ProtectedRoute;

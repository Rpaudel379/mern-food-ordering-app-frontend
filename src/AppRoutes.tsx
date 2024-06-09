import { Navigate, Route, Routes } from "react-router-dom";
import Layout from "@/layouts/Layout";
import HomePage from "@/pages/HomePage";
import AuthCallbackPage from "./pages/AuthCallbackPage";
import UserProfilePage from "./pages/UserProfilePage";
import ProtectedRoute from "./auth/ProtectedRoute";
import ManageRestaurantPage from "./pages/ManageRestaurantPage";
import SearchPage from "./pages/SearchPage";
import DetailPage from "./pages/DetailPage";
import OrderStatusPage from "./pages/OrderStatusPage";

const AppRoutes = () => {
  return (
    /* wrap all the routes in Routes Component */
    <Routes>
      <Route
        path="/"
        element={
          <Layout showHero>
            <HomePage />
          </Layout>
        }
      />

      {/* can't use auth0 hooks in Context Provider Component level  */}
      {/* so `onRedirectCallback()` redirects to this route Component  */}
      <Route path="/auth-callback" element={<AuthCallbackPage />} />

      <Route
        path="/search/:city"
        element={
          <Layout showHero={false}>
            <SearchPage />
          </Layout>
        }
      />

      <Route
        path="/detail/:restaurantId"
        element={
          <Layout showHero={false}>
            <DetailPage />
          </Layout>
        }
      />

      {/* protected routes */}
      <Route element={<ProtectedRoute />}>
        <Route
          path="/user-profile"
          element={
            <Layout>
              <UserProfilePage />
            </Layout>
          }
        />
        <Route
          path="/manage-restaurant"
          element={
            <Layout>
              <ManageRestaurantPage />
            </Layout>
          }
        />
           <Route
          path="/order-status"
          element={
            <Layout>
              <OrderStatusPage />
            </Layout>
          }
        />
        

      </Route>

      {/* catches all other routes */}
      <Route path="*" element={<Navigate to={"/"} />} />
    </Routes>
  );
};

export default AppRoutes;

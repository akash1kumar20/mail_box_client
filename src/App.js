import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { lazy, Suspense } from "react";
import LoginPage from "./components/pages/LoginPage";
const ForgotPassword = lazy(() =>
  import("./components/authentication/ForgotPassword")
);
const Mail = lazy(() => import("./components/body/Mail"));
const router = createBrowserRouter([
  { path: "/", element: <LoginPage /> },
  {
    path: "forgotPassword",
    element: (
      <Suspense fallback={<p>Loading...</p>}>
        <ForgotPassword />
      </Suspense>
    ),
  },
  {
    path: "inbox",
    element: (
      <Suspense fallback={<p>Loading...</p>}>
        <Mail />
      </Suspense>
    ),
  },
]);
function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;

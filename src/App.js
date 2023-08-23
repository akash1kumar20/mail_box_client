import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { lazy, Suspense } from "react";
import LoginPage from "./components/pages/LoginPage";
import LoadingComponent from "./components/UI/LoadingComponent";
const ForgotPassword = lazy(() =>
  import("./components/authentication/ForgotPassword")
);
const Mail = lazy(() => import("./components/body/Mail"));
const Password = lazy(() => import("./components/authentication/Password"));
const SingleMail = lazy(() => import("./components/body/SingleMail"));
const CreateAccount = lazy(() =>
  import("./components/authentication/CrateAccount")
);
const router = createBrowserRouter([
  { path: "/", element: <LoginPage /> },
  {
    path: "forgotPassword",
    element: (
      <Suspense fallback={<LoadingComponent />}>
        <ForgotPassword />
      </Suspense>
    ),
  },
  {
    path: "inbox",
    element: (
      <Suspense fallback={<LoadingComponent />}>
        <Mail />
      </Suspense>
    ),
  },
  {
    path: "signup",
    element: (
      <Suspense fallback={<LoadingComponent />}>
        <CreateAccount />
      </Suspense>
    ),
  },
  {
    path: "password",
    element: (
      <Suspense fallback={<LoadingComponent />}>
        <Password />
      </Suspense>
    ),
  },
  {
    path: "mail",
    element: (
      <Suspense fallback={<LoadingComponent />}>
        <SingleMail />
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

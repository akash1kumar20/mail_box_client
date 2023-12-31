import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { lazy, Suspense } from "react";
import LoginPage from "./components/otherPages/LoginPage";
import LoadingComponent from "./components/UI/LoadingComponent";
const ForgotPassword = lazy(() =>
  import("./components/authentication/ForgotPassword")
);
const Mail = lazy(() => import("./components/mainBody/Mail"));
const Password = lazy(() => import("./components/authentication/Password"));
const SingleMail = lazy(() => import("./components/otherPages/SingleMail"));
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

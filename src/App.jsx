import "./App.css";
import UserStatusProvider from "./store/UserStatusProvider";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootNavigation from "./pages/RootNavigation";
import HomePage from "./pages/HomePage";
import CoursePage from "./pages/CoursePage";
import NewCoursePage from "./pages/NewCoursePage";
import NewsPage from "./pages/NewsPage";
import PredavaciPage from "./pages/PredavaciPage"

const BrowserRouter = createBrowserRouter([
  {
    path: "/",
    element: <RootNavigation />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "course", element: <CoursePage /> },
      { path: "predavaci", element: <PredavaciPage /> },
      { path: "course/new", element: <NewCoursePage /> },
      { path: "news", element: <NewsPage /> },
    ],
  },
]);

function App() {
  return (
    <div className="app">
      <UserStatusProvider>
        <RouterProvider router={BrowserRouter} />
      </UserStatusProvider>
    </div>
  );
}

export default App;

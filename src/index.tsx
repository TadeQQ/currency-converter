import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {
  ConverterPage,
  HistoryPage,
  App,
  Routes,
  historyPageLoader,
} from "./routes";

const router = createBrowserRouter([
  {
    path: Routes.HOME,
    element: <App />,
    children: [
      {
        path: Routes.CONVERTER,
        element: <ConverterPage />,
        loader: (cos) => {
          console.log(cos.request);
        },
      },
      {
        path: Routes.HISTORY,
        element: <HistoryPage />,
        loader: historyPageLoader,
      },
    ],
  },
  {
    path: "/:cos",
    element: <div>asd</div>,
    loader: (args) => {
      console.log(args.params);
    },
  },
  {
    path: "/:cos/:id",
    element: <div>asd</div>,
    loader: (args) => {
      console.log(args.params);
    },
  },
]);
const queryClient = new QueryClient();

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <QueryClientProvider client={queryClient}>
    <RouterProvider router={router} />
  </QueryClientProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

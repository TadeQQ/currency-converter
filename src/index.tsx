import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import { QueryClient } from "@tanstack/react-query";
import { PersistQueryClientProvider } from "@tanstack/react-query-persist-client";
import { createSyncStoragePersister } from "@tanstack/query-sync-storage-persister";
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

const persister = createSyncStoragePersister({
  storage: window.localStorage,
});

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <PersistQueryClientProvider
    client={queryClient}
    persistOptions={{ persister }}
  >
    <RouterProvider router={router} />
  </PersistQueryClientProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

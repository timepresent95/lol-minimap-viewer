import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { QueryClientProvider } from "@tanstack/react-query";

import "./style/index.scss";

import HomePage from "@/2.page/home/ui";
import SummonerPage from "@/2.page/summoner/ui";
import { queryClient } from "@/6.shared/lib/api";
import { summonerLoader } from "@/2.page/summoner/lib/loader";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/summoner/:gameName/:tagLine",
    element: <SummonerPage />,
    loader: summonerLoader,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </React.StrictMode>
);

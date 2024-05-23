import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootPage from "./pages/RootPage.jsx";
import EspecieProvider from "./context/EspecieContext.jsx";
import TablesPage from "./pages/TablesPage.jsx";
import RegisterCliente from "./pages/RegisterClientePage.jsx";
import ClienteProvider from "./context/ClienteContext.jsx";
import RegisterEspecie from "./pages/RegisterEspeciePage.jsx";
import ClienteTable from "./components/ClienteTable.jsx";
import EspecieTable from "./components/EspecieTable.jsx";
import CuidadoProvider from "./context/CuidadoContext.jsx";
import CuidadoTable from "./components/CuidadoTable.jsx";
import RegisterCuidado from "./pages/RegisterCuidadoPage.jsx";
import VacunaProvider from "./context/VacunaRegistradaContext.jsx";
import VacunaTable from "./components/VacunaRegistradaTable.jsx";
import RegisterVacuna from "./pages/VacunaRegistradaPage.jsx";
import MascotaProvider from "./context/MascotaContext.jsx";
import MascotaTable from "./components/MascotaTable.jsx";
import RegisterMascota from "./pages/RegisterMascotaPage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <ClienteProvider>
        <RootPage />
      </ClienteProvider>
    ),
  },
  {
    path: "/RegisterCliente",
    element: (
      <ClienteProvider>
        <RegisterCliente />
      </ClienteProvider>
    ),
    children: [
      {
        path: ":id",
        element: (
          <ClienteProvider>
            <RegisterCliente />
          </ClienteProvider>
        ),
      },
    ],
  },
  {
    path: "/RegisterEspecie",
    element: (
      <EspecieProvider>
        <RegisterEspecie />
      </EspecieProvider>
    ),
    children: [
      {
        path: ":id",
        element: (
          <ClienteProvider>
            <RegisterEspecie />
          </ClienteProvider>
        ),
      },
    ],
  },
  {
    path: "/RegisterCuidado",
    element: (
      <CuidadoProvider>
        <RegisterCuidado />
      </CuidadoProvider>
    ),
    children: [
      {
        path: ":id",
        element: (
          <ClienteProvider>
            <RegisterCuidado />
          </ClienteProvider>
        ),
      },
    ],
  },
  {
    path: "/RegisterVacuna",
    element: (
      <VacunaProvider>
        <RegisterVacuna />
      </VacunaProvider>
    ),
    children: [
      {
        path: ":id",
        element: (
          <VacunaProvider>
            <RegisterVacuna />
          </VacunaProvider>
        ),
      },
    ],
  },
  {
    path: "/RegisterMascota",
    element: (
      <MascotaProvider>
            <EspecieProvider>
              <VacunaProvider>
                <CuidadoProvider>
                <RegisterMascota />
                </CuidadoProvider>
              </VacunaProvider>
            </EspecieProvider>
          </MascotaProvider>
    ),
    children: [
      {
        path: ":id",
        element: (
          <MascotaProvider>
            <EspecieProvider>
              <VacunaProvider>
                <CuidadoProvider>
                  <RegisterMascota />
                </CuidadoProvider>
              </VacunaProvider>
            </EspecieProvider>
          </MascotaProvider>
        ),
      },
    ],
  },
  {
    path: "/TablesPage",
    element: <TablesPage />,
    children: [
      {
        path: "ClienteTable",
        element: (
          <ClienteProvider>
            <ClienteTable />
          </ClienteProvider>
        ),
      },
      {
        path: "EspecieTable",
        element: (
          <EspecieProvider>
            <EspecieTable />
          </EspecieProvider>
        ),
      },
      {
        path: "CuidadoTable",
        element: (
          <CuidadoProvider>
            <CuidadoTable />
          </CuidadoProvider>
        ),
      },
      {
        path: "VacunaTable",
        element: (
          <VacunaProvider>
            <VacunaTable />
          </VacunaProvider>
        ),
      },
      {
        path: "MascotaTable",
        element: (
          <MascotaProvider>
            <EspecieProvider>
              <VacunaProvider>
                <CuidadoProvider>
                  <MascotaTable />
                </CuidadoProvider>
              </VacunaProvider>
            </EspecieProvider>
          </MascotaProvider>
        ),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

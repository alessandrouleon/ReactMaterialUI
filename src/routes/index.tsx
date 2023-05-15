import { Navigate, Route, Routes, createBrowserRouter } from "react-router-dom";
import { Cidades } from "../pages/cidades";
import ErrorPage from "../shared/err";

// export const AppRoutes = () => {
//   return (
//     <Routes>
//       <Route path="/pagina-inicial" element={<p>Pagian Inicial</p>} />
//       <Route path="/cidades" element={<Cidades />} />
//       <Route path="*" element={<Navigate to="/pagina-nao-encontrada" />} />
//     </Routes>
//   );
// };

export const router = createBrowserRouter([
  { path: "/pagina-inicial", element: <p>Pagian Inicial</p> },
  {
    path: "/cidades",
    element: <Cidades />,
    errorElement: <ErrorPage />,
  },
]);

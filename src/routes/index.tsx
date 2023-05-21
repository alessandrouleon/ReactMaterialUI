import { createBrowserRouter } from "react-router-dom";
import { Cidades } from "../pages/cidades";
import ErrorPage from "../shared/err";
import { Button } from "@mui/material";

import { DashBoard } from "../pages/dashBoard";

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
  {
    path: "/cidades",
    element: <Cidades />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/",
    element: (
      <p>
        <DashBoard />
      </p>
    ),
    errorElement: <ErrorPage />,
  },
]);

import { createBrowserRouter } from "react-router-dom";
import{ Layout } from './assets/layout/Layout';



const rotas = createBrowserRouter([
  {
    path: "/",
    children: [
      {
        path: "/",
        element: (
           <Layout>
              H1
          </Layout>
           
        ),
      },   
    ],
  },
]);

export default rotas;

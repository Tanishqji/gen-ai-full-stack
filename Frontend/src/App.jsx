import { RouterProvider } from "react-router";
import { appRouter } from "./app.routes";
import { AuthProvider } from "./features/auth/services/auth.context";


function App() {


  return (
    <AuthProvider>
    <RouterProvider router={appRouter} />
    </AuthProvider>
  )
}

export default App

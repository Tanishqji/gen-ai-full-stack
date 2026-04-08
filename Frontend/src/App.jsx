import { RouterProvider } from "react-router";
import { appRouter } from "./app.routes";
import { AuthProvider } from "./features/auth/services/auth.context";
import { InterviewProvider } from "./features/interview/interview.context";


function App() {


  return (
    <AuthProvider>
      <InterviewProvider>
    <RouterProvider router={appRouter} />
    </InterviewProvider>
    </AuthProvider>
  )
}

export default App

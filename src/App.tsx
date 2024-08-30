import { Route, BrowserRouter as Router, Routes } from "react-router-dom"
import { Home } from "./app/features/home/Home"
export const App = () => {
  return <Router>
    <Routes>
      <Route path="/" element={<Home/>}/>
    </Routes>
  </Router>
}
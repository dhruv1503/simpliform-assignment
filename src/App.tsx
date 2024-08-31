import { Route, BrowserRouter as Router, Routes } from "react-router-dom"
import { Home } from "./app/features/home/Home"
import { ModelSpace } from "./app/features/modelSpace/ModelSpace"
import { ChakraProvider } from "@chakra-ui/react"
export default function App(){
  return <Router>
    <ChakraProvider>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/model-space/:id" element={<ModelSpace/>}/>
     
    </Routes>
    </ChakraProvider>
  </Router>
}
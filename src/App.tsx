import { Route, Routes, NavLink } from "react-router-dom";

import Home  from "./components/Home";
import Counter from "./components/Counter/Counter";
import CounterFn from "./components/Counter/CounterFn";
import ColorPicker from "./components/Colorpiker/Colorpicker";
import Form from "./components/Form/Form";
import Todos from "./components/Todos/Todos";
import './App.css'

const colorPickerOptions = [
  {label: 'red', color: '#F44336'},
  {label: 'green', color: '#4CAF50'},
  {label: 'blue', color: '#2196F3'},
  {label: 'grey', color: '#607D8B'},
  {label: 'pink', color: '#E91E63'},
  {label: 'indigo', color: '#3F51B5'},
]
function App() {
  return (
    <>
      <nav className="navbar">
        <NavLink
          to="/todos"
          className="link"
        >Todos</NavLink>
        <NavLink
          to="/form"
          className="link"
        >Form</NavLink>
        <NavLink
          to="/colorpicker"
          className="link"
        >ColorPicker</NavLink>
        <NavLink
          to="/counter"
          className="link"
          >Counter</NavLink>
        <NavLink
          to="/fncounter"
          className="link"
          >CounterFn</NavLink>
      </nav>




      <div className="app-container">
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route
            path="/counter"
            element={<Counter initialValue={0} step={1} />}
          />
          <Route
            path="/fncounter"
            element={<CounterFn initialValue={0} step={1} />}
          />
          <Route
            path="/colorpicker"
            element={<ColorPicker options={colorPickerOptions} />}
          />
          <Route
            path="/form"
            element={<Form onSubmit={cred => console.log(cred)} />}
          />
          <Route
            path="/todos"
            element={<Todos/>}
          />
        </Routes>
      </div>

    </>
  )
}

export default App;

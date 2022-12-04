// import Counter from "./components/Counter/Counter";
// import CounterFn from "./components/Counter/CounterFn";
import ColorPicker from "./components/Colorpiker/Colorpicker";


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
      {/* <Counter initialValue={0} step={1} /> */}
      {/* <CounterFn initialValue={0} step={1} /> */}
      <ColorPicker options={colorPickerOptions} />
    </>
  )
}

export default App;

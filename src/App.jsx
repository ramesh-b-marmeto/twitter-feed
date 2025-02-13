import './App.css'
import { Provider } from 'react-redux';
import store from './utils/appStore';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Body from './components/Body';

function App() {

  return (
    <>
      <Provider store={store}>
        <BrowserRouter basename="/">
          <Routes>
            <Route path="/" element={<Body />} />
            <Route path="/filter/:tag" element={<Body />} />
            <Route path="/filter/:tag/page/:pageNum" element={<Body />} />
            <Route path="/page/:pageNum" element={<Body />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </>
  )
}

export default App

import { Route, Routes } from 'react-router-dom';
import Header from './components/layout/Header';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import CreateDiary from './pages/CreateDiary';
import MyDiary from './pages/MyDiary';
import DiaryDetail from './pages/DiaryDetail';
import Error from './pages/Error';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/creatediary" element={<CreateDiary />} />
        <Route path="/mydiary" element={<MyDiary />} />
        <Route path="/diarydetail/:id" element={<DiaryDetail />} />
        <Route path="/error" element={<Error />} />
      </Routes>
    </>
  );
}

export default App;

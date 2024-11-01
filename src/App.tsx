import { Route, Routes } from 'react-router-dom';
import Header from './components/layout/Header';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Signup from './pages/Signup';
import CreateDiary from './pages/CreateDiary/CreateDiary';
import MyDiary from './pages/MyDiary/MyDiary';
import DiaryDetail from './pages/DiaryDetail/index';
import Error from './pages/Error/Error';
import { AuthProvider } from './components/AuthContext';
import EditDiary from './pages/EditDiary/EditDiary';

function App() {
  return (
    <>
      <AuthProvider>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/creatediary" element={<CreateDiary />} />
          <Route path="/editdiary" element={<EditDiary />} />
          <Route path="/mydiary" element={<MyDiary />} />
          <Route path="/diarydetail/:id" element={<DiaryDetail />} />
          <Route path="/error" element={<Error />} />
          {/* 잘못된 URL에 대한 라우팅 처리 */}
          <Route path="*" element={<Error />} />
        </Routes>
      </AuthProvider>
    </>
  );
}

export default App;

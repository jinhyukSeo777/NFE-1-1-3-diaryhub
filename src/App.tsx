import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Header from './components/layout/Header/Header';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Signup from './pages/Signup/Signup';
import CreateDiary from './pages/CreateDiary/CreateDiary';
import MyDiary from './pages/MyDiary/MyDiary';
import DiaryDetail from './pages/DiaryDetail/index';
import Error from './pages/Error/Error';
import { AuthProvider } from './components/common/AuthContext/AuthContext';
import EditDiary from './pages/EditDiary/EditDiary';
import WriterDiary from './pages/WriterDiary/WriterDiary';
import { ReactNode } from 'react';

interface AnimatedRouteProps {
  element: ReactNode;
}

const AnimatedRoute = ({ element }: AnimatedRouteProps) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.25 }}
  >
    {element}
  </motion.div>
);

function App() {
  const location = useLocation();

  return (
    <AuthProvider>
      <Header />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<AnimatedRoute element={<Home />} />} />
          <Route
            path="/login"
            element={<AnimatedRoute element={<Login />} />}
          />
          <Route
            path="/signup"
            element={<AnimatedRoute element={<Signup />} />}
          />
          <Route
            path="/creatediary"
            element={<AnimatedRoute element={<CreateDiary />} />}
          />
          <Route
            path="/editdiary"
            element={<AnimatedRoute element={<EditDiary />} />}
          />
          <Route
            path="/mydiary"
            element={<AnimatedRoute element={<MyDiary />} />}
          />
          <Route
            path="/diarydetail/:id"
            element={<AnimatedRoute element={<DiaryDetail />} />}
          />
          <Route
            path="/writerdiary/:username"
            element={<AnimatedRoute element={<WriterDiary />} />}
          />
          <Route
            path="/error"
            element={<AnimatedRoute element={<Error />} />}
          />
          {/* 잘못된 URL에 대한 라우팅 처리 */}
          <Route path="*" element={<AnimatedRoute element={<Error />} />} />
        </Routes>
      </AnimatePresence>
    </AuthProvider>
  );
}

export default App;

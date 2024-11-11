import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { lazy, Suspense, ReactNode } from 'react';
import Header from './components/layout/Header/Header';
import { AuthProvider } from './components/common/AuthContext/AuthContext';
const Home = lazy(() => import('./pages/Home/Home'));
const Login = lazy(() => import('./pages/Login/Login'));
const Signup = lazy(() => import('./pages/Signup/Signup'));
const CreateDiary = lazy(() => import('./pages/CreateDiary/CreateDiary'));
const MyDiary = lazy(() => import('./pages/MyDiary/MyDiary'));
const DiaryDetail = lazy(() => import('./pages/DiaryDetail/index'));
const Error = lazy(() => import('./pages/Error/Error'));
const EditDiary = lazy(() => import('./pages/EditDiary/EditDiary'));
const WriterDiary = lazy(() => import('./pages/WriterDiary/WriterDiary'));

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
      <Suspense fallback={<div>Loading...</div>}>
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
      </Suspense>
    </AuthProvider>
  );
}

export default App;

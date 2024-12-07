import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './components/common/login/Login';
import Trainee from './components/trainee/Trainee';
import Student from './components/student/Student';
import QuestionPage from './components/student/questionpage/QuestionPage';
import Remainders from './components/smallcomponents/Remainders'
import FeedBackCard from './components/smallcomponents/FeedBackCard';
import CourseCards from './components/trainee/components/CourseCards/CourseCards';
import Landing from './components/common/landing/landing';

function App() {
  return (
    <div className=" font-rrr  m-2">
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/trainee/*' element={<Trainee />} />  
        <Route path='/student/*' element={<Student />} />
        <Route path='/quiz' element={<QuestionPage/>} /> 
        <Route path='remainders' element={<Remainders/>} />
        <Route path='FeedBackCard' element={<FeedBackCard/>} />
        <Route path='coursecards' element={<CourseCards/>} />
        <Route path='landing' element={<Landing/>} />
      </Routes>
    </div>
  );
}

export default App;

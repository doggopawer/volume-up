import MainPage from "./page/MainPage";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import RoutineManagementPage from "./page/routine/RoutineManagementPage";
import RoutineProgressPage from "./page/routine/RoutineProgressPage";
import RoutineAddPage from "./page/routine/RoutineAddPage";
import WorkoutManagementPage from "./page/workout/WorkoutManagementPage";
import WorkoutAddPage from "./page/workout/WorkoutAddPage";
import WorkoutModifyPage from "./page/workout/WorkoutModifyPage";
import WorkoutProgressPage from "./page/workout/WorkoutProgressPage";
import WorkoutWhetherPage from "./page/workout/WorkoutWhetherPage";
import UserAuthPage from "./page/user/UserAuthPage";
import UserCreatePage from "./page/user/UserCreatePage";


function App() {
  return (
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<MainPage />} />
              <Route path="/user/create" element={<UserCreatePage />} />
              <Route path="/user/auth" element={<UserAuthPage />} />
              <Route path="/routine/management" element={<RoutineManagementPage />} />
              <Route path="/routine/add" element={<RoutineAddPage />} />
              <Route path="/workout/management/:routineId" element={<WorkoutManagementPage />} />
              <Route path="/workout/add/:routineId" element={<WorkoutAddPage />} />
              <Route path="/workout/modify/:workoutId" element={<WorkoutModifyPage/>} />
              <Route path="/routine/progress" element={<RoutineProgressPage />} />
              <Route path="/workout/progress/:routineId" element={<WorkoutProgressPage/>} />
              <Route path="/workout/whether/:workoutId" element={<WorkoutWhetherPage/>} />
          </Routes>
      </BrowserRouter>
  );
}

export default App;

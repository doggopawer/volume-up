import MainPage from "./page/MainPage";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import RoutineListPage from "./page/routine/RoutineListPage";
import RoutineAddPage from "./page/routine/RoutineAddPage";
import UserAuthPage from "./page/user/UserAuthPage";
import UserCreatePage from "./page/user/UserCreatePage";
import RoutineModifyPage from "./page/routine/RoutineModifyPage";
import WorkoutListPage from "./page/workout/WorkoutListPage";
import WorkoutAddPage from "./page/workout/WorkoutAddPage";
import WorkoutModifyPage from "./page/workout/WorkoutModifyPage";
import WorkoutProgressPage from "./page/workout/WorkoutProgressPage";


function App() {
  return (
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<MainPage />} />
              <Route path="/user/create" element={<UserCreatePage />} />
              <Route path="/user/auth" element={<UserAuthPage />} />
              <Route path="/routine/list" element={<RoutineListPage />} />
              <Route path="/routine/add" element={<RoutineAddPage />} />
              <Route path="/routine/modify/:routineId" element={<RoutineModifyPage />} />
              <Route path="/workout/list/:routineId" element={<WorkoutListPage />} />
              <Route path="/workout/add/:routineId" element={<WorkoutAddPage />} />
              <Route path="/workout/modify/:workoutId" element={<WorkoutModifyPage />} />
              <Route path="/workout/progress/:workoutId" element={<WorkoutProgressPage />} />


          </Routes>
      </BrowserRouter>
  );
}

export default App;

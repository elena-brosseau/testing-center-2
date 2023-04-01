import './App.css';
import { Calendar } from "./features/calendar/Calendar";
import { Viewport } from './features/viewport/Viewport';


function App() {
  return (
    <main>
      <div id="grid">
        <Calendar />
        <Viewport />
      </div>
    </main>
  );
}

export default App;

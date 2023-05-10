import './App.css';
import './responsive.css'
import { Calendar } from "./features/calendar/Calendar";
import { Header } from './features/header/Header';
import { Viewport } from './features/viewport/Viewport';


function App() {
  return (
    <main>
      <Header />
      <div id="grid">
        <Calendar />
        <Viewport />
      </div>
    </main>
  );
}

export default App;

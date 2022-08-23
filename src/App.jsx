// import logo from './logo.svg';
import './App.css';
import Sidebar from "./components/sideBar/Sidebar";
import TopNav from "./components/topNav/TopNav";
import MainSection from "./components/mainSection/MainSection";
import TopSection from './components/TopSection/TopSection';

function App() {
  return (
    <body className="landing">
    <div>
    <TopNav/>
    <div id='content'>
    <Sidebar/>
    
    <MainSection/>
    </div>
   
   
    </div>
    
    
    
    </body>
  );
}

export default App;

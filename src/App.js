import './assets/style/Style.scss';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Header from "./components/Header";
import MainPage from "./components/MainPage";
import WeeklyPage from "./components/WeeklyPage";

const App = () => {
    return (
        <Router>
            <Header/>
            <Routes>
                <Route path="/" element={<MainPage />} />
                <Route path="/weekly" element={<WeeklyPage />} />
            </Routes>
        </Router>
    );
}

export default App;

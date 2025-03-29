import ElephantModel from './components/ElephantModel';
import cls from './styles/app.module.scss';
import JunniIcon from "./assets/icons/junni.tsx";

function App() {
    return (
        <div className={cls.main} style={{width: '100vw', height: '100vh'}}>
            <header>
                <div className={cls.icon}>
                    <JunniIcon/>
                </div>
            </header>
            <ElephantModel/>
        </div>
    );
}

export default App;

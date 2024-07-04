
import {useTheme} from '../themes/ThemeContext';


function Button(props) {
    const {theme, changeThemeMode} = useTheme(props.mode);

    const handleChangeMode = () =>{
        (theme === 'light') ? changeThemeMode('dark') : changeThemeMode('light');
        props.onClick(theme);
    }

    return (<>
    <div className='btn-mode'><button onClick={handleChangeMode}>Cambio de modo</button></div>
    </>);
}

export default Button;

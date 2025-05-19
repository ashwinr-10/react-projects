import styles from './Navigation.module.css';
const Navigation = () => {
    console.log(styles);
    return (
        <nav className={`${styles.navigation} container`}>
            <div className="logo">
                <img src="/Images/logo.png" alt="logo" />
            </div>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
        </nav>
    );
};

export default Navigation; 
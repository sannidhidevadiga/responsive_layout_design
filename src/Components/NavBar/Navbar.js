import styles from './navbar.module.scss';

export default function Navbar() {
    return (
        <nav className={styles.navbar} aria-label="Main navigation">
            <h2>Good afternoon, Erica</h2>
            <div className={styles.navContent}>
                <p>Overview</p>
                <select id="timeframe" aria-label="Select timeframe">
                    <option value="last-week">Last week</option>
                    <option value="this-week">This week</option>
                </select>
            </div>
        </nav>
    );
}

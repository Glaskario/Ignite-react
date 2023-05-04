import styles from './Header.module.css'

import igniteLogo from '../images/ignite-logo.svg';
import { Post } from './Post';

export function Header(){
    return (
        <header className={styles.header}>
            <img src={igniteLogo} alt="Logotipo do ignite" />
            
        </header>
        
    );
}
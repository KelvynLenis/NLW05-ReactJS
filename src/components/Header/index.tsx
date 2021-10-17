import format from 'date-fns/format';
// import ptBR from 'date-fns/esm/locale/pt-BR/index.js';

import styles from './styles.module.scss'

export function Header() {
    // const currentDate = format(new Date(), 'EEEEEE, d MMMM', {
    //     locale: ptBR,
    // });

    return(
        <header className={styles.headerContainer}>
            <img src="/logo.svg" alt="Podcastr" />

            <p>O melhor para você ouvir sempre</p>

            <span>Qui, 8 Abr</span>
        </header>
    );
}
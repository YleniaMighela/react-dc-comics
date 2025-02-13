// esporto la funzione Header
export default function Header() {

    const linksEntries = [
        { testo: 'CHARACTERS', url: '#', current: false },
        { testo: 'COMICS', url: '#', current: true },
        { testo: 'MOVIES', url: '#', current: false },
        { testo: 'TV', url: '#', current: false },
        { testo: 'GAMES', url: '#', current: false },
        { testo: 'COLLECTIBLES', url: '#', current: false },
        { testo: 'VIDEOS', url: '#', current: false },
        { testo: 'FANS', url: '#', current: false },
        { testo: 'NEWS', url: '#', current: false },
        { testo: 'SHOP', url: '#', current: false },
    ];





    return (
        <header>

            <div >
                <img id="img_logo" src="./img/dc-logo.png" alt="" />
            </div>

            <nav>
                <ul>
                    {linksEntries.map((link) => (
                        <li>
                            <a href={link.url} className={link.current ? 'active' : ''}>
                                {link.testo}
                            </a>
                        </li>
                    ))
                    }
                </ul>
            </nav>

        </header>
    );
}

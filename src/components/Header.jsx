// esporto la funzione Header
export default function Header(props) {

    const linksEntries = props.link;


    return (
        <header>

            <div >
                <img id="img_logo" src="./img/dc-logo.png" alt="" />
            </div>

            <nav>
                <ul>
                    {linksEntries.map((link) => (
                        <li key={link.id}>
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

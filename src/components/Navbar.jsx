export default function Navbar(props) {
    const linksEntries = props.link;

    return (
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
    )



}
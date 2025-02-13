// importo il componente Navbar
import Navbar from "./Navbar";

// esporto la funzione Header
export default function Header(props) {


    const { link } = props;


    return (
        <header>

            <div >
                <img id="img_logo" src="./img/dc-logo.png" alt="" />
            </div>


            <Navbar link={link} />
        </header>
    );
}

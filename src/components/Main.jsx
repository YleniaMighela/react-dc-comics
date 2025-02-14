import ProductsList from "./products/ProductsList";

// esporto la funzione Main
export default function Main() {
    return (
        <main>

            <div className="jumbotron">

            </div>


            <div className="contenitore_black">
                <ProductsList />
            </div>

            <section className="contenitore_blue" >
                <div className="contenitore_MainShop">

                    <div className="contenitore_shop">
                        <img src="./img/buy-comics-digital-comics.png" alt="" />
                        <a href="#"><span> DIGITAL COMICS</span> </a>

                    </div>

                    <div className="contenitore_shop">
                        <img src="./img/buy-comics-merchandise.png" alt="" />
                        <a href="#"><span>DC MERCHANDISE</span></a>
                    </div>
                    <div className="contenitore_shop">
                        <img src="./img/buy-comics-subscriptions.png" alt="" />
                        <a href="#"><span>SUBSCRIPTION</span></a>
                    </div>

                    <div className="contenitore_shop">
                        <img src="./img/buy-comics-shop-locator.png" alt="" />
                        <a href="#"><span>COMIC SHOP LOCATOR</span></a>
                    </div>

                    <div className="contenitore_shop">
                        <img src="./img/buy-dc-power-visa.svg" alt="" />
                        <a href="#"><span>DC POWER VISA</span></a>
                    </div>

                </div>



            </section>

        </main>
    );
}

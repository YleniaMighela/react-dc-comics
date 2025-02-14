export default function ProductsCard(props) {

    return (


        <div className="prod-card">
            <img src={props.productThumb} alt={props.productSeries} />
            <h3>{props.productSeries}</h3>
        </div>

    );
}
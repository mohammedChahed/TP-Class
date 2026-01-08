
export default function Card(props){

    return(
        <>
            <h3>{props.title}</h3>
            <button onClick={props.onClick}>details</button>
            <button onClick={props.comment}>commentaire</button>
        </>
    );
}
import Backend from '../Backend/Backend';

export default function ListItem(props) {
    const handleClick = async () => {
        await Backend().deleteFromList(props.field, props.item)
        props.getField();
    }

    return (
        <div>
            <span>{props.item}</span>
            <span>
                <button onClick={handleClick}>remove</button>
            </span>
        </div>
    )
}
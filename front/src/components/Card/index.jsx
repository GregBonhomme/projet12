import "../../styles/components/card.css"
import calorie from "../../assets/img/calorie.png"
import proteine from "../../assets/img/proteine.png"
import glucide from "../../assets/img/glucide.png"
import lipide from "../../assets/img/lipide.png"

function Card ({value,category}) {

    let icon = ""
    let unit = ""

switch (category) {
    case "calories":
        icon = calorie
        unit = "kCal"
        break;
    case "proteines":
        icon = proteine
        unit = "g"
        break;
    case "glucides":
        icon = glucide
        unit = "g"
        break;
    case "lipides":
        icon = lipide
        unit = "g"
        break;
    default:
        break;
}

const maj = (string) => string[0].toUpperCase() + string.slice(1)

    return (
        <div className="card_body">
            <img className="card_icon" src={icon} alt="" />
            <div className="card_text">
                <span className="card_value">{value}{unit}</span>
                <span className="card_unit">{maj(category)}</span>
            </div>
        </div>
    )
}

export default Card
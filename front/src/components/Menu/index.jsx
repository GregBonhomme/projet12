import "../../styles/components/menu.css"
import zen from "../../assets/img/zen.png"
import swim from "../../assets/img/swim.png"
import bike from "../../assets/img/bike.png"
import lift from "../../assets/img/lift.png"

function Menu () {
    return (
        <div className="menu">
            <div className="menuList">
                <div className="menuBtn"><img src={zen} alt="Icone de méditation" /></div>
                <div className="menuBtn"><img src={swim} alt="Icone de nageur" /></div>
                <div className="menuBtn"><img src={bike} alt="Icone de cycliste" /></div>
                <div className="menuBtn"><img src={lift} alt="Icone d'altère" /></div>
            </div>
            <p className="copyRight">Copiryght, SportSee 2020</p>
        </div>
    )
}

export default Menu
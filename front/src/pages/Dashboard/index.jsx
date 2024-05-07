import "../../styles/pages/dashboard.css"
import { useParams } from "react-router-dom"
import useFetch from "../../utils/service/useFetch"
import Bars from "../../components/Bars"
import Lines from "../../components/Lines"
import HexChart from "../../components/HexChart"
import RoundChart from "../../components/RoundChart"
import Card from "../../components/Card"

function Dashboard () {

const {id} = useParams()
const user = useFetch(id)
console.log(user)

if (user.infos) {

    return (
        <div className="dashboard_body">
            <div className="headline">
                <h1>Bonjour <span>{user.infos.firstName}</span></h1>
                <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
            </div>
            <div className="graphs">
                <Bars className="bigGraph" input={user.activity} />
                <div className="smallGraphs">
                    <Lines className="lineGraph" input={user.average}/>
                    <HexChart className="hexGraph" input={user.perfs}/>
                    <RoundChart className="roundGraph" input={user}/>
                </div>
            </div>
            <div className="cards_list">
                <Card value={user.keyData.calorieCount} category="calories"/>
                <Card value={user.keyData.proteinCount} category="proteines"/>
                <Card value={user.keyData.carbohydrateCount} category="glucides"/>
                <Card value={user.keyData.lipidCount} category="lipides" />
            </div>
        </div>
    )}
}

export default Dashboard
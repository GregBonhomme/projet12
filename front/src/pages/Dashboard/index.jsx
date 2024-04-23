import "../../styles/pages/dashboard.css"
import { useParams } from "react-router-dom"
import useFetch from "../../utils/service/useFetch"
import Bars from "../../components/Bars"
import Lines from "../../components/Lines"
import HexChart from "../../components/HexChart"
import RoundChart from "../../components/RoundChart"

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
                <Bars input={user.activity} />
                <div className="smallGraphs">
                    <Lines input={user.average}/>
                    <HexChart input={user.perfs}/>
                    <RoundChart input={user}/>
                </div>
            </div>
        </div>
    )}
}

export default Dashboard
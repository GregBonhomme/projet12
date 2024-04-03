import "../../styles/pages/dashboard.css"
import { useParams } from "react-router-dom"
import Api from "../../utils/service"

function Dashboard () {

const {id} = useParams()
const user = Api(id)
console.log(user)

    return (
        <div className="dashboard_body">
            <div className="headline">
                <h1>Bonjour <span>{user.profile.userInfos.firstName}</span></h1>
                
                <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
            </div>
        </div>
    )
}

export default Dashboard
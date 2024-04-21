import { useState , useEffect } from "react"

function Normalise ({data}) {

    const [id,setId] = useState([])
    const [keyData,setKeyData] = useState([])
    const [infos,setInfos] = useState([])
    const [score,setScore] = useState([])
    const [perfs,setPerfs] = useState([])
    const [average,setAverage] = useState([])
    const [activity,setActivity] = useState([])
    
    useEffect (() => {
        setId(data.profile.id)
        setKeyData(data.profile.keyData)
        setInfos(data.profile.userInfos)
        data.profile.todayScore ? setScore(data.profile.todayScore) : setScore(data.profile.score)
        setPerfs(data.perf)
        setAverage(data.average)
        setActivity(data.activity)
    },[])

    return {id,keyData,infos,score,perfs,average,activity}
}

export default Normalise
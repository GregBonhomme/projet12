import { useState,useEffect } from "react";

function normalise (data) {

    const id = data.profile.id
    const keyData = data.profile.keyData
    const infos = data.profile.userInfos
    let score = 0
    data.profile.todayScore ? (score = data.profile.todayScore) : (score = data.profile.score)
    const perfs = data.perf
    const average = data.average.sessions
    const activity = data.activity.sessions

    return {id,keyData,infos,score,perfs,average,activity}
}

function useFetch (userId) {
    const [isLoading,setLoading] = useState(true)
    const [profile,setProfile] = useState([])
    const [activity,setActivity] = useState([])
    const [average,setAverage] = useState([])
    const [perf,setPerf] = useState([])

    useEffect (() => {
        if (!userId) {
            setLoading(true)
        }
            fetch("http://localhost:3000/user/"+ userId)
            .then((res) => res.json())
            .then((temp) => {
                setProfile(temp.data)
            })
            .catch((err) => {
                console.log(err.message)
            })
            fetch("http://localhost:3000/user/"+ userId +"/activity")
            .then((res) => res.json())
            .then((temp) => {
                setActivity(temp.data)
            })
            .catch((err) => {
                console.log(err.message)
            })
            fetch("http://localhost:3000/user/"+ userId +"/average-sessions")
            .then((res) => res.json())
            .then((temp) => {
                setAverage(temp.data)
            })
            .catch((err) => {
                console.log(err.message)
            })
            fetch("http://localhost:3000/user/"+ userId +"/performance")
            .then((res) => res.json())
            .then((temp) => {
                setPerf(temp.data)
            })
            .catch((err) => {
                console.log(err.message)
            })
        },[])

    return normalise({isLoading,profile,activity,average,perf})
}

export default useFetch
import { useState,useEffect } from "react";

function normalise (input) {

    const id = input[0].data.id
    const keyData = input[0].data.keyData
    const infos = input[0].data.userInfos
    let score = 0
    input[0].data.todayScore ? (score = input[0].data.todayScore) : (score = input[0].data.score)
    const perfs = input[3].data
    const average = input[2].data.sessions
    const activity = input[1].data.sessions

    return {id,keyData,infos,score,perfs,average,activity}
}

function useFetch (userId) {

    const [profile,setProfile] = useState([])

    useEffect (() => {
        const fetchData = async() => {
            try {
                const res = await Promise.all([
                    fetch("http://localhost:3000/user/"+ userId),
                    fetch("http://localhost:3000/user/"+ userId +"/activity"),
                    fetch("http://localhost:3000/user/"+ userId +"/average-sessions"),
                    fetch("http://localhost:3000/user/"+ userId +"/performance")
                ])
                const data = await Promise.all(res.map(r => r.json()))
                setProfile(data)
            } catch {
                throw Error("Promise failed")
            }
        }
        userId && fetchData()
    },[])

    return (profile.length > 0) && (normalise(profile))
}

export default useFetch
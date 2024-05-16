import { useState,useEffect } from "react";

function normalise (input) {

    const id = input[0].id
    const keyData = input[0].keyData
    const infos = input[0].infos
    let score = 0
    input.todayScore ? (score = input[0].todayScore) : (score = input[0].score)
    const perfs = input[0].perfs
    const average = input[0].average
    const activity = input[0].activity

    return {id,keyData,infos,score,perfs,average,activity}
}

function useMock (userId,url) {

    const [profile,setProfile] = useState({})

    useEffect (() => {
        const fetchData = async() => {
            try {
                const res = await fetch(url)
                const src = await res.json()
                console.log(src)
                let data = src.filter(e=>(e.id == userId))
                setProfile(data)
            } catch {
                throw Error("L'utilisateur n'a pas été trouvé")
            }
        }
        userId && fetchData()
    },[])
    return (profile.length > 0) && normalise(profile)
}

export default useMock
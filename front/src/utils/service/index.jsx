import { useState,useEffect } from "react";

export function Api (userId) {
    const [profile,setProfile] = useState([])
    const [activity,setActivity] = useState([])
    const [average,setAverage] = useState([])
    const [perf,setPerf] = useState([])

    useEffect (() => {
        fetch("http://localhost:3000/user/"+ userId)
            .then((res) => res.json())
            .then((temp) => {
                setProfile(temp.data)
            })
            .catch((err) => {
                console.log(err.message)
            })
    },[])
    useEffect (() => {
        fetch("http://localhost:3000/user/"+ userId +"/activity")
            .then((res) => res.json())
            .then((temp) => {
                setActivity(temp.data)
            })
            .catch((err) => {
                console.log(err.message)
            })
    },[])
    useEffect (() => {
        fetch("http://localhost:3000/user/"+ userId +"/average-sessions")
            .then((res) => res.json())
            .then((temp) => {
                setAverage(temp.data)
            })
            .catch((err) => {
                console.log(err.message)
            })
    },[])
    useEffect (() => {
        fetch("http://localhost:3000/user/"+ userId +"/performance")
            .then((res) => res.json())
            .then((temp) => {
                setPerf(temp.data)
            })
            .catch((err) => {
                console.log(err.message)
            })
    },[])

    return {profile,activity,average,perf}
}

export default Api
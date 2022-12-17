import { useEffect, useState } from "react"

const UseFetch = (url) => {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        fetch(url)
           .then((response) => {
                if (!response.ok) {
                    throw Error('Could not fetch data from the resource!')
                }
                return response.json()
            })
           .then((data) => {
                console.log(data)
                setData(data)
                setLoading(false)
                setError(null)
           })
           .catch((err) => {
                setLoading(false)
                setError(err.message)
           })
    }, [url])



    return ({data, loading, error});
}
 
export default UseFetch;
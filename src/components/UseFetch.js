import { useEffect, useState } from "react"

const UseFetch = (url) => {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)
    // const []

    useEffect(() => {
        setTimeout(() => {
            fetch(url)
           .then((response) => response.json())
           .then((data) => {
                setData(data)
                setLoading(false)
           })
           .catch((data) => {
                setLoading(false)
           })
        }, 1000);
    }, [url])



    return ({data, loading});
}
 
export default UseFetch;
import React from 'react'
import axios from "axios";

const AWS = () => {
    const [data, setData] = React.useState(null);
    console.log("inside aws page")

    React.useEffect(() => {
      fetch("http://localhost:3001/api",{
        method: 'GET',
        headers: {
        'Access-Control-Allow-Origin': true,
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/70.0.3538.102 Safari/537.36 Edge/18.19582',
        'Content-Type': 'text/plain',
        },
      })
        .then((res) => res.json())
        .then((data) => setData(data.message));
    }, []);

    // axios
    //     .get("https://www.google.com")
    //     .then(data => console.log(data.data))
    //     .catch(error => console.log(error));
    return(
        <div>
            <p>{!data ? "Loading..." : data}</p>
        </div>
    )
}
export default AWS;
import React from 'react'
import axios from "axios";

const aws = () => {
    const [data, setData] = React.useState(null);

    // React.useEffect(() => {
    //   fetch("http://127.0.0.1:3001/api")
    //     .then((res) => res.json())
    //     .then((data) => setData(data.message));
    // }, []);

    axios
        .get("https://www.google.com")
        .then(data => console.log(data.data))
        .catch(error => console.log(error));
    return(
        <div>
            <p>{!data ? "Loading..." : data}</p>
        </div>
    )
}
export default aws;
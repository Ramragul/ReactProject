import React from 'react'
import axios from "axios";

const aws = () => {
    const [data, setData] = React.useState(null);

    React.useEffect(() => {
      fetch("http://www.google.com")

        .then((res) => res.json())
        .then((data) => setData(data.message));
    }, []);
    return(
        <div>
            <p>{!data ? "Loading..." : data}</p>
        </div>
    )
}
export default aws;
import React from 'react'

const aws = () => {
    const [data, setData] = React.useState(null);

    React.useEffect(() => {
      fetch("http://127.0.0.1:3001/api")
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
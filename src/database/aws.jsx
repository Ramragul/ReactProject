import React from 'react'

const aws = () => {
    const [data, setData] = React.useState(null);

    React.useEffect(() => {
      fetch("/api")
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
import React, { useState, useEffect } from 'react';
import axios from 'axios';

export const FuneralGroundSearch = () => {
  const [funeralGrounds, setFuneralGrounds] = useState([]);
  const [filteredGrounds, setFilteredGrounds] = useState([]);
  const [cityFilter, setCityFilter] = useState('');
  const [postalCodeFilter, setPostalCodeFilter] = useState('');
  const [showEnterPostalCodeMsg, setShowEnterPostalCodeMsg] = useState(false);
  const [showNoResultsMsg, setShowNoResultsMsg] = useState(false);
  const [showSearchButton, setShowSearchButton] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://localhost:3002/gb/funeralground');
        setFuneralGrounds(response.data.data);
        setFilteredGrounds(response.data.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    let filteredData = funeralGrounds;
  
    if (cityFilter) {
      filteredData = filteredData.filter(
        ground => ground.City.toLowerCase() === cityFilter.toLowerCase()
      );
    }
  
    if (postalCodeFilter) {
      filteredData = filteredData.filter(
        ground => ground.Pincode === postalCodeFilter
      );
    }
  
    console.log("Filtered Data:", filteredData); // Log filtered data
  
    setFilteredGrounds(filteredData);
  }, [funeralGrounds, cityFilter, postalCodeFilter,showSearchButton]);
  
  

  const handleCityChange = event => {
    setPostalCodeFilter('');
    const value = event.target.value;
    setCityFilter(value);
    setShowNoResultsMsg(false);
  };

  const handlePostalCodeChange = event => {
    const value = event.target.value;
    setPostalCodeFilter(value);
    setShowEnterPostalCodeMsg(value.trim().length === 0);
    setShowNoResultsMsg(false);
    setShowSearchButton(value.trim().length > 0); // Update showSearchButton state based on input value
  };
  
  // const handleSearchClick = () => {
  //   setShowNoResultsMsg(false);
  //   setShowSearchButton(false);
    
  //   // Clear city filter
  //   setCityFilter('');
    
  //   // Check if the filters are applied and no results are found
  //   console.log("Before Timeout outside If "+filteredGrounds.length)
  //     if (filteredGrounds.length <1 ) {
  //     console.log("Before Timeout inside If "+filteredGrounds.length)
  //     setShowNoResultsMsg(true);
  //     setTimeout(() => {
  //       setShowNoResultsMsg(false);
  //       setCityFilter('');
  //       setPostalCodeFilter('');
  //     }, 15000);
  //   }
  // };

  const handleSearchClick = () => {
    setShowNoResultsMsg(false);
    setShowSearchButton(false);
    
    // Clear city filter
    setCityFilter('');
    
    // Filter the funeral grounds based on postal code
    const filteredData = funeralGrounds.filter(ground => {
      const filteredPostalCode = String(postalCodeFilter).trim();
      const groundPostalCode = String(ground.Pincode).trim();
      return groundPostalCode === filteredPostalCode;
    });
  
    // Update filtered grounds state
    setFilteredGrounds(filteredData);
  
    // Show no results message if no matches found
    if (filteredData.length === 0) {
      setShowNoResultsMsg(true);
      setTimeout(() => {
        setShowNoResultsMsg(false);
        setCityFilter('');
        setPostalCodeFilter('');
      }, 3000);
    }
  };
  
  
  
  

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4 text-center" style={{marginTop:'75px'}}>Funeral Ground Directory</h1>
      <div className="flex flex-col md:flex-row mb-4">
        <select
          value={cityFilter}
          onChange={handleCityChange}
          className="md:mr-2 mb-2 md:mb-0 px-4 py-2 border border-gray-300 rounded-lg bg-white text-gray-800 shadow-sm focus:outline-none focus:border-blue-500"
        >
          <option value="">All City</option>
          {[...new Set(funeralGrounds.map(ground => ground.City))].map(city => (
            <option key={city} value={city}>{city}</option>
          ))}
        </select>
        <input
          type="text"
          placeholder="Search by postal code"
          value={postalCodeFilter}
          onChange={handlePostalCodeChange}
          className="mb-2 md:mb-0 px-4 py-2 border border-gray-300 rounded-lg bg-white text-gray-800 shadow-sm focus:outline-none focus:border-blue-500"
        />
        {showSearchButton && (
          <button
            onClick={handleSearchClick}
            className="px-4 py-2 bg-blue-500 text-white rounded-lg shadow-md focus:outline-none self-start"
          >
            Search Postcode
          </button>
        )}
      </div>
      {showEnterPostalCodeMsg && (
        <p className="text-gray-600">Enter Postal Code for searching.</p>
      )}
      {showNoResultsMsg && (
        <p className="text-red-600">Apologies, but we couldn't find any funeral grounds matching the entered postal code. Please try again with a different postal code or search by city.</p>
      )}
      <div className="grid grid-cols-1 gap-4">
        {filteredGrounds.map(ground => (
          <div key={ground.GroundID} className="bg-white rounded-lg p-4 border border-gray-300 shadow-md">
            <h2 className="text-lg text-pink-800 font-bold mb-2">{ground.GroundName}</h2>
            <p><span className="font-semibold">Location:</span> {ground.City}</p>
            <p><span className="font-semibold">Contact Info:</span> {ground.GroundPhoneNumber}</p>
            <p><span className="font-semibold">Operational Hours:</span> {ground.OperationalHours}</p>
            <p><span className="font-semibold">Fees:</span> {ground.Fees}</p>
            <p><span className="font-semibold">City:</span> {ground.City}</p>
            <p><span className="font-semibold">Postal Code:</span> {ground.Pincode}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

//export default FuneralGroundSearch;
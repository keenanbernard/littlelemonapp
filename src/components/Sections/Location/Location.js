import React from 'react';

const AddressMapLink = ({ address }) => {
  const encodedAddress = encodeURIComponent(address);
  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodedAddress}`;

  return (
    <a href={googleMapsUrl} target="_blank" rel="noopener noreferrer">
      <article>
        <p>2548 Matthews Street, Chicago, Illinois - 60631</p>
      </article>
    </a>
  );
};

const App = () => {
  const address = 'The Purple Pig Restaurant, 444 Michigan Ave, Chicago, IL 60611, United States';

  return (
    <div style={{marginTop: '1rem'}}>
      <AddressMapLink address={address} />
    </div>
  );
};

export default App;

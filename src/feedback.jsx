import React from 'react';

const FeedbackForm = () => {
  const feedbackContainerStyle = {
    height: '100px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    Width:'100vw',
  };

  const labelStyle = {
    position: 'absolute',
    left: '-500px',
    top:'5px',
    fontFamily: 'Cambria, Cochin, Georgia, Times, "Times New Roman", serif',
    fontWeight: 'bolder',
    fontSize: 'large',
  };

  const inputStyle = {
    border: 'none',
    borderRadius: '15px',
    padding: '5px',
    boxShadow: '1px 3px 5px rgb(212, 172, 178)',
    fontFamily: 'Cambria, Cochin, Georgia, Times, "Times New Roman", serif',
    fontWeight: 'bolder',
    fontSize: 'large',
    height: '30px',
  };

  const buttonStyle = {
    fontFamily: 'Cambria, Cochin, Georgia, Times, "Times New Roman", serif',
    fontWeight: 'bolder',
    fontSize: 'large',
    border: 'none',
    backgroundColor: 'darkblue',
    color: 'white',
    height: '30px',
    marginLeft:'5px',
    borderRadius: '15px',
    paddingLeft: '20px',
    paddingRight: '20px',
    boxShadow: '1px 3px 5px black',
    cursor: 'pointer',
  };

  return (
    <div style={feedbackContainerStyle}>
      <form action="https://en.wikipedia.org/wiki/Special:Search" method="GET" style={{ position: 'relative' }}>
        <label style={labelStyle} htmlFor="search">Search on Wikipedia:</label>
        <input
          style={inputStyle}
          className="feedback-input"
          type="text"
          name="search"
          placeholder="search wikipedia"
        />
        <button style={buttonStyle} type="submit">Search</button>
      </form>
    </div>
  );
};

export default FeedbackForm;

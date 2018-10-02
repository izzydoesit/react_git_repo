import React from 'react';

const FormError = (props) => {

  return (
    <div className="formError">
      <p>{props.error}</p>        
    </div>
  )
}

export default FormError;

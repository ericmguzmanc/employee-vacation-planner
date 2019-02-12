import React from 'react';
import { Alert } from 'reactstrap';

const FormErrors = ({ formErrors, apiErrors }) => {
  console.log('FormErrors ', apiErrors)
  return (
    <div>

      <Alert color="danger">
      <div>
        <ul>
        {
          Object.keys(formErrors).map((fieldName, i) => {
            if (formErrors[fieldName].length > 0) {
              return (
                <li key={i}>{fieldName} {formErrors[fieldName]} </li>
                );
              }
            })
          }
        </ul>
      </div>
      <div className="text-center" style={{ alignItems: "center"}}>
        {
          apiErrors &&
          <span>{ apiErrors }</span>
        }
      </div>
      </Alert>
    </div>
  );
};

export default FormErrors;
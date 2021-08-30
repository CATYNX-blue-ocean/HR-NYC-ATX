import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import ShippingInfoForm from './ShippingInfoForm.jsx';
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';
import Grid from '@material-ui/core/Grid';

const ShippingChoice = () => {
  const [formToggle, setForm] = useState(false);
  const [formData, setFormData] = useState({});

  const openForm = () => {
    setForm(true);
  };
  const submitFormData = (data) => {
    console.log('data catch', data);
    setFormData(data);
    setForm(false);
  };

  return (
    <div style={{ padding: '15px', paddingTop: '5px' }}>
      <h3>Shipping Form</h3>

      {formToggle ? (
        <ShippingInfoForm submitData={submitFormData} />
      ) : (
        <div>
          <p>Enter your shipping info</p>
          <Button
            style={{ float: 'right' }}
            startIcon={<EditOutlinedIcon />}
            onClick={openForm}
          >
            Edit
          </Button>
        </div>
      )}
      {!formToggle ? (
        <div style={{ float: 'left' }}>
          <p> Fisr Name: {formData.firstName || ''}</p>
          <p> Last Name: {formData.lastName || ''}</p>
          <p> Address: {formData.adress || ''}</p>
          <p> City: {formData.city || ''}</p>
          <p> Zip Code: {formData.zipCode || ''}</p>
        </div>
      ) : null}
    </div>
  );
};

export default ShippingChoice;

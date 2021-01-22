import React, { useState, useEffect } from 'react';
import { CCard, CCardBody, CCardHeader, CCol, CRow } from '@coreui/react';
import CIcon from '@coreui/icons-react';
import axios from 'axios';
import '../common/style.css';

const Customer = ({ match }) => {
  const id = match.params.id;
  const [customer, setCustomer] = useState({});
  const customerDetails = customer
    ? Object.entries(customer)
    : [
      [
        'id',
        <span>
          <CIcon className="text-muted" name="cui-icon-ban" /> Not found
          </span>,
      ],
    ];
  useEffect(() => {
    axios.get(`http://localhost:5000/users/${id}`)
      .then(function (res) {
        const customerData = res.data[0];
        setCustomer(customerData);
      })
  }, [id])

  return (
    <CRow>
      <CCol>
        <CCard>
          <CCardHeader>Customer id: {match.params.id}</CCardHeader>
          <CCardBody>
            <table className="table table-striped table-hover">
              <tbody>
                {customerDetails.map(([key, value], index) => {
                  return (
                    <tr key={index.toString()}>
                      <td>{`${key}:`}</td>
                      <td>
                        <strong>{value}</strong>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  );
};

export default Customer;

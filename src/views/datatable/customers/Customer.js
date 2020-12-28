import React from 'react';
import { CCard, CCardBody, CCardHeader, CCol, CRow } from '@coreui/react';
import CIcon from '@coreui/icons-react';

import customerDatas from './customerDatas';

const Customer = ({ match }) => {
  const customer = customerDatas.find((customer) => customer.id.toString() === match.params.id);
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
  console.log(customerDetails);

  return (
    <CRow>
      <CCol>
        <CCard>
          <CCardHeader>customer id: {match.params.id}</CCardHeader>
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

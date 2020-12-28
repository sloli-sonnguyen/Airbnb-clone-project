import React from 'react';
import { CCard, CCardBody, CCardHeader, CCol, CRow } from '@coreui/react';
import CIcon from '@coreui/icons-react';

import purchaseDatas from './purchaseDatas';

const Purchase = ({ match }) => {
    const purchase = purchaseDatas.find((purchase) => purchase.id.toString() === match.params.id);
    const purchaseDetails = purchase
        ? Object.entries(purchase)
        : [
            [
                'id',
                <span>
                    <CIcon className="text-muted" name="cui-icon-ban" /> Not found
          </span>,
            ],
        ];
    console.log(purchaseDetails);

    return (
        <CRow>
            <CCol>
                <CCard>
                    <CCardHeader>purchase id: {match.params.id}</CCardHeader>
                    <CCardBody>
                        <table className="table table-striped table-hover">
                            <tbody>
                                {purchaseDetails.map(([key, value], index) => {
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

export default Purchase;

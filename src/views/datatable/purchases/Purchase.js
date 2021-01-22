import React, { useState, useEffect } from 'react';
import { CCard, CCardBody, CCardHeader, CCol, CRow } from '@coreui/react';
import CIcon from '@coreui/icons-react';
import '../common/style.css';
import axios from 'axios';



const Purchase = ({ match }) => {
    let id = match.params.id;
    const [purchase, setPurchase] = useState({});
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

    useEffect(() => {
        axios.get(`http://localhost:5000/purchases/${id}`)
            .then(function (res) {
                const purchaseData = res.data[0];
                setPurchase(purchaseData);
            })
    }, [id])

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

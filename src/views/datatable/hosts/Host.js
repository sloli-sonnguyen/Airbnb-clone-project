import React, { useState, useEffect } from 'react';
import { CCard, CCardBody, CCardHeader, CCol, CRow } from '@coreui/react';
import CIcon from '@coreui/icons-react';
import '../common/style.css';
import axios from 'axios';


const Host = ({ match }) => {
    let id = match.params.id;
    const [host, setHost] = useState({});
    const hostDetails = host
        ? Object.entries(host)
        : [
            [
                'id',
                <span>
                    <CIcon className="text-muted" name="cui-icon-ban" /> Not found
          </span>,
            ],
        ];

    useEffect(() => {
        axios.get(`http://localhost:5000/hosts/${id}`)
            .then(function (res) {
                const hostData = res.data[0];
                setHost(hostData);
            })
    }, [id])



    return (
        <div>
            <CRow>
                <CCol>
                    <CCard>
                        <CCardHeader>host id: {match.params.id}</CCardHeader>
                        <CCardBody>
                            <table className="table table-striped table-hover">
                                <tbody>
                                    {hostDetails.map(([key, value], index) => {
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
            <div className="host-avatar">
                <img src={host.avatar_url} alt="avas" />
            </div>
        </div>
    );
};

export default Host;

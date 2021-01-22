import React from 'react';
import { CCard, CCardBody, CCardHeader, CCol, CRow } from '@coreui/react';
import CIcon from '@coreui/icons-react';

import hostDatas from './hostDatas';

const Host = ({ match }) => {
    const host = hostDatas.find((host) => host.id.toString() === match.params.id);
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
    console.log(hostDetails);

    return (
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
    );
};

export default Host;

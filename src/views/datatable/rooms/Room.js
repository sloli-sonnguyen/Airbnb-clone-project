import React from 'react';
import { CCard, CCardBody, CCardHeader, CCol, CRow } from '@coreui/react';
import CIcon from '@coreui/icons-react';

import roomDatas from './roomDatas';

const Room = ({ match }) => {
  const room = roomDatas.find((room) => room.id.toString() === match.params.id);
  const roomDetails = room
    ? Object.entries(room)
    : [
        [
          'id',
          <span>
            <CIcon className="text-muted" name="cui-icon-ban" /> Not found
          </span>,
        ],
      ];
  console.log(roomDetails);

  return (
    <CRow>
      <CCol>
        <CCard>
          <CCardHeader>Room id: {match.params.id}</CCardHeader>
          <CCardBody>
            <table className="table table-striped table-hover">
              <tbody>
                {roomDetails.map(([key, value], index) => {
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

export default Room;

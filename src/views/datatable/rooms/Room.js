import React, { useState, useEffect } from 'react';
import { CCard, CCardBody, CCardHeader, CCol, CRow } from '@coreui/react';
import '../common/style.css';
import CIcon from '@coreui/icons-react';
import axios from 'axios';

import Slider from '../common/slide';


const Room = ({ match }) => {
  const id = match.params.id;
  const [room, setRoom] = useState({});
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

  useEffect(() => {
    axios.get(`http://localhost:5000/rooms/${id}`)
      .then(function (res) {
        const roomData = res.data[0];
        setRoom(roomData);
      })
  }, [id])
  return (
    <div>
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
                          {key === 'state' ? <strong>{value === 1 ? 'Đã được thuê' : 'Còn trống'}</strong>
                            : <strong>{value}</strong>
                          }
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
      <Slider />
    </div>
  );
};

export default Room;

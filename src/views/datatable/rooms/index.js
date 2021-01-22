import React, { useState, useEffect } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import './style.css';
import axios from 'axios';
import {
  CBadge,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CDataTable,
  CRow,
  CPagination,
} from '@coreui/react';


const getBadge = (status) => {
  switch (status) {
    case 'Còn trống':
      return 'success';
    case 'Inactive':
      return 'secondary';
    case 'Pending':
      return 'warning';
    case 'Đã được thuê':
      return 'danger';
    default:
      return 'primary';
  }
};

const Rooms = () => {
  const history = useHistory();
  const queryPage = useLocation().search.match(/page=([0-9]+)/, '');
  const currentPage = Number(queryPage && queryPage[1] ? queryPage[1] : 1);
  const [page, setPage] = useState(currentPage);
  const [roomDatas, setRoomDatas] = useState([]);

  const pageChange = (newPage) => {
    currentPage !== newPage && history.push(`/datatable/rooms?page=${newPage}`);
  };

  useEffect(() => {
    currentPage !== page && setPage(currentPage);
  }, [currentPage, page]);


  useEffect(() => {
    axios.get('http://localhost:5000/rooms')
      .then(function (res) {
        console.log(res.data);
        setRoomDatas(res.data);
      })
  }, []);

  return (
    <CRow>
      <CCol>
        <CCard>
          <CCardHeader>Phòng</CCardHeader>
          <CCardBody>
            <CDataTable
              items={roomDatas}
              fields={[
                'id',
                { key: 'name', _classes: 'font-weight-bold' },
                'city',
                'home_type',
                'price',
                'state',
              ]}
              hover
              striped
              itemsPerPage={10}
              activePage={page}
              clickableRows
              onRowClick={(item) => history.push(`/datatable/rooms/${item.id}`)}
              scopedSlots={{
                state: (item) => (
                  <td>
                    <CBadge color={getBadge(item.state === 1 ? 'Đã được thuê' : 'Còn trống')}>{item.state === 1 ? 'Đã được thuê' : 'Còn trống'}</CBadge>
                  </td>
                ),

                price: (item) => (
                  <td>
                    {item.price} $
                  </td>
                )
              }}
            />
            <CPagination
              activePage={page}
              onActivePageChange={pageChange}
              pages={5}
              doubleArrows={false}
              align="center"
            />
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  );
};

export default Rooms;

import React, { useState, useEffect } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
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

import roomDatas from './roomDatas';

const getBadge = (status) => {
  switch (status) {
    case 'Empty':
      return 'success';
    case 'Inactive':
      return 'secondary';
    case 'Pending':
      return 'warning';
    case 'Lended':
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

  const pageChange = (newPage) => {
    currentPage !== newPage && history.push(`/datatable/rooms?page=${newPage}`);
  };

  useEffect(() => {
    currentPage !== page && setPage(currentPage);
  }, [currentPage, page]);

  return (
    <CRow>
      <CCol>
        <CCard>
          <CCardHeader>Rooms</CCardHeader>
          <CCardBody>
            <CDataTable
              items={roomDatas}
              fields={[
                'id',
                { key: 'name', _classes: 'font-weight-bold' },
                'address',
                'description',
                'created_at',
                'price',
                'status',
              ]}
              hover
              striped
              itemsPerPage={8}
              activePage={page}
              clickableRows
              onRowClick={(item) => history.push(`/datatable/rooms/${item.id}`)}
              scopedSlots={{
                status: (item) => (
                  <td>
                    <CBadge color={getBadge(item.status)}>{item.status}</CBadge>
                  </td>
                ),
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

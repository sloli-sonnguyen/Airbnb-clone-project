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

import customerDatas from './customerDatas';

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

const Customers = () => {
  const history = useHistory();
  const queryPage = useLocation().search.match(/page=([0-9]+)/, '');
  const currentPage = Number(queryPage && queryPage[1] ? queryPage[1] : 1);
  const [page, setPage] = useState(currentPage);

  const pageChange = (newPage) => {
    currentPage !== newPage &&
      history.push(`/datatable/customers?page=${newPage}`);
  };

  useEffect(() => {
    currentPage !== page && setPage(currentPage);
  }, [currentPage, page]);

  return (
    <CRow>
      <CCol>
        <CCard>
          <CCardHeader>Khách hàng</CCardHeader>
          <CCardBody>
            <CDataTable
              items={customerDatas}
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
              onRowClick={(item) =>
                history.push(`/datatable/customers/${item.id}`)
              }
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

export default Customers;

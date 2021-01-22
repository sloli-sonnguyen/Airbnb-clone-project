import React, { useState, useEffect } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import axios from 'axios';
import '../common/style.css';

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

  const [customerDatas, setCustomerDatas] = useState([]);

  const pageChange = (newPage) => {
    currentPage !== newPage &&
      history.push(`/datatable/customers?page=${newPage}`);
  };

  useEffect(() => {
    currentPage !== page && setPage(currentPage);
  }, [currentPage, page]);

  useEffect(() => {
    axios.get('http://localhost:5000/users')
      .then(function (res) {
        setCustomerDatas(res.data);
      })
  }, []);

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
                'email',
                'password',
                'phone_number',
                'gender',
                'role'
              ]}
              hover
              striped
              itemsPerPage={10}
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

import React, { useState, useEffect } from 'react'
import Table from '../base/tables/Tables';
import axios from 'axios';
import { useHistory, Redirect } from "react-router-dom";
import {
  CCard,
  CCardBody,
  CCardGroup,
  CCardHeader
} from '@coreui/react'
import {
  CChartBar,
  CChartLine,
  CChartDoughnut,
  CChartRadar,
  CChartPie,
  CChartPolarArea
} from '@coreui/react-chartjs'
const colorList = ['#5C9899', '#A73F76', '#5F86AB', '#DD025C', '#B37BF8', '#042EFB', '#C1ABAB', '#96CBFC', '#A4E5D8']
const Charts = () => {

  const [homeType, setHomeType] = useState([]);
  const [highHost, setHighHost] = useState([]);
  let history = useHistory();
  const adminLogin = JSON.parse(localStorage.getItem('adminLogin')) || false;

  // if (adminLogin.isAdmin === false || adminLogin.logined === false) {
  //   return <Redirect to="/somewhere/else" />
  // }

  useEffect(() => {
    // lấy thống kê các loại nhà
    axios.get(`http://localhost:5000/room-hometypes`)
      .then(function (res) {
        console.log(res.data)
        setHomeType(res.data);
      })

    axios.get(`http://localhost:5000/top-rating-host`)
      .then(function (res) {
        setHighHost(res.data);
      })
  }, []);
  return (
    <>
      {adminLogin && < CCardGroup columns className="cols-2" >
        <CCard>
          <CCardHeader>
            Các loại nhà (Hometype)
        </CCardHeader>
          <CCardBody>
            <CChartPie
              datasets={[
                {
                  backgroundColor: colorList.slice(0, homeType.length),
                  data: homeType.map((item) => {
                    return item.counted;
                  })
                }
              ]}
              labels={homeType.map((item) => {
                return item.home_type;
              })}
              options={{
                tooltips: {
                  enabled: true
                }
              }}
            />
          </CCardBody>
        </CCard>

        <CCard>
          <CCardHeader>
            Danh sách chủ nhà được đánh giá cao
        </CCardHeader>
          <CCardBody>
            <Table data={highHost} />
          </CCardBody>
        </CCard>
      </CCardGroup >
      }
      {adminLogin || <Redirect to="/admin/login" />}
    </>

  )
}

export default Charts;

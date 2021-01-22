import React, { useState, useEffect } from 'react'
import Table from '../base/tables/Tables';
import axios from 'axios';
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
import { DocsLink } from 'src/reusable'
const colorList = ['#5C9899', '#A73F76', '#5F86AB', '#DD025C', '#B37BF8', '#042EFB', '#C1ABAB', '#96CBFC', '#A4E5D8']
const Charts = () => {

  const [homeType, setHomeType] = useState([]);

  useEffect(() => {
    // lấy thống kê các loại nhà
    axios.get(`http://localhost:5000/room-hometypes`)
      .then(function (res) {
        console.log(res.data)
        setHomeType(res.data);
      })

  }, []);

  return (
    <CCardGroup columns className="cols-2" >
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
          Bar Chart
          <DocsLink href="http://www.chartjs.org" />
        </CCardHeader>
        <CCardBody>
          <CChartBar
            datasets={[
              {
                label: 'GitHub Commits',
                backgroundColor: '#f87979',
                data: [40, 20, 12, 39, 10, 40, 39, 80, 40, 20, 12, 11]
              }
            ]}
            labels="months"
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
          <Table />
        </CCardBody>
      </CCard>
    </CCardGroup>
  )
}

export default Charts

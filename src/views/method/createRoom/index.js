import React, { useState } from 'react'
import axios from 'axios';
import './style.css';
import {
    CButton,
    CCard,
    CCardBody,
    CCardFooter,
    CCardHeader,
    CCol,
    CForm,
    CFormGroup,
    CInput,
    CLabel,
    CSelect,
    CRow,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'

const CreateRoom = () => {

    const [newRoom, setNewRoom] = useState({
        id: Math.floor(Math.random() * 100000 + Math.random() * 2 + Math.random() * 10000),
        name: "",
        price: 0,
        home_type: "",
        total_bedrooms: 0,
        total_bathrooms: 0,
        city: "",
        latitude: 33,
        longitude: 12,
        has_tv: 0,
        has_air_con: 0,
        has_heating: 0,
        has_internet: 0,
        state: 0,
        host_id: 0
    });

    function handleOnchangeInput(e) {
        const value = e.target.value;
        setNewRoom({
            ...newRoom,
            [e.target.name]: value
        });
    }

    function onSubmit(e) {
        console.log(newRoom);
        axios.post('http://localhost:5000/rooms', newRoom)
            .then(function (response) {
                console.log('oke con de');
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    const { name,
        price,
        home_type,
        total_bedrooms,
        total_bathrooms,
        city,
        latitude,
        longitude,
        has_tv,
        has_air_con,
        has_heating,
        has_internet,
        state, host_id } = newRoom;

    return (
        <>
            <CRow>
                <CCol xs="12" md="6">
                    <CCard>
                        <CCardHeader >
                            <h5>Tạo nơi thuê mới</h5>
                        </CCardHeader>
                        <CCardBody>
                            <CForm className="form-horizontal">
                                <CFormGroup row>
                                    <CCol md="3">
                                        <CLabel htmlFor="text-input">Tên</CLabel>
                                    </CCol>
                                    <CCol xs="12" md="9">
                                        <CInput name="name" onChange={handleOnchangeInput} value={name} required={true} />
                                    </CCol>
                                </CFormGroup>
                                <CFormGroup row>
                                    <CCol md="3">
                                        <CLabel >Loại nhà</CLabel>
                                    </CCol>
                                    <CCol xs="12" md="9">
                                        <CSelect onChange={handleOnchangeInput} value={home_type} name="home_type">
                                            <option>Lựa chọn</option>
                                            <option value="villa">Villa</option>
                                            <option value="apartment">Apartment</option>
                                            <option value="house">House</option>
                                            <option value="chalet">Chalet</option>
                                        </CSelect>
                                    </CCol>
                                </CFormGroup>
                                <CFormGroup row>
                                    <CCol md="3">
                                        <CLabel>Giá</CLabel>
                                    </CCol>
                                    <CCol xs="12" md="9">
                                        <CInput onChange={handleOnchangeInput} required={true} value={price} type="number" name="price" />
                                    </CCol>
                                </CFormGroup>
                                <CFormGroup row>
                                    <CCol md="3">
                                        <CLabel >Số phòng ngủ</CLabel>
                                    </CCol>
                                    <CCol xs="12" md="9">
                                        <CInput onChange={handleOnchangeInput} required={true} value={total_bedrooms} type="number" name="total_bedrooms" />
                                    </CCol>
                                </CFormGroup>
                                <CFormGroup row>
                                    <CCol md="3">
                                        <CLabel >Số phòng tắm</CLabel>
                                    </CCol>
                                    <CCol xs="12" md="9">
                                        <CInput onChange={handleOnchangeInput} required={true} value={total_bathrooms} type="number" name="total_bathrooms" />
                                    </CCol>
                                </CFormGroup>
                                <CFormGroup row>
                                    <CCol md="3">
                                        <CLabel >Thành phố</CLabel>
                                    </CCol>
                                    <CCol xs="12" md="9">
                                        <CInput onChange={handleOnchangeInput} required={true} value={city} type="text" name="city" />
                                    </CCol>
                                </CFormGroup>
                                <CFormGroup row>
                                    <CCol md="3">
                                        <CLabel >Tivi</CLabel>
                                    </CCol>
                                    <CCol xs="12" md="9">
                                        <CSelect onChange={handleOnchangeInput} value={has_tv} name="has_tv">
                                            <option value="1">Có</option>
                                            <option value="0">Không</option>
                                        </CSelect>
                                    </CCol>
                                </CFormGroup>
                                <CFormGroup row>
                                    <CCol md="3">
                                        <CLabel >Điều hòa</CLabel>
                                    </CCol>
                                    <CCol xs="12" md="9">
                                        <CSelect onChange={handleOnchangeInput} value={has_air_con} name="has_air_con">
                                            <option value="1">Có</option>
                                            <option value="0">Không</option>
                                        </CSelect>
                                    </CCol>
                                </CFormGroup>
                                <CFormGroup row>
                                    <CCol md="3">
                                        <CLabel >Lò sưởi</CLabel>
                                    </CCol>
                                    <CCol xs="12" md="9">
                                        <CSelect onChange={handleOnchangeInput} value={has_heating} name="has_heating">
                                            <option value="1">Có</option>
                                            <option value="0">Không</option>
                                        </CSelect>
                                    </CCol>
                                </CFormGroup>
                                <CFormGroup row>
                                    <CCol md="3">
                                        <CLabel >Internet</CLabel>
                                    </CCol>
                                    <CCol xs="12" md="9">
                                        <CSelect onChange={handleOnchangeInput} value={has_internet} name="has_internet">
                                            <option value="1">Có</option>
                                            <option value="0">Không</option>
                                        </CSelect>
                                    </CCol>
                                </CFormGroup>
                                <CFormGroup row>
                                    <CCol md="3">
                                        <CLabel>Trạng thái</CLabel>
                                    </CCol>
                                    <CCol xs="12" md="9">
                                        <CSelect onChange={handleOnchangeInput} value={state} name="state">
                                            <option value="1">Đang được thuê</option>
                                            <option value="0">Còn trống</option>
                                        </CSelect>
                                    </CCol>
                                </CFormGroup>
                                <CFormGroup row>
                                    <CCol md="3">
                                        <CLabel>ID chủ nhà</CLabel>
                                    </CCol>
                                    <CCol xs="12" md="9">
                                        <CInput onChange={handleOnchangeInput} name="host_id" value={host_id} type="number" />
                                    </CCol>
                                    <strong className="host-input-note">ID chủ nhà chỉ nhập từ 1 đến 30 (Do hệ thống vẫn chưa hoàn thiện)</strong>
                                </CFormGroup>
                            </CForm>
                        </CCardBody>
                        <CCardFooter>
                            <CButton onClick={onSubmit} size="sm" color="primary"><CIcon name="cil-scrubber" /> Submit</CButton>
                        </CCardFooter>
                    </CCard>
                </CCol>
            </CRow>
        </>
    )
}

export default CreateRoom;

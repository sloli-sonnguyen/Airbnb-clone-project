import React, { useState, useEffect } from "react";
import "./style.css";

// date picker
import { Datepicker, START_DATE } from "@datepicker-react/styled";
import { ThemeProvider } from "styled-components";
function Navbar(props) {
    const [state, setState] = useState({
        startDate: null,
        endDate: null,
        focusedInput: START_DATE,
    });

    const [activeSearchBox, setactiveSearchBox] = useState(false);
    const [activeDatePicker, setActiveDatePicker] = useState(false);
    const [activeMenu, setActiveMenu] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", (event) => {
            setactiveSearchBox(false);
            setActiveDatePicker(false);
        });
    }, []);

    function handleDatesChange(data) {
        if (!data.focusedInput) {
            setState({ ...data, focusedInput: START_DATE });
        } else {
            setState(data);
        }
    }

    function onHandleSearchBoxClick() {
        setActiveDatePicker(true);
    }

    function onHandleOverlayClick() {
        setActiveDatePicker(false);
    }
    return (
        <div className="navbar-version-1 container">
            <div className="navbar__logo">
                <h2 className="navbar-logo__text">Mochi</h2>
            </div>
            {activeSearchBox || (
                <div
                    className="navbar__search search-none-active"
                    onClick={() => setactiveSearchBox(true)}
                >
                    <p className="navbar-search__text">Bắt đầu tìm kiếm</p>
                    <span className="navbar-search__icon">
                        <i className="fas fa-search"></i>
                    </span>
                </div>
            )}
            {activeSearchBox && (
                <div className="navbar__search">
                    <div className="search__item search__location">
                        <p className="search__text-mb">Địa điểm</p>
                        <input type="text" placeholder="Bạn sắp đi đâu?" />
                    </div>
                    <div
                        className="search__item search-date search-date__start"
                        onClick={onHandleSearchBoxClick}
                    >
                        <p className="search__text-mb">Nhận phòng</p>
                        <p>6 thg 5</p>
                    </div>
                    <div
                        className="search__item search-date search-date__end"
                        onClick={onHandleSearchBoxClick}
                    >
                        <p className="search__text-mb">Trả phòng</p>
                        <p>19 thg 5</p>
                    </div>
                    <div className="search__item search-wrap__end">
                        <div className="search-people__type mr-2">
                            <p className="search__text-mb">Khách</p>
                            <p>Thêm khách</p>
                        </div>
                        <span className="navbar-search__icon">
                            <i className="fas fa-search search-active-icon">
                                <span>Tìm kiếm</span>
                            </i>
                        </span>
                    </div>

                    {activeDatePicker && (
                        <div className="date-picker">
                            <ThemeProvider
                                theme={{
                                    breakpoints: ["32em", "48em", "64em"],
                                    reactDatepicker: {
                                        daySize: [40, 50],
                                        fontFamily: "system-ui, -apple-system",
                                        colors: {
                                            accessibility: "#D80249",
                                            selectedDay: "#f7518b",
                                            selectedDayHover: "#F75D95",
                                            primaryColor: "#d8366f",
                                        },
                                    },
                                }}
                            >
                                <Datepicker
                                    showResetDates={false}
                                    showSelectedDates={false}
                                    showClose={false}
                                    onDatesChange={handleDatesChange}
                                    startDate={state.startDate} // Date or null
                                    endDate={state.endDate} // Date or null
                                    focusedInput={state.focusedInput} // START_DATE, END_DATE or null
                                    customStyles={{}}
                                />
                            </ThemeProvider>
                        </div>
                    )}
                </div>
            )}
            <div className="navbar__menu">
                <button className="btn menu-button" onClick={() => setActiveMenu(!activeMenu)}>
                    <i className="fas fa-bars"></i>
                </button>
                {/* menu show */}
                <div className="menu-show">
                    {/* <div className="menu-show-box__menu1">
                        <div className="menu-show-box__language">
                            <i className="fas fa-globe"></i>
                            <p>Tiếng Việt(VN)</p>
                        </div>
                        <div className="menu-show-box__money">
                            <p>₫</p>
                            <p>VNĐ</p>
                        </div>
                    </div> */}

                    {
                        activeMenu && <div className="menu-show-box__menu2">
                            <ul className="menu-show-box__menu2-list">
                                <li className="menu-show__item menu-show__title">Đăng ký</li>
                                <li className="menu-show__item">Đăng nhập</li>
                                <li className="menu-show__item">Cho thuê nhà</li>
                                <li className="menu-show__item">Tổ chức</li>
                                <li className="menu-show__item">Trải nghiệm</li>
                            </ul>
                        </div>
                    }
                </div>
            </div>
            {/* active searchbox overlay */}
            {activeDatePicker && (
                <div className="overlay-active" onClick={onHandleOverlayClick}></div>
            )}



        </div>
    );
}

export default Navbar;
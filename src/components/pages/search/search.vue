<template>
    <!--row container start -->
    <div class="row">
        <div class="col container-col">

            <!-- header start -->
            <div class="row header-name-row">
                <div class="col mt-3 d-flex justify-content-center">
                    <div class="form-input">
                        <span class="icon">
                            <img src="../../images/Search.png" class="fa fa-envelope" aria-hidden="true" alt="">
                        </span>
                        <input type="text" class="form-control">
                    </div>
                </div>

                <div>
                    <div class="row">
                        <div class="col p-0 text-1">
                            {{ $t('search.recentRequest') }}
                        </div>
                    </div>

                    <div class="row pe-0" v-for="request in 2" :key="request.id">
                        <div class="col-9 text-2">
                            Abdullokh_dev
                        </div>
                        <div class="col-2 d-flex justify-content-end clock">
                            <svg width="17" height="17" viewBox="0 0 17 17" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M8.49935 16.1147C4.29893 16.1147 0.884766 12.7005 0.884766 8.50008C0.884766 4.29966 4.29893 0.885498 8.49935 0.885498C12.6998 0.885498 16.1139 4.29966 16.1139 8.50008C16.1139 12.7005 12.6998 16.1147 8.49935 16.1147ZM8.49935 1.948C4.88685 1.948 1.94727 4.88758 1.94727 8.50008C1.94727 12.1126 4.88685 15.0522 8.49935 15.0522C12.1118 15.0522 15.0514 12.1126 15.0514 8.50008C15.0514 4.88758 12.1118 1.948 8.49935 1.948Z"
                                    fill="#0481F4"/>
                                <path
                                    d="M11.1271 11.2837C11.035 11.2837 10.9429 11.2625 10.8579 11.2058L8.66206 9.89541C8.11664 9.56958 7.71289 8.85416 7.71289 8.22375V5.31958C7.71289 5.02916 7.95372 4.78833 8.24414 4.78833C8.53456 4.78833 8.77539 5.02916 8.77539 5.31958V8.22375C8.77539 8.47875 8.98789 8.85416 9.20747 8.98166L11.4033 10.2921C11.6583 10.4408 11.7362 10.7667 11.5875 11.0217C11.4812 11.1917 11.3041 11.2837 11.1271 11.2837Z"
                                    fill="#0481F4"/>
                            </svg>
                        </div>
                    </div>

                    <div class="row">
                        <div class="col text-1 text-3">
                            {{ $t('search.recommendationsForToday') }}
                        </div>
                    </div>

                    <div class="row p-0">
                        <div class="col p-0 me-0">
                            <!--recommended books row begin -->
                            <div class="wrapper ps-2">
                                <div v-for="recommendsBook in 5" :key="recommendsBook.id">
                                    <div
                                        @click="$router.push('/audio-book/' + recommendsBook)"
                                        class="row profiles ms-2"
                                        ref="bookImage"
                                        :style="{'background': 'center / contain no-repeat url(https://images-na.ssl-images-amazon.com/images/I/81bsw6fnUiL.jpg)'}"
                                    >
                                        <div class="col book-pc">
                                            <div class="row">
                                                <div class="col book-name">
                                                    Rich Dad Poor Dad
                                                </div>
                                            </div>
                                            <div class="row">
                                                <div class="col book-author">
                                                    Robert T. Kiyosaki
                                                </div>
                                            </div>
                                            <div class="row">
                                                <div class="col ranking-height p-0">
                                                    <svg width="6" height="6" viewBox="0 0 6 6" fill="none"
                                                         xmlns="http://www.w3.org/2000/svg" class="gold-star"
                                                         v-for="star in 4"
                                                         :key="star.index">
                                                        <path
                                                            d="M3.46344 0.832678L3.87055 1.65253C3.92606 1.76433 4.0741 1.87613 4.19747 1.89476L4.93458 2.01898C5.40645 2.09972 5.51748 2.44133 5.17823 2.78294L4.60457 3.36366C4.50897 3.45993 4.45345 3.64937 4.48429 3.78601L4.64775 4.50338C4.77729 5.06859 4.47812 5.28908 3.98158 4.99405L3.29073 4.58102C3.16428 4.50649 2.96072 4.50649 2.83427 4.58102L2.14034 4.99095C1.64379 5.28597 1.34463 5.06548 1.47416 4.50028L1.63762 3.78291C1.66847 3.64937 1.61295 3.45993 1.51734 3.36056L0.946775 2.78604C0.607519 2.44444 0.718548 2.09972 1.19042 2.02209L1.92753 1.89787C2.0509 1.87613 2.19894 1.76744 2.25445 1.65564L2.66156 0.835784C2.88054 0.388591 3.24446 0.388591 3.46344 0.832678Z"
                                                            fill="#FFCF25"/>
                                                    </svg>
                                                    <svg width="6" height="6" viewBox="0 0 6 6" fill="none"
                                                         v-for="emptyStar in 5"
                                                         :key="emptyStar.index"
                                                         xmlns="http://www.w3.org/2000/svg">
                                                        <path
                                                            d="M3.46344 0.832678L3.87055 1.65253C3.92606 1.76433 4.0741 1.87613 4.19747 1.89476L4.93458 2.01898C5.40645 2.09972 5.51748 2.44133 5.17823 2.78294L4.60457 3.36366C4.50897 3.45993 4.45345 3.64937 4.48429 3.78601L4.64775 4.50338C4.77729 5.06859 4.47812 5.28908 3.98158 4.99405L3.29073 4.58102C3.16428 4.50649 2.96072 4.50649 2.83427 4.58102L2.14034 4.99095C1.64379 5.28597 1.34463 5.06548 1.47416 4.50028L1.63762 3.78291C1.66847 3.64937 1.61295 3.45993 1.51734 3.36056L0.946775 2.78604C0.607519 2.44444 0.718548 2.09972 1.19042 2.02209L1.92753 1.89787C2.0509 1.87613 2.19894 1.76744 2.25445 1.65564L2.66156 0.835784C2.88054 0.388591 3.24446 0.388591 3.46344 0.832678Z"
                                                            fill="#C6C6C6"/>
                                                        <path
                                                            d="M3.46344 0.832678L3.87055 1.65253C3.92606 1.76433 4.0741 1.87613 4.19747 1.89476L4.93458 2.01898C5.40645 2.09972 5.51748 2.44133 5.17823 2.78294L4.60457 3.36366C4.50897 3.45993 4.45345 3.64937 4.48429 3.78601L4.64775 4.50338C4.77729 5.06859 4.47812 5.28908 3.98158 4.99405L3.29073 4.58102C3.16428 4.50649 2.96072 4.50649 2.83427 4.58102L2.14034 4.99095C1.64379 5.28597 1.34463 5.06548 1.47416 4.50028L1.63762 3.78291C1.66847 3.64937 1.61295 3.45993 1.51734 3.36056L0.946775 2.78604C0.607519 2.44444 0.718548 2.09972 1.19042 2.02209L1.92753 1.89787C2.0509 1.87613 2.19894 1.76744 2.25445 1.65564L2.66156 0.835784C2.88054 0.388591 3.24446 0.388591 3.46344 0.832678Z"
                                                            fill="white"/>
                                                    </svg>
                                                </div>
                                                <div class="col vote">
                                                    4
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                            <!--recommended books row end -->
                        </div>
                    </div>
                </div>
            </div>
            <!-- header end -->

            <!-- content block row start -->
            <div class="row d-flex justify-content-center">
                <div class="col-11 center-block">
                    <!-- 1 -->
                    <div class="row">
                        <div class="col-2 logo-width p-0">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                 xmlns="http://www.w3.org/2000/svg" class="logo">
                                <path class="blueToWhite"
                                      d="M2.74982 18.65C2.33982 18.65 1.99982 18.31 1.99982 17.9V12.2C1.94982 9.49005 2.95982 6.93005 4.83982 5.01005C6.71982 3.10005 9.23982 2.05005 11.9498 2.05005C17.4898 2.05005 21.9998 6.56005 21.9998 12.1V17.8C21.9998 18.21 21.6598 18.55 21.2498 18.55C20.8398 18.55 20.4998 18.21 20.4998 17.8V12.1C20.4998 7.39005 16.6698 3.55005 11.9498 3.55005C9.63982 3.55005 7.49982 4.44005 5.90982 6.06005C4.30982 7.69005 3.45982 9.86005 3.49982 12.18V17.89C3.49982 18.31 3.16982 18.65 2.74982 18.65Z"
                                      fill="#0481F4"/>
                                <path class="blueToWhite"
                                      d="M5.94 12.45H5.81C3.71 12.45 2 14.16 2 16.26V18.14C2 20.24 3.71 21.95 5.81 21.95H5.94C8.04 21.95 9.75 20.24 9.75 18.14V16.26C9.75 14.16 8.04 12.45 5.94 12.45Z"
                                      fill="#0481F4"/>
                                <path class="blueToWhite"
                                      d="M18.19 12.45H18.06C15.96 12.45 14.25 14.16 14.25 16.26V18.14C14.25 20.24 15.96 21.95 18.06 21.95H18.19C20.29 21.95 22 20.24 22 18.14V16.26C22 14.16 20.29 12.45 18.19 12.45Z"
                                      fill="#0481F4"/>
                            </svg>
                        </div>

                        <div class="col-6 d-flex justify-content-start row-text-1 p-0">
                            <div>
                                {{ $t('search.audiobooks') }}
                            </div>
                        </div>

                        <div class="col d-flex justify-content-end p-0 price-number">
                            4000+
                        </div>
                    </div>

                    <!-- hr row start -->
                    <div class="row d-flex justify-content-center">
                        <div class="col  hr-width">
                            <div class="hr"></div>
                        </div>
                    </div>
                    <!-- hr row end -->

                    <!-- 3 -->
                    <div class="row">
                        <div class="col-2 logo-width p-0">
                            <svg width="24" height="25" viewBox="0 0 24 25" fill="none"
                                 xmlns="http://www.w3.org/2000/svg" class="logo">
                                <path class="blueToWhite"
                                      d="M22 5.06014V16.9501C22 17.9201 21.21 18.8101 20.24 18.9301L19.93 18.9701C18.29 19.1901 15.98 19.8701 14.12 20.6501C13.47 20.9201 12.75 20.4301 12.75 19.7201V5.81014C12.75 5.44014 12.96 5.10014 13.29 4.92014C15.12 3.93014 17.89 3.05014 19.77 2.89014H19.83C21.03 2.89014 22 3.86014 22 5.06014Z"
                                      fill="#0481F4"/>
                                <path class="blueToWhite"
                                      d="M10.7102 4.92014C8.88023 3.93014 6.11023 3.05014 4.23023 2.89014H4.16023C2.96023 2.89014 1.99023 3.86014 1.99023 5.06014V16.9501C1.99023 17.9201 2.78023 18.8101 3.75023 18.9301L4.06023 18.9701C5.70023 19.1901 8.01023 19.8701 9.87023 20.6501C10.5202 20.9201 11.2402 20.4301 11.2402 19.7201V5.81014C11.2402 5.43014 11.0402 5.10014 10.7102 4.92014ZM5.00023 7.95014H7.25023C7.66023 7.95014 8.00023 8.29014 8.00023 8.70014C8.00023 9.12014 7.66023 9.45014 7.25023 9.45014H5.00023C4.59023 9.45014 4.25023 9.12014 4.25023 8.70014C4.25023 8.29014 4.59023 7.95014 5.00023 7.95014ZM8.00023 12.4501H5.00023C4.59023 12.4501 4.25023 12.1201 4.25023 11.7001C4.25023 11.2901 4.59023 10.9501 5.00023 10.9501H8.00023C8.41023 10.9501 8.75023 11.2901 8.75023 11.7001C8.75023 12.1201 8.41023 12.4501 8.00023 12.4501Z"
                                      fill="#0481F4"/>
                            </svg>
                        </div>

                        <div class="col d-flex justify-content-start row-text-1 p-0">
                            {{ $t('search.books') }}
                        </div>

                        <div class="col d-flex justify-content-end price-number p-0">
                            35000+
                        </div>
                    </div>

                    <!-- hr row start -->
                    <div class="row d-flex justify-content-center">
                        <div class="col  hr-width">

                        </div>
                    </div>
                    <!-- hr row end -->
                </div>
            </div>
            <!-- content block row end -->

            <!--footer row begin -->
            <Footer/>
            <!--footer row end -->

        </div> <!--container col -->
    </div>
    <!--row container start -->
</template>

<script>
import Footer from '../../footer/footer'

export default {
    name: 'search',
    components: { Footer },
}
</script>

<style scoped>
.blueToWhite {
    fill: var(--blueToWhite);
}

.container-col {
    font-family: 'Montserrat', 'Rubik', sans-serif !important;
}

.header-name-row {
    border-radius: 15px;
    background-color: var(--color-header);
}

.form-input {
    margin-top: 35px;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
}

.form-control {
    background-color: var(--color-input) !important;
}

.icon {
    position: absolute;
    left: 90%;
    font-size: 25px;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
}

input {
    border: none !important;
    font-size: 18px;
    font-family: Montserrat, 'sans-serif';
    font-weight: 400;
    line-height: 30px;
    display: block;
    /*padding-bottom: 42px;*/
    width: 100%;
    height: 51px;
    border-radius: 12px;
    background-color: var(--bg-button-row) !important;
    color: var(--color-text) !important;
}

.text-1 {
    padding: 18px 0 0 13px !important;
    font-weight: 500;
    font-size: 14px;
    line-height: 17px;
    color: var(--color-text);
}

.text-2 {
    font-weight: 500;
    font-size: 14px;
    line-height: 17px;
    color: var(--blueToFade);
    margin: 10px 0 0 2px;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
}

.text-3 {
    margin-top: 35px;
}

.clock {
    margin-top: 5px;
}

/* scrollable row */
.profiles {
    border-radius: 6px;
    background-repeat: no-repeat;
    width: 92px;
    height: 135px;
}

.book-pc {
    font-family: 'Montserrat', 'Rubik', sans-serif !important;
    background: linear-gradient(180deg, rgba(0, 52, 101, 0) 0%, #001F3C 100%);
    width: 90.82px;
    height: 135px;
    border-radius: 6px;
}

.book-name {
    font-weight: 500;
    font-size: 8px;
    line-height: 10px;
    color: white;
    margin-top: 100px;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
}

.book-author {
    font-weight: 500;
    font-size: 6px;
    line-height: 7px;
    color: white;
    margin-top: 2px;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
}

.gold-star {
    margin-right: 1px;
}

.ranking-height {
    margin: -6px 0 0 9.5px;
    min-width: 36px;
}

.wrapper {
    display: flex;
    overflow-x: scroll;
    user-select: none;
    width: 100%;
    gap: 20px;
    margin: 12px 0 0 0;
}

.wrapper::-webkit-scrollbar {
    width: 0;
}

/* scrollable row */

.logo-width {
    width: 70px;
}

.logo {
    margin: 27px 0 0 30px;
}

.row-text-1 {
    font-weight: 500;
    font-size: 14px;
    line-height: 17px;
    color: var(--color-text);
    margin: 31px 0 0 0;
}

.price-number {
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 20px;
    color: #0481F4;
    margin: 30px 29px 0 0;
}

.hr {
    border-bottom: 1px solid #C4E2FF;
    width: 100%;
}

.hr-width {
    padding-left: 26px !important;
    padding-right: 30px !important;
    margin-top: 27px;
}

.center-block {
    border-radius: 15px;
    margin-top: 20px;
    background-color: var(--color-block);
    margin-bottom: 120px;
}

.vote {
    color: #FFFFFF;
    font-size: 7px;
    display: flex;
    justify-content: start;
    margin-left: -10px;
    margin-top: 3px;
}
</style>

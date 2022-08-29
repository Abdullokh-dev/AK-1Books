<template>
    <!-- Container -->
    <div class="row">
        <div class="col container-col">

            <!-- header -->
            <div class="row">
                <div class="col fixed-top">
                    <div class="row header-row">

                        <div class="col-2 header-block ps-2">
                            <GoBackButton class="arrow-back"/>
                        </div>

                        <div class="col-8 header-name d-flex justify-content-center p-0">
                            {{ $t('library.library') }}
                        </div>

                        <div class="col-2"><!-- don't delete (Abdullokh) --> </div>
                    </div>
                </div>
            </div>

            <!-- content block -->
            <div class="row d-flex justify-content-center">
                <div class="col-11 center-block-1">
                    <!-- 1 -->
                    <div class="row" @click="goSaved">
                        <div class="col-2 logo-width p-0">
                            <svg class="logo" fill="none" height="25" viewBox="0 0 24 25"
                                 width="24" xmlns="http://www.w3.org/2000/svg">
                                <path class="blueToWhite"
                                      d="M16.8203 2.11987H7.18031C5.06031 2.11987 3.32031 3.85987 3.32031 5.97987V20.0699C3.32031 21.8699 4.61031 22.6299 6.19031 21.7599L11.0703 19.0499C11.5903 18.7599 12.4303 18.7599 12.9403 19.0499L17.8203 21.7599C19.4003 22.6399 20.6903 21.8799 20.6903 20.0699V5.97987C20.6803 3.85987 18.9503 2.11987 16.8203 2.11987ZM15.6203 9.23987L11.6203 13.2399C11.4703 13.3899 11.2803 13.4599 11.0903 13.4599C10.9003 13.4599 10.7103 13.3899 10.5603 13.2399L9.06031 11.7399C8.77031 11.4499 8.77031 10.9699 9.06031 10.6799C9.35031 10.3899 9.83031 10.3899 10.1203 10.6799L11.0903 11.6499L14.5603 8.17987C14.8503 7.88987 15.3303 7.88987 15.6203 8.17987C15.9103 8.46987 15.9103 8.94987 15.6203 9.23987Z"
                                      fill="#0481F4"/>
                            </svg>
                        </div>

                        <div class="col-7 d-flex justify-content-start row-text-1 p-0">
                            <div class="link">
                               {{ $t('library.saved') }}
                            </div>
                        </div>

                        <div class="col d-flex justify-content-end p-0 count-number">
                            15
                        </div>
                    </div>

                    <!-- hr -->
                    <div class="row d-flex justify-content-center ">
                        <div class="col  hr-width">
                            <div class="hr"></div>
                        </div>
                    </div>

                    <div class="row" @click="goReading">
                        <div class="col-2 logo-width p-0">
                            <svg class="logo" fill="none" height="25" viewBox="0 0 24 25"
                                 width="24" xmlns="http://www.w3.org/2000/svg">
                                <path class="blueToWhite"
                                      d="M22 5.06014V16.9501C22 17.9201 21.21 18.8101 20.24 18.9301L19.93 18.9701C18.29 19.1901 15.98 19.8701 14.12 20.6501C13.47 20.9201 12.75 20.4301 12.75 19.7201V5.81014C12.75 5.44014 12.96 5.10014 13.29 4.92014C15.12 3.93014 17.89 3.05014 19.77 2.89014H19.83C21.03 2.89014 22 3.86014 22 5.06014Z"
                                      fill="#0481F4"/>
                                <path class="blueToWhite"
                                      d="M10.7102 4.92014C8.88023 3.93014 6.11023 3.05014 4.23023 2.89014H4.16023C2.96023 2.89014 1.99023 3.86014 1.99023 5.06014V16.9501C1.99023 17.9201 2.78023 18.8101 3.75023 18.9301L4.06023 18.9701C5.70023 19.1901 8.01023 19.8701 9.87023 20.6501C10.5202 20.9201 11.2402 20.4301 11.2402 19.7201V5.81014C11.2402 5.43014 11.0402 5.10014 10.7102 4.92014ZM5.00023 7.95014H7.25023C7.66023 7.95014 8.00023 8.29014 8.00023 8.70014C8.00023 9.12014 7.66023 9.45014 7.25023 9.45014H5.00023C4.59023 9.45014 4.25023 9.12014 4.25023 8.70014C4.25023 8.29014 4.59023 7.95014 5.00023 7.95014ZM8.00023 12.4501H5.00023C4.59023 12.4501 4.25023 12.1201 4.25023 11.7001C4.25023 11.2901 4.59023 10.9501 5.00023 10.9501H8.00023C8.41023 10.9501 8.75023 11.2901 8.75023 11.7001C8.75023 12.1201 8.41023 12.4501 8.00023 12.4501Z"
                                      fill="#0481F4"/>
                            </svg>
                        </div>

                        <div class="col-7 d-flex justify-content-start row-text-1 p-0">
                            <div class="link">
                                {{ $t('library.readingNow') }}
                            </div>
                        </div>

                        <div class="col d-flex justify-content-end p-0 count-number">
                            10
                        </div>
                    </div>

                    <!-- hr -->
                    <div class="row d-flex justify-content-center ">
                        <div class="col  hr-width">
                            <div class="hr"></div>
                        </div>
                    </div>

                    <!-- 3 -->
                    <div class="row" @click="goFinished">
                        <div class="col-2 logo-width p-0">
                            <svg class="logo" fill="none" height="25" viewBox="0 0 24 25"
                                 width="24" xmlns="http://www.w3.org/2000/svg">
                                <path class="blueToWhite"
                                      d="M18.0204 12.54L16.8004 11.32C16.5104 11.07 16.3404 10.7 16.3304 10.29C16.3104 9.83996 16.4904 9.38996 16.8204 9.05996L18.0204 7.85996C19.0604 6.81996 19.4504 5.81996 19.1204 5.02996C18.8004 4.24996 17.8104 3.81996 16.3504 3.81996H5.90039V2.95996C5.90039 2.54996 5.56039 2.20996 5.15039 2.20996C4.74039 2.20996 4.40039 2.54996 4.40039 2.95996V21.46C4.40039 21.87 4.74039 22.21 5.15039 22.21C5.56039 22.21 5.90039 21.87 5.90039 21.46V16.58H16.3504C17.7904 16.58 18.7604 16.14 19.0904 15.35C19.4204 14.56 19.0404 13.57 18.0204 12.54Z"
                                      fill="#0481F4"/>
                            </svg>
                        </div>

                        <div class="col d-flex justify-content-start row-text-1 p-0">
                            <div class="link">{{ $t('library.finished') }}</div>
                        </div>

                        <div class="col d-flex justify-content-end count-number p-0">
                            20
                        </div>
                    </div>

                    <!-- hr  -->
                    <div class="row d-flex justify-content-center ">
                        <div class="col  hr-width">
                            <div class="hr"></div>
                        </div>
                    </div>

                    <!-- 4 -->
                    <div class="row pb-block-2" @click="goOffline">
                        <div class="col-2 logo-width p-0">
                            <svg class="logo" fill="none" height="25" viewBox="0 0 24 25"
                                 width="24" xmlns="http://www.w3.org/2000/svg">
                                <path class="blueToWhite"
                                      d="M16.19 2.20996H7.81C4.17 2.20996 2 4.37996 2 8.01996V16.39C2 20.04 4.17 22.21 7.81 22.21H16.18C19.82 22.21 21.99 20.04 21.99 16.4V8.01996C22 4.37996 19.83 2.20996 16.19 2.20996ZM8.47 12.19C8.76 11.9 9.24 11.9 9.53 12.19L11.25 13.91V7.71996C11.25 7.30996 11.59 6.96996 12 6.96996C12.41 6.96996 12.75 7.30996 12.75 7.71996V13.91L14.47 12.19C14.76 11.9 15.24 11.9 15.53 12.19C15.82 12.48 15.82 12.96 15.53 13.25L12.53 16.25C12.46 16.32 12.38 16.37 12.29 16.41C12.2 16.45 12.1 16.47 12 16.47C11.9 16.47 11.81 16.45 11.71 16.41C11.62 16.37 11.54 16.32 11.47 16.25L8.47 13.25C8.18 12.96 8.18 12.49 8.47 12.19Z"
                                      fill="#0481F4"/>
                            </svg>
                        </div>

                        <div class="col d-flex justify-content-start row-text-1 p-0">
                            <div>{{ $t('library.offline') }}</div>
                        </div>

                        <div class="col d-flex justify-content-end count-number p-0">
                            5
                        </div>
                    </div>
                </div>
            </div>

            <!-- content block -->
            <div class="row d-flex justify-content-center">
                <div class="col-11 center-block-2">

                    <div class="row">
                        <div class="col shelves-text p-0 mb-4">
                            {{ $t('shelf.myShelves') }}
                        </div>
                    </div>

                    <div v-for="item in 2" :key="item.index" class="row">
                        <div class="col">
                            <span class="position-absolute d-flex text-white p-2">{{ item.name }}</span>
                            <img src="../../images/library/img.png" alt="img" class="img-box">
                        </div>
                    </div>
                    <Button :onClick="open" class="pb-3" text=open type="submit"/>
                </div>
            </div>

            <!-- content block -->
            <div class="row d-flex justify-content-center">
                <div class="col-11 center-block-3 last-bottom">
                    <!-- 1 -->
                    <div class="row" @click="goQuotes">
                        <div class="col-2 logo-width p-0">
                            <svg class="logo" fill="none" height="25" viewBox="0 0 24 25"
                                 width="24" xmlns="http://www.w3.org/2000/svg">
                                <path class="blueToWhite"
                                      d="M16.19 2.20996H7.81C4.17 2.20996 2 4.37996 2 8.01996V16.39C2 20.04 4.17 22.21 7.81 22.21H16.18C19.82 22.21 21.99 20.04 21.99 16.4V8.01996C22 4.37996 19.83 2.20996 16.19 2.20996ZM11.61 15.05C11.61 16.14 10.76 16.99 9.67 16.99H8.19C7.12 16.99 6.25 16.12 6.25 15.05V12.38C6.25 9.29996 6.92 8.60996 8.71 7.54996C8.83 7.47996 8.96 7.44996 9.09 7.44996C9.35 7.44996 9.6 7.57996 9.74 7.81996C9.95 8.17996 9.83 8.63996 9.48 8.84996C8.27 9.54996 7.85 9.80996 7.77 11.62H9.68C10.77 11.62 11.62 12.47 11.62 13.56V15.05H11.61ZM17.75 15.05C17.75 16.14 16.9 16.99 15.81 16.99H14.32C13.25 16.99 12.38 16.12 12.38 15.05V12.38C12.38 9.29996 13.05 8.60996 14.84 7.54996C14.96 7.47996 15.09 7.44996 15.22 7.44996C15.48 7.44996 15.73 7.57996 15.87 7.81996C16.08 8.17996 15.96 8.63996 15.61 8.84996C14.4 9.56996 13.98 9.82996 13.9 11.64H15.81C16.9 11.64 17.75 12.49 17.75 13.58V15.05Z"
                                      fill="#0481F4"/>
                            </svg>
                        </div>

                        <div class="col-7 d-flex justify-content-start row-text-1 p-0">
                            <div class="link">{{ $t('library.myQuotes') }}</div>
                        </div>

                        <div class="col d-flex justify-content-end p-0 count-number">
                            2
                        </div>
                    </div>

                    <!-- hr -->
                    <div class="row d-flex justify-content-center ">
                        <div class="col  hr-width">
                            <div class="hr"></div>
                        </div>
                    </div>

                    <!-- 2 -->
                    <div class="row pb-block-2" @click="goFeedback">
                        <div class="col-2 logo-width p-0">
                            <svg class="logo" fill="none" height="25" viewBox="0 0 24 25"
                                 width="24" xmlns="http://www.w3.org/2000/svg">
                                <path class="blueToWhite"
                                      d="M13.19 6.20996H6.79C6.53 6.20996 6.28 6.21996 6.04 6.24996C3.35 6.47996 2 8.06996 2 11V15C2 19 3.6 19.79 6.79 19.79H7.19C7.41 19.79 7.7 19.94 7.83 20.11L9.03 21.71C9.56 22.42 10.42 22.42 10.95 21.71L12.15 20.11C12.3 19.91 12.54 19.79 12.79 19.79H13.19C16.12 19.79 17.71 18.45 17.94 15.75C17.97 15.51 17.98 15.26 17.98 15V11C17.98 7.80996 16.38 6.20996 13.19 6.20996ZM6.5 14.21C5.94 14.21 5.5 13.76 5.5 13.21C5.5 12.66 5.95 12.21 6.5 12.21C7.05 12.21 7.5 12.66 7.5 13.21C7.5 13.76 7.05 14.21 6.5 14.21ZM9.99 14.21C9.43 14.21 8.99 13.76 8.99 13.21C8.99 12.66 9.44 12.21 9.99 12.21C10.54 12.21 10.99 12.66 10.99 13.21C10.99 13.76 10.55 14.21 9.99 14.21ZM13.49 14.21C12.93 14.21 12.49 13.76 12.49 13.21C12.49 12.66 12.94 12.21 13.49 12.21C14.04 12.21 14.49 12.66 14.49 13.21C14.49 13.76 14.04 14.21 13.49 14.21Z"
                                      fill="#0481F4"/>
                                <path class="blueToWhite"
                                      d="M21.9802 6.99996V11C21.9802 13 21.3602 14.36 20.1202 15.11C19.8202 15.29 19.4702 15.05 19.4702 14.7L19.4802 11C19.4802 6.99996 17.1902 4.70996 13.1902 4.70996L7.10025 4.71996C6.75025 4.71996 6.51025 4.36996 6.69025 4.06996C7.44025 2.82996 8.80025 2.20996 10.7902 2.20996H17.1902C20.3802 2.20996 21.9802 3.80996 21.9802 6.99996Z"
                                      fill="#0481F4"/>
                            </svg>
                        </div>

                        <div class="col-7 d-flex justify-content-start row-text-1 p-0">
                            <div class="link">{{ $t('library.myVotes') }}</div>
                        </div>

                        <div class="col d-flex justify-content-end count-number p-0">
                            3
                        </div>
                    </div>
                </div>
            </div>

            <!-- footer -->
            <Footer/>

        </div>
    </div>
</template>

<script>
import Footer from "../../footer/footer";
import Button from "../../button/Button";
import GoBackButton from "@/components/modals/GoBackButton";

export default {
    name: "library",
    components: {GoBackButton, Button, Footer},
    methods: {
        open() {
            this.$router.push('/my-shelves')
        },
        goSaved() {
            this.$router.push('/saved')
        },
        goReading() {
            this.$router.push('/currently-reading')
        },
        goFinished() {
            this.$router.push('/finished-book')
        },
        goOffline() {
            this.$router.push('/off-line')
        },
        goQuotes() {
            this.$router.push('/my-quotes')
        },
        goFeedback() {
            this.$router.push('/my-feedback')
        },
    },
}
</script>

<style scoped>

.container-col {
    font-family: 'Montserrat', 'Rubik', sans-serif !important;
    border-radius: 0 0 15px 15px;
}

.blueToWhite {
    fill: var(--blueToWhite);
}

.header-row {
    height: 147px;
    border-radius: 15px;
    background-color: var(--color-header);
}

.header-block {
    border: 15px;
}

.arrow-back {
    margin-top: 65px;
}

.header-name {
    margin-top: 67px;
    font-size: 14px;
    line-height: 17px;
    font-style: normal;
    color: var(--color-text);
}

.center-block-1, .center-block-2, .center-block-3 {
    border-radius: 15px;
    margin-top: 167px;
    background-color: var(--color-block);
}

.center-block-2, .center-block-3 {
    margin-top: 30px !important;
}

.row-text-1 {
    font-weight: 500;
    font-size: 14px;
    line-height: 17px;
    color: var(--color-text);
    margin: 34px 0 0 0;
}

.hr {
    border-bottom: 1px solid #C4E2FF;
    width: 100%;
}

.hr-width {
    padding-left: 26px !important;
    padding-right: 30px !important;
    margin-top: 30px;
}

.logo-width {
    width: 70px;
}

.logo {
    margin: 30px 0 0 30px;
}

.count-number {
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 20px;
    color: var(--blueToFade);
    margin: 30px 29px 0 0;
}

.pb-block-2 {
    padding-bottom: 29px;
}

.shelves-text {
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 17px;
    color: var(--color-text);
    margin: 15.4px 0 24.5px 27px;
}

.img-box {
    object-fit: cover;
    width: 100% !important;
    border-radius: 12px;
    height: 87px !important;
    margin-bottom: 18px;
}

.link {
    text-decoration: none;
    color: var(--color-text);
}

.last-bottom {
    margin-bottom: 100px;
}

</style>

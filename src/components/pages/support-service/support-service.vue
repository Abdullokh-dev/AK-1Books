<template>
    <!--row container start -->
    <div class="row">
        <div class="col container-col">

            <!-- header start -->
            <div class="row header-name-row">
                <div class="col-3 header-block ps-2">
                    <go-back-button class="arrow-back"/>
                </div>
                <div class="col-6 header-name d-flex justify-content-center p-0">
                    {{ $t('textArea.supportService') }}
                </div>
                <div class="col-3 d-flex justify-content-end p-0">
                    <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg"
                         class="music-player stroke">
                        <path
                            d="M2.52594 15.275C2.38844 8.24998 7.93845 2.5625 14.9635 2.5625C21.9885 2.5625 27.5259 8.25 27.5259 15.1375V22.8375C27.5259 25.275 25.501 27.3 23.0635 27.3C20.626 27.3 18.601 25.275 18.601 22.8375V19.325C18.601 18.1125 19.551 17.025 20.901 17.025C22.1135 17.025 23.2009 17.975 23.2009 19.325V23.1125"
                            stroke="#333333" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path
                            d="M6.85042 23.1126V19.4626C6.85042 18.2501 7.80041 17.1626 9.15041 17.1626C10.3629 17.1626 11.4504 18.1126 11.4504 19.4626V22.9751C11.4504 25.4126 9.4254 27.4376 6.9879 27.4376C4.5504 27.4376 2.52539 25.4001 2.52539 22.9751V20.0126"
                            stroke="#333333" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div>

                <div class="col-12 d-flex justify-content-center logo">
                    <svg width="115" height="21" viewBox="0 0 115 21" fill="none" xmlns="http://www.w3.org/2000/svg"
                         class="svg">
                        <path d="M6.27471 0.449951V20.4689H2.71229V4.01608H0V0.449951H6.27471Z" fill="#333333"/>
                        <path
                            d="M31.8611 2.27354C33.0216 3.40822 33.6019 4.78604 33.6019 6.40701C33.6019 8.02798 33.0486 9.4058 31.9421 10.5405C33.0486 11.6481 33.6019 13.0125 33.6019 14.6334C33.6019 16.2544 33.0216 17.6457 31.8611 18.8074C30.7276 19.9421 29.3513 20.5094 27.732 20.5094H10.8163V16.9433H27.732C28.3797 16.9433 28.9195 16.7272 29.3513 16.2949C29.8101 15.8356 30.0394 15.2818 30.0394 14.6334C30.0394 13.985 29.8101 13.4312 29.3513 12.9719C28.9195 12.5127 28.3797 12.283 27.732 12.283H10.8163V8.75741H27.732C28.3797 8.75741 28.9195 8.52777 29.3513 8.0685C29.8101 7.60923 30.0394 7.0554 30.0394 6.40701C30.0394 5.75862 29.8101 5.2183 29.3513 4.78604C28.9195 4.32677 28.3797 4.09713 27.732 4.09713H10.8163V0.530999H27.732C29.3513 0.530999 30.7276 1.11185 31.8611 2.27354Z"
                            fill="#333333"/>
                        <path
                            d="M40.5705 3.44874C42.5406 1.50358 44.902 0.530999 47.6548 0.530999C50.4346 0.530999 52.796 1.50358 54.7392 3.44874C56.6823 5.3939 57.6539 7.75781 57.6539 10.5405C57.6539 13.2961 56.6823 15.66 54.7392 17.6322C52.796 19.5774 50.4346 20.55 47.6548 20.55V16.9838C49.436 16.9838 50.9608 16.3625 52.2293 15.1197C53.4977 13.85 54.1319 12.3235 54.1319 10.5405C54.1319 8.75741 53.4977 7.231 52.2293 5.96124C50.9608 4.69148 49.436 4.0566 47.6548 4.0566C45.8736 4.0566 44.3488 4.69148 43.0803 5.96124C41.8389 7.231 41.2182 8.75741 41.2182 10.5405H37.6558C37.6558 7.75781 38.6273 5.3939 40.5705 3.44874Z"
                            fill="#333333"/>
                        <path
                            d="M65.002 3.44874C66.9721 1.50358 69.3336 0.530999 72.0863 0.530999C74.8661 0.530999 77.2275 1.50358 79.1707 3.44874C81.1138 5.3939 82.0854 7.75781 82.0854 10.5405C82.0854 13.2961 81.1138 15.66 79.1707 17.6322C77.2275 19.5774 74.8661 20.55 72.0863 20.55V16.9838C73.8675 16.9838 75.3924 16.3625 76.6608 15.1197C77.9292 13.85 78.5635 12.3235 78.5635 10.5405C78.5635 8.75741 77.9292 7.231 76.6608 5.96124C75.3924 4.69148 73.8675 4.0566 72.0863 4.0566C70.3051 4.0566 68.7803 4.69148 67.5119 5.96124C66.2704 7.231 65.6497 8.75741 65.6497 10.5405H62.0873C62.0873 7.75781 63.0588 5.3939 65.002 3.44874Z"
                            fill="#333333"/>
                        <path
                            d="M94.3723 20.55L86.5593 9.36527L94.0484 0.530999H98.7039L91.0528 9.56789L98.7039 20.55H94.3723Z"
                            fill="#333333"/>
                        <path
                            d="M109.271 8.63584C109.891 8.85197 110.472 9.12213 111.011 9.44632C111.578 9.7435 112.172 10.1352 112.793 10.6215C113.413 11.0808 113.899 11.6616 114.25 12.3641C114.628 13.0395 114.83 13.7824 114.857 14.5929C114.857 16.1598 114.263 17.5512 113.076 18.7669C111.915 19.9556 110.35 20.55 108.38 20.55H108.178V16.9838H108.38C108.758 16.9838 109.109 16.9433 109.433 16.8622C109.756 16.7812 110.013 16.6731 110.202 16.5381C110.418 16.403 110.593 16.2544 110.728 16.0923C110.89 15.9032 110.998 15.7411 111.052 15.606C111.133 15.4439 111.187 15.2818 111.214 15.1197C111.268 14.9576 111.295 14.8495 111.295 14.7955C111.295 14.7145 111.295 14.6469 111.295 14.5929C111.295 13.5933 110.229 12.7018 108.097 11.9183C107.287 11.6481 106.585 11.3645 105.992 11.0673C105.425 10.7431 104.858 10.3649 104.291 9.93261C103.725 9.47334 103.293 8.93302 102.996 8.31165C102.699 7.66326 102.551 6.94733 102.551 6.16386C102.551 4.70499 103.05 3.43523 104.048 2.35459C105.209 1.13886 106.747 0.530999 108.663 0.530999C110.202 0.530999 111.484 0.949749 112.509 1.78725C113.562 2.59773 114.304 3.57031 114.736 4.70499L111.416 5.96124C110.984 4.7185 110.067 4.09713 108.663 4.09713C108.178 4.09713 107.746 4.16467 107.368 4.29975C107.017 4.43483 106.747 4.62394 106.558 4.86709C106.396 5.08322 106.275 5.31285 106.194 5.556C106.113 5.77213 106.073 5.98826 106.073 6.20439C106.073 6.31245 106.073 6.40701 106.073 6.48806C106.1 6.5691 106.167 6.70419 106.275 6.8933C106.383 7.08241 106.531 7.25802 106.72 7.42011C106.936 7.55519 107.26 7.74431 107.692 7.98745C108.124 8.20358 108.65 8.41971 109.271 8.63584Z"
                            fill="#333333"/>
                    </svg>
                </div>
            </div>
            <!-- header end -->

            <!-- content block row start -->
            <form>
                <div class="row d-flex justify-content-center">
                    <div class="col-11 center-block">
                        <div class="row">
                            <div class="col text-1 p-0">
                                {{ $t('textArea.subjectOfTheAppeal') }}
                            </div>
                        </div>

                        <div class="row">
                            <div class="col d-flex justify-content-center">
                                <div class="row input-bg">
                                    <div class="col-10 p-0">
                                        <p class="text-2">{{ $t('textArea.questionOfSupport') }}</p>
                                    </div>
                                    <div class="col d-flex justify-content-end p-0 arrow-down pe-3">
                                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                                             xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M5.9668 2.72003L10.3135 7.0667C10.8268 7.58003 10.8268 8.42003 10.3135 8.93336L5.9668 13.28"
                                                stroke="#828282" stroke-width="1.5" stroke-miterlimit="10"
                                                stroke-linecap="round" stroke-linejoin="round"/>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="row">
                            <div class="col d-flex justify-content-center">
                            <textarea> </textarea>
                            </div>
                        </div>

                        <!-- send button start -->
                        <Button text="send" class="button-send pb-3" :onClick="sendToServiceSupport"/>
                        <!-- send button start -->

                    </div>
                </div>
            </form>
            <!-- content block row end -->

            <!-- content block 2 row start -->
            <div class="row d-flex justify-content-center last-row">
                <div class="col-11 center-block">
                    <div class="row b-input">
                        <div class="col logo-width p-0">
                            <svg width="29" height="23" viewBox="0 0 29 23" fill="none"
                                 xmlns="http://www.w3.org/2000/svg" class="logo-2">
                                <path fill-rule="evenodd" clip-rule="evenodd"
                                      d="M21.375 0.5H7.625C3.5 0.5 0.75 3.25 0.75 7.375V15.625C0.75 19.75 3.5 22.5 7.625 22.5H15.875H21.375C25.5 22.5 28.25 19.75 28.25 15.625V7.375C28.25 3.25 25.5 0.5 21.375 0.5ZM16.2324 11.5274C15.6961 11.8849 15.5311 12.1186 15.5311 12.5036V12.7924C15.5311 13.3561 15.0636 13.8236 14.4999 13.8236C13.9361 13.8236 13.4686 13.3561 13.4686 12.7924V12.5036C13.4686 10.9275 14.6098 10.1436 15.0614 9.83334L15.0774 9.82237C15.5861 9.47862 15.7511 9.24487 15.7511 8.88737C15.7511 8.19987 15.1874 7.63612 14.4999 7.63612C13.8124 7.63612 13.2486 8.19987 13.2486 8.88737C13.2486 9.45112 12.7811 9.91862 12.2174 9.91862C11.6536 9.91862 11.1861 9.45112 11.1861 8.88737C11.1861 7.05862 12.6711 5.57362 14.4999 5.57362C16.3286 5.57362 17.8136 7.05862 17.8136 8.88737C17.8136 10.4549 16.6586 11.2386 16.2324 11.5274ZM14.4999 17.2336C13.9224 17.2336 13.4686 16.7661 13.4686 16.2024C13.4686 15.6386 13.9224 15.1711 14.4999 15.1711C15.0774 15.1711 15.5311 15.6386 15.5311 16.2024C15.5311 16.7661 15.0774 17.2336 14.4999 17.2336Z"
                                      fill="#0481F4"/>
                            </svg>
                        </div>
                        <div class="col p-0 text-3">
                            {{ $t('textArea.frequentlyAskedQuestions') }}
                        </div>
                        <div class="col d-flex justify-content-end p-0 arrow-down-2 pe-3">
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M5.9668 2.72003L10.3135 7.0667C10.8268 7.58003 10.8268 8.42003 10.3135 8.93336L5.9668 13.28"
                                    stroke="#828282" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round"
                                    stroke-linejoin="round"/>
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
            <!-- content block 2 row start -->

            <!--footer row begin -->
            <Footer/>
            <!--footer row end -->

            <Footer/>

        </div> <!--container col -->
    </div>
    <!--row container start -->
</template>

<script>
import Footer from "../../footer/footer";
import Button from "../../button/Button";
import GoBackButton from "@/components/modals/GoBackButton";
import Swal from 'sweetalert2'

export default {
    name: "support-service",
    components: {GoBackButton, Button, Footer},
    methods: {
        sendToServiceSupport() {
            Swal.fire({
                position: 'center',
                icon: 'success',
                iconColor: '#0481F4',
                confirmButtonColor: '#0481F4',
                title: this.$t('alertSuccess'),
                showConfirmButton: false,
                timer: 1500
            })
        }
    },
}
</script>

<style scoped>
.container-col {
    font-family: 'Montserrat', 'Rubik', sans-serif !important;
    background-color: var(--color-container) !important;
    border-radius: 0 0 15px 15px;
}

.header-name-row {
    border-radius: 15px;
    background-color: var(--color-header);
}

.header-block {
    border: 15px;
}

.arrow-back {
    margin-top: 65px;
}

.stroke > path {
    stroke: var(--color-text);
}

.svg > path {
    fill: var(--color-text);
}

.music-player {
    margin: 62px 39px 0 0;
}

.logo {
    margin: 35px 0 42px 0;
}

.header-name {
    margin-top: 67px;
    font-size: 14px;
    line-height: 17px;
    font-style: normal;
    color: var(--color-text);
}

.center-block {
    border-radius: 15px;
    margin-top: 20px;
    background-color: var(--color-header);
}

.text-1 {
    font-weight: 500;
    font-size: 14px;
    line-height: 17px;
    color: var(--color-text);
    margin: 16px 0 9px 14px;
}

.text-2 {
    font-weight: 500;
    font-size: 14px;
    line-height: 17px;
    color: var(--color-textGray-To-lightGray);
    margin: 16px 0 0 21px;
}

.text-3 {
    font-weight: 500;
    font-size: 14px;
    line-height: 17px;
    color: var(--color-text);
    margin-top: 27px;
    min-width: 205px !important;
}

.input-bg {
    background-color: var(--bg-button-row-lighter2);
    height: 50px;
    border-radius: 12px;
    width: 99%;
}

.arrow-down {
    margin: 17px 0 0 0;
}

.arrow-down-2 {
    margin: 27px 15px 0 0;

}

textarea {
    height: 149px;
    width: 99%;
    border-radius: 12px;
    border-color: #97CAFB21;
    background-color: var(--bg-button-row-lighter2);
    margin: 8px 0 8px 0;
    outline-color: #0481F4;
    color: var(--color-textGray-To-lightGray) !important;
    padding: 5px 10px;
    resize: none !important;
}

.b-input {
    height: 70px;
}

.logo-width {
    max-width: 68px;
    min-width: 68px;
}

.logo-2 {
    margin: 24px 0 0 22px;
}

.button-send {
    margin-top: -14px;
}

.last-row {
    padding-bottom: 100px;
}

</style>

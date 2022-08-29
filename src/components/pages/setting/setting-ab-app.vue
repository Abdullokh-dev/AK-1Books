<template>
    <!--row container start -->
    <div class="row">
        <div class="col container-col">

            <div class="row">
                <div class="col fixed-top">
                    <div class="row header-name-row">
                        <div class="col-2 ps-2">
                            <GoBackButton class="arrow-back"/>
                        </div>

                        <div class="col-8 header-name d-flex justify-content-center p-0">
                            {{ $t('about.application') }}
                        </div>
                        <div class="col-2"><!-- don't delete (Abdullokh) --> </div>
                    </div>
                </div>
            </div>
            <!-- header end -->

            <!-- content block row start -->
            <div class="row d-flex justify-content-center">
                <div class="col-11 center-block">
                    <!-- logo row start -->
                    <div class="row">
                        <div class="col d-flex justify-content-center logo-project">
                            <svg width="228" height="39" viewBox="0 0 228 39" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path d="M12.4558 0V38.8427H5.38411V6.91935H0V0H12.4558Z" fill="#333333"/>
                                <path
                                    d="M63.2467 3.53831C65.5504 5.73992 66.7022 8.41331 66.7022 11.5585C66.7022 14.7036 65.604 17.377 63.4075 19.5786C65.604 21.7278 66.7022 24.375 66.7022 27.5202C66.7022 30.6653 65.5504 33.3649 63.2467 35.619C60.9967 37.8206 58.2644 38.9214 55.05 38.9214H21.4711V32.002H55.05C56.3358 32.002 57.4073 31.5827 58.2644 30.744C59.1752 29.8528 59.6305 28.7782 59.6305 27.5202C59.6305 26.2621 59.1752 25.1875 58.2644 24.2964C57.4073 23.4052 56.3358 22.9597 55.05 22.9597H21.4711V16.119H55.05C56.3358 16.119 57.4073 15.6734 58.2644 14.7823C59.1752 13.8911 59.6305 12.8165 59.6305 11.5585C59.6305 10.3004 59.1752 9.25202 58.2644 8.41331C57.4073 7.52218 56.3358 7.07661 55.05 7.07661H21.4711V0.157256H55.05C58.2644 0.157256 60.9967 1.28427 63.2467 3.53831Z"
                                    fill="#333333"/>
                                <path
                                    d="M80.5354 5.81855C84.4462 2.04435 89.1339 0.157256 94.5984 0.157256C100.116 0.157256 104.804 2.04435 108.661 5.81855C112.519 9.59274 114.447 14.1794 114.447 19.5786C114.447 24.9254 112.519 29.5121 108.661 33.3387C104.804 37.1129 100.116 39 94.5984 39V32.0806C98.1342 32.0806 101.161 30.875 103.679 28.4637C106.197 26 107.456 23.0383 107.456 19.5786C107.456 16.1189 106.197 13.1573 103.679 10.6935C101.161 8.22984 98.1342 6.99798 94.5984 6.99798C91.0625 6.99798 88.0356 8.22984 85.5177 10.6935C83.0533 13.1573 81.8212 16.1189 81.8212 19.5786H74.7495C74.7495 14.1794 76.6781 9.59274 80.5354 5.81855Z"
                                    fill="#333333"/>
                                <path
                                    d="M129.034 5.81855C132.945 2.04435 137.632 0.157256 143.097 0.157256C148.615 0.157256 153.302 2.04435 157.16 5.81855C161.017 9.59274 162.946 14.1794 162.946 19.5786C162.946 24.9254 161.017 29.5121 157.16 33.3387C153.302 37.1129 148.615 39 143.097 39V32.0806C146.633 32.0806 149.659 30.875 152.177 28.4637C154.695 26 155.954 23.0383 155.954 19.5786C155.954 16.1189 154.695 13.1573 152.177 10.6935C149.659 8.22984 146.633 6.99798 143.097 6.99798C139.561 6.99798 136.534 8.22984 134.016 10.6935C131.552 13.1573 130.32 16.1189 130.32 19.5786H123.248C123.248 14.1794 125.177 9.59274 129.034 5.81855Z"
                                    fill="#333333"/>
                                <path
                                    d="M187.336 39L171.827 17.2984L186.693 0.157256H195.935L180.747 17.6915L195.935 39H187.336Z"
                                    fill="#333333"/>
                                <path
                                    d="M216.91 15.8831C218.143 16.3024 219.294 16.8266 220.366 17.4556C221.491 18.0323 222.669 18.7923 223.902 19.7359C225.134 20.627 226.098 21.754 226.795 23.1169C227.545 24.4274 227.946 25.8689 228 27.4415C228 30.4819 226.821 33.1814 224.464 35.5403C222.161 37.8468 219.053 39 215.142 39H214.741V32.0806H215.142C215.892 32.0806 216.589 32.002 217.232 31.8448C217.875 31.6875 218.384 31.4778 218.759 31.2157C219.187 30.9536 219.535 30.6653 219.803 30.3508C220.125 29.9839 220.339 29.6694 220.446 29.4073C220.607 29.0927 220.714 28.7782 220.768 28.4637C220.875 28.1492 220.928 27.9395 220.928 27.8347C220.928 27.6774 220.928 27.5464 220.928 27.4415C220.928 25.502 218.812 23.7722 214.58 22.252C212.973 21.7278 211.58 21.1774 210.401 20.6008C209.276 19.9718 208.151 19.2379 207.026 18.3992C205.901 17.5081 205.044 16.4597 204.455 15.254C203.865 13.996 203.571 12.6069 203.571 11.0867C203.571 8.25605 204.562 5.79234 206.544 3.69556C208.848 1.33669 211.901 0.157256 215.705 0.157256C218.759 0.157256 221.303 0.969756 223.339 2.59476C225.428 4.16734 226.902 6.05444 227.759 8.25605L221.169 10.6935C220.312 8.28226 218.491 7.07661 215.705 7.07661C214.741 7.07661 213.883 7.20766 213.133 7.46976C212.437 7.73185 211.901 8.09879 211.526 8.57056C211.205 8.98992 210.964 9.43548 210.803 9.90726C210.642 10.3266 210.562 10.746 210.562 11.1653C210.562 11.375 210.562 11.5585 210.562 11.7157C210.616 11.873 210.749 12.1351 210.964 12.502C211.178 12.869 211.473 13.2097 211.848 13.5242C212.276 13.7863 212.919 14.1532 213.776 14.625C214.633 15.0444 215.678 15.4637 216.91 15.8831Z"
                                    fill="#333333"/>
                            </svg>
                        </div>
                    </div>
                    <!-- logo row end -->

                    <div class="row">
                        <div class="col d-flex justify-content-center logo-bottom-text">
                            Copyright © 2021 @Abdullokh_dev.
                        </div>
                    </div>

                    <!-- text row start -->
                    <div class="row d-flex justify-content-center">
                        <div class="col-11 text-row">
                            <p>
                                <router-link to="#">1BOOKS</router-link>
                                By @Abdullokh_dev
                            </p>
                        </div>
                    </div>
                    <!-- text row end -->

                    <!-- links row start -->
                    <div class="row">
                        <div class="col links-row p-0">
                            <router-link to="#">
                                <div>abdulloh3525dev@gmail.com</div>
                            </router-link>
                            <router-link to="#">
                                <div class="mt-2">+998(97) 000-35-25</div>
                            </router-link>
                        </div>
                    </div>
                    <!-- link row start -->
                </div>
            </div>
            <!-- content block row end -->

        </div> <!--container col -->
    </div>
    <!--row container start -->
</template>

<script>
import GoBackButton from "@/components/modals/GoBackButton";

export default {
    name: "setting-ab-app",
    components: {GoBackButton}
}
</script>

<style scoped>
.container-col {
    font-family: 'Montserrat', 'Rubik', sans-serif !important;
    background-color: var(--color-container) !important;
    border-radius: 0 0 15px 15px;
    margin-top: 157px;
}

.header-name-row {
    height: 147px;
    border-radius: 15px;
    background-color: var(--color-header);
}

.arrow-back {
    margin-top: 65px;
}

svg > path {
    fill: var(--color-text);
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
    margin: 20px 0 22px 0;
    background-color: var(--color-block);
    height: 76vh;
}

.logo-project {
    margin-top: 44px;
}

.logo-bottom-text {
    font-style: normal;
    font-weight: normal;
    font-size: 10px;
    line-height: 12px;
    color: var(--color-textGray-To-lightGray);
    margin-top: 17px;
}

.text-row {
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 15px;
    margin-top: 31px;
    color: var(--color-text);
}

.links-row {
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 17px;
    color: #0481F4;
    text-decoration-line: underline;
    margin: 10px 0 31px 30px !important;
}

</style>

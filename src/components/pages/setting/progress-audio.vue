<template>
    <!--all one row -->
    <div class="row">
        <div class="col main-row">
            <!--first-block-row start -->
            <div class="row">
                <div class="col first-block bg-light">
                    <!--three logo row start -->
                    <div class="row header-row">
                        <div class="col-4 d-flex justify-content-start ps-4">
                            <svg width="30" height="31" viewBox="0 0 30 31" fill="none" xmlns="http://www.w3.org/2000/svg" class="svg">
                                <path d="M15 9.05005V13.2125" stroke="#333333" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round"/>
                                <path d="M25.7378 19.9625C26.6503 21.4875 25.9253 23.4625 24.2378 24.025C18.2628 26.0125 11.8003 26.0125 5.82528 24.025C4.02528 23.425 3.33778 21.6 4.32528 19.9625L5.91278 17.3125C6.35028 16.5875 6.70028 15.3 6.70028 14.4625V11.8375C6.70028 7.225 10.4253 3.5 15.0253 3.5C19.6003 3.5 23.3503 7.25 23.3503 11.825V14.45C23.3503 14.675 23.3753 14.925 23.4128 15.1875" stroke="#333333" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round"/>
                                <circle cx="23.5" cy="5.5" r="5.5" fill="white"/>
                                <circle cx="23.5" cy="5.5" r="5.5" fill="white"/>
                                <circle cx="23.5" cy="5.5" r="5.5" fill="white"/>
                                <circle cx="23.5" cy="5.5" r="3.5" fill="#EB5757"/>
                                <path d="M19.1629 24.5249C19.1629 26.8124 17.2879 28.6874 15.0004 28.6874C13.8629 28.6874 12.8129 28.2124 12.0629 27.4624C11.3129 26.7124 10.8379 25.6624 10.8379 24.5249" stroke="#333333" stroke-width="1.5" stroke-miterlimit="10"/>
                            </svg>
                        </div>
                        <div class="col-4 d-flex justify-content-center header-center-text mt-1">
                            {{$t('statisticsPage.profile')}}
                        </div>
                        <div class="col-4 d-flex justify-content-end pe-4">
                            <router-link to="/setting">
                                <svg class="svg" width="30" height="30" viewBox="0 0 30 30" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M18.75 15C18.75 12.925 17.075 11.25 15 11.25C12.925 11.25 11.25 12.925 11.25 15C11.25 17.075 12.925 18.75 15 18.75C15.5125 18.75 16.0125 18.65 16.4625 18.45"
                                        stroke="#333333" stroke-width="1.5" stroke-miterlimit="10"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"/>
                                    <path
                                        d="M8.59961 25.7249L9.96211 26.5124C10.9496 27.0999 12.2246 26.7499 12.8121 25.7624L12.9496 25.5249C14.0746 23.5624 15.9246 23.5624 17.0621 25.5249L17.1996 25.7624C17.7871 26.7499 19.0621 27.0999 20.0496 26.5124L22.2121 25.2749C23.3496 24.6249 23.7371 23.1624 23.0871 22.0374C21.9496 20.0749 22.8746 18.4749 25.1371 18.4749C26.4371 18.4749 27.5121 17.4124 27.5121 16.0999V13.8999C27.5121 12.5999 26.4496 11.5249 25.1371 11.5249C23.8746 11.5249 23.0246 11.0249 22.7246 10.2374C22.4871 9.6249 22.5871 8.8249 23.0871 7.9624C23.7371 6.8249 23.3496 5.3749 22.2121 4.7249L21.1996 4.1499"
                                        stroke="#333333" stroke-width="1.5" stroke-miterlimit="10"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"/>
                                    <path
                                        d="M17.05 4.47504C15.925 6.43754 14.075 6.43754 12.9375 4.47504L12.8 4.23754C12.225 3.25004 10.95 2.90004 9.9625 3.48754L7.8 4.72504C6.6625 5.37504 6.275 6.83754 6.925 7.97504C8.0625 9.92504 7.1375 11.525 4.875 11.525C3.575 11.525 2.5 12.5875 2.5 13.9V16.1C2.5 17.4 3.5625 18.475 4.875 18.475C7.1375 18.475 8.0625 20.075 6.925 22.0375"
                                        stroke="#333333" stroke-width="1.5" stroke-miterlimit="10"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"/>
                                </svg>
                            </router-link>
                        </div>
                    </div>
                    <!-- three logo row end -->

                    <!--two button row start -->
                    <div class="row d-flex justify-content-center">
                        <div class="col-11 button-row">
                            <div class="row">
                                <div class="col-6">
                                    <button class="book-button">{{$t('search.books')}}</button>
                                </div>
                                <div class="col-6">
                                    <button class="audio-button">{{$t('search.audiobooks')}}</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!--two button row end-->

                    <!--name row start -->
                    <div class="row">
                        <div class="col-12 d-flex justify-content-center profile-name">
                            Abdullokh Khamzaev
                            <svg width="10" height="10" viewBox="0 0 10 10" fill="none"
                                 xmlns="http://www.w3.org/2000/svg"
                                 class="ms-1">
                                <path
                                    d="M10 1.85501V6.64501C10 8.02501 8.88 9.14501 7.5 9.14501H2.5C2.27 9.14501 2.05 9.11501 1.835 9.05501C1.525 8.97001 1.425 8.57501 1.655 8.34501L6.97 3.03001C7.08 2.92001 7.245 2.89501 7.4 2.92501C7.56 2.95501 7.735 2.91001 7.86 2.79001L9.145 1.50001C9.615 1.03001 10 1.18501 10 1.85501Z"
                                    fill="#FFCF25"/>
                                <path
                                    d="M6.32 2.68001L1.085 7.91501C0.845 8.15501 0.445 8.09501 0.285 7.79501C0.1 7.45501 0 7.06001 0 6.64501V1.85501C0 1.18501 0.385 1.03001 0.855 1.50001L2.145 2.79501C2.34 2.98501 2.66 2.98501 2.855 2.79501L4.645 1.00001C4.84 0.80501 5.16 0.80501 5.355 1.00001L6.325 1.97001C6.515 2.16501 6.515 2.48501 6.32 2.68001Z"
                                    fill="#FFCF25"/>
                                <path
                                    d="M0 1.85501V6.64501C0 8.02501 1.12 9.14501 2.5 9.14501H7.5C7.73 9.14501 7.95 9.115 8.165 9.055C8.475 8.97 8.575 8.575 8.345 8.345L3.03 3.03C2.92 2.92 2.755 2.895 2.6 2.925C2.44 2.955 2.265 2.91 2.14 2.79L0.855 1.50001C0.385 1.03001 0 1.18501 0 1.85501Z"
                                    fill="#FFCF25"/>
                                <path
                                    d="M3.68 2.68L8.915 7.915C9.155 8.155 9.555 8.095 9.715 7.795C9.9 7.455 10 7.06001 10 6.64501V1.85501C10 1.18501 9.615 1.03001 9.145 1.50001L7.855 2.795C7.66 2.985 7.34 2.985 7.145 2.795L5.355 1.00001C5.16 0.80501 4.84 0.80501 4.645 1.00001L3.675 1.97C3.485 2.165 3.485 2.485 3.68 2.68Z"
                                    fill="#FFCF25"/>
                                <path
                                    d="M4.75 3.75001H5.5C5.58333 3.83334 5.8 4.00001 6 4.00001C6.25 4.00001 6 4.25001 6.25 4.75001C6.5 5.25001 6 5.00001 5.5 5.25001C5 5.50001 5 5.25001 4.75 5.25001C4.55 5.25001 4.16667 4.91668 4 4.75001L4.75 3.75001Z"
                                    fill="#FFCF25"/>
                            </svg>
                        </div>
                    </div>
                    <!--name row end -->

                    <!--email row start-->
                    <div class="row">
                        <div class="col d-flex justify-content-center account">
                            abdulloh3525@dev.gmail.com
                        </div>
                    </div>
                    <!--email row end -->

                    <!-- logo progress row begin -->
                    <div class="row">
                        <div class="col d-flex justify-content-center mt-4">
                            <svg width="230" height="230" viewBox="0 0 230 230" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M21.9745 182.611C9.50572 165.455 2.02389 145.186 0.356126 124.043C-1.31164 102.901 2.89963 81.709 12.5243 62.8105C22.1491 43.9121 36.8123 28.0433 54.8931 16.9584C72.9738 5.87355 93.7676 0.00446458 114.976 2.54524e-06C136.184 -0.00445949 156.98 5.85588 175.066 16.9331C193.151 28.0104 207.821 43.873 217.454 62.7674C227.086 81.6618 231.307 102.852 229.648 123.995C227.989 145.138 220.516 165.411 208.054 182.572L180.193 162.34C188.923 150.318 194.159 136.115 195.321 121.302C196.484 106.489 193.527 91.6435 186.778 78.4062C180.03 65.169 169.752 54.0557 157.082 46.2951C144.411 38.5344 129.841 34.4287 114.983 34.4318C100.125 34.435 85.5567 38.5468 72.8895 46.3128C60.2223 54.0787 49.9493 65.1963 43.2063 78.4364C36.4633 91.6766 33.5129 106.523 34.6813 121.336C35.8498 136.148 41.0915 150.349 49.827 162.368L21.9745 182.611Z" fill="#EDF3F9"/>
                                <path d="M21.9623 182.594C5.84298 160.407 -1.81693 133.19 0.36434 105.853C2.54561 78.5158 14.4245 52.8578 33.8581 33.5078C53.2916 14.1577 79.0005 2.3895 106.347 0.326003C133.693 -1.73749 160.877 6.03959 182.994 22.2543L156.663 58.171C143.111 48.2356 126.454 43.4702 109.698 44.7346C92.9417 45.999 77.1888 53.2099 65.2811 65.0664C53.3733 76.923 46.0947 92.6446 44.7581 109.395C43.4216 126.146 48.1151 142.823 57.9921 156.418L21.9623 182.594Z" fill="#0481F4"/>
                                <g filter="url(#filter0_d_2_8052)">
                                    <rect x="56.9316" y="56.9319" width="116.056" height="116.053" rx="58.0263" fill="#EDF3F9"/>
                                    <mask id="mask0_2_8052" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="56" y="56" width="117" height="117">
                                        <rect x="56.9316" y="56.9319" width="116.056" height="116.053" rx="58.0263" fill="white"/>
                                    </mask>
                                    <g mask="url(#mask0_2_8052)">
                                        <path d="M102.673 131.937V132.1C102.629 135.502 99.7612 138.062 94.0692 139.777C100.93 144.753 107.79 148.733 114.645 148.733C121.5 148.733 128.359 144.748 135.22 139.773C129.566 138.057 126.699 135.495 126.617 132.088C126.617 131.48 126.622 130.618 126.625 128.998C126.625 128.741 126.625 128.478 126.625 128.208C127.034 128.266 127.001 128.229 126.625 128.126C126.637 123.865 126.655 118.135 126.68 112.313C132.042 105.381 130.072 97.2538 128.395 97.4572C126.334 97.7022 108.488 80.8149 105.065 79.9508C101.642 79.0867 92.947 81.8791 91.45 89.6698C89.9529 97.4605 89.3265 117.093 95.0035 124.931C96.6185 127.163 99.162 128.034 102.634 127.544C102.639 129.178 102.649 130.089 102.673 131.936L102.673 131.937Z" fill="url(#paint0_linear_2_8052)"/>
                                        <path opacity="0.228" d="M102.668 127.563C107.432 127.081 112.031 125.552 116.136 123.086C116.136 123.086 110.472 130.592 102.668 132.041V127.563Z" fill="#DB844C"/>
                                        <path d="M153.877 150.049C157.426 157.259 159.468 173.886 159.468 173.886H70C70 173.886 72.0418 157.257 75.5913 150.049C79.1407 142.842 99.8585 136.154 99.8585 136.154C103.852 144.347 125.769 144.346 129.595 136.154C129.595 136.154 150.324 142.839 153.877 150.049Z" fill="#0481F4"/>
                                        <path d="M131.344 110.924C133.921 104.741 144.248 92.1496 135.346 84.3132C132.354 69.7609 115.819 71.3722 104.782 74.7298C97.3648 76.9872 91.7637 81.4465 90.5664 78.0881C83.0844 84.3132 86.8315 90.4018 91.7637 92.1496C96.2409 93.7357 103.811 95.3177 116.683 93.8288C118.983 93.5625 118.501 100.586 119.73 101.343C121.573 102.482 123.004 95.3193 128.06 97.4697C133.117 99.6201 130.115 109.593 124.691 109.593C122.82 109.593 121.885 114.722 126.935 117.148C130.595 118.947 129.669 114.942 131.344 110.924Z" fill="#192734"/>
                                    </g>
                                </g>
                                <defs>
                                    <filter id="filter0_d_2_8052" x="26.9316" y="31.9319" width="176.057" height="176.053" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                                        <feOffset dy="5"/>
                                        <feGaussianBlur stdDeviation="15"/>
                                        <feColorMatrix type="matrix" values="0 0 0 0 0.0294097 0 0 0 0 0.247882 0 0 0 0 0.504167 0 0 0 0.05 0"/>
                                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2_8052"/>
                                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2_8052" result="shape"/>
                                    </filter>
                                    <linearGradient id="paint0_linear_2_8052" x1="90.418" y1="79.7998" x2="90.418" y2="148.733" gradientUnits="userSpaceOnUse">
                                        <stop stop-color="#FFE2CF"/>
                                        <stop offset="1" stop-color="#FFE2CF"/>
                                    </linearGradient>
                                </defs>
                            </svg>
                        </div>
                    </div>
                    <!--logo progress row end -->

                    <div class="row row-7">
                        <div class="col d-flex justify-content-center your-goal-text-1">
                            {{ $t('statisticsPage.yourTarget') }}
                        </div>
                    </div>
                    <div class="row">
                        <div class="col d-flex justify-content-center your-goal-text-2">
                            {{ $t('statisticsPage.readBooksInDays', {howDays: 30, howBooks: 20}) }}
                        </div>
                    </div>

                    <Button text="changeTarget" :onClick="toPage" class="mb-4"/>
                </div> <!--first block-col end-->
            </div> <!--first block-row end-->

            <!--statistic text row start -->
            <div class="row">
                <div class="col ps-0 statistic-text">
                    {{ $t('statisticsPage.statistics') }}
                </div>
            </div>
            <!--statistic text row end -->

            <!--block-2-row start-->
            <div class="row d-flex justify-content-center">
                <div class="col-11 bg-light second-block">
                    <!--three button row start -->
                    <div class="row d-flex justify-content-center">
                        <div class="col-11 button-row-2">
                            <div class="row">
                                <div class="col-4 p-0 ps-1">
                                    <button class="for-day">{{ $t('statisticsPage.duringTheWeek') }}</button>
                                </div>
                                <div class="col-4 p-0">
                                    <button class="for-month">{{ $t('statisticsPage.duringTheMonth') }}</button>
                                </div>
                                <div class="col-4 p-0 pe-1">
                                    <button class="for-year">{{ $t('statisticsPage.duringTheYear') }}</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!--three button row end-->

                    <!--progress-2 row start -->
                    <div class="row progress2-row ps-1">
                        <div class="col-5">
                            <div class="row">
                                <div class="col-12 d-flex justify-content-center read-text">
                                    Listened
                                </div>
                            </div>

                            <div class="row">
                                <div class="col d-flex justify-content-center books-count-row">
                                    <div class="row">
                                        <div class="col-12 d-flex justify-content-center">
                                            <span class="books-count">7</span>
                                        </div>
                                        <div class="col d-flex justify-content-center">
                                            <span class="book-text">Audio</span>
                                        </div>
                                    </div>
                                </div>

                                <div class="col p-0">
                                    <div class="vl-2"></div>
                                </div>

                                <div class="col d-flex justify-content-center page-count-row">
                                    <div class="row">
                                        <div class="col col-12 d-flex justify-content-center">
                                            <span class="page-count">160</span>
                                        </div>
                                        <div class="col d-flex justify-content-center">
                                            <span class="page-text">{{$t('minutes')}}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="col-2 d-flex justify-content-center center-vl p-0 m-0" style="">
                            <div class="vl"></div>
                        </div>
                        <div class="col-5 pe-4">
                            <div class="row">
                                <div class="col d-flex justify-content-center read-text pe-0 ps-0">
                                    Time for reading
                                </div>
                            </div>

                            <div class="row">
                                <div class="col d-flex justify-content-center books-count-row">
                                    <div class="row pe-4 ">
                                        <div class="col-12 d-flex justify-content-center">
                                            <span class="books-count">19</span>
                                        </div>
                                        <div class="col d-flex justify-content-center">
                                            <span class="book-time-page-text">min / in a day</span>
                                        </div>
                                    </div>
                                </div>

                                <div class="col-1  p-0">
                                    <div class="vl-2"></div>
                                </div>

                                <div class="col d-flex justify-content-center page-count-row">
                                    <div class="row">
                                        <div class="col col-12 d-flex justify-content-center">
                                            <span class="page-count">160</span>
                                        </div>
                                        <div class="col d-flex justify-content-center">
                                            <span class="book-time-page-text">min</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!--progress-2 row end -->

                    <div class="row">
                        <div class="col d-flex justify-content-center">
                            <span class="hr-bottom-1"></span>
                        </div>
                    </div>

                    <!--weeks button row start -->
                    <div class="row">
                        <div class="col">
                            <div class="row week-day-row">
                                <div class="col d-flex justify-content-center">
                                    <div class="col d-flex justify-content-center">
                                        <svg width="39" height="43" viewBox="0 0 39 43" fill="none"
                                             xmlns="http://www.w3.org/2000/svg" class="week-btn">
                                            <path
                                                d="M16 1.02073C18.1658 -0.229704 20.8342 -0.229704 23 1.02073L35.4856 8.22927C37.6514 9.4797 38.9856 11.7906 38.9856 14.2915V28.7085C38.9856 31.2094 37.6514 33.5203 35.4856 34.7707L23 41.9793C20.8342 43.2297 18.1658 43.2297 16 41.9793L3.51443 34.7707C1.34862 33.5203 0.0144291 31.2094 0.0144291 28.7085V14.2915C0.0144291 11.7906 1.34862 9.4797 3.51443 8.22927L16 1.02073Z"
                                                fill="#CBE5FD"/>
                                        </svg>
                                        <span class="week-day">П</span>
                                    </div>

                                    <div class="col d-flex justify-content-center">
                                        <svg width="39" height="43" viewBox="0 0 39 43" fill="none"
                                             xmlns="http://www.w3.org/2000/svg" class="week-btn">
                                            <path
                                                d="M16 1.02073C18.1658 -0.229704 20.8342 -0.229704 23 1.02073L35.4856 8.22927C37.6514 9.4797 38.9856 11.7906 38.9856 14.2915V28.7085C38.9856 31.2094 37.6514 33.5203 35.4856 34.7707L23 41.9793C20.8342 43.2297 18.1658 43.2297 16 41.9793L3.51443 34.7707C1.34862 33.5203 0.0144291 31.2094 0.0144291 28.7085V14.2915C0.0144291 11.7906 1.34862 9.4797 3.51443 8.22927L16 1.02073Z"
                                                fill="#CBE5FD"/>
                                        </svg>
                                        <span class="week-day">В</span>
                                    </div>

                                    <div class="col d-flex justify-content-center">
                                        <svg width="39" height="43" viewBox="0 0 39 43" fill="none"
                                             xmlns="http://www.w3.org/2000/svg" class="week-btn">
                                            <path
                                                d="M16 1.02073C18.1658 -0.229704 20.8342 -0.229704 23 1.02073L35.4856 8.22927C37.6514 9.4797 38.9856 11.7906 38.9856 14.2915V28.7085C38.9856 31.2094 37.6514 33.5203 35.4856 34.7707L23 41.9793C20.8342 43.2297 18.1658 43.2297 16 41.9793L3.51443 34.7707C1.34862 33.5203 0.0144291 31.2094 0.0144291 28.7085V14.2915C0.0144291 11.7906 1.34862 9.4797 3.51443 8.22927L16 1.02073Z"
                                                fill="#CBE5FD"/>
                                        </svg>
                                        <span class="week-day">С</span>
                                    </div>

                                    <div class="col d-flex justify-content-center">
                                        <svg width="39" height="43" viewBox="0 0 39 43" fill="none"
                                             xmlns="http://www.w3.org/2000/svg" class="week-btn">
                                            <path
                                                d="M16 1.02073C18.1658 -0.229704 20.8342 -0.229704 23 1.02073L35.4856 8.22927C37.6514 9.4797 38.9856 11.7906 38.9856 14.2915V28.7085C38.9856 31.2094 37.6514 33.5203 35.4856 34.7707L23 41.9793C20.8342 43.2297 18.1658 43.2297 16 41.9793L3.51443 34.7707C1.34862 33.5203 0.0144291 31.2094 0.0144291 28.7085V14.2915C0.0144291 11.7906 1.34862 9.4797 3.51443 8.22927L16 1.02073Z"
                                                fill="#0481F4"/>
                                        </svg>
                                        <span class="week-day text-white">Ч</span>
                                    </div>

                                    <div class="col d-flex justify-content-center">
                                        <svg width="39" height="43" viewBox="0 0 39 43" fill="none"
                                             xmlns="http://www.w3.org/2000/svg" class="week-btn">
                                            <path
                                                d="M16 1.02073C18.1658 -0.229704 20.8342 -0.229704 23 1.02073L35.4856 8.22927C37.6514 9.4797 38.9856 11.7906 38.9856 14.2915V28.7085C38.9856 31.2094 37.6514 33.5203 35.4856 34.7707L23 41.9793C20.8342 43.2297 18.1658 43.2297 16 41.9793L3.51443 34.7707C1.34862 33.5203 0.0144291 31.2094 0.0144291 28.7085V14.2915C0.0144291 11.7906 1.34862 9.4797 3.51443 8.22927L16 1.02073Z"
                                                fill="#CBE5FD"/>
                                        </svg>
                                        <span class="week-day">П</span>
                                    </div>

                                    <div class="col d-flex justify-content-center">
                                        <svg width="39" height="43" viewBox="0 0 39 43" fill="none"
                                             xmlns="http://www.w3.org/2000/svg" class="week-btn">
                                            <path
                                                d="M16 1.02073C18.1658 -0.229704 20.8342 -0.229704 23 1.02073L35.4856 8.22927C37.6514 9.4797 38.9856 11.7906 38.9856 14.2915V28.7085C38.9856 31.2094 37.6514 33.5203 35.4856 34.7707L23 41.9793C20.8342 43.2297 18.1658 43.2297 16 41.9793L3.51443 34.7707C1.34862 33.5203 0.0144291 31.2094 0.0144291 28.7085V14.2915C0.0144291 11.7906 1.34862 9.4797 3.51443 8.22927L16 1.02073Z"
                                                fill="#CBE5FD"/>
                                        </svg>
                                        <span class="week-day">С</span>
                                    </div>

                                    <div class="col d-flex justify-content-center">
                                        <svg width="39" height="43" viewBox="0 0 39 43" fill="none"
                                             xmlns="http://www.w3.org/2000/svg" class="week-btn">
                                            <path
                                                d="M16 1.02073C18.1658 -0.229704 20.8342 -0.229704 23 1.02073L35.4856 8.22927C37.6514 9.4797 38.9856 11.7906 38.9856 14.2915V28.7085C38.9856 31.2094 37.6514 33.5203 35.4856 34.7707L23 41.9793C20.8342 43.2297 18.1658 43.2297 16 41.9793L3.51443 34.7707C1.34862 33.5203 0.0144291 31.2094 0.0144291 28.7085V14.2915C0.0144291 11.7906 1.34862 9.4797 3.51443 8.22927L16 1.02073Z"
                                                fill="#CBE5FD"/>
                                        </svg>
                                        <span class="week-day">В</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!--weeks button row start -->

                    <div class="row">
                        <div class="col d-flex justify-content-center">
                            <span class="hr-bottom-2"></span>
                        </div>
                    </div>

                    <div class="row">
                        <div class="col ms-2">
                            <span class="progress-2-top-text">{{$t('statisticsPage.booksReadThisYear')}}</span>
                        </div>
                    </div>

                    <!-- weekly progress row start -->
                    <div class="row">

                        <div class="col-3 row-statistic d-flex justify-content-center">
                            <div class="row">
                                <div class="col bg-progress p-0">
                                    <div class="col percentage">
                                        <span>14%</span>
                                    </div>

                                    <div class="load-bar">
                                        <strong class="bar" style='height:14%;'></strong>
                                    </div>
                                    <div class="sun-fog">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M18.4807 12.25C18.7607 12.25 19.0007 12.01 18.9807 11.73C18.7107 8.1 15.6907 5.25 12.0007 5.25C8.3107 5.25 5.2907 8.1 5.0207 11.73C5.0007 12.01 5.2407 12.25 5.5207 12.25H18.4807Z" fill="#0481F4"/>
                                            <path d="M22 13H21.92C21.37 13 20.92 12.55 20.92 12C20.92 11.45 21.37 11 21.92 11C22.47 11 22.96 11.45 22.96 12C22.96 12.55 22.55 13 22 13ZM2.08 13H2C1.45 13 1 12.55 1 12C1 11.45 1.45 11 2 11C2.55 11 3.04 11.45 3.04 12C3.04 12.55 2.63 13 2.08 13ZM19.01 5.99C18.75 5.99 18.5 5.89 18.3 5.7C17.91 5.31 17.91 4.68 18.3 4.29L18.43 4.16C18.82 3.77 19.45 3.77 19.84 4.16C20.23 4.55 20.23 5.18 19.84 5.57L19.71 5.7C19.52 5.89 19.27 5.99 19.01 5.99ZM4.99 5.99C4.73 5.99 4.48 5.89 4.28 5.7L4.15 5.56C3.76 5.17 3.76 4.54 4.15 4.15C4.54 3.76 5.17 3.76 5.56 4.15L5.69 4.28C6.08 4.67 6.08 5.3 5.69 5.69C5.5 5.89 5.24 5.99 4.99 5.99ZM12 3.04C11.45 3.04 11 2.63 11 2.08V2C11 1.45 11.45 1 12 1C12.55 1 13 1.45 13 2C13 2.55 12.55 3.04 12 3.04Z" fill="#0481F4"/>
                                            <path d="M20 15.75H4C3.59 15.75 3.25 15.41 3.25 15C3.25 14.59 3.59 14.25 4 14.25H20C20.41 14.25 20.75 14.59 20.75 15C20.75 15.41 20.41 15.75 20 15.75Z" fill="#0481F4"/>
                                            <path d="M18 18.75H6C5.59 18.75 5.25 18.41 5.25 18C5.25 17.59 5.59 17.25 6 17.25H18C18.41 17.25 18.75 17.59 18.75 18C18.75 18.41 18.41 18.75 18 18.75Z" fill="#0481F4"/>
                                            <path d="M15 21.75H9C8.59 21.75 8.25 21.41 8.25 21C8.25 20.59 8.59 20.25 9 20.25H15C15.41 20.25 15.75 20.59 15.75 21C15.75 21.41 15.41 21.75 15 21.75Z" fill="#0481F4"/>
                                        </svg>
                                    </div>
                                    <div class="d-flex justify-content-center day-part ">
                                        {{ $t('statisticsPage.morning') }}
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="col-3 row-statistic d-flex justify-content-center">
                            <div class="row">
                                <div class="col bg-progress p-0">
                                    <div class="col percentage">
                                        <span>43%</span>
                                    </div>

                                    <div class="load-bar">
                                        <strong class="bar" style='height:43%;'></strong>
                                    </div>
                                    <div class="sun-fog">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M12 19C15.866 19 19 15.866 19 12C19 8.13401 15.866 5 12 5C8.13401 5 5 8.13401 5 12C5 15.866 8.13401 19 12 19Z" fill="#0481F4"/>
                                            <path d="M12 22.96C11.45 22.96 11 22.55 11 22V21.92C11 21.37 11.45 20.92 12 20.92C12.55 20.92 13 21.37 13 21.92C13 22.47 12.55 22.96 12 22.96ZM19.14 20.14C18.88 20.14 18.63 20.04 18.43 19.85L18.3 19.72C17.91 19.33 17.91 18.7 18.3 18.31C18.69 17.92 19.32 17.92 19.71 18.31L19.84 18.44C20.23 18.83 20.23 19.46 19.84 19.85C19.65 20.04 19.4 20.14 19.14 20.14ZM4.86 20.14C4.6 20.14 4.35 20.04 4.15 19.85C3.76 19.46 3.76 18.83 4.15 18.44L4.28 18.31C4.67 17.92 5.3 17.92 5.69 18.31C6.08 18.7 6.08 19.33 5.69 19.72L5.56 19.85C5.37 20.04 5.11 20.14 4.86 20.14ZM22 13H21.92C21.37 13 20.92 12.55 20.92 12C20.92 11.45 21.37 11 21.92 11C22.47 11 22.96 11.45 22.96 12C22.96 12.55 22.55 13 22 13ZM2.08 13H2C1.45 13 1 12.55 1 12C1 11.45 1.45 11 2 11C2.55 11 3.04 11.45 3.04 12C3.04 12.55 2.63 13 2.08 13ZM19.01 5.99C18.75 5.99 18.5 5.89 18.3 5.7C17.91 5.31 17.91 4.68 18.3 4.29L18.43 4.16C18.82 3.77 19.45 3.77 19.84 4.16C20.23 4.55 20.23 5.18 19.84 5.57L19.71 5.7C19.52 5.89 19.27 5.99 19.01 5.99ZM4.99 5.99C4.73 5.99 4.48 5.89 4.28 5.7L4.15 5.56C3.76 5.17 3.76 4.54 4.15 4.15C4.54 3.76 5.17 3.76 5.56 4.15L5.69 4.28C6.08 4.67 6.08 5.3 5.69 5.69C5.5 5.89 5.24 5.99 4.99 5.99ZM12 3.04C11.45 3.04 11 2.63 11 2.08V2C11 1.45 11.45 1 12 1C12.55 1 13 1.45 13 2C13 2.55 12.55 3.04 12 3.04Z" fill="#0481F4"/>
                                        </svg>
                                    </div>
                                    <div class="d-flex justify-content-center day-part ">
                                        {{ $t('statisticsPage.afternoon') }}
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="col-3 row-statistic d-flex justify-content-center">
                            <div class="row">
                                <div class="col bg-progress p-0">
                                    <div class="col percentage">
                                        <span>80%</span>
                                    </div>

                                    <div class="load-bar">
                                        <strong class="bar" style='height:80%;'></strong>
                                    </div>
                                    <div class="sun-fog">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M19.7991 12H4.19907C3.97907 12 3.77907 11.85 3.70907 11.64C0.959073 2.55003 14.8391 -0.939966 16.4491 8.82003C18.1091 9.03003 19.4191 9.97003 20.2291 11.23C20.4391 11.56 20.1891 12 19.7991 12Z" fill="#0481F4"/>
                                            <path d="M20 15.78H4C3.59 15.78 3.25 15.44 3.25 15.03C3.25 14.62 3.59 14.28 4 14.28H20C20.41 14.28 20.75 14.62 20.75 15.03C20.75 15.44 20.41 15.78 20 15.78Z" fill="#0481F4"/>
                                            <path d="M18 18.78H6C5.59 18.78 5.25 18.44 5.25 18.03C5.25 17.62 5.59 17.28 6 17.28H18C18.41 17.28 18.75 17.62 18.75 18.03C18.75 18.44 18.41 18.78 18 18.78Z" fill="#0481F4"/>
                                            <path d="M15 21.78H9C8.59 21.78 8.25 21.44 8.25 21.03C8.25 20.62 8.59 20.28 9 20.28H15C15.41 20.28 15.75 20.62 15.75 21.03C15.75 21.44 15.41 21.78 15 21.78Z" fill="#0481F4"/>
                                        </svg>
                                    </div>
                                    <div class="d-flex justify-content-center day-part ">
                                        {{ $t('statisticsPage.evening') }}
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="col-3 row-statistic d-flex justify-content-center">
                            <div class="row">
                                <div class="col bg-progress p-0">
                                    <div class="col percentage">
                                        <span>49%</span>
                                    </div>

                                    <div class="load-bar">
                                        <strong class="bar" style='height:49%;'></strong>
                                    </div>
                                    <div class="sun-fog">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M21.5307 15.93C21.3707 15.66 20.9207 15.24 19.8007 15.44C19.1807 15.55 18.5507 15.6 17.9207 15.57C15.5907 15.47 13.4807 14.4 12.0107 12.75C10.7107 11.3 9.91068 9.40999 9.90068 7.36999C9.90068 6.22999 10.1207 5.12999 10.5707 4.08999C11.0107 3.07999 10.7007 2.54999 10.4807 2.32999C10.2507 2.09999 9.71068 1.77999 8.65068 2.21999C4.56068 3.93999 2.03068 8.03999 2.33068 12.43C2.63068 16.56 5.53068 20.09 9.37068 21.42C10.2907 21.74 11.2607 21.93 12.2607 21.97C12.4207 21.98 12.5807 21.99 12.7407 21.99C16.0907 21.99 19.2307 20.41 21.2107 17.72C21.8807 16.79 21.7007 16.2 21.5307 15.93Z" fill="#0481F4"/>
                                        </svg>
                                    </div>
                                    <div class="d-flex justify-content-center day-part ">
                                        {{ $t('statisticsPage.night') }}
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                    <!-- weekly progress row end -->

                    <div class="row">
                        <div class="col progress-b-row ">
                            <span class="progress-2-top-text">{{$t('statisticsPage.booksReadThisYear')}}</span>
                        </div>
                    </div>

                    <div class="row ms-1 me-1 mb-0">
                        <div class="col-2 d-flex justify-content-center p-1">
                            <div style="margin: auto">
                                <img src="../../images/setting/profile/img-book.png" height="78" width="53" alt="" class="img">
                            </div>
                        </div>
                        <div class="col-2 d-flex justify-content-center p-1">
                            <svg width="53" height="78" viewBox="0 0 53 78" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect width="53" height="78" rx="5" fill="#CBE5FD"/>
                                <path d="M29.48 41.956V43H23.444V42.184L26.864 38.884C27.28 38.484 27.56 38.14 27.704 37.852C27.848 37.556 27.92 37.26 27.92 36.964C27.92 36.524 27.764 36.184 27.452 35.944C27.148 35.696 26.708 35.572 26.132 35.572C25.204 35.572 24.488 35.876 23.984 36.484L23.168 35.776C23.496 35.376 23.924 35.064 24.452 34.84C24.988 34.616 25.584 34.504 26.24 34.504C27.12 34.504 27.82 34.716 28.34 35.14C28.86 35.556 29.12 36.124 29.12 36.844C29.12 37.292 29.024 37.716 28.832 38.116C28.64 38.516 28.276 38.972 27.74 39.484L25.172 41.956H29.48Z" fill="#0481F4"/>
                            </svg>
                        </div>
                        <div class="col-2 d-flex justify-content-center p-1 ">
                            <svg width="53" height="78" viewBox="0 0 53 78" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect width="53" height="78" rx="5" fill="#CBE5FD"/>
                                <path d="M29.48 41.956V43H23.444V42.184L26.864 38.884C27.28 38.484 27.56 38.14 27.704 37.852C27.848 37.556 27.92 37.26 27.92 36.964C27.92 36.524 27.764 36.184 27.452 35.944C27.148 35.696 26.708 35.572 26.132 35.572C25.204 35.572 24.488 35.876 23.984 36.484L23.168 35.776C23.496 35.376 23.924 35.064 24.452 34.84C24.988 34.616 25.584 34.504 26.24 34.504C27.12 34.504 27.82 34.716 28.34 35.14C28.86 35.556 29.12 36.124 29.12 36.844C29.12 37.292 29.024 37.716 28.832 38.116C28.64 38.516 28.276 38.972 27.74 39.484L25.172 41.956H29.48Z" fill="#0481F4"/>
                            </svg>
                        </div>
                        <div class="col-2 d-flex justify-content-center p-1">
                            <svg width="53" height="78" viewBox="0 0 53 78" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect width="53" height="78" rx="5" fill="#CBE5FD"/>
                                <path d="M29.48 41.956V43H23.444V42.184L26.864 38.884C27.28 38.484 27.56 38.14 27.704 37.852C27.848 37.556 27.92 37.26 27.92 36.964C27.92 36.524 27.764 36.184 27.452 35.944C27.148 35.696 26.708 35.572 26.132 35.572C25.204 35.572 24.488 35.876 23.984 36.484L23.168 35.776C23.496 35.376 23.924 35.064 24.452 34.84C24.988 34.616 25.584 34.504 26.24 34.504C27.12 34.504 27.82 34.716 28.34 35.14C28.86 35.556 29.12 36.124 29.12 36.844C29.12 37.292 29.024 37.716 28.832 38.116C28.64 38.516 28.276 38.972 27.74 39.484L25.172 41.956H29.48Z" fill="#0481F4"/>
                            </svg>
                        </div>
                        <div class="col-2 d-flex justify-content-center p-1">
                            <svg width="53" height="78" viewBox="0 0 53 78" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect width="53" height="78" rx="5" fill="#CBE5FD"/>
                                <path d="M29.48 41.956V43H23.444V42.184L26.864 38.884C27.28 38.484 27.56 38.14 27.704 37.852C27.848 37.556 27.92 37.26 27.92 36.964C27.92 36.524 27.764 36.184 27.452 35.944C27.148 35.696 26.708 35.572 26.132 35.572C25.204 35.572 24.488 35.876 23.984 36.484L23.168 35.776C23.496 35.376 23.924 35.064 24.452 34.84C24.988 34.616 25.584 34.504 26.24 34.504C27.12 34.504 27.82 34.716 28.34 35.14C28.86 35.556 29.12 36.124 29.12 36.844C29.12 37.292 29.024 37.716 28.832 38.116C28.64 38.516 28.276 38.972 27.74 39.484L25.172 41.956H29.48Z" fill="#0481F4"/>
                            </svg>
                        </div>
                        <div class="col-2 d-flex justify-content-center p-1">
                            <svg width="53" height="78" viewBox="0 0 53 78" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect width="53" height="78" rx="5" fill="#CBE5FD"/>
                                <path d="M29.48 41.956V43H23.444V42.184L26.864 38.884C27.28 38.484 27.56 38.14 27.704 37.852C27.848 37.556 27.92 37.26 27.92 36.964C27.92 36.524 27.764 36.184 27.452 35.944C27.148 35.696 26.708 35.572 26.132 35.572C25.204 35.572 24.488 35.876 23.984 36.484L23.168 35.776C23.496 35.376 23.924 35.064 24.452 34.84C24.988 34.616 25.584 34.504 26.24 34.504C27.12 34.504 27.82 34.716 28.34 35.14C28.86 35.556 29.12 36.124 29.12 36.844C29.12 37.292 29.024 37.716 28.832 38.116C28.64 38.516 28.276 38.972 27.74 39.484L25.172 41.956H29.48Z" fill="#0481F4"/>
                            </svg>
                        </div>
                    </div>
                    <div class="row mt-2 ms-1 me-1 mb-3">
                        <div class="col-2 d-flex justify-content-center p-1">
                            <svg width="53" height="78" viewBox="0 0 53 78" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect width="53" height="78" rx="5" fill="#CBE5FD"/>
                                <path d="M29.48 41.956V43H23.444V42.184L26.864 38.884C27.28 38.484 27.56 38.14 27.704 37.852C27.848 37.556 27.92 37.26 27.92 36.964C27.92 36.524 27.764 36.184 27.452 35.944C27.148 35.696 26.708 35.572 26.132 35.572C25.204 35.572 24.488 35.876 23.984 36.484L23.168 35.776C23.496 35.376 23.924 35.064 24.452 34.84C24.988 34.616 25.584 34.504 26.24 34.504C27.12 34.504 27.82 34.716 28.34 35.14C28.86 35.556 29.12 36.124 29.12 36.844C29.12 37.292 29.024 37.716 28.832 38.116C28.64 38.516 28.276 38.972 27.74 39.484L25.172 41.956H29.48Z" fill="#0481F4"/>
                            </svg>
                        </div>
                        <div class="col-2 d-flex justify-content-center p-1">
                            <svg width="53" height="78" viewBox="0 0 53 78" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect width="53" height="78" rx="5" fill="#CBE5FD"/>
                                <path d="M29.48 41.956V43H23.444V42.184L26.864 38.884C27.28 38.484 27.56 38.14 27.704 37.852C27.848 37.556 27.92 37.26 27.92 36.964C27.92 36.524 27.764 36.184 27.452 35.944C27.148 35.696 26.708 35.572 26.132 35.572C25.204 35.572 24.488 35.876 23.984 36.484L23.168 35.776C23.496 35.376 23.924 35.064 24.452 34.84C24.988 34.616 25.584 34.504 26.24 34.504C27.12 34.504 27.82 34.716 28.34 35.14C28.86 35.556 29.12 36.124 29.12 36.844C29.12 37.292 29.024 37.716 28.832 38.116C28.64 38.516 28.276 38.972 27.74 39.484L25.172 41.956H29.48Z" fill="#0481F4"/>
                            </svg>
                        </div>
                        <div class="col-2 d-flex justify-content-center p-1">
                            <svg width="53" height="78" viewBox="0 0 53 78" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect width="53" height="78" rx="5" fill="#CBE5FD"/>
                                <path d="M29.48 41.956V43H23.444V42.184L26.864 38.884C27.28 38.484 27.56 38.14 27.704 37.852C27.848 37.556 27.92 37.26 27.92 36.964C27.92 36.524 27.764 36.184 27.452 35.944C27.148 35.696 26.708 35.572 26.132 35.572C25.204 35.572 24.488 35.876 23.984 36.484L23.168 35.776C23.496 35.376 23.924 35.064 24.452 34.84C24.988 34.616 25.584 34.504 26.24 34.504C27.12 34.504 27.82 34.716 28.34 35.14C28.86 35.556 29.12 36.124 29.12 36.844C29.12 37.292 29.024 37.716 28.832 38.116C28.64 38.516 28.276 38.972 27.74 39.484L25.172 41.956H29.48Z" fill="#0481F4"/>
                            </svg>
                        </div>
                        <div class="col-2 d-flex justify-content-center p-1">
                            <svg width="53" height="78" viewBox="0 0 53 78" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect width="53" height="78" rx="5" fill="#CBE5FD"/>
                                <path d="M29.48 41.956V43H23.444V42.184L26.864 38.884C27.28 38.484 27.56 38.14 27.704 37.852C27.848 37.556 27.92 37.26 27.92 36.964C27.92 36.524 27.764 36.184 27.452 35.944C27.148 35.696 26.708 35.572 26.132 35.572C25.204 35.572 24.488 35.876 23.984 36.484L23.168 35.776C23.496 35.376 23.924 35.064 24.452 34.84C24.988 34.616 25.584 34.504 26.24 34.504C27.12 34.504 27.82 34.716 28.34 35.14C28.86 35.556 29.12 36.124 29.12 36.844C29.12 37.292 29.024 37.716 28.832 38.116C28.64 38.516 28.276 38.972 27.74 39.484L25.172 41.956H29.48Z" fill="#0481F4"/>
                            </svg>
                        </div>
                        <div class="col-2 d-flex justify-content-center p-1">
                            <svg width="53" height="78" viewBox="0 0 53 78" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect width="53" height="78" rx="5" fill="#CBE5FD"/>
                                <path d="M29.48 41.956V43H23.444V42.184L26.864 38.884C27.28 38.484 27.56 38.14 27.704 37.852C27.848 37.556 27.92 37.26 27.92 36.964C27.92 36.524 27.764 36.184 27.452 35.944C27.148 35.696 26.708 35.572 26.132 35.572C25.204 35.572 24.488 35.876 23.984 36.484L23.168 35.776C23.496 35.376 23.924 35.064 24.452 34.84C24.988 34.616 25.584 34.504 26.24 34.504C27.12 34.504 27.82 34.716 28.34 35.14C28.86 35.556 29.12 36.124 29.12 36.844C29.12 37.292 29.024 37.716 28.832 38.116C28.64 38.516 28.276 38.972 27.74 39.484L25.172 41.956H29.48Z" fill="#0481F4"/>
                            </svg>
                        </div>
                        <div class="col-2 d-flex justify-content-center p-1">
                            <svg width="53" height="78" viewBox="0 0 53 78" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect width="53" height="78" rx="5" fill="#CBE5FD"/>
                                <path d="M29.48 41.956V43H23.444V42.184L26.864 38.884C27.28 38.484 27.56 38.14 27.704 37.852C27.848 37.556 27.92 37.26 27.92 36.964C27.92 36.524 27.764 36.184 27.452 35.944C27.148 35.696 26.708 35.572 26.132 35.572C25.204 35.572 24.488 35.876 23.984 36.484L23.168 35.776C23.496 35.376 23.924 35.064 24.452 34.84C24.988 34.616 25.584 34.504 26.24 34.504C27.12 34.504 27.82 34.716 28.34 35.14C28.86 35.556 29.12 36.124 29.12 36.844C29.12 37.292 29.024 37.716 28.832 38.116C28.64 38.516 28.276 38.972 27.74 39.484L25.172 41.956H29.48Z" fill="#0481F4"/>
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
            <!--block-2-row start-->

            <!--footer row begin -->
            <Footer/>
            <!--footer row end -->

        </div> <!--all col-12 -->
    </div>
    <!--all one row end -->
</template>

<script>
import Footer from "../../footer/footer";
import Button from "../../button/Button";
export default {
    name: "progress-audio",
    components: {Button, Footer},
    methods: {
        toPage() {
            this.$router.push('/edit-aim')
        },
        disable() {
            this.$root.showOverlay = false
        },
    },
    mounted() {
        this.$root.showOverlay = true
        setTimeout(this.disable, 1000)
    }
}
</script>

<style scoped>
.main-row {
    font-family: 'Montserrat', 'Rubik', sans-serif !important;
    background-color: var(--color-container) !important;
}

.bg-light {
    background-color: var(--color-block) !important;
}

.svg > path {
    stroke: var(--color-text);
}

.week-day-row {
    margin-left: -27px !important;
    margin-top: 21px;
    padding: 0 10px 0 10px;
}

.header-row {
    margin-top: 62px;
    color: var(--color-text);
}

.button-row {
    background-color: var(--bg-button-row);
    margin-top: 41px;
    border-radius: 6px;
}

.button-row-2 {
    margin-top: 12px;
    border-radius: 6px;
    background-color: var(--bg-button-row);
}

.book-button, .audio-button, .for-day, .for-month, .for-year {
    height: 31px;
    width: 100%;
    color: var(--color-textGray-To-white);
    background-color: var(--bg-button-row);
    border: none;
    margin: 5px 0 5px 0;
    font-size: 12px;
}

.audio-button {
    color: var(--blueToWhite);
    border-radius: 4px;
}

.for-day:focus, .for-month:focus, .for-year:focus {
    color: var(--blueToWhite);
    background-color: var(--btn-focus-bg);
    border-radius: 4px;
}

.profile-name {
    margin-top: 29px;
    font-weight: 500;
    font-style: normal;
    font-size: 24px;
    line-height: 30px;
    color: var(--color-text);
}

.account {
    font-weight: 500;
    font-style: normal;
    font-size: 12px;
    line-height: 15px;
}

.account {
    color: var(--color-textGray-To-white);
    margin-top: 5px;
}

.row-7 {
    margin-top: -40px;
}

.your-goal-text-1 {
    font-size: 14px;
    color: #0481F4;
    line-height: 17px;
    font-weight: 500;
}

.your-goal-text-2 {
    font-size: 12px;
    color: var(--color-textGray-To-white);
    font-weight: 500;
    margin-top: 4px;
}

.first-block {
    border-radius: 0 0 16px 16px;
}

.statistic-text {
    margin: 20px 0 16px 20px;
    color: var(--color-text);
}

.second-block {
    width: 92% !important;
    border-radius: 12px;
    margin-bottom: 110px;
}

.vl {
    border-left: 1px solid #C3E2FF;
    height: 75px;
    margin-top: 7px;
}

.vl-2 {
    border-left: 1px solid #C3E2FF;
    height: 46px;
}

.read-text {
    font-size: 10px;
    padding-bottom: 22px;
    line-height: 12px;
    color: var(--color-text);
}

.center-vl {
    min-width: 10px;
}

.progress2-row {
    margin-top: 31px;
}

.books-count, .page-count {
    font-style: normal;
    font-weight: 500;
    font-size: 30px;
    line-height: 37px;
    color: var(--blueToWhite);
}

.books-count-row {
    min-width: 25px;
}

.page-count-row {
    min-width: 30px;
}

.book-text, .page-text {
    font-weight: 500;
    font-size: 10px;
    line-height: 12px;
    color: var(--color-textGray-To-white);
}

.book-time-page-text {
    font-weight: 500;
    font-size: 10px;
    line-height: 12px;
    color: var(--color-textGray-To-white);
    text-align: center;
    min-width: 65px;
}

.hr-bottom-1 {
    border-bottom: 1px solid #C3E2FF;
    width: 87%;
    margin-top: 30px;
}

.hr-bottom-2 {
    margin: 23px 0 18px 0;
    border-bottom: 1px solid #C3E2FF;
    width: 85%;
}

.week-day {
    margin: 13px 0 0 -23.8px;
    color: #0481F4;
    font-size: 12px;
}

.load-bar {
    width: 3px;
    height:150px;
    background-color: #97CAFB;
    position:relative;
    border-radius: 3px
}

.bar {
    width:100%;
    display:block;
    font-size:12px;
    background-color: #0481F4;
    position:absolute;
    bottom:0;
    border-radius: 3px;
}

.bg-progress {
    max-width: 55px;
    border-radius: 10px;
    padding: 10px 26px 9px 26px !important;
    background-color: var(--bg-button-row);
}

.sun-fog {
    margin-left: -11px !important;
    margin-top: 11px !important;
}

.percentage {
    font-weight: 500;
    font-size: 12px;
    line-height: 15px;
    color: var(--color-text);
    margin-left: -11px;
    margin-bottom: 7px;
}

.row-statistic {
    margin-top: 14px;
}

.day-part {
    padding-top: 11px;
    font-weight: 500;
    font-size: 12px;
    line-height: 15px;
    color: var(--color-text);
}

.progress-b-row {
    margin: 34px 0 21px 0;
}

.progress-2-top-text {
    color: var(--color-text);
}

.img {
    width: 100% !important;
    height: auto !important;
}

</style>

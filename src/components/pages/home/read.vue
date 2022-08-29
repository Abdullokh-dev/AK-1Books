<template>
    <div class="row">
        <div class="col">

            <!--boshidagi 3ta iconka 1-qator boshlanidi -->
            <div class="row">
                <div class="col fixed-top">
                    <div class="row first-row">
                        <div class="col-2 back-button">
                            <go-back-button/>
                        </div>
                        <div class="col-8 d-flex justify-content-center">
                            <span class="book-name">Abdullokh_dev</span>
                        </div>
                        <div class="col-2 d-flex justify-content-end p-0 pe-4">
                            <svg width="30" height="30" viewBox="0 0 30 30" fill="none"
                                 xmlns="http://www.w3.org/2000/svg"
                                 class="saved">
                                <path class="archive"
                                      d="M21.0254 2.38751H8.97539C6.32539 2.38751 4.15039 4.56251 4.15039 7.21251V24.825C4.15039
                                    27.075 5.76289 28.025 7.73789 26.9375L13.8379 23.55C14.4879 23.1875 15.5379 23.1875 16.1754
                                    23.55L22.2754 26.9375C24.2504 28.0375 25.8629 27.0875 25.8629 24.825V7.21251C25.8504
                                    4.56251 23.6879 2.38751 21.0254 2.38751ZM19.5254 11.2875L14.5254 16.2875C14.3379 16.475
                                    14.1004 16.5625 13.8629 16.5625C13.6254 16.5625 13.3879 16.475 13.2004 16.2875L11.3254
                                    14.4125C10.9629 14.05 10.9629 13.45 11.3254 13.0875C11.6879 12.725 12.2879 12.725 12.6504
                                    13.0875L13.8629 14.3L18.2004 9.96251C18.5629 9.60001 19.1629 9.60001 19.5254
                                    9.96251C19.8879 10.325 19.8879 10.925 19.5254 11.2875Z"
                                      fill="white"
                                />
                            </svg>
                        </div>
                    </div>

                    <div class="row bg-book-author-row">
                        <div class="col-2"></div>
                        <div class="col-8 d-flex justify-content-center">
                            <span class="book-author">
                                Abduloh
                            </span>
                        </div>
                        <div class="col-2"></div>
                    </div>
                </div>
            </div>
            <!--boshidagi 3ta iconka 1-qator boshlanidi -->

            <div class="row scrollable-row">
                <div class="col book-text d-flex justify-content-center">
                    <span class="book-text text-break"
                          style="font-size: 20px; line-height: 20px; text-align: justify; position: absolute;">
                    </span>
                        Web developer with more than 2 years experience
                    <span class="book-text text-break"
                          style="font-size: 20px; line-height: 20px; text-align: justify; position: absolute;">
                    </span>
                </div>
            </div>

            <div class="row">
                <div class="col fixed-bottom">
                    <div class="row p-0 mt-2">
                        <div class="col-1 number-1 d-flex justify-content-end p-0">
                            {{ value }}
                        </div>
                        <div class="col-10">
                            <div class="wrapper">
                                <range-slider class="slider" min="1" :max=pageNumber step="1" v-model="value" id="seek">
                                </range-slider>
                            </div>
                        </div>
                        <div class="col-1 number-2 d-flex justify-content-start p-0">
                            {{ pageNumber }}
                        </div>
                    </div>

                    <div class="row pt-3 last-row">
                        <div class="col d-flex justify-content-center">
                            <svg
                                @click="$emit('darkTheme'); changeToDark()"
                                style="cursor: pointer"
                                v-if="this.theme === 'light'"
                                width="26" height="26" viewBox="0 0 26 26" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M16.5318 23.8334C16.4668 23.8334 16.3909 23.8226 16.3259 23.8009C14.1484 23.1834 11.8626 23.1834 9.68508 23.8009C9.28425 23.9092 8.86175 23.6817 8.75342 23.2809C8.63425 22.8801 8.87259 22.4576 9.27342 22.3492C11.7218 21.6559 14.3001 21.6559 16.7484 22.3492C17.1493 22.4684 17.3876 22.8801 17.2684 23.2809C17.1601 23.6167 16.8568 23.8334 16.5318 23.8334Z"
                                    fill="#97CAFB"/>
                                <path
                                    d="M20.8108 6.89001C19.6841 4.61501 17.5066 2.93585 14.9824 2.38335C12.3391 1.79835 9.63078 2.42668 7.56161 4.09501C5.48161 5.75251 4.30078 8.23335 4.30078 10.8875C4.30078 13.6933 5.97995 16.6292 8.51495 18.33V19.2292C8.50411 19.5325 8.49328 19.9983 8.86161 20.3775C9.24078 20.7675 9.80411 20.8108 10.2483 20.8108H15.8058C16.3908 20.8108 16.8349 20.6483 17.1383 20.345C17.5499 19.9225 17.5391 19.3808 17.5283 19.0883V18.33C20.8866 16.0658 22.9991 11.2883 20.8108 6.89001ZM14.8633 12.5883L13.7041 14.6033C13.5524 14.8633 13.2816 15.015 12.9999 15.015C12.8591 15.015 12.7183 14.9825 12.5991 14.9067C12.2091 14.6792 12.0791 14.1808 12.2958 13.8017L13.2166 12.1983H12.3066C11.7649 12.1983 11.3208 11.96 11.0824 11.5592C10.8441 11.1475 10.8658 10.6492 11.1366 10.1725L12.2958 8.15751C12.5233 7.76751 13.0216 7.63751 13.4008 7.85418C13.7908 8.08168 13.9208 8.58001 13.7041 8.95918L12.7833 10.5625H13.6933C14.2349 10.5625 14.6791 10.8008 14.9174 11.2017C15.1558 11.6133 15.1341 12.1225 14.8633 12.5883Z"
                                    fill="#97CAFB"/>
                            </svg>

                            <svg v-else
                                 @click="$emit('lightTheme'); changeToLight()"
                                 style="cursor: pointer"
                                 width="26" height="26" viewBox="0 0 26 26" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M16.5318 23.8334C16.4668 23.8334 16.3909 23.8226 16.3259 23.8009C14.1484 23.1834 11.8626 23.1834 9.68508 23.8009C9.28425 23.9092 8.86175 23.6817 8.75342 23.2809C8.63425 22.8801 8.87259 22.4576 9.27342 22.3492C11.7218 21.6559 14.3001 21.6559 16.7484 22.3492C17.1493 22.4684 17.3876 22.8801 17.2684 23.2809C17.1601 23.6167 16.8568 23.8334 16.5318 23.8334Z"
                                    fill="#97CAFB"/>
                                <path
                                    d="M18.0158 3.70495L5.94745 15.7733C4.90745 14.2999 4.30078 12.5666 4.30078 10.8875C4.30078 8.23328 5.48161 5.75245 7.55078 4.08412C9.61995 2.41578 12.3283 1.79828 14.9824 2.38328C16.0766 2.62162 17.1058 3.07662 18.0158 3.70495Z"
                                    fill="#97CAFB"/>
                                <path
                                    d="M17.5168 18.3301V19.0884C17.5277 19.3701 17.5493 19.9117 17.1268 20.3451C16.8235 20.6484 16.3793 20.8109 15.7943 20.8109H10.2368C9.79266 20.8109 9.22932 20.7567 8.85016 20.3776C8.49266 19.9984 8.50349 19.5326 8.51432 19.2292V18.3301C8.02682 18.0051 7.57182 17.6367 7.16016 17.2251L19.4452 4.94006C19.9868 5.51423 20.4527 6.17506 20.8102 6.89006C22.9985 11.2884 20.886 16.0659 17.5168 18.3301Z"
                                    fill="#97CAFB"/>
                                <path
                                    d="M4.52854 20.6701C4.32271 20.6701 4.11688 20.5942 3.95438 20.4317C3.64021 20.1176 3.64021 19.5976 3.95438 19.2834L21.1252 2.11258C21.4394 1.79841 21.9594 1.79841 22.2735 2.11258C22.5877 2.42674 22.5877 2.94674 22.2735 3.26091L5.10271 20.4317C4.94021 20.5942 4.73437 20.6701 4.52854 20.6701Z"
                                    fill="#97CAFB"/>
                            </svg>

                            <button type="button" class="archive-offcanvas message-icon" data-bs-toggle="offcanvas"
                                    data-bs-target="#offcanvasBottom2" aria-controls="offcanvasBottom">
                                <svg width="27" height="26" viewBox="0 0 27 26" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                          d="M2.66602 7.57246V14.0508V15.1341C2.66602 18.1133 5.09268 20.5291 8.08268 20.5291H9.70768C10.011 20.5291 10.401 20.7241 10.5743 20.9625L12.1993 23.1183C12.9143 24.0716 14.0843 24.0716 14.7993 23.1183L16.4243 20.9625C16.6302 20.6916 16.9552 20.5291 17.291 20.5291H18.916C21.906 20.5291 24.3327 18.1133 24.3327 15.1341V7.57246C24.3327 4.58246 21.906 2.16663 18.916 2.16663H8.08268C5.09268 2.16663 2.66602 4.58246 2.66602 7.57246ZM8.0827 11.9167C8.0827 12.5125 8.55937 13 9.16604 13C9.7727 13 10.2494 12.5125 10.2494 11.9167C10.2494 11.3209 9.76187 10.8334 9.16604 10.8334C8.5702 10.8334 8.0827 11.3209 8.0827 11.9167ZM13.4994 13C12.8927 13 12.416 12.5125 12.416 11.9167C12.416 11.3209 12.9035 10.8334 13.4994 10.8334C14.0952 10.8334 14.5827 11.3209 14.5827 11.9167C14.5827 12.5125 14.106 13 13.4994 13ZM17.8327 13C17.226 13 16.7494 12.5125 16.7494 11.9167C16.7494 11.3209 17.2369 10.8334 17.8327 10.8334C18.4285 10.8334 18.916 11.3209 18.916 11.9167C18.916 12.5125 18.4394 13 17.8327 13Z"
                                          fill="#97CAFB"/>
                                </svg>
                            </button>

                            <div class="offcanvas offcanvas-bottom offcanvas-bottom2" tabindex="-1"
                                 id="offcanvasBottom2"
                                 aria-labelledby="offcanvasBottomLabel">
                                <div class="offcanvas-body small" ref="scrollToMe">
                                    <div class="row">
                                        <div class="col all chat-box">

                                            <!-- top close btn -->
                                            <div class="row">
                                                <div class="col line d-flex justify-content-center">
                                                    <button type="button" class="swiper2" data-bs-dismiss="offcanvas"
                                                            aria-label="Close">
                                                        <svg width="104" height="3" viewBox="0 0 104 3" fill="none"
                                                             xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M1 1.5H102.5" stroke="#F4F6FB" stroke-width="2"
                                                                  stroke-linecap="round"/>
                                                        </svg>
                                                    </button>
                                                </div>
                                            </div>
                                            <!-- top close btn end-->
                                            <div>
                                                <div class="row d-flex justify-content-center swiper2-last-row">
                                                    <div class="col-11 swiper2-input-border">

                                                    </div>
                                                </div>
                                            </div>

                                            <div class="row fixed-bottom">
                                                <div class="col">

                                                    <div class="row chat-bottom-row pb-3">
                                                        <div class="col input-box">
                                                            <input type="text" class="form-control input" :placeholder="$t('message')">
                                                        </div>
                                                        <div class="col d-flex justify-content-center send-btn">
                                                            <svg width="32" height="32" viewBox="0 0 32 32" fill="none"
                                                                 xmlns="http://www.w3.org/2000/svg">
                                                                <path
                                                                    d="M24.0937 11.3467L12.6804 5.64C5.01369 1.8 1.86702 4.94666 5.70702 12.6133L6.86702 14.9333C7.20035 15.6133 7.20035 16.4 6.86702 17.08L5.70702 19.3867C1.86702 27.0533 5.00035 30.2 12.6804 26.36L24.0937 20.6533C29.2137 18.0933 29.2137 13.9067 24.0937 11.3467ZM19.787 17H12.587C12.0404 17 11.587 16.5467 11.587 16C11.587 15.4533 12.0404 15 12.587 15H19.787C20.3337 15 20.787 15.4533 20.787 16C20.787 16.5467 20.3337 17 19.787 17Z"
                                                                    fill="#0481F4"/>
                                                            </svg>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <button type="button" class="button-offcanvas" data-bs-toggle="offcanvas"
                                    data-bs-target="#offcanvasBottom" aria-controls="offcanvasBottom">
                                <svg width="26" height="26" viewBox="0 0 26 26" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M21.7743 9.98835C19.8135 9.98835 19.0118 8.60168 19.9868 6.90085C20.5502 5.91501 20.2143 4.65835 19.2285 4.09501L17.3543 3.02251C16.4985 2.51335 15.3935 2.81668 14.8843 3.67251L14.7652 3.87835C13.7902 5.57918 12.1868 5.57918 11.201 3.87835L11.0818 3.67251C10.5943 2.81668 9.48935 2.51335 8.63351 3.02251L6.75935 4.09501C5.77351 4.65835 5.43768 5.92585 6.00102 6.91168C6.98685 8.60168 6.18518 9.98835 4.22435 9.98835C3.09768 9.98835 2.16602 10.9092 2.16602 12.0467V13.9533C2.16602 15.08 3.08685 16.0117 4.22435 16.0117C6.18518 16.0117 6.98685 17.3983 6.00102 19.0992C5.43768 20.085 5.77351 21.3417 6.75935 21.905L8.63351 22.9775C9.48935 23.4867 10.5943 23.1833 11.1035 22.3275L11.2227 22.1217C12.1977 20.4208 13.801 20.4208 14.7868 22.1217L14.906 22.3275C15.4152 23.1833 16.5202 23.4867 17.376 22.9775L19.2502 21.905C20.236 21.3417 20.5718 20.0742 20.0085 19.0992C19.0227 17.3983 19.8243 16.0117 21.7852 16.0117C22.9118 16.0117 23.8435 15.0908 23.8435 13.9533V12.0467C23.8327 10.92 22.9118 9.98835 21.7743 9.98835ZM12.9993 16.5208C11.0602 16.5208 9.47852 14.9392 9.47852 13C9.47852 11.0608 11.0602 9.47918 12.9993 9.47918C14.9385 9.47918 16.5202 11.0608 16.5202 13C16.5202 14.9392 14.9385 16.5208 12.9993 16.5208Z"
                                        fill="#97CAFB"/>
                                </svg>
                            </button>

                            <div class="offcanvas offcanvas-bottom" tabindex="-1" id="offcanvasBottom"
                                 aria-labelledby="offcanvasBottomLabel">

                                <div class="offcanvas-body small">
                                    <div class="row">
                                        <div class="col all">

                                            <!-- top close btn -->
                                            <div class="row">
                                                <div class="col line d-flex justify-content-center">
                                                    <button type="button" class="swiper" data-bs-dismiss="offcanvas"
                                                            aria-label="Close">
                                                        <svg width="104" height="3" viewBox="0 0 104 3" fill="none"
                                                             xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M1 1.5H102.5" stroke="#F4F6FB" stroke-width="2"
                                                                  stroke-linecap="round"/>
                                                        </svg>
                                                    </button>
                                                </div>
                                            </div>
                                            <!-- top close btn end-->

                                            <div class="row">
                                                <div class="col text-1 d-flex justify-content-center">
                                                    {{$t('settings')}}
                                                </div>
                                            </div>

                                            <div class="row">
                                                <div class="col-2 logo-width">
                                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                                         xmlns="http://www.w3.org/2000/svg">
                                                        <path class="blueToWhite"
                                                              d="M12 19C15.866 19 19 15.866 19 12C19 8.13401 15.866 5 12 5C8.13401 5 5 8.13401 5 12C5 15.866 8.13401 19 12 19Z"
                                                              fill="#0481F4"/>
                                                        <path class="blueToWhite"
                                                              d="M12 22.96C11.45 22.96 11 22.55 11 22V21.92C11 21.37 11.45 20.92 12 20.92C12.55 20.92 13 21.37 13 21.92C13 22.47 12.55 22.96 12 22.96ZM19.14 20.14C18.88 20.14 18.63 20.04 18.43 19.85L18.3 19.72C17.91 19.33 17.91 18.7 18.3 18.31C18.69 17.92 19.32 17.92 19.71 18.31L19.84 18.44C20.23 18.83 20.23 19.46 19.84 19.85C19.65 20.04 19.4 20.14 19.14 20.14ZM4.86 20.14C4.6 20.14 4.35 20.04 4.15 19.85C3.76 19.46 3.76 18.83 4.15 18.44L4.28 18.31C4.67 17.92 5.3 17.92 5.69 18.31C6.08 18.7 6.08 19.33 5.69 19.72L5.56 19.85C5.37 20.04 5.11 20.14 4.86 20.14ZM22 13H21.92C21.37 13 20.92 12.55 20.92 12C20.92 11.45 21.37 11 21.92 11C22.47 11 22.96 11.45 22.96 12C22.96 12.55 22.55 13 22 13ZM2.08 13H2C1.45 13 1 12.55 1 12C1 11.45 1.45 11 2 11C2.55 11 3.04 11.45 3.04 12C3.04 12.55 2.63 13 2.08 13ZM19.01 5.99C18.75 5.99 18.5 5.89 18.3 5.7C17.91 5.31 17.91 4.68 18.3 4.29L18.43 4.16C18.82 3.77 19.45 3.77 19.84 4.16C20.23 4.55 20.23 5.18 19.84 5.57L19.71 5.7C19.52 5.89 19.27 5.99 19.01 5.99ZM4.99 5.99C4.73 5.99 4.48 5.89 4.28 5.7L4.15 5.56C3.76 5.17 3.76 4.54 4.15 4.15C4.54 3.76 5.17 3.76 5.56 4.15L5.69 4.28C6.08 4.67 6.08 5.3 5.69 5.69C5.5 5.89 5.24 5.99 4.99 5.99ZM12 3.04C11.45 3.04 11 2.63 11 2.08V2C11 1.45 11.45 1 12 1C12.55 1 13 1.45 13 2C13 2.55 12.55 3.04 12 3.04Z"
                                                              fill="#0481F4"/>
                                                    </svg>
                                                </div>
                                                <div class="col text-2 p-0">
                                                    {{$t('brightness')}}
                                                </div>
                                            </div>

                                            <div class="row">
                                                <div class="col mt-1">
                                                    <range-slider class="slider" min="0" max="100" value="40">
                                                    </range-slider>
                                                </div>
                                            </div>

                                            <!-- hr row start -->
                                            <div class="row d-flex justify-content-center ">
                                                <div class="col  hr-width">
                                                    <div class="hr"></div>
                                                </div>
                                            </div>
                                            <!-- hr row end -->

                                            <div class="row mt-3">
                                                <div class="col-3 logo-width">
                                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                                         xmlns="http://www.w3.org/2000/svg">
                                                        <path class="blueToWhite"
                                                              d="M20.95 4.13C20.66 3.71 20.29 3.34 19.87 3.05C18.92 2.36 17.68 2 16.19 2H7.81C7.61 2 7.41 2.01 7.22 2.03C3.94 2.24 2 4.37 2 7.81V16.19C2 17.68 2.36 18.92 3.05 19.87C3.34 20.29 3.71 20.66 4.13 20.95C4.95 21.55 5.99 21.9 7.22 21.98C7.41 21.99 7.61 22 7.81 22H16.19C19.83 22 22 19.83 22 16.19V7.81C22 6.32 21.64 5.08 20.95 4.13ZM11.39 15.88H8.52C8.11 15.88 7.77 15.54 7.77 15.13C7.77 14.72 8.11 14.38 8.52 14.38H9.52V7.91H6.95C6.84 7.91 6.75 8 6.75 8.11V8.89C6.75 9.3 6.41 9.63 6 9.63C5.59 9.63 5.25 9.3 5.25 8.88V8.1C5.25 7.16 6.01 6.4 6.95 6.4H13.59C14.53 6.4 15.29 7.16 15.29 8.1V8.88C15.29 9.29 14.95 9.63 14.54 9.63C14.13 9.63 13.79 9.29 13.79 8.88V8.1C13.79 7.99 13.7 7.9 13.59 7.9H11.02V14.38H11.39C11.8 14.38 12.14 14.72 12.14 15.13C12.14 15.54 11.8 15.88 11.39 15.88ZM18.75 12.23C18.75 12.64 18.41 12.98 18 12.98C17.59 12.98 17.25 12.64 17.25 12.23V11.9H15.7V16.1H16.05C16.46 16.1 16.8 16.44 16.8 16.85C16.8 17.26 16.46 17.6 16.05 17.6H13.85C13.44 17.6 13.1 17.26 13.1 16.85C13.1 16.44 13.44 16.1 13.85 16.1H14.2V11.9H13.72C13.31 11.9 12.97 11.56 12.97 11.15C12.97 10.74 13.31 10.4 13.72 10.4H17.32C18.11 10.4 18.75 11.04 18.75 11.83V12.23Z"
                                                              fill="#0481F4"/>
                                                    </svg>
                                                </div>
                                                <div class="col text-2 p-0">
                                                    {{$t('fontSize')}}
                                                </div>
                                            </div>

                                            <div class="row">
                                                <div class="col">
                                                    <range-slider class="slider" min="0" max="100" value="30">
                                                    </range-slider>
                                                </div>
                                            </div>

                                            <!-- hr row start -->
                                            <div class="row d-flex justify-content-center ">
                                                <div class="col  hr-width">
                                                    <div class="hr"></div>
                                                </div>
                                            </div>
                                            <!-- hr row end -->

                                            <div class="row mt-3">
                                                <div class="col-3 logo-width">
                                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                                         xmlns="http://www.w3.org/2000/svg">
                                                        <path class="blueToWhite"
                                                              d="M16.24 2H7.76C5 2 4 3 4 5.81V18.19C4 21 5 22 7.76 22H16.23C19 22 20 21 20 18.19V5.81C20 3 19 2 16.24 2ZM12 19.3C11.04 19.3 10.25 18.51 10.25 17.55C10.25 16.59 11.04 15.8 12 15.8C12.96 15.8 13.75 16.59 13.75 17.55C13.75 18.51 12.96 19.3 12 19.3ZM14 6.25H10C9.59 6.25 9.25 5.91 9.25 5.5C9.25 5.09 9.59 4.75 10 4.75H14C14.41 4.75 14.75 5.09 14.75 5.5C14.75 5.91 14.41 6.25 14 6.25Z"
                                                              fill="#0481F4"/>
                                                    </svg>
                                                </div>
                                                <div class="col text-2 p-0">
                                                    {{ $t('fullScreen') }}
                                                </div>
                                                <div class="col d-flex justify-content-end p-0">
                                                    <div class="form-check form-switch">
                                                        <input class="form-check-input" type="checkbox" role="switch">
                                                    </div>
                                                </div>
                                            </div>

                                            <div class="row mt-3">
                                                <div class="col-2 logo-width">
                                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                                         xmlns="http://www.w3.org/2000/svg">
                                                        <path class="blueToWhite"
                                                              d="M16 2H8C4 2 2 4 2 8V21C2 21.55 2.45 22 3 22H16C20 22 22 20 22 16V8C22 4 20 2 16 2ZM14 15.25H7C6.59 15.25 6.25 14.91 6.25 14.5C6.25 14.09 6.59 13.75 7 13.75H14C14.41 13.75 14.75 14.09 14.75 14.5C14.75 14.91 14.41 15.25 14 15.25ZM17 10.25H7C6.59 10.25 6.25 9.91 6.25 9.5C6.25 9.09 6.59 8.75 7 8.75H17C17.41 8.75 17.75 9.09 17.75 9.5C17.75 9.91 17.41 10.25 17 10.25Z"
                                                              fill="#0481F4"/>
                                                    </svg>
                                                </div>
                                                <div class="col text-2 p-0">
                                                    {{ $t('pageAnimation') }}
                                                </div>
                                                <div class="col-1 d-flex justify-content-end p-0 mb-4">
                                                    <div class="form-check form-switch">
                                                        <input class="form-check-input" type="checkbox" role="switch">
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import GoBackButton from '@/components/modals/GoBackButton'
import RangeSlider from 'vue-range-slider'
import '@/assets/range-slider.css'

export default {
    name: 'read',
    components: {GoBackButton, RangeSlider},
    data() {
        return {
            pageNumber: 1,
            value: 1,
            theme: localStorage.getItem('theme'),
        }
    },
    methods: {
        changeToDark() {
            this.theme = 'dark'
        },
        changeToLight() {
            this.theme = 'light'
        },
    },
    mounted() {

    },
}
</script>

<style scoped>
.blueToWhite {
    fill: var(--blueToWhite);
}

.offcanvas-bottom {
    background-color: var(--color-header);
    height: 45vh;
}

.back-button {
    padding-left: 12px;
}

.swiper, .swiper2 {
    background-color: var(--color-header);
    padding: 0;
    border: none;
}

.swiper > svg > path {
    stroke: var(--color-swiper);
}

.button-offcanvas {
    padding: 0;
    border: none;
    background-color: var(--color-container);
}

.text-1 {
    font-weight: 500;
    font-size: 16px;
    line-height: 20px;
    color: var(--color-textDarkGray-To-white);
}

.text-2 {
    font-weight: 500;
    font-size: 14px;
    line-height: 17px;
    color: var(--color-text);
    margin-top: 5px;
}

.logo-width {
    max-width: 57px;
    margin: 0 0 0 28px;
}

.wrapper {
    border-radius: 10px;
    width: 100%;
    padding: 10px 27px 0 28px;
    margin: 0 auto;
}

input[type=range] {
    width: 100%;
    height: 2px;
}

.hr {
    border-bottom: 1px solid #C4E2FF;
    width: 100%;
}

.hr-width {
    padding-left: 40px !important;
    padding-right: 40px !important;
    margin: 21px 5px 10px 5px;
}

.form-check-input {
    width: 46px;
    height: 24px;
    margin: -1px 27px 0 0;
    background-color: #E2F1FF;
    border: none;
}

.form-check-input:checked {
    background-color: #0481F4;
}

.wrapper {
    border-radius: 10px;
    width: 100%;
    padding: 10px;
    margin: 0 auto;
}

input[type=range] {
    width: 100%;
    height: 2px;
    color: #0481F4;
}

.book-name {
    color: var(--color-Black-To-White);
    font-weight: 600;
    font-size: 16px;
    line-height: 19.5px;
    margin-top: -5px;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    padding: 0 10px 0 10px;
}

.archive {
    fill: var(--blueToWhite);
}

.first-row {
    padding-top: 65px;
}

.book-author {
    font-weight: 500;
    font-style: normal;
    font-size: 12px;
    line-height: 14.6px;
    color: #828282;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
}

.bg-book-author-row {
    margin-top: -8px;
    padding: 0 20px 0 20px;
}

.book-text {
    color: #A5A6A7;
    font-style: normal;
    width: 90%;
    overflow-y: hidden;
}

.scrollable-row {
    margin-top: 120px;
}

.number-1, .number-2 {
    font-family: 'Montserrat', sans-serif;
    font-weight: normal;
    font-style: normal;
    font-size: 14px;
    line-height: 17px;
    margin-top: 18px;
    color: var(--color-text);
}

.message-icon {
    margin: 0 10% 0 10%;
    border: none;
    background-color: var(--color-container);
}

/*second swipe offcanvas (chat) */
.offcanvas-bottom2 {
    border-radius: 16px 16px 0 0;
    height: 80vh;
    background-color: var(--color-header);
}

.swiper2 {
    background-color: var(--color-header);
}

.swiper2-input-border {
    border-radius: 12px 0 12px 12px;
    background-color: var(--bg-button-row-lighter);
}

.swiper2-last-row {
    margin-top: 28px;
}

.chat-bottom-row {
    background-color: var(--color-header);
}

.chat-box {
    padding-bottom: 70px;
}

.input-box {
    min-width: 85%;
    padding-left: 30px;
}

.form-control {
    height: 52px;
    border-radius: 40px;
    padding-left: 23px;
    background-color: var(--color-input) !important;
    color: var(--color-text);
    border: none;
}

.form-control::placeholder {
    font-size: 14px;
    line-height: 20px;
    color: #97CAFB;
}

.send-btn {
    min-width: 15%;
    margin-left: -25px;
    margin-top: 10px;
}

.last-row {
    padding-bottom: 31px;
}

</style>

<template>
    <div class="all">
        <!--Header icons -->
        <div class="row">
            <div class="col fixed-top">
                <div class="row img-row pb-0">

                    <div class="col-2" @click="$router.go(-1)">
                        <svg width="29" height="24" viewBox="0 0 29 24" fill="none" xmlns="http://www.w3.org/2000/svg"
                             class="img-back">
                            <path
                                d="M7.8175 18.6375C7.6275 18.6375 7.4375 18.5675 7.2875 18.4175L1.2175 12.3475C0.9275 12.0575 0.9275 11.5775 1.2175 11.2875L7.2875 5.2175C7.5775 4.9275 8.0575 4.9275 8.3475 5.2175C8.6375 5.5075 8.6375 5.9875 8.3475 6.2775L2.8075 11.8175L8.3475 17.3575C8.6375 17.6475 8.6375 18.1275 8.3475 18.4175C8.2075 18.5675 8.0075 18.6375 7.8175 18.6375Z"
                                fill="#333333" class="blackToWhite"/>
                            <path
                                d="M27.748 12.5675H2.91797C2.50797 12.5675 2.16797 12.2275 2.16797 11.8175C2.16797 11.4075 2.50797 11.0675 2.91797 11.0675H27.748C28.158 11.0675 28.498 11.4075 28.498 11.8175C28.498 12.2275 28.158 12.5675 27.748 12.5675Z"
                                fill="#333333" class="blackToWhite"/>
                        </svg>
                    </div>

                    <div class="col-7 d-flex justify-content-center">
                        <img src="https://is3-ssl.mzstatic.com/image/thumb/Music115/v4/6c/e6/77/6ce6776a-925f-8f7b-0a50-3dc268f47215/cover.jpg/1200x1200bf-60.jpg" width="27px" class="book-img"
                             alt="">
                        <span class="book-name2"> Mon ami (#Ratata) - Single  </span>
                    </div>

                    <div class="col-1 d-flex justify-content-end">
                        <div>
                            <svg width="30" height="30" viewBox="0 0 30 30" fill="none"
                                 xmlns="http://www.w3.org/2000/svg"
                                 @click="textRead = !textRead">
                                <path v-if="!textRead"
                                      d="M18.8249 24.2375C18.0499 24.7625 17.0749 25.2 15.8874 25.5875L13.9124 26.2375C8.94994 27.8375 6.33744 26.5 4.72494 21.5375L3.12494 16.6C1.52494 11.6375 2.84994 9.01247 7.81244 7.41247L9.78744 6.76247C10.2999 6.59997 10.7874 6.46247 11.2499 6.37497C10.8749 7.13747 10.5749 8.06247 10.3249 9.12497L9.09994 14.3625C7.87494 19.5875 9.48744 22.1625 14.6999 23.4L16.7999 23.9C17.5249 24.075 18.1999 24.1875 18.8249 24.2375Z"
                                      stroke="#333333" stroke-width="1.5" stroke-linecap="round" class="blackToWhite"
                                      stroke-linejoin="round"/>
                                <path v-if="!textRead"
                                      d="M15.8008 10.6625L21.8633 12.2" stroke="#333333" stroke-width="1.5" class="blackToWhite"
                                      stroke-linecap="round" stroke-linejoin="round"/>
                                <path v-if="!textRead" class="blackToWhite"
                                      d="M14.5742 15.5L18.1992 16.425" stroke="#333333" stroke-width="1.5"
                                      stroke-linecap="round" stroke-linejoin="round"/>
                                <path v-if="!textRead" class="blackToWhite"
                                      d="M26.2002 6.37501C27.5502 7.87501 27.7877 10.025 27.0752 13.05L25.8502 18.275C24.8002 22.7875 22.7252 24.6125 18.8252 24.2375C18.2002 24.1875 17.5252 24.075 16.8002 23.9L14.7002 23.4C9.48772 22.1625 7.87522 19.5875 9.10022 14.3625L10.3252 9.12501C10.5752 8.06251 10.8752 7.13751 11.2502 6.37501C12.7127 3.35001 15.2002 2.53751 19.3752 3.52501L21.4627 4.01251"
                                      stroke="#333333" stroke-width="1.5" stroke-linecap="round"
                                      stroke-linejoin="round"/>
                                <path v-if="textRead" class="blackToWhite"
                                      d="M15.8471 24.9463C16.1905 25.0262 16.2219 25.476 15.8874 25.5875L13.9124 26.2375C8.94994 27.8375 6.33744 26.5 4.72494 21.5375L3.12494 16.6C1.52494 11.6375 2.84994 9.01246 7.81244 7.41246L8.72144 7.11143C9.1243 6.97802 9.51286 7.38074 9.39217 7.78759C9.29426 8.11762 9.20193 8.46758 9.11244 8.83746L7.88744 14.075C6.51244 19.9625 8.52494 23.2125 14.4124 24.6125L15.8471 24.9463Z"
                                      fill="#0481F4"/>
                                <path v-if="textRead" class="blackToWhite"
                                      d="M21.4627 4.01251L19.3752 3.52501C15.2002 2.53751 12.7127 3.35001 11.2502 6.37501C10.8752 7.13751 10.5752 8.06251 10.3252 9.12501L9.10022 14.3625C7.87522 19.5875 9.48772 22.1625 14.7002 23.4L16.8002 23.9C17.5252 24.075 18.2002 24.1875 18.8252 24.2375C22.7252 24.6125 24.8002 22.7875 25.8502 18.275L27.0752 13.05C28.3002 7.82501 26.7002 5.23751 21.4627 4.01251ZM19.1127 16.6625C19.0002 17.0875 18.6252 17.3625 18.2002 17.3625C18.1252 17.3625 18.0502 17.35 17.9627 17.3375L14.3252 16.4125C13.8252 16.2875 13.5252 15.775 13.6502 15.275C13.7752 14.775 14.2877 14.475 14.7877 14.6L18.4252 15.525C18.9377 15.65 19.2377 16.1625 19.1127 16.6625ZM22.7752 12.4375C22.6627 12.8625 22.2877 13.1375 21.8627 13.1375C21.7877 13.1375 21.7127 13.125 21.6252 13.1125L15.5627 11.575C15.0627 11.45 14.7627 10.9375 14.8877 10.4375C15.0127 9.93751 15.5252 9.63751 16.0252 9.76251L22.0877 11.3C22.6002 11.4125 22.9002 11.925 22.7752 12.4375Z"
                                      fill="#0481F4"/>
                            </svg>
                        </div>
                    </div>
                    <div class="col-1 ps-0">
                        <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg"
                        >
                            <path d="M18.125 13.3125H11.875" stroke="#333333" stroke-width="1.5" stroke-miterlimit="10"
                                  stroke-linecap="round" stroke-linejoin="round" class="blackToWhite"/>
                            <path d="M15 10.2625V16.5125" stroke="#333333" stroke-width="1.5" stroke-miterlimit="10"
                                  stroke-linecap="round" stroke-linejoin="round" class="blackToWhite"/>
                            <path
                                d="M4.15039 12.55V24.9375C4.15039 27.1875 5.76289 28.1375 7.73789 27.05L13.8379 23.6625C14.4879 23.3 15.5379 23.3 16.1754 23.6625L22.2754 27.05C24.2504 28.15 25.8629 27.2 25.8629 24.9375V7.325C25.8629 4.675 23.6879 2.5 21.0379 2.5H8.97539C6.31289 2.5 4.15039 4.675 4.15039 7.325"
                                stroke="#333333" class="blackToWhite" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </div>

                </div>

                <div class="row" v-if="!textRead">
                    <div class="col book-name d-flex justify-content-center">
                        <span class="book-name-width">Mon ami (#Ratata) - Single</span>
                    </div>
                </div>

                <div class="row">
                    <div class="col d-flex justify-content-center" :class="textRead ? 'book-author2' : 'book-author'">
                        Abdullokh_dev
                    </div>
                </div>
            </div>
        </div>

        <div class="row d-flex" v-if="textRead">
            <div class="col d-flex justify-content-center"
                 :style="textRead ? 'padding-top: 115px' : 'padding-top: 190px'" :class="textRead ? 'book-text' : ''">
                <img src="https://is3-ssl.mzstatic.com/image/thumb/Music115/v4/6c/e6/77/6ce6776a-925f-8f7b-0a50-3dc268f47215/cover.jpg/1200x1200bf-60.jpg" style="border-radius: 10px" class="img"
                     v-if="!textRead" @click="textRead = !textRead" alt="">

                <span class="book-text text-break"
                      style="font-size: 20px; line-height: 20px; text-align: justify; position: absolute;"
                      :style="textRead ? '' : 'visibility: hidden; z-index:-12'"
                >
                    Book App by Abdullokh_dev
                </span>
            </div>
        </div>

        <div class="row" style="height: 100vh" v-else>
            <div class="col d-flex" style="justify-content: center;align-items: center;"
                 :style="textRead ? 'padding-top: 115px' : ''" :class="textRead ? 'book-text' : ''">
                <img src="https://is3-ssl.mzstatic.com/image/thumb/Music115/v4/6c/e6/77/6ce6776a-925f-8f7b-0a50-3dc268f47215/cover.jpg/1200x1200bf-60.jpg" style="border-radius: 10px" class="img"
                     v-if="!textRead" @click="textRead = !textRead" alt="">
            </div>
        </div>

        <div class="row">
            <div class="col fixed-bottom fixed-bottom-main">

                <div class="row">
                    <div class="col">
                        <div class="row">

                            <div class="col d-flex justify-content-end" style="max-width: 85px">
                                <div class="time-begin">{{ this.currentSeconds | convertTimeHHMMSS }}</div>
                            </div>
                            <div class="col ps-0 pe-0" style="margin-top: 68px;">
                                <range-slider class="slider" min="0" :max=this.durationSeconds step="0.1"
                                              v-model="sliderValue" v-on:input="setPos()" id="seek">
                                </range-slider>
                            </div>

                            <div class="col-2 d-flex justify-content-start" style="width: 85px">
                                <div class="time-end">{{ this.durationSeconds | convertTimeHHMMSS }}</div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="row">
                    <div class="col d-flex justify-content-center mt-4 button-row">
                        <svg @click.prevent="previousSong" width="30" height="31" viewBox="0 0 30 31" fill="none"
                             xmlns="http://www.w3.org/2000/svg" class="forward-left">
                            <path class="fadedBlueToFadeBlue"
                                  d="M27.5 10.925V20.075C27.5 21.95 25.4625 23.125 23.8375 22.1875L19.875 19.9L15.9125 17.6125L15.3 17.2625V13.7375L15.9125 13.3875L19.875 11.1L23.8375 8.81253C25.4625 7.87503 27.5 9.05003 27.5 10.925Z"
                                  fill="#C7E2FD"/>
                            <path
                                d="M15.3008 10.925V20.075C15.3008 21.95 13.2633 23.125 11.6508 22.1875L7.67581 19.9L3.71329 17.6125C2.10079 16.675 2.10079 14.325 3.71329 13.3875L7.67581 11.1L11.6508 8.81253C13.2633 7.87503 15.3008 9.05003 15.3008 10.925Z"
                                fill="#0481F4"/>
                        </svg>

                        <svg @click="backForward" width="30" height="31" viewBox="0 0 30 31" fill="none"
                             xmlns="http://www.w3.org/2000/svg"
                             class="forward-15-left">
                            <path class="blueToFade"
                                  d="M18.0373 21.65H15.1748C14.6623 21.65 14.2373 21.225 14.2373 20.7125C14.2373 20.2 14.6623 19.775 15.1748 19.775H18.0373C18.5748 19.775 19.0123 19.3375 19.0123 18.8C19.0123 18.2625 18.5748 17.825 18.0373 17.825H15.1748C14.8748 17.825 14.5873 17.675 14.4123 17.4375C14.2373 17.2 14.1873 16.875 14.2873 16.5875L15.2373 13.725C15.3623 13.3375 15.7248 13.0875 16.1248 13.0875H19.9498C20.4623 13.0875 20.8873 13.5125 20.8873 14.025C20.8873 14.5375 20.4623 14.9625 19.9498 14.9625H16.7998L16.4748 15.95H18.0373C19.6123 15.95 20.8873 17.225 20.8873 18.8C20.8873 20.375 19.5998 21.65 18.0373 21.65Z"
                                  fill="#0481F4"/>
                            <path class="blueToFade"
                                  d="M11.9259 21.65C11.4134 21.65 10.9884 21.225 10.9884 20.7125V16.4751L10.7509 16.75C10.4009 17.1375 9.8134 17.1625 9.4259 16.825C9.0384 16.475 9.0134 15.8875 9.3509 15.5L11.2259 13.4126C11.4884 13.1251 11.9009 13.025 12.2634 13.1625C12.6259 13.3 12.8634 13.6501 12.8634 14.0376V20.725C12.8634 21.2375 12.4509 21.65 11.9259 21.65Z"
                                  fill="#0481F4"/>
                            <path class="fadedBlueToFadeBlue"
                                  d="M15.0007 4.85004C14.9007 4.85004 14.8008 4.86256 14.7008 4.86256L15.7258 3.58753C16.0508 3.18753 15.9883 2.58755 15.5758 2.27505C15.1633 1.96255 14.5882 2.01254 14.2632 2.42504L11.7882 5.51258C11.7757 5.52508 11.7757 5.55005 11.7632 5.56255C11.7257 5.61255 11.7008 5.67507 11.6758 5.73757C11.6508 5.78757 11.6257 5.83758 11.6132 5.90008C11.6007 5.96258 11.6008 6.0126 11.6008 6.0751C11.6008 6.1376 11.6008 6.20005 11.6008 6.26255C11.6008 6.28755 11.6008 6.30004 11.6008 6.32504C11.6133 6.36254 11.6383 6.40007 11.6508 6.43757C11.6758 6.50007 11.7008 6.55009 11.7258 6.61259C11.7633 6.66259 11.8007 6.71257 11.8507 6.75007C11.8757 6.77507 11.9007 6.81259 11.9257 6.85009C11.9382 6.86259 11.9633 6.86254 11.9758 6.87504C12.0133 6.90004 12.0507 6.9126 12.0882 6.9376C12.1507 6.9751 12.2258 7.0001 12.2883 7.0126C12.3258 7.0251 12.3632 7.02504 12.4132 7.03754C12.4507 7.03754 12.4758 7.05006 12.5133 7.05006C12.5508 7.05006 12.5758 7.03753 12.6008 7.02503C12.6383 7.02503 12.6757 7.03753 12.7132 7.02503C13.5132 6.83753 14.2632 6.75007 14.9757 6.75007C20.5882 6.75007 25.1507 11.3126 25.1507 16.9251C25.1507 22.5376 20.5882 27.1001 14.9757 27.1001C9.36322 27.1001 4.80078 22.5376 4.80078 16.9251C4.80078 14.7501 5.51324 12.6501 6.86324 10.8501C7.17574 10.4376 7.08828 9.85004 6.67578 9.53754C6.26328 9.22504 5.67572 9.31258 5.36322 9.72508C3.76322 11.8501 2.92578 14.3376 2.92578 16.9251C2.92578 23.5626 8.32572 28.9751 14.9757 28.9751C21.6257 28.9751 27.0257 23.5751 27.0257 16.9251C27.0257 10.2751 21.6382 4.85004 15.0007 4.85004Z"
                                  fill="#C7E2FD"/>
                        </svg>

                        <button v-on:click.prevent="singing = !singing" class="button-start">
                            <svg v-if="this.singing" width="61" height="61" viewBox="0 0 61 61" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <circle cx="30.5" cy="30.5" r="30.5" fill="#0481F4"/>
                                <rect class="whiteToBlack" x="22" y="20" width="6" height="21" rx="2" fill="white"/>
                                <rect class="whiteToBlack" x="32" y="20" width="6" height="21" rx="2" fill="white"/>
                            </svg>

                            <svg v-else width="61" height="61" viewBox="0 0 38 38" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <circle cx="19" cy="19" r="19" fill="#0481F4"/>
                                <path class="whiteToBlack"
                                      d="M25.1656 17.0991C26.2985 17.7789 26.2985 19.4207 25.1656 20.1004L17.6504 24.6095C16.484 25.3094 15 24.4692 15 23.1089L15 14.0906C15 12.7303 16.484 11.8901 17.6504 12.59L25.1656 17.0991Z"
                                      fill="white"/>
                            </svg>

                        </button>

                        <svg @click="skipForward" width="30" height="31" viewBox="0 0 30 31" fill="none"
                             xmlns="http://www.w3.org/2000/svg"
                             class="forward-15-right">
                            <path
                                class="blueToFade"
                                d="M18.0392 21.65H15.1768C14.6643 21.65 14.2393 21.225 14.2393 20.7125C14.2393 20.2 14.6643 19.775 15.1768 19.775H18.0392C18.5767 19.775 19.0143 19.3375 19.0143 18.8C19.0143 18.2625 18.5767 17.825 18.0392 17.825H15.1768C14.8768 17.825 14.5893 17.675 14.4143 17.4375C14.2393 17.2 14.1892 16.875 14.2892 16.5875L15.2392 13.725C15.3642 13.3375 15.7268 13.0875 16.1268 13.0875H19.9518C20.4643 13.0875 20.8893 13.5125 20.8893 14.025C20.8893 14.5375 20.4643 14.9625 19.9518 14.9625H16.8017L16.4767 15.95H18.0392C19.6142 15.95 20.8893 17.225 20.8893 18.8C20.8893 20.375 19.6017 21.65 18.0392 21.65Z"
                                fill="#0481F4"/>
                            <path
                                class="blueToFade"
                                d="M11.9259 21.6489C11.4134 21.6489 10.9884 21.2239 10.9884 20.7114V16.474L10.7509 16.7489C10.4009 17.1364 9.8134 17.1614 9.4259 16.8239C9.0384 16.4739 9.0134 15.8864 9.3509 15.4989L11.2259 13.4115C11.4884 13.124 11.9009 13.0239 12.2634 13.1614C12.6259 13.2989 12.8634 13.649 12.8634 14.0365V20.7239C12.8634 21.2364 12.4509 21.6489 11.9259 21.6489Z"
                                fill="#0481F4"/>
                            <path class="fadedBlueToFadeBlue"
                                  d="M24.6133 9.68752C24.3008 9.27502 23.7133 9.18757 23.3008 9.50007C22.8883 9.81257 22.8007 10.4001 23.1132 10.8126C24.4632 12.6126 25.1758 14.7125 25.1758 16.8875C25.1758 22.5 20.6132 27.0626 15.0007 27.0626C9.38825 27.0626 4.82573 22.5 4.82573 16.8875C4.82573 11.275 9.38825 6.71251 15.0007 6.71251C15.7257 6.71251 16.4632 6.80005 17.2632 6.98755C17.3007 7.00005 17.3383 6.98755 17.3758 6.98755C17.4133 6.98755 17.4382 7.01258 17.4632 7.01258C17.5007 7.01258 17.5257 7.00007 17.5632 7.00007C17.6007 7.00007 17.6383 6.98754 17.6883 6.97504C17.7633 6.96254 17.8257 6.92504 17.8882 6.90004C17.9257 6.87504 17.9633 6.86256 18.0008 6.83756C18.0133 6.82506 18.0383 6.82504 18.0508 6.81254C18.0883 6.78754 18.1007 6.75003 18.1257 6.72503C18.1757 6.67503 18.2132 6.63753 18.2507 6.57503C18.2882 6.52503 18.3007 6.46251 18.3257 6.40001C18.3382 6.36251 18.3633 6.32506 18.3758 6.28756C18.3758 6.26256 18.3758 6.25007 18.3758 6.22507C18.3883 6.16257 18.3883 6.10004 18.3758 6.03754C18.3758 5.97504 18.3758 5.92502 18.3633 5.86252C18.3508 5.81252 18.3258 5.76252 18.3008 5.70002C18.2758 5.63752 18.2508 5.57507 18.2133 5.52507C18.2008 5.51257 18.2007 5.48753 18.1882 5.47503L15.7133 2.38756C15.3883 1.98756 14.8008 1.91257 14.4008 2.23757C14.0008 2.56257 13.9383 3.15005 14.2508 3.55005L15.2757 4.82508C15.1757 4.82508 15.0757 4.81257 14.9757 4.81257C8.33822 4.81257 2.92578 10.2126 2.92578 16.8626C2.92578 23.5126 8.32572 28.9125 14.9757 28.9125C21.6257 28.9125 27.0257 23.5126 27.0257 16.8626C27.0507 14.3001 26.2008 11.8125 24.6133 9.68752Z"
                                  fill="#C7E2FD"/>
                        </svg>

                        <svg @click.prevent="nextSong" width="30" height="31" viewBox="0 0 30 31" fill="none"
                             xmlns="http://www.w3.org/2000/svg" class="forward-right">
                            <path class="fadedBlueToFadeBlue"
                                  d="M2.5 10.925V20.075C2.5 21.95 4.53749 23.125 6.16249 22.1875L10.125 19.9L14.0875 17.6125L14.7 17.2625V13.7375L14.0875 13.3875L10.125 11.1L6.16249 8.81253C4.53749 7.87503 2.5 9.05003 2.5 10.925Z"
                                  fill="#0481F4"/>
                            <path
                                d="M14.6992 10.925V20.075C14.6992 21.95 16.7367 23.125 18.3492 22.1875L22.3242 19.9L26.2867 17.6125C27.8992 16.675 27.8992 14.325 26.2867 13.3875L22.3242 11.1L18.3492 8.81253C16.7367 7.87503 14.6992 9.05003 14.6992 10.925Z"
                                fill="#0481F4"/>
                        </svg>
                    </div>
                </div>

                <div class="row footer">

                    <div class="col-2 d-flex justify-content-center">
                        <div @click="changeSpeed" class="speed"> {{ this.audioSpeed }}x</div>
                    </div>

                    <div class="col-2 d-flex justify-content-center">
                        <button type="button" class="archive-offcanvas" data-bs-toggle="offcanvas"
                                data-bs-target="#offcanvasBottom" aria-controls="offcanvasBottom">
                            <svg width="27" height="26" viewBox="0 0 27 26" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path class="fadedBlueToDark"
                                      d="M23.5 7.58334V18.4167C23.5 21.6667 21.875 23.8333 18.0833 23.8333H9.41667C5.625 23.8333 4 21.6667 4 18.4167V7.58334C4 4.33334 5.625 2.16667 9.41667 2.16667H18.0833C21.875 2.16667 23.5 4.33334 23.5 7.58334Z"
                                      fill="#D4E8FE"/>
                                <path class="blueToFaded"
                                      d="M17.5423 2.16667V10.6817C17.5423 11.1583 16.979 11.3967 16.6323 11.0825L14.119 8.76417C13.9132 8.56917 13.5881 8.56917 13.3823 8.76417L10.869 11.0825C10.5223 11.4075 9.95898 11.1583 9.95898 10.6817V2.16667H17.5423Z"
                                      fill="#0481F4"/>
                                <path class="blueToFaded"
                                      d="M19.7077 15.9792H15.1035C14.6593 15.9792 14.291 15.6108 14.291 15.1667C14.291 14.7225 14.6593 14.3542 15.1035 14.3542H19.7077C20.1518 14.3542 20.5202 14.7225 20.5202 15.1667C20.5202 15.6108 20.1518 15.9792 19.7077 15.9792Z"
                                      fill="#0481F4"/>
                                <path class="blueToFaded"
                                      d="M19.7083 20.3125H10.5C10.0558 20.3125 9.6875 19.9442 9.6875 19.5C9.6875 19.0558 10.0558 18.6875 10.5 18.6875H19.7083C20.1525 18.6875 20.5208 19.0558 20.5208 19.5C20.5208 19.9442 20.1525 20.3125 19.7083 20.3125Z"
                                      fill="#0481F4"/>
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

                                        <!--two button row start -->
                                        <div class="row d-flex justify-content-center">
                                            <div class="col-11 swiper1-button-row">
                                                <div class="row">
                                                    <div class="col-6 ps-1">
                                                        <button class="book-button checked">Contents</button>
                                                    </div>
                                                    <div class="col-6 pe-1">
                                                        <button class="audio-button">Bookmarks</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <!--two button row end-->

                                        <div class="row d-flex justify-content-center">
                                            <div class="col-11 swiper1-checked-input">
                                                <div class="row">
                                                    <div class="col swiper1-text-1">
                                                        How to deal with difficult emotions
                                                    </div>
                                                    <div class="col-2 d-flex justify-content-end p-0 swiper1-time">
                                                        34:06
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="row d-flex justify-content-center">
                                            <div class="col-11">
                                                <div class="row">
                                                    <div class="col ps-0 swiper1-text-2">
                                                        How the past affects the present...
                                                    </div>
                                                    <div class="col-1 d-flex justify-content-end p-0 swiper1-time-2">
                                                        34:06
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="row d-flex justify-content-center">
                                            <div class="col-11 swiper1-row-2">
                                                <div class="row">
                                                    <div class="col ps-0 swiper1-text-2">
                                                        Feelings of inferiority, resentment...
                                                    </div>
                                                    <div class="col-1 d-flex justify-content-end p-0 swiper1-time-2">
                                                        34:06
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="row d-flex justify-content-center">
                                            <div class="col-11 swiper1-row-2">
                                                <div class="row">
                                                    <div class="col ps-0 swiper1-text-2">
                                                        About myself, horoscopes and RPP. Anya...
                                                    </div>
                                                    <div class="col-1 d-flex justify-content-end p-0 swiper1-time-2">
                                                        34:06
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="row d-flex justify-content-center">
                                            <div class="col-11 swiper1-row-2">
                                                <div class="row">
                                                    <div class="col ps-0 swiper1-text-2">
                                                        Negative thinking and opti...
                                                    </div>
                                                    <div class="col-1 d-flex justify-content-end p-0 swiper1-time-2">
                                                        34:06
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="col-2 d-flex justify-content-center">
                        <button type="button" class="archive-offcanvas" data-bs-toggle="offcanvas"
                                data-bs-target="#offcanvasBottom2" aria-controls="offcanvasBottom">
                            <svg width="27" height="26" viewBox="0 0 27 26" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path class="fadedBlueToDark"
                                      d="M2.41602 14.0508V7.57246C2.41602 4.58246 4.84268 2.16663 7.83268 2.16663H18.666C21.656 2.16663 24.0827 4.58246 24.0827 7.57246V15.1341C24.0827 18.1133 21.656 20.5291 18.666 20.5291H17.041C16.7052 20.5291 16.3802 20.6916 16.1743 20.9625L14.5493 23.1183C13.8343 24.0716 12.6643 24.0716 11.9493 23.1183L10.3243 20.9625C10.151 20.7241 9.76101 20.5291 9.45768 20.5291H7.83268C4.84268 20.5291 2.41602 18.1133 2.41602 15.1341V14.0508Z"
                                      fill="#D4E8FE"/>
                                <path class="blueToFaded"
                                      d="M13.2493 13C12.6427 13 12.166 12.5125 12.166 11.9167C12.166 11.3209 12.6535 10.8334 13.2493 10.8334C13.8452 10.8334 14.3327 11.3209 14.3327 11.9167C14.3327 12.5125 13.856 13 13.2493 13Z"
                                      fill="#0481F4"/>
                                <path class="blueToFaded"
                                      d="M17.5833 13C16.9767 13 16.5 12.5125 16.5 11.9167C16.5 11.3209 16.9875 10.8334 17.5833 10.8334C18.1792 10.8334 18.6667 11.3209 18.6667 11.9167C18.6667 12.5125 18.19 13 17.5833 13Z"
                                      fill="#0481F4"/>
                                <path class="blueToFaded"
                                      d="M8.91732 13C8.31065 13 7.83398 12.5125 7.83398 11.9167C7.83398 11.3209 8.32148 10.8334 8.91732 10.8334C9.51315 10.8334 10.0007 11.3209 10.0007 11.9167C10.0007 12.5125 9.52398 13 8.91732 13Z"
                                      fill="#0481F4"/>
                            </svg>
                        </button>

                        <div class="offcanvas offcanvas-bottom offcanvas-bottom2" tabindex="-1" id="offcanvasBottom2"
                             aria-labelledby="offcanvasBottomLabel">
                            <div class="offcanvas-body small" ref="scrollToMe">
                                <div class="row">
                                    <div class="col all chat-box">

                                        <!-- top close btn -->
                                        <div>

                                        </div>
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

                                        <div class="row fixed-bottom">
                                            <div class="col">

                                                <div class="row chat-bottom-row pb-3">
                                                    <div class="col input-box">
                                                        <input
                                                            v-model="message"
                                                            type="text"
                                                            class="form-control input"
                                                            placeholder="Сообщение">
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

                    </div>

                    <div class="col-2 d-flex justify-content-center">
                        <button type="button" class="archive-offcanvas" data-bs-toggle="offcanvas"
                                data-bs-target="#offcanvasBottom3" aria-controls="offcanvasBottom">
                            <svg width="27" height="26" viewBox="0 0 27 26" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path class="fadedBlueToDark"
                                      d="M18.2885 2H9.22102C5.26685 2 2.91602 4.35083 2.91602 8.29416V17.3617C2.91602 21.305 5.26685 23.6558 9.21018 23.6558H18.2777C22.221 23.6558 24.5718 21.305 24.5718 17.3617V8.29416C24.5827 4.35083 22.2319 2 18.2885 2Z"
                                      fill="#0481F4"/>
                                <path class="blueToFaded"
                                      d="M13.1751 18.0533C13.2509 18.1292 13.3376 18.1833 13.4351 18.2267C13.5326 18.27 13.6409 18.2917 13.7492 18.2917C13.8576 18.2917 13.9551 18.27 14.0634 18.2267C14.1609 18.1833 14.2476 18.1292 14.3234 18.0533L17.5734 14.8033C17.8876 14.4892 17.8876 13.9692 17.5734 13.655C17.2592 13.3408 16.7392 13.3408 16.4251 13.655L14.5617 15.5183V8.8125C14.5617 8.36833 14.1934 8 13.7492 8C13.3051 8 12.9367 8.36833 12.9367 8.8125V15.5183L11.0734 13.655C10.7592 13.3408 10.2392 13.3408 9.92508 13.655C9.61091 13.9692 9.61091 14.4892 9.92508 14.8033L13.1751 18.0533Z"
                                      fill="#0481F4"/>
                            </svg>
                        </button>

                        <div class="offcanvas offcanvas-bottom offcanvas-bottom3" tabindex="-1" id="offcanvasBottom3"
                             aria-labelledby="offcanvasBottomLabel">

                            <div class="offcanvas-body small">

                                <div class="row">
                                    <div class="col all">

                                        <!-- top close btn -->
                                        <div class="row">
                                            <div class="col d-flex justify-content-end p-0 swiper3-close-btn">
                                                <button type="button" class="swiper2" data-bs-dismiss="offcanvas"
                                                        aria-label="Close">
                                                    <svg width="28" height="28" viewBox="0 0 28 28" fill="none"
                                                         xmlns="http://www.w3.org/2000/svg">
                                                        <circle opacity="0.1" cx="14" cy="14" r="14" fill="#9597A1"/>
                                                        <path d="M18.456 9.54541L9.54688 18.4545" stroke="#9597A1"
                                                              stroke-width="1.33333" stroke-linecap="round"
                                                              stroke-linejoin="round"/>
                                                        <path d="M9.54688 9.54541L18.456 18.4545" stroke="#9597A1"
                                                              stroke-width="1.33333" stroke-linecap="round"
                                                              stroke-linejoin="round"/>
                                                    </svg>
                                                </button>
                                            </div>
                                        </div>
                                        <!-- top close btn end-->

                                        <div class="row" v-if="this.isSaved === false">
                                            <div class="col-2 swiper3-logo-width p-0">
                                                <svg width="24" height="25" viewBox="0 0 24 25" fill="none"
                                                     xmlns="http://www.w3.org/2000/svg" class="logo">
                                                    <path
                                                        d="M16.8203 2.11987H7.18031C5.06031 2.11987 3.32031 3.85987 3.32031 5.97987V20.0699C3.32031 21.8699 4.61031 22.6299 6.19031 21.7599L11.0703 19.0499C11.5903 18.7599 12.4303 18.7599 12.9403 19.0499L17.8203 21.7599C19.4003 22.6399 20.6903 21.8799 20.6903 20.0699V5.97987C20.6803 3.85987 18.9503 2.11987 16.8203 2.11987ZM15.6203 9.23987L11.6203 13.2399C11.4703 13.3899 11.2803 13.4599 11.0903 13.4599C10.9003 13.4599 10.7103 13.3899 10.5603 13.2399L9.06031 11.7399C8.77031 11.4499 8.77031 10.9699 9.06031 10.6799C9.35031 10.3899 9.83031 10.3899 10.1203 10.6799L11.0903 11.6499L14.5603 8.17987C14.8503 7.88987 15.3303 7.88987 15.6203 8.17987C15.9103 8.46987 15.9103 8.94987 15.6203 9.23987Z"
                                                        fill="#0481F4"/>
                                                </svg>
                                            </div>

                                            <div class="col d-flex justify-content-start row-text-1 p-0">
                                                <div>{{ $t('language.save') }}</div>
                                            </div>
                                        </div>

                                        <div class="row" v-else>
                                            <div class="col-2 swiper3-logo-width p-0">
                                                <svg width="24" height="25" viewBox="0 0 24 25" fill="none"
                                                     xmlns="http://www.w3.org/2000/svg" class="logo">
                                                    <path
                                                        d="M16.8203 2.11987H7.18031C5.06031 2.11987 3.32031 3.85987 3.32031 5.97987V20.0699C3.32031 21.8699 4.61031 22.6299 6.19031 21.7599L11.0703 19.0499C11.5903 18.7599 12.4303 18.7599 12.9403 19.0499L17.8203 21.7599C19.4003 22.6399 20.6903 21.8799 20.6903 20.0699V5.97987C20.6803 3.85987 18.9503 2.11987 16.8203 2.11987ZM15.6203 9.23987L11.6203 13.2399C11.4703 13.3899 11.2803 13.4599 11.0903 13.4599C10.9003 13.4599 10.7103 13.3899 10.5603 13.2399L9.06031 11.7399C8.77031 11.4499 8.77031 10.9699 9.06031 10.6799C9.35031 10.3899 9.83031 10.3899 10.1203 10.6799L11.0903 11.6499L14.5603 8.17987C14.8503 7.88987 15.3303 7.88987 15.6203 8.17987C15.9103 8.46987 15.9103 8.94987 15.6203 9.23987Z"
                                                        fill="#BDBDBD"/>
                                                </svg>
                                            </div>

                                            <div class="col d-flex justify-content-start row-text-1 p-0">
                                                <div>{{ $t('language.save') }}</div>
                                            </div>
                                        </div>

                                        <div class="row rows">
                                            <div class="col-2 swiper3-logo-width p-0">
                                                <svg width="24" height="25" viewBox="0 0 24 25" fill="none"
                                                     xmlns="http://www.w3.org/2000/svg" class="logo">
                                                    <path class="blueToWhite"
                                                          d="M16.19 2.20996H7.81C4.17 2.20996 2 4.37996 2 8.01996V16.39C2 20.04 4.17 22.21 7.81 22.21H16.18C19.82 22.21 21.99 20.04 21.99 16.4V8.01996C22 4.37996 19.83 2.20996 16.19 2.20996ZM8.47 12.19C8.76 11.9 9.24 11.9 9.53 12.19L11.25 13.91V7.71996C11.25 7.30996 11.59 6.96996 12 6.96996C12.41 6.96996 12.75 7.30996 12.75 7.71996V13.91L14.47 12.19C14.76 11.9 15.24 11.9 15.53 12.19C15.82 12.48 15.82 12.96 15.53 13.25L12.53 16.25C12.46 16.32 12.38 16.37 12.29 16.41C12.2 16.45 12.1 16.47 12 16.47C11.9 16.47 11.81 16.45 11.71 16.41C11.62 16.37 11.54 16.32 11.47 16.25L8.47 13.25C8.18 12.96 8.18 12.49 8.47 12.19Z"
                                                          fill="#0481F4"/>
                                                </svg>
                                            </div>

                                            <div class="col d-flex justify-content-start row-text-1 p-0">
                                                <div> {{ $t('download') }}</div>
                                            </div>
                                        </div>

                                        <div class="row rows">
                                            <div class="col-2 swiper3-logo-width p-0">
                                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                                     xmlns="http://www.w3.org/2000/svg">
                                                    <path class="blueToWhite"
                                                          d="M11.25 6V19.91C11.25 20.62 10.53 21.11 9.88 20.84C8.02 20.06 5.71 19.38 4.07 19.16L3.76 19.12C2.79 19 2 18.11 2 17.14V5.25C2 4.05 2.97 3.08 4.17 3.08H4.24C6.12 3.24 8.89 4.12 10.72 5.11C11.05 5.29 11.25 5.62 11.25 6Z"
                                                          fill="#0481F4"/>
                                                    <path class="blueToWhite"
                                                          d="M19.83 3.08H19.77C19.53 3.1 19.27 3.13 19 3.18C17.77 3.38 16.31 3.8 15 4.32C14.38 4.57 13.8 4.84 13.29 5.11C12.96 5.29 12.75 5.63 12.75 6V19.91C12.75 20.62 13.47 21.11 14.12 20.84C15.98 20.06 18.29 19.38 19.93 19.16L20.24 19.12C21.21 19 22 18.11 22 17.14V5.25C22 4.05 21.03 3.08 19.83 3.08ZM19.27 13.73C19.27 14.12 18.99 14.29 18.65 14.1L17.59 13.51C17.48 13.45 17.3 13.45 17.18 13.51L16.12 14.1C15.78 14.29 15.5 14.12 15.5 13.73V10.66C15.5 10.2 15.88 9.82 16.34 9.82H18.44C18.9 9.82 19.28 10.2 19.28 10.66V13.73H19.27Z"
                                                          fill="#0481F4"/>
                                                </svg>
                                            </div>

                                            <div class="col d-flex justify-content-start row-text-1 p-0">
                                                <div @click="isVisible = !isVisible">
                                                    <span class="link"> {{ $t('addAShelf') }} </span>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="row rows last">
                                            <div class="col-2 swiper3-logo-width p-0">
                                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                                     xmlns="http://www.w3.org/2000/svg" class="trash-icon">
                                                    <path
                                                        d="M21.0697 5.23C19.4597 5.07 17.8497 4.95 16.2297 4.86V4.85L16.0097 3.55C15.8597 2.63 15.6397 1.25 13.2997 1.25H10.6797C8.34967 1.25 8.12967 2.57 7.96967 3.54L7.75967 4.82C6.82967 4.88 5.89967 4.94 4.96967 5.03L2.92967 5.23C2.50967 5.27 2.20967 5.64 2.24967 6.05C2.28967 6.46 2.64967 6.76 3.06967 6.72L5.10967 6.52C10.3497 6 15.6297 6.2 20.9297 6.73C20.9597 6.73 20.9797 6.73 21.0097 6.73C21.3897 6.73 21.7197 6.44 21.7597 6.05C21.7897 5.64 21.4897 5.27 21.0697 5.23Z"
                                                        fill="#BDBDBD"/>
                                                    <path
                                                        d="M19.2297 8.14C18.9897 7.89 18.6597 7.75 18.3197 7.75H5.67975C5.33975 7.75 4.99975 7.89 4.76975 8.14C4.53975 8.39 4.40975 8.73 4.42975 9.08L5.04975 19.34C5.15975 20.86 5.29975 22.76 8.78975 22.76H15.2097C18.6997 22.76 18.8398 20.87 18.9497 19.34L19.5697 9.09C19.5897 8.73 19.4597 8.39 19.2297 8.14ZM13.6597 17.75H10.3297C9.91975 17.75 9.57975 17.41 9.57975 17C9.57975 16.59 9.91975 16.25 10.3297 16.25H13.6597C14.0697 16.25 14.4097 16.59 14.4097 17C14.4097 17.41 14.0697 17.75 13.6597 17.75ZM14.4997 13.75H9.49975C9.08975 13.75 8.74975 13.41 8.74975 13C8.74975 12.59 9.08975 12.25 9.49975 12.25H14.4997C14.9097 12.25 15.2497 12.59 15.2497 13C15.2497 13.41 14.9097 13.75 14.4997 13.75Z"
                                                        fill="#BDBDBD"/>
                                                </svg>
                                            </div>

                                            <div class="col d-flex justify-content-start row-text-1 p-0">
                                                <div>
                                                    <span class="link">{{ $t('deleteFromMyBook') }}</span>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div class="col-2 d-flex justify-content-center">
                        <svg width="27" height="26" viewBox="0 0 27 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path class="fadedBlueToDark"
                                  d="M9.99993 20.5834C9.99993 21.4934 10.1408 22.3817 10.4008 23.205C6.24076 21.7642 3.09909 17.94 2.77409 13.4659C2.44909 8.71003 5.18993 4.26836 9.62076 2.40502C10.7691 1.92836 11.3541 2.27502 11.6033 2.52419C11.8416 2.76252 12.1774 3.33669 11.7008 4.43086C11.2133 5.55752 10.9749 6.74919 10.9749 7.98419C10.9858 10.1942 11.8524 12.2417 13.2608 13.8125C11.2783 15.3942 9.99993 17.8425 9.99993 20.5834Z"
                                  fill="#D4E8FE"/>
                            <path class="fadedBlueToDark"
                                  d="M23.2274 19.1967C21.0824 22.1109 17.6808 23.8225 14.0516 23.8225C13.8783 23.8225 13.7049 23.8117 13.5316 23.8009C12.4483 23.7575 11.3974 23.5517 10.4008 23.205C10.1408 22.3817 9.99993 21.4934 9.99993 20.5834C9.99993 17.8425 11.2783 15.3942 13.2608 13.8125C14.8533 15.6 17.1391 16.7592 19.6633 16.8675C20.3458 16.9 21.0283 16.8459 21.6999 16.7267C22.9133 16.51 23.4008 16.965 23.5741 17.2575C23.7583 17.55 23.9533 18.1892 23.2274 19.1967Z"
                                  fill="#D4E8FE"/>
                        </svg>
                    </div>

                    <div class="col-2 d-flex justify-content-center">
                        <button type="button" class="archive-offcanvas" data-bs-toggle="offcanvas"
                                data-bs-target="#offcanvasBottom3" aria-controls="offcanvasBottom">
                            <svg width="27" height="26" viewBox="0 0 27 26" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path class="fadedBlueToDark"
                                      d="M13.7493 23.8333C19.7324 23.8333 24.5827 18.983 24.5827 13C24.5827 7.01687 19.7324 2.16663 13.7493 2.16663C7.76626 2.16663 2.91602 7.01687 2.91602 13C2.91602 18.983 7.76626 23.8333 13.7493 23.8333Z"
                                      fill="#0481F4"/>
                                <path class="blueToFaded"
                                      d="M13.7493 14.0833C13.1427 14.0833 12.666 13.5958 12.666 13C12.666 12.4041 13.1535 11.9166 13.7493 11.9166C14.3452 11.9166 14.8327 12.4041 14.8327 13C14.8327 13.5958 14.356 14.0833 13.7493 14.0833Z"
                                      fill="#0481F4"/>
                                <path class="blueToFaded"
                                      d="M18.0833 14.0833C17.4767 14.0833 17 13.5958 17 13C17 12.4041 17.4875 11.9166 18.0833 11.9166C18.6792 11.9166 19.1667 12.4041 19.1667 13C19.1667 13.5958 18.69 14.0833 18.0833 14.0833Z"
                                      fill="#0481F4"/>
                                <path class="blueToFaded"
                                      d="M9.41732 14.0833C8.81065 14.0833 8.33398 13.5958 8.33398 13C8.33398 12.4041 8.82148 11.9166 9.41732 11.9166C10.0132 11.9166 10.5007 12.4041 10.5007 13C10.5007 13.5958 10.024 14.0833 9.41732 14.0833Z"
                                      fill="#0481F4"/>
                            </svg>
                        </button>
                    </div>

                </div>

            </div>
        </div>

        <audio :loop="looping" ref="audio" src="https://muzes.net/uploads/music/2021/08/Andrei_Banuta_Mon_Ami_Ratata_HAYASA_G_Remix_4K.mp3"
               v-on:loadeddata="load" v-on:pause="playing = false"
               v-on:play="playing = true"
               v-on:timeupdate="rangeUpdate" preload="auto" style="display: none;">
        </audio>
    </div>
</template>
<script>
import RangeSlider from "vue-range-slider";
import "@/assets/range-slider-audio.css";

export default {
    name: "listen",
    components: {
        RangeSlider
    },
    data() {
        return {
            currentSeconds: 0,
            durationSeconds: 0,
            loaded: false,
            looping: false,
            playing: false,
            audioSpeed: 1.0,
            music: null,
            singing: false,
            sliderValue: 0,
            isSaved: false,
            message: '',
            textRead: false,
            textArray: [],
            isVisible: false,
        }
    },
    methods: {
        setPos() {
            this.$refs.audio.currentTime = this.sliderValue
            this.currentSeconds = this.$refs.audio.currentTime
        },
        rangeUpdate() {
            this.sliderValue = this.$refs.audio.currentTime
            this.currentSeconds = this.$refs.audio.currentTime

            let a = Math.ceil(this.$refs.audio.currentTime / (this.$refs.audio.duration / this.pageNumber)) - 1;

            if (this.value !== a && this.textArray.length > 0) {
                this.$refs.text3.innerHTML = this.textArray[a]
                this.value = a
            }
        },
        convertDateAnnouncement(inputFormat) {
            function pad(s) {
                return (s < 10) ? '0' + s : s;
            }

            let d = new Date(inputFormat)
            return [pad(d.getDate()), pad(d.getMonth() + 1), d.getFullYear()].join('-')
        },
        nextSong() {
            //code
        },
        previousSong() {
            //code
        },
        changeSpeed() {
            switch (this.audioSpeed) {
                case 2:
                    this.$refs.audio.playbackRate = 0.5
                    this.audioSpeed = this.$refs.audio.playbackRate

                    return
            }

            this.audioSpeed = this.audioSpeed += 0.25
            this.$refs.audio.playbackRate = this.audioSpeed
        },
        backForward() {
            this.$refs.audio.currentTime -= 15
        },
        skipForward() {
            this.$refs.audio.currentTime += 15
        },
        load() {
            if (this.$refs.audio.readyState >= 2) {
                this.loaded = true
                this.durationSeconds = this.$refs.audio.duration
                return this.playing = this.autoPlay
            }

            throw new Error('Failed to load sound file.')
        },
    },
    filters: {
        convertTimeHHMMSS(val) {
            let hhmmss = new Date(val * 1000).toISOString().substr(11, 8);

            return hhmmss.indexOf("00:") === 0 ? hhmmss.substr(3) : hhmmss;
        }
    },
    updated() {
        if (this.$refs.audio.currentTime === this.durationSeconds) {
            this.$refs.audio.currentTime = 0;
            this.$refs.audio.pause();
        }

        if (this.singing) {
            this.singing = true
            this.$refs.audio.playbackRate = this.audioSpeed
            return this.$refs.audio.play()
        } else {
            if (!this.singing) {
                return this.$refs.audio.pause()
            }
        }
    },
    created() {
        this.looping = this.loop;
    }
}
</script>

<style scoped>
.blackToWhite {
    stroke: var(--color-Black-To-White);
}

.whiteToBlack {
    fill: var(--color-header);
}

.blueToFade {
    fill: var(--blueToFade) !important;
}

.blueToWhite {
    fill: var(--blueToWhite);
}

.fadedBlueToFadeBlue {
    fill: var(--fadedBlueToFadeBlue);
}

.fadedBlueToDark {
    fill: var(--fadedBlueToDark);
}

.blueToFaded {
    fill: var(--blueToFaded);
}

.archive-offcanvas {
    padding: 0;
    border: none;
    background-color: var(--color-container);
}

.swiper, .swiper2 {
    padding: 0;
    border: none;
    margin-top: -10px;
    cursor: pointer;
}

.swiper {
    background-color: var(--color-container);
}

.swiper > svg > path {
    stroke: rgba(244, 246, 251, 0.1);
}

.player-controls > div a {
    color: #bfbfbf;
    display: block;
    line-height: 0;
    padding: 1em;
    text-decoration: none;
}

.player-controls > div a > svg {
    width: 200px;
}

.all {
    font-family: 'Montserrat', 'Rubik', sans-serif !important;
}

.img-row {
    padding: 69px 0 29px 0;
}

.book-name {
    font-weight: 700;
    font-size: 30px;
    line-height: 36px;
    margin-top: 28px;
    color: var(--color-text);
}

.book-name-width, .book-name2 {
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    width: 90%;
    text-align: center;
}

.book-name2 {
    font-weight: 600;
    font-style: normal;
    font-size: 16px;
    line-height: 19.5px;
    color: var(--color-text);
    padding-left: 13px;
}

.svg > path {
    stroke: var(--color-text);
}

.book-author {
    font-weight: 500;
    font-style: normal;
    line-height: 19px;
    color: var(--color-textGray-To-lightGray);
    margin-top: 6px;
}

.book-author2 {
    font-weight: 500;
    font-style: normal;
    line-height: 14.6px;
    color: var(--color-textGray-To-lightGray);
    margin-bottom: 15px;
}

.img {
    display: flex;
    max-height: 40vh;
    min-width: 35vh;
    max-width: 50vw;
    margin-top: -10px;
    box-shadow: 0 0 64px rgba(45, 48, 58, 0.06);
}

input[type=range] {
    width: 100%;
    height: 2px;
}

.time-begin, .time-end {
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    color: var(--color-textDarkGray-To-Blue);
    margin-top: 73px;
}

.button-start {
    margin-top: 1px;
    border: none;
    background-color: var(--color-container);
    color: #0481F4;
}

.forward-left {
    cursor: pointer;
    margin: 15px 6% 0 0;
}

.forward-15-left {
    margin: 15px 6% 0 0;
    cursor: pointer;
}

.forward-15-right {
    margin: 15px 0 0 6%;
    cursor: pointer;
}

.forward-right {
    margin: 15px 0 0 6%;
    cursor: pointer;
}

.speed {
    font-size: 14px;
    line-height: 17px;
    font-weight: 500;
    color: var(--blueToFaded);
    margin-top: 6px;
    cursor: pointer;
}

.footer {
    padding-right: 15px;
    padding-left: 15px;
    margin-top: 50px;
}

.fixed-bottom-main {
    padding-bottom: 20px;
}

/*first swipe offcanvas (archive)*/
.offcanvas-bottom {
    border-radius: 16px 16px 0 0;
    height: 80vh;
    background-color: var(--color-container);
}

.book-button, .audio-button {
    height: 28px;
    width: 100%;
    color: var(--color-textGray-To-lightGray);
    background-color: var(--bg-button-row);
    border: none;
    margin: 5px 0 5px 0;
    font-size: 12px;
    border-radius: 4px;
}

.book-button:focus, .audio-button:focus {
    background-color: var(--btn-focus-bg);
    color: #0481F4;
}

.swiper1-button-row {
    background-color: var(--bg-button-row);
    margin-top: 10px;
    border-radius: 6px;
}

.swiper1-text-1, .swiper1-text-2 {
    font-weight: 500;
    font-size: 14px;
    line-height: 17px;
    color: var(--color-text);
}

.swiper1-text-2 {
    margin-left: 10px;
}

.swiper1-time, .swiper1-time-2 {
    font-size: 14px;
    line-height: 17px;
    color: var(--color-textGray-To-lightGray);
    margin-right: 14px;
}

.swiper1-checked-input {
    margin: 20px 0 20px 0;
    background: var(--bg-button-row);
    border-radius: 6px;
    padding: 11px 14px 11px 10px;
}

.swiper1-row-2 {
    margin-top: 23px;
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

/*third swiper offcanvas (download) */
.offcanvas-bottom3 {
    border-radius: 16px 16px 0 0;
    height: 53vh;
    background-color: var(--color-header);
}

.swiper3-close-btn {
    margin: 13px 13px 0 0;
}

.swiper3-logo-width {
    width: 39px;
    margin: 10px 0 0 40px;
}

.row-text-1 {
    font-weight: 500;
    font-size: 14px;
    line-height: 17px;
    color: #333333;
    margin-top: 16px;
    cursor: pointer;
}

.link {
    text-decoration: none;
    color: var(--color-text);
}

.rows {
    margin-top: 28px;
    cursor: pointer;
}

.last {
    padding-bottom: 15px;
}

.img-back {
    margin-left: 15px;
}

.book-img {
    margin-top: -10px;
    border-radius: 2px;
}

.book-text {
    margin-top: 10px;
    color: #A5A6A7;
    font-style: normal;
    width: 90%;
    overflow-y: hidden;
}
</style>

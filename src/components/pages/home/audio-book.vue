<template>
    <div class="bg row">

        <!-- Modal start -->
        <div class="modal fade" id="exampleModal" data-bs-backdrop="static" tabindex="-1"
             aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">{{ $t('addComment') }}</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <form>
                            <div>
                                <textarea v-model="voteComment" class="form-control" id="message-text"
                                          placeholder="....." rows="4"/>
                            </div>
                        </form>
                    </div>
                    <div class="modal-footer">
                        <button @click="sendVote" type="button" class="btn btn-primary" data-bs-dismiss="modal">
                            {{ $t('send') }}
                        </button>
                    </div>
                </div>
            </div>
        </div>

        <div class="px-0 w-100">
            <img class="bg-image px-0" src="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1552334367i/44318414.jpg" alt="rasm" />
        </div>
        <div class="liner">
        </div>


        <div style="z-index: 1;">
            <!-- Header icon -->
            <div class="row img-row">
                <div class="col-6">
                    <go-back-button :svg-color="'white'"/>
                </div>
                <div class="col-6 d-flex justify-content-end">
                    <img src="../../images/instagram.png" width="30" height="30" alt="" class="instagram me-3">
                    <img src="../../images/export.png" height="30" width="30" alt="" class="send me-3">
                </div>
            </div>

            <!-- Book name -->
            <div class="row">
                <div class="col intersection">
                    <span style="line-height: 20px" title="The Dutch House">
                         The Dutch House
                    </span>
                </div>
            </div>

            <!-- Book content -->
            <div class="row">
                <div class="col book-width p-0">
                    <img class="images-book" src="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1552334367i/44318414.jpg" alt="rasm"/>

                    <router-link to="'/listen/1'">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"
                             class="head-phone">
                            <rect width="16" height="16" rx="8" fill="white"/>
                            <path
                                d="M4.14527 10.7709C3.97444 10.7709 3.83277 10.6292 3.83277 10.4584V8.08335C3.81194 6.95419 4.23277 5.88752 5.0161 5.08752C5.79944 4.29169 6.84944 3.85419 7.9786 3.85419C10.2869 3.85419 12.1661 5.73335 12.1661 8.04169V10.4167C12.1661 10.5875 12.0244 10.7292 11.8536 10.7292C11.6828 10.7292 11.5411 10.5875 11.5411 10.4167V8.04169C11.5411 6.07919 9.94527 4.47919 7.9786 4.47919C7.0161 4.47919 6.12444 4.85002 5.46194 5.52502C4.79527 6.20419 4.4411 7.10835 4.45777 8.07502V10.4542C4.45777 10.6292 4.32027 10.7709 4.14527 10.7709Z"
                                fill="#0481F4"/>
                            <path
                                d="M5.47565 8.1875H5.42148C4.54648 8.1875 3.83398 8.9 3.83398 9.775V10.5583C3.83398 11.4333 4.54648 12.1458 5.42148 12.1458H5.47565C6.35065 12.1458 7.06315 11.4333 7.06315 10.5583V9.775C7.06315 8.9 6.35065 8.1875 5.47565 8.1875Z"
                                fill="#0481F4"/>
                            <path
                                d="M10.5792 8.1875H10.525C9.65 8.1875 8.9375 8.9 8.9375 9.775V10.5583C8.9375 11.4333 9.65 12.1458 10.525 12.1458H10.5792C11.4542 12.1458 12.1667 11.4333 12.1667 10.5583V9.775C12.1667 8.9 11.4542 8.1875 10.5792 8.1875Z"
                                fill="#0481F4"/>
                        </svg>
                    </router-link>

                    <router-link to="/dark-mode/1">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"
                             class="read-logo">
                            <rect width="16" height="16" rx="8" fill="white"/>
                            <path
                                d="M7.68815 5.49999V11.2958C7.68815 11.5917 7.38815 11.7958 7.11732 11.6833C6.34232 11.3583 5.37982 11.075 4.69648 10.9833L4.56732 10.9667C4.16315 10.9167 3.83398 10.5458 3.83398 10.1417V5.18749C3.83398 4.68749 4.23815 4.28333 4.73815 4.28333H4.76732C5.55065 4.34999 6.70482 4.71666 7.46732 5.12916C7.60482 5.20416 7.68815 5.34166 7.68815 5.49999Z"
                                fill="#0481F4"/>
                            <path
                                d="M11.2625 4.28333H11.2375C11.1375 4.29166 11.0292 4.30416 10.9167 4.32499C10.4042 4.40833 9.79583 4.58333 9.25 4.79999C8.99167 4.90416 8.75 5.01666 8.5375 5.12916C8.4 5.20416 8.3125 5.34583 8.3125 5.49999V11.2958C8.3125 11.5917 8.6125 11.7958 8.88333 11.6833C9.65833 11.3583 10.6208 11.075 11.3042 10.9833L11.4333 10.9667C11.8375 10.9167 12.1667 10.5458 12.1667 10.1417V5.18749C12.1667 4.68749 11.7625 4.28333 11.2625 4.28333ZM11.0292 8.72083C11.0292 8.88333 10.9125 8.95416 10.7708 8.87499L10.3292 8.62916C10.2833 8.60416 10.2083 8.60416 10.1583 8.62916L9.71667 8.87499C9.575 8.95416 9.45833 8.88333 9.45833 8.72083V7.44166C9.45833 7.24999 9.61667 7.09166 9.80833 7.09166H10.6833C10.875 7.09166 11.0333 7.24999 11.0333 7.44166V8.72083H11.0292Z"
                                fill="#0481F4"/>
                        </svg>
                    </router-link>
                </div>

                <div>
                    <div class="col right-book">
                        <div class="row">
                            <div class="col author">
                                {{ $t('author') }}:
                            </div>
                        </div>
                        <div class="row">
                            <div class="col author-name">
                                <span id="author">
                                    Ann Patchett
                                </span>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col reader">
                                {{ $t('reader') }}:
                            </div>
                        </div>
                        <div class="row">
                            <div class="col reader-name">
                                <span id="reader">
                                    Abdullokh
                                </span>
                            </div>
                        </div>
                        <div class="row" id="mt">
                            <div class="col price">
                                {{ $t('price.price') }}:
                            </div>
                        </div>
                        <div class="row">
                            <div class="col price-number">
                                <span id="price">
                                    35000 {{ $t('price.currency') }}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Star -->
        <div class="block-star">
            <star-rating class="mt-2 ms-0 star-rating" :star="40/10" :show-count="true" :font-size="14"/>

            <div class="row">
                <div class="col timing timing2">
                    <span class="post"> 10h </span>
                    <span class="vertical-line">|</span>
                    <span class="post">76{{ $t('time.mb') }}</span>
                    <span class="vertical-line">|</span>
                    <span class="post">2019</span>
                    <span class="vertical-line">|</span>
                    <span class="post">+16</span>
                </div>
            </div>
        </div>

        <div class="bg-block-1">
            <!-- Listen button -->
            <div class="row buttons-row">
                <div class="col-9 ps-4 pe-1">
                    <Button type="submit" text="listen" height="65" top="0" :onClick="toUrl"/>
                </div>
                <div class="col-3 pe-4">
                    <button class="saved-btn"><img src="../../images/saved-icon.png" alt="#"></button>
                </div>
            </div>

            <!-- Rate -->
            <div class="row">
                <div class="col text-mark ps-0">
                    {{ $t('rateTheBook') }}
                </div>
                <div class="col star-row-2 d-flex justify-content-end pe-4">
                    <img data-bs-toggle="modal" data-bs-target="#exampleModal" src="../../images/audio-book/img_1.png" alt="">
                    <img data-bs-toggle="modal" data-bs-target="#exampleModal" src="../../images/audio-book/img_1.png" alt="">
                    <img data-bs-toggle="modal" data-bs-target="#exampleModal" src="../../images/audio-book/star-simple.png" alt="">
                    <img data-bs-toggle="modal" data-bs-target="#exampleModal" src="../../images/audio-book/star-simple.png" alt="">
                    <img data-bs-toggle="modal" data-bs-target="#exampleModal" src="../../images/audio-book/star-simple.png" alt="">
                </div>
            </div>

            <!-- Hashtags -->
            <div class="row">
                <div class="col hashtag-row ps-0">
                    <span v-for="category in 5" :key="category">
                        <span class="hashtag">#historical {{category}} </span>
                    </span>
                </div>
            </div>

            <!-- Book description -->
            <div class="row">
                <div class="col-12 ps-0 show-more">
                    <input type="checkbox" id="check_id"/>
                    <div class="content description pb-0 mb-0">
                        The Dutch House is a 2019 novel by Ann Patchett. It was published by Harper on September 24, 2019. It tells the story of a brother and sister, Danny and Maeve Conroy, who grow up in a mansion known as the Dutch House, and their lives over five decades.
                        The novel was a finalist for the 2020 Pulitzer Prize for Fiction.
                        The first edition U.S. cover featured a portrait by Noah Saterstrom that was specifically created for the cover. The novel heavily references a painted portrait of Maeve wearing a red coat that was commissioned when she was 10. Saterstrom created a portrait to match Patchett's description.
                        <label for="check_id" id="show_more"> {{ $t('showAll') }}</label>
                        <label for="check_id" id="show_less">{{ $t('showLess') }}</label>
                    </div>

                </div>
            </div>

            <div class="row">
            <span class="d-flex justify-content-center hr">
                <hr style="width: 85%"/>
            </span>
                <div class="col holder mb-3 ps-0">
                    {{ $t('copyrightHolder') }}:
                </div>
                <div class="col Eksmo d-flex justify-content-end">
                    Ann Patchett
                </div>
            </div>

            <div class="row pb-4">
                <div class="col language ps-0">
                    {{ $t('language.language') }}:
                </div>
                <div class="col language-name d-flex justify-content-end">
                    English
                </div>
            </div>
        </div>
        <div class="bg-2" v-if="this.isVisibleSimilarAudioBook">
            <div class="row">
                <div class="col other-books ps-0">
                    {{ $t('similarBooks') }}
                </div>
            </div>

            <!-- Recommended books -->
            <div class="row">
                <div class="col-12 p-0">
                    <div class="wrapper">
                        <div class="row profiles" v-for="book in 10" :key="book">
                            <div class="col-4 book-pc p-0"
                                 :style="{'background': 'center / contain no-repeat url(https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1557181911l/43923951._SY475_.jpg)'}"
                            >
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                                     xmlns="http://www.w3.org/2000/svg" class="tiny-headphone">
                                    <rect width="16" height="16" rx="8" fill="white"/>
                                    <path
                                        d="M4.14527 10.7709C3.97444 10.7709 3.83277 10.6292 3.83277 10.4584V8.08335C3.81194 6.95419 4.23277 5.88752 5.0161 5.08752C5.79944 4.29169 6.84944 3.85419 7.9786 3.85419C10.2869 3.85419 12.1661 5.73335 12.1661 8.04169V10.4167C12.1661 10.5875 12.0244 10.7292 11.8536 10.7292C11.6828 10.7292 11.5411 10.5875 11.5411 10.4167V8.04169C11.5411 6.07919 9.94527 4.47919 7.9786 4.47919C7.0161 4.47919 6.12444 4.85002 5.46194 5.52502C4.79527 6.20419 4.4411 7.10835 4.45777 8.07502V10.4542C4.45777 10.6292 4.32027 10.7709 4.14527 10.7709Z"
                                        fill="#0481F4"/>
                                    <path
                                        d="M5.47565 8.1875H5.42148C4.54648 8.1875 3.83398 8.9 3.83398 9.775V10.5583C3.83398 11.4333 4.54648 12.1458 5.42148 12.1458H5.47565C6.35065 12.1458 7.06315 11.4333 7.06315 10.5583V9.775C7.06315 8.9 6.35065 8.1875 5.47565 8.1875Z"
                                        fill="#0481F4"/>
                                    <path
                                        d="M10.5792 8.1875H10.525C9.65 8.1875 8.9375 8.9 8.9375 9.775V10.5583C8.9375 11.4333 9.65 12.1458 10.525 12.1458H10.5792C11.4542 12.1458 12.1667 11.4333 12.1667 10.5583V9.775C12.1667 8.9 11.4542 8.1875 10.5792 8.1875Z"
                                        fill="#0481F4"/>
                                </svg>
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" class="tiny-reader">
                                    <rect width="16" height="16" rx="8" fill="white"/>
                                    <path
                                        d="M7.68815 5.49999V11.2958C7.68815 11.5917 7.38815 11.7958 7.11732 11.6833C6.34232 11.3583 5.37982 11.075 4.69648 10.9833L4.56732 10.9667C4.16315 10.9167 3.83398 10.5458 3.83398 10.1417V5.18749C3.83398 4.68749 4.23815 4.28333 4.73815 4.28333H4.76732C5.55065 4.34999 6.70482 4.71666 7.46732 5.12916C7.60482 5.20416 7.68815 5.34166 7.68815 5.49999Z"
                                        fill="#0481F4"/>
                                    <path
                                        d="M11.2625 4.28333H11.2375C11.1375 4.29166 11.0292 4.30416 10.9167 4.32499C10.4042 4.40833 9.79583 4.58333 9.25 4.79999C8.99167 4.90416 8.75 5.01666 8.5375 5.12916C8.4 5.20416 8.3125 5.34583 8.3125 5.49999V11.2958C8.3125 11.5917 8.6125 11.7958 8.88333 11.6833C9.65833 11.3583 10.6208 11.075 11.3042 10.9833L11.4333 10.9667C11.8375 10.9167 12.1667 10.5458 12.1667 10.1417V5.18749C12.1667 4.68749 11.7625 4.28333 11.2625 4.28333ZM11.0292 8.72083C11.0292 8.88333 10.9125 8.95416 10.7708 8.87499L10.3292 8.62916C10.2833 8.60416 10.2083 8.60416 10.1583 8.62916L9.71667 8.87499C9.575 8.95416 9.45833 8.88333 9.45833 8.72083V7.44166C9.45833 7.24999 9.61667 7.09166 9.80833 7.09166H10.6833C10.875 7.09166 11.0333 7.24999 11.0333 7.44166V8.72083H11.0292Z"
                                        fill="#0481F4"/>
                                </svg>
                            </div>
                            <div class="col ">
                                <div class="row">
                                    <div class="col book-name ps-0">
                                        Such a Fun Age
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col book-author ps-0">
                                        Kiley Reid
                                    </div>
                                </div>

                                <star-rating :star="3" :width="10" :height="10" :padding="4.7" :count-margin="-40" :font-size="10"/>

                                <div class="row">
                                    <div class="col-6 hashtag-book">
                                        #Hardcover
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Chats -->
        <div class="col ps-0 scrollable-row">
            <div class="row">
                <div class="col reviews">
                    {{ $t('reviews') }}
                </div>
                <div class="col reviews-count d-flex justify-content-end pe-3">
                    {{ $t('total') }}: 9
                </div>
            </div>
            <div class="row" v-for="vote in 9" :key="vote">
                <div class="col-2 comment-logo">
                    <img src="../../images/profile/logo-coment.png" alt>
                </div>
                <div class="col comment-name">
                    <div class="row">
                        Abdullokh Khamzaev
                    </div>
                    <div class="row">
                        <div class="col comment-date p-0">
                            2021-09-0{{vote}}
                        </div>
                    </div>
                    <!--star rating-->
                    <star-rating :star="4" :width="10" :height="10" :padding="4.7" :count-margin="-40" :font-size="10" />
                    <!--star rating-->
                </div>
                <div class="row description-2-row">
                    <div class="col d-flex justify-content-center">
                        <span class="comment-text">
                            I think this book never can be better than developer who created this Application.
                            Thank you so much <span class="myName" @click="openMyGitHub">@Abdullokh</span> 😍 👏
                        </span>
                    </div>
                </div>
            </div>
        </div>

        <!-- Footer -->
        <div class="row m-0 p-0 fixed-bottom">
            <div class="player-timeline">
                <div :style="progressStyle" class="player-progress"></div>
                <div v-on:click="seek" class="player-seeker" title="Seek"></div>
            </div>
            <div class="col">
                <div class="row">
                    <div class="col-2 tiny-book d-flex justify-content-end">
                        <img src="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1552334367i/44318414.jpg" width="30" height="45" class="audio-image" alt="">
                    </div>
                    <div class="col txt-wrap">
                        <div class="row last-row">
                            <div class="col ps-0 listen-name">
                                The Dutch House
                            </div>
                        </div>
                        <div class="row">
                            <div class="col ps-0 listen-author">
                                Abdullokh
                            </div>
                        </div>
                    </div>
                    <div class="col-4 d-flex justify-content-end">
                        <svg @click="skipForward" width="30" height="31" viewBox="0 0 30 31" fill="none"
                             xmlns="http://www.w3.org/2000/svg" class="stop-circle">
                            <path
                                d="M18.0392 21.65H15.1768C14.6643 21.65 14.2393 21.225 14.2393 20.7125C14.2393 20.2 14.6643 19.775 15.1768 19.775H18.0392C18.5767 19.775 19.0143 19.3375 19.0143 18.8C19.0143 18.2625 18.5767 17.825 18.0392 17.825H15.1768C14.8768 17.825 14.5893 17.675 14.4143 17.4375C14.2393 17.2 14.1892 16.875 14.2892 16.5875L15.2392 13.725C15.3642 13.3375 15.7268 13.0875 16.1268 13.0875H19.9518C20.4643 13.0875 20.8893 13.5125 20.8893 14.025C20.8893 14.5375 20.4643 14.9625 19.9518 14.9625H16.8017L16.4767 15.95H18.0392C19.6142 15.95 20.8893 17.225 20.8893 18.8C20.8893 20.375 19.6017 21.65 18.0392 21.65Z"
                                fill="#0481F4"/>
                            <path
                                d="M11.9259 21.6489C11.4134 21.6489 10.9884 21.2239 10.9884 20.7114V16.474L10.7509 16.7489C10.4009 17.1364 9.8134 17.1614 9.4259 16.8239C9.0384 16.4739 9.0134 15.8864 9.3509 15.4989L11.2259 13.4115C11.4884 13.124 11.9009 13.0239 12.2634 13.1614C12.6259 13.2989 12.8634 13.649 12.8634 14.0365V20.7239C12.8634 21.2364 12.4509 21.6489 11.9259 21.6489Z"
                                fill="#0481F4"/>
                            <path opacity="0.2"
                                  d="M24.6133 9.68752C24.3008 9.27502 23.7133 9.18757 23.3008 9.50007C22.8883 9.81257 22.8007 10.4001 23.1132 10.8126C24.4632 12.6126 25.1758 14.7125 25.1758 16.8875C25.1758 22.5 20.6132 27.0626 15.0007 27.0626C9.38825 27.0626 4.82573 22.5 4.82573 16.8875C4.82573 11.275 9.38825 6.71251 15.0007 6.71251C15.7257 6.71251 16.4632 6.80005 17.2632 6.98755C17.3007 7.00005 17.3383 6.98755 17.3758 6.98755C17.4133 6.98755 17.4382 7.01258 17.4632 7.01258C17.5007 7.01258 17.5257 7.00007 17.5632 7.00007C17.6007 7.00007 17.6383 6.98754 17.6883 6.97504C17.7633 6.96254 17.8257 6.92504 17.8882 6.90004C17.9257 6.87504 17.9633 6.86256 18.0008 6.83756C18.0133 6.82506 18.0383 6.82504 18.0508 6.81254C18.0883 6.78754 18.1007 6.75003 18.1257 6.72503C18.1757 6.67503 18.2132 6.63753 18.2507 6.57503C18.2882 6.52503 18.3007 6.46251 18.3257 6.40001C18.3382 6.36251 18.3633 6.32506 18.3758 6.28756C18.3758 6.26256 18.3758 6.25007 18.3758 6.22507C18.3883 6.16257 18.3883 6.10004 18.3758 6.03754C18.3758 5.97504 18.3758 5.92502 18.3633 5.86252C18.3508 5.81252 18.3258 5.76252 18.3008 5.70002C18.2758 5.63752 18.2508 5.57507 18.2133 5.52507C18.2008 5.51257 18.2007 5.48753 18.1882 5.47503L15.7133 2.38756C15.3883 1.98756 14.8008 1.91257 14.4008 2.23757C14.0008 2.56257 13.9383 3.15005 14.2508 3.55005L15.2757 4.82508C15.1757 4.82508 15.0757 4.81257 14.9757 4.81257C8.33822 4.81257 2.92578 10.2126 2.92578 16.8626C2.92578 23.5126 8.32572 28.9125 14.9757 28.9125C21.6257 28.9125 27.0257 23.5126 27.0257 16.8626C27.0507 14.3001 26.2008 11.8125 24.6133 9.68752Z"
                                  fill="#0481F4"/>
                        </svg>
                        <button v-on:click.prevent="playing = !playing" :title="(playing) ? 'Pause' : 'Play'" class="button-start">
                            <svg v-if="playing" width="38" height="38" viewBox="0 0 38 38" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M19 0C8.512 0 0 8.512 0 19C0 29.488 8.512 38 19 38C29.488 38 38 29.488 38 19C38 8.512 29.507 0 19 0ZM16.625 24.757C16.625 25.669 16.245 26.03 15.276 26.03H12.806C11.837 26.03 11.457 25.669 11.457 24.757V13.243C11.457 12.331 11.837 11.97 12.806 11.97H15.257C16.226 11.97 16.606 12.331 16.606 13.243V24.757H16.625ZM26.657 24.757C26.657 25.669 26.277 26.03 25.308 26.03H22.857C21.888 26.03 21.508 25.669 21.508 24.757V13.243C21.508 12.331 21.888 11.97 22.857 11.97H25.308C26.277 11.97 26.657 12.331 26.657 13.243V24.757Z"
                                    fill="#0481F4"/>
                            </svg>
                            <svg v-else xmlns="http://www.w3.org/2000/svg" width="38" height="38" fill="currentColor"
                                 class="bi bi-play-circle-fill" viewBox="0 0 16 16">
                                <path
                                    d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM6.79 5.093A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814l-3.5-2.5z"/>
                            </svg>
                        </button>
                    </div>
                </div>

                <!--footer row begin -->
                <div class="row">
                    <hr class="divider-bottom">
                    <div class="col-12 footer d-flex justify-content-center">
                        <router-link to="/home" exact-active-class="active">
                            <svg width="30" height="30" viewBox="0 0 30 30" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path class="first"
                                      d="M27.5 13.125C27.5 11.6125 26.4875 9.67496 25.25 8.81246L17.525 3.39996C15.775 2.17496 12.9625 2.23746 11.275 3.54996L4.5375 8.79996C3.4125 9.67496 2.5 11.5375 2.5 12.95V22.2125C2.5 25.1125 4.8625 27.4875 7.7625 27.4875H22.2375C25.1375 27.4875 27.5 25.1125 27.5 22.225V18.35"
                                      stroke="#65B1F9" stroke-width="1.5" stroke-linecap="round"
                                      stroke-linejoin="round"/>
                                <path class="second" d="M15 22.4875V18.7375" stroke="#65B1F9" stroke-width="1.5"
                                      stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </router-link>

                        <router-link to="/support-service" exact-active-class="active">
                            <svg width="30" height="30" viewBox="0 0 30 30" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path class="first"
                                      d="M2.5 14.45V16.7876C2.5 20.5376 5 23.0376 8.75 23.0376H13.75L19.3125 26.7375C20.1375 27.2875 21.25 26.7001 21.25 25.7001V23.0376C25 23.0376 27.5 20.5376 27.5 16.7876V9.28748C27.5 5.53748 25 3.03748 21.25 3.03748H8.75C5 3.03748 2.5 5.53748 2.5 9.28748"
                                      stroke="#65B1F9" stroke-width="1.5" stroke-miterlimit="10"
                                      stroke-linecap="round" stroke-linejoin="round"/>
                                <path class="second"
                                      d="M15.0007 14.2V13.9375C15.0007 13.0875 15.5258 12.6375 16.0508 12.275C16.5633 11.925 17.0757 11.475 17.0757 10.65C17.0757 9.49999 16.1507 8.57495 15.0007 8.57495C13.8507 8.57495 12.9258 9.49999 12.9258 10.65"
                                      stroke="#65B1F9" stroke-width="1.5" stroke-linecap="round"
                                      stroke-linejoin="round"/>
                                <path class="second" d="M14.9944 17.1875H15.0056" stroke="#65B1F9"
                                      stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </router-link>
                        <router-link to="/library" exact-active-class="active">
                            <svg width="30" height="30" viewBox="0 0 30 30" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path class="first"
                                      d="M27.5 13.7375V5.83749C27.5 4.33749 26.275 3.22499 24.7875 3.34999H24.7125C22.0875 3.57499 18.1 4.91249 15.875 6.31249L15.6625 6.44999C15.3 6.67499 14.7 6.67499 14.3375 6.44999L14.025 6.26249C11.8 4.87499 7.825 3.54999 5.2 3.33749C3.7125 3.21249 2.5 4.33749 2.5 5.82499V20.925C2.5 22.125 3.475 23.25 4.675 23.4L5.0375 23.45C7.75 23.8125 11.9375 25.1875 14.3375 26.5L14.3875 26.525C14.725 26.7125 15.2625 26.7125 15.5875 26.525C17.9875 25.2 22.1875 23.8125 24.9125 23.45L25.325 23.4C26.525 23.25 27.5 22.125 27.5 20.925V18.775"
                                      stroke="#65B1F9" stroke-width="1.5" stroke-linecap="round"
                                      stroke-linejoin="round"/>
                                <path class="second" d="M15 6.86249V25.6125" stroke="#65B1F9" stroke-width="1.5"
                                      stroke-linecap="round" stroke-linejoin="round"/>
                                <path class="second" d="M9.6875 10.6125H6.875" stroke="#65B1F9" stroke-width="1.5"
                                      stroke-linecap="round" stroke-linejoin="round"/>
                                <path class="second" d="M10.625 14.3625H6.875" stroke="#65B1F9" stroke-width="1.5"
                                      stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </router-link>

                        <router-link to="/search" exact-active-class="active-search">
                            <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path class="first"
                                      d="M13.75 2.5C19.9625 2.5 25 7.5375 25 13.75C25 19.9625 19.9625 25 13.75 25C7.5375 25 2.5 19.9625 2.5 13.75C2.5 9.375 5 5.575 8.6625 3.7125"
                                      stroke="#65B1F9" stroke-width="1.5" stroke-linecap="round"
                                      stroke-linejoin="round"/>
                                <path class="second"
                                      d="M23.8382 26.2125C24.5007 28.2125 26.0132 28.4125 27.1757 26.6625C28.2507 25.0625 27.5507 23.75 25.6257 23.75C24.1882 23.75 23.3882 24.8625 23.8382 26.2125Z"
                                      stroke="#65B1F9" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"
                                />
                            </svg>
                        </router-link>

                        <router-link to="/progress-audio" exact-active-class="active-profile">
                            <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path class="first"
                                      d="M13.0379 3.025C14.2504 2.325 15.7504 2.325 16.9754 3.025L24.4004 7.31249C25.6129 8.01249 26.3629 9.31254 26.3629 10.725V19.275C26.3629 20.675 25.6129 21.9751 24.4004 22.6876L16.9754 26.975C15.7629 27.675 14.2629 27.675 13.0379 26.975L5.61289 22.6876C4.40039 21.9876 3.65039 20.6875 3.65039 19.275V10.725C3.65039 9.32504 4.40039 8.02499 5.61289 7.31249L7.98789 5.93752"
                                      stroke="#65B1F9" stroke-width="1.5" stroke-linecap="round"
                                      stroke-linejoin="round"/>
                                <path class="second"
                                      d="M15.0004 13.75C16.6089 13.75 17.9129 12.446 17.9129 10.8375C17.9129 9.22893 16.6089 7.92502 15.0004 7.92502C13.3919 7.92502 12.0879 9.22893 12.0879 10.8375C12.0879 12.446 13.3919 13.75 15.0004 13.75Z"
                                      stroke="#65B1F9" stroke-width="1.5" stroke-linecap="round"
                                      stroke-linejoin="round"/>
                                <path class="second"
                                      d="M20 20.825C20 18.575 17.7625 16.75 15 16.75C12.2375 16.75 10 18.575 10 20.825"
                                      stroke="#65B1F9" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"
                                />
                            </svg>
                        </router-link>
                    </div>
                </div>

                <audio
                    :loop="looping" ref="audio"
                    src="https://muzes.net/uploads/music/2021/08/Andrei_Banuta_Mon_Ami_Ratata_HAYASA_G_Remix_4K.mp3"
                    v-on:timeupdate="update" v-on:loadeddata="load" v-on:pause="playing = false"
                    v-on:play="playing = true" preload="auto" style="display: none;">
                </audio>
            </div>
        </div>
    </div>
</template>

<script>
import StarRating from "@/components/modals/star-rating";
import Button from "@/components/button/Button";
import Swal from "sweetalert2";
import GoBackButton from '../../modals/GoBackButton'

export default {
    name: "audio-book",
    components: { GoBackButton, Button, StarRating},
    computed: {
        percentComplete() {
            return this.currentSeconds / this.durationSeconds * 100;
        },
        progressStyle() {
            return {width: `${this.percentComplete}%`};
        },
    },
    props: {
        autoPlay: {
            type: Boolean,
            default: false
        },
        loop: {
            type: Boolean,
            default: false
        }
    },
    data() {
        return {
            currentSeconds: 0,
            durationSeconds: 0,
            loaded: false,
            looping: false,
            playing: false,
            voteComment: '',
            voteRating: 0,
            voteTotalCount: 0,
            showVote: false,
            showCount: false,
            isVisibleSimilarAudioBook: true,
            countOfVotes : 0
        }
    },
    methods: {
        openMyGitHub() {
            window.open('https://github.com/Abdullokh-dev');
        },
        convertDateAnnouncement(inputFormat) {
            function pad(s) {
                return (s < 10) ? '0' + s : s;
            }

            let d = new Date(inputFormat)
            return [pad(d.getDate()), pad(d.getMonth() + 1), d.getFullYear()].join('-')
        },
        toUrl() {
            this.$router.push('/listen/1')
        },
        skipForward() {
            this.$refs.audio.currentTime += 15;
        },
        load() {
            if (this.$refs.audio.readyState >= 2) {
                this.loaded = true;
                this.durationSeconds = this.$refs.audio.duration;

                return this.playing = this.autoPlay;
            }

            throw new Error('Failed to load sound file.');
        },
        seek(e) {
            if (!this.loaded) return;

            const bounds = e.target.getBoundingClientRect();
            const seekPos = (e.clientX - bounds.left) / bounds.width;

            this.$refs.audio.currentTime = parseInt(this.$refs.audio.duration * seekPos);
        },
        update() {
            this.currentSeconds = this.$refs.audio.currentTime;
        },
        sendVote() {
            Swal.fire({
                position: 'center',
                icon: 'success',
                iconColor: '#0481F4',
                confirmButtonColor: '#0481F4',
                showConfirmButton: false,
                title: this.$t('commentSent'),
                showCancelButton: false,
                timer: 1500,
                timerProgressBar: true,
            })
        },
        disable() {
            this.$root.showOverlay = false
        },
    },
    watch: {
        playing(value) {
            if (value) {
                return this.$refs.audio.play();
            }
            this.$refs.audio.pause();
        },
    },
    mounted() {
        this.$root.showOverlay = true
        setTimeout(this.disable, 1000)
    },
    updated() {
        if (this.$refs.audio.currentTime === this.durationSeconds) {
            this.$refs.audio.currentTime = 0;
        }
    },
    created() {
        this.looping = this.loop;
    }
}
</script>

<style scoped>
.modal-title {
    color: var(--color-text);
}

.modal-content {
    background-color: var(--color-container);
}

.myName {
    color: #0d6efd;
    cursor: pointer;
    text-decoration: underline;
}

input[type='checkbox'] {
    position: absolute;
    opacity: 0;
}

.content {
    overflow: hidden;
    max-height: calc(5em + 15px);
    position: relative;
}

label#show_more {
    cursor: pointer;
    position: absolute;
    top: calc(4em + 10px);
    right: 0;
    left: 0;
    background: var(--color-container);
    color: #0d6efd;
    text-align: end;
    padding-top: 5px;
}

label#show_less {
    display: block;
    cursor: pointer;
    position: absolute;
    top: 100%;
    right: 0;
    left: 0;
    color: #0d6efd;
    background: var(--color-container);
    text-align: end;
}

input[type='checkbox'] ~ .content label#show_more {
    display: block;
}

input[type='checkbox'] ~ .content label#show_less {
    display: none;
}

input[type='checkbox']:checked ~ .content label#show_more {
    display: none;
}

input[type='checkbox']:checked ~ .content label#show_less {
    display: block;
}

input[type='checkbox']:checked ~ .content {
    max-height: initial;
    overflow: visible;
}

.player-timeline {
    background-color: #C3E2FF;
    height: 3px;
    position: relative;
}

.player-progress, .player-seeker {
    bottom: 0;
    height: 100%;
    left: 0;
    position: absolute;
    top: 0;
}

.player-progress {
    background-color: #2C9AFF;
    z-index: 1;
}

.player-seeker {
    cursor: pointer;
    width: 100%;
    z-index: 2;
}

.bg-image {
    position: absolute;
    width: 100% !important;
    height: 317px !important;
    z-index: -2;
}

.liner {
    position: absolute;
    z-index: -1;
    background: var(--bg-book-liner);
    backdrop-filter: blur(10px);
    width: 100% !important;
    height: 330px !important;
}

.bg {
    font-family: 'Montserrat', 'Rubik', sans-serif !important;
}

.bg::-webkit-scrollbar {
    display: none;
    -ms-overflow-style: none; /* IE and Edge */
}

.right-book {
    margin: 0 0 0 166px;
}

.block-star {
    margin-left: 175px;
    padding: 0;
    max-width: 160px;
    margin-top: 10px;
}

.bg-block-1 {
    margin-top: 18px;
    border-radius: 0 0 12px 12px;
}

.other-books {
    margin: 20px 0 16px 19px;
    font-size: 14px;
    line-height: 17px;
    color: var(--color-text);
}

.star-rating {
    padding-left: 1px;
}

.scrollable-row {
    overflow-x: hidden;
    border-radius: 12px;
    margin-bottom: 152px;
    padding-bottom: 10px;
    background-color: var(--color-header);
}

.scrollable-row::-webkit-scrollbar {
    width: 0;
}

.profiles {
    display: flex;
    border: 1px solid var(--color-block);
    border-radius: 12px;
    min-width: 245px;
    height: 135px;
    margin-left: 19px;
    background-color: var(--color-block);
}

.book-name {
    font-weight: 600;
    font-size: 16px;
    margin-top: 22px;
    color: var(--color-text);
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    width: 100px;
}

.book-author {
    font-weight: 400;
    font-style: normal;
    font-size: 10px;
    color: var(--color-text-to-blue);
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    width: 100px;
}

.wrapper {
    display: flex;
    flex: 74px;
    overflow-x: scroll;
    user-select: none;
    width: 100%;
    gap: 14px;
    margin-bottom: 17px;
    padding-right: 30px;
}

.wrapper::-webkit-scrollbar {
    width: 0;
}

.book-pc {
    background-size: cover !important;
    border-radius: 7px;
    margin: 15px;
    height: 99px;
    width: 67px;
}

.bg-2 {
    background-color: var(--color-container);
}

.img-row {
    padding: 70px 0 29px 0;
}

.intersection {
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    font-size: 30px;
    color: white;
    text-align: center;
    font-weight: 700;
    margin-bottom: 30px;
}

.author, .reader, .price {
    font-size: 12px;
    font-weight: 500;
    color: rgb(180, 194, 207);
    margin-bottom: -2px;
}

.price {
    margin-top: 6px;
}

.author-name, .reader-name, .price-number {
    font-size: 14px;
    line-height: 17px;
    font-weight: 500;
    color: white;
    margin-bottom: -1px;
}

.reader {
    padding-top: 4px;
}

.book-width {
    background-image: -moz-element(images-book);
    background-repeat: no-repeat;
    margin-left: 36px;
    max-width: 116px;
    position: absolute;
}

.images-book {
    width: 116px;
    height: 173px;
    border-radius: 10px;
}

.timing {
    color: var(--color-text-to-blue);
    font-size: 12px;
}

.timing2 {
    margin-top: 1px;
    padding-bottom: 14px;
}

.post, .vertical-line {
    margin-right: 5px;
}

.buttons-row {
    margin-top: 10px;
}

.saved-btn {
    background-color: #177EE6;
    height: 65px;
    border: none;
    border-radius: 12px;
    width: 100%;
}

.text-mark {
    font-weight: 500;
    font-size: 12px;
    line-height: 15px;
    color: var(--color-text-to-blue);
    margin: 25px 0 0 35px;
}

.star-row-2 {
    margin: 20px 0 0 0;
}

.star-row-2 > img {
    margin-left: 10%;
}

.hashtag {
    background-color: #0481F4;
    color: #FFFFFF;
    border-radius: 10px;
    padding: 3px 10px 5px 10px;
    font-size: 10px;
    margin-right: 8px;
    display: inline-block;
}

.hashtag-book {
    background-color: #0481F4;
    text-align: center;
    padding: 2px 9px 3px 9px;
    color: #FFFFFF;
    font-size: 10px;
    line-height: 12px;
    border-radius: 10px;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    width: 110px !important
}

.hashtag-row {
    margin: 20px 0 0 25px;
}

.description {
    font-size: 12px;
    padding: 16px 0 0 35px;
    line-height: 15px;
    color: var(--color-text);
}

.comment-text {
    font-size: 10px;
    font-weight: 400;
    line-height: 12px;
    width: 90%;
    color: var(--color-text);
}

.description-2-row {
    margin-top: -20px;
}

.holder, .language {
    font-weight: 400;
    font-style: normal;
    font-size: 14px;
    margin-left: 25px;
    color: var(--color-text-to-blue);
}

.Eksmo, .language-name {
    font-weight: 500;
    font-style: normal;
    font-size: 14px;
    color: #0481F4;
}

.hr {
    height: 25px;
    color: #97CAFB !important;
}

.tiny-book {
    width: 60px;
    padding-top: 16px;
    padding-bottom: 15px;
}

.divider-bottom {
    height: 2.5px;
    margin-top: 0;
    margin-bottom: 0;
    color: #97CAFB;
}

.listen-name {
    font-weight: 600;
    font-style: normal;
    font-size: 16px;
    color: var(--color-text);
    margin-top: 18px;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
}

.txt-wrap {
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    width: 100%;
}

.audio-image {
    border-radius: 3px;
}

.listen-author {
    font-size: 14px;
    line-height: 17px;
    color: var(--color-text-to-blue);
}

.stop-circle {
    margin: 22px 10px 0 0;
}

.button-start {
    border: none;
    padding: 0 !important;
    background-color: var(--color-header);
    color: #0481F4;
    margin-right: 15px;
}

.head-phone {
    margin: -58px 0 0 9px;
}

.read-logo {
    margin: -58px 0 0 4px;
}

.tiny-headphone {
    margin: 78px 0 0 5px;
}

.tiny-reader {
    margin: 78px 0 0 2px;
}

.reviews {
    font-weight: 600;
    font-style: normal;
    font-size: 14px;
    color: var(--color-text);
    line-height: 17px;
    margin: 20px 0 0 19px;
}

.reviews-count {
    font-weight: 500;
    font-style: normal;
    font-size: 14px;
    line-height: 17px;
    color: #BDBDBD;
    margin-top: 20px;
}

.comment-name {
    color: var(--color-text);
    font-size: 16px;
    font-weight: 500;
    margin: 13px 0 0 10px;
}

.comment-logo {
    width: 86px;
    margin-top: -10px;
}

.comment-date {
    color: var(--color-text-to-blue);
    font-size: 10px;
}

.head-phone {
    padding: 0;
}

.read-logo {
    padding: 0;
}

.fixed-bottom {
    background-color: var(--color-block);
}

.active svg > .first, .active-message-question svg > .first {
    fill: #0481F4 !important;
    stroke: none;
}

.active svg > .second, .active-message-question svg > .second {
    stroke: white;
}

.active-search svg > .first {
    fill: #0481F4;
    stroke: none;
}

.active-search svg > .second {
    fill: #0481F4 !important;
    stroke-width: 1.5;
    stroke: #0481F4;
}

.active-profile svg > .first {
    fill: #0481F4;
    stroke: none;
}

.active-profile svg > .second {
    fill: white !important;
    stroke: none;
}

.footer {
    height: 78px;
    background: var(--color-block);
    align-items: center !important;
    gap: 11%;
    margin-bottom: -1px;
}

</style>

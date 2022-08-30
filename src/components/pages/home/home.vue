<template>
    <div ref="scroll" class="all">

        <div class="row">
            <div class="col bg-first-content">
                <!-- Search input -->
                <div class="row">
                    <div class="col mt-3 d-flex justify-content-center">
                        <div class="form-input">
                            <span class="icon">
                                <img alt="" aria-hidden="true" class="fa fa-envelope" src="../../images/Search.png">
                            </span>
                            <input class="form-control" placeholder="Поиск" type="text">
                        </div>
                    </div>
                </div>

                <div class="row">
                    <div class="col position-text ps-4">
                        {{ $t('home.moments') }}
                    </div>
                </div>
                <!-- Stories -->
                <div class="row">
                    <div class="col-12 pe-0 ps-0">
                        <div class="stories-container ps-3">
                            <figure v-for="profile in 20" :key="profile.index" class="profiles">
                                <img :src="'https://picsum.photos/id/' + profile + 3 + '/740/740'" alt="" class="photo" @click="pushMyProfile"/>
                                <figcaption class="story-name">Abdullokh Dev</figcaption>
                            </figure>
                        </div>
                    </div>
                </div>

                <!-- Banner -->
                <div class="row mt-1 carousel-row" style="height: 48.4vw">
                    <div class="col px-0 d-flex justify-content-center">
                        <hooper :auto-play="false" :centerMode="true" :infiniteScroll="true"
                                :itemsToShow="1.2" :playSpeed="5000" :transition="1200" style="height: 48.2vw;"
                        >
                            <slide v-for="banner in 6" :key="banner.index" class="pt-4">
                                <img class="slide-content"
                                     src="https://aureatelabs.com/wp-content/uploads/Vue-JS-Developert-Job-Banner.jpg"
                                     @click="pushMyGithub"
                                >
                            </slide>
                            <hooper-pagination slot="hooper-addons" style=""></hooper-pagination>
                        </hooper>
                    </div>
                </div>

            </div>
        </div>

        <!-- Categories -->
        <div class="row">
            <div class="col bg">
                <div class="row">
                    <div class="col category-text ps-4">
                        {{ $t('home.categories') }}
                    </div>
                </div>

                <div class="row">
                    <div class="col-12 ps-0 pe-0">
                        <div class="stories-container-2">
                            <div v-for="n in 10" :key="n.index" class="profiles-2">
                                <div class="photo-2">
                                    <img :src="'https://picsum.photos/id/' + n + 4 + '/740/740'" alt="rasm"/>
                                </div>
                                <div class="category-name"> category {{ n }} </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="row">
                    <div class="col category-text ps-4">
                        {{ $t('home.recommend') }}
                    </div>
                </div>
            </div>
        </div>

        <!-- Books -->
        <div class="row body d-flex justify-content-center">
            <div class="col-11">
                <!-- Books -->
                <div v-for="book in 10" :key="book.index" class="row book-row">
                    <div class="col-2">
                        <img :src="'https://picsum.photos/id/' + book + 4 + '/430/540'" alt="rasm" class="book-img">

                        <svg class="head-phone" fill="none" height="10" viewBox="0 0 16 16" width="10"
                             xmlns="http://www.w3.org/2000/svg">
                            <rect fill="white" height="16" rx="8" width="16"/>
                            <path
                                d="M7.68815 5.49999V11.2958C7.68815 11.5917 7.38815 11.7958 7.11732 11.6833C6.34232 11.3583 5.37982 11.075 4.69648 10.9833L4.56732 10.9667C4.16315 10.9167 3.83398 10.5458 3.83398 10.1417V5.18749C3.83398 4.68749 4.23815 4.28333 4.73815 4.28333H4.76732C5.55065 4.34999 6.70482 4.71666 7.46732 5.12916C7.60482 5.20416 7.68815 5.34166 7.68815 5.49999Z"
                                fill="#0481F4"/>
                            <path
                                d="M11.2625 4.28333H11.2375C11.1375 4.29166 11.0292 4.30416 10.9167 4.32499C10.4042 4.40833 9.79583 4.58333 9.25 4.79999C8.99167 4.90416 8.75 5.01666 8.5375 5.12916C8.4 5.20416 8.3125 5.34583 8.3125 5.49999V11.2958C8.3125 11.5917 8.6125 11.7958 8.88333 11.6833C9.65833 11.3583 10.6208 11.075 11.3042 10.9833L11.4333 10.9667C11.8375 10.9167 12.1667 10.5458 12.1667 10.1417V5.18749C12.1667 4.68749 11.7625 4.28333 11.2625 4.28333ZM11.0292 8.72083C11.0292 8.88333 10.9125 8.95416 10.7708 8.87499L10.3292 8.62916C10.2833 8.60416 10.2083 8.60416 10.1583 8.62916L9.71667 8.87499C9.575 8.95416 9.45833 8.88333 9.45833 8.72083V7.44166C9.45833 7.24999 9.61667 7.09166 9.80833 7.09166H10.6833C10.875 7.09166 11.0333 7.24999 11.0333 7.44166V8.72083H11.0292Z"
                                fill="#0481F4"/>
                        </svg>

                    </div>

                    <div class="col ps-0" style="min-width: 50%">
                        <div class="row">
                            <div class="col book-name">
                                <router-link :to="'book/' + book" class="link">
                                    Human Of Next Year
                                </router-link>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col book-author me-3">
                                Abdullokh
                            </div>
                        </div>
                        <div class="col star-row">
                            <span>
                                <img v-for="n in 3" :key="n.index" alt="" class="star" src="../../images/star-gold.png">
                                <img v-for="n in 1" :key="n.index" alt="" class="star" src="../../images/star-grey.png">
                            </span>
                            <span class="download-count"> {{ book }}.{{ book + 2 }} </span>
                        </div>
                    </div>
                    <div class="col book-price-row d-flex justify-content-end">
                        <span class="book-price">{{ book + '000' }} {{ $t('price.currency') }}</span>
                    </div>
                </div>
                <!-- Audio Books -->
                <div v-for="audioBook in 10" :key="audioBook.index" class="row book-row">
                    <div class="col-2">
                        <img :src="'https://picsum.photos/id/' + audioBook + 4 + '/430/540'" alt="rasm"
                             class="book-img">

                        <svg class="head-phone" fill="none" height="10" viewBox="0 0 16 16"
                             width="10"
                             xmlns="http://www.w3.org/2000/svg">
                            <rect fill="white" height="16" rx="8" width="16"/>
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
                    </div>

                    <div class="col ps-0" style="min-width: 50%">
                        <div class="row">
                            <div class="col book-name">
                                <router-link :to="'/audio-book/' + audioBook" class="link">
                                    Abdullokh's audio-book
                                </router-link>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col book-author me-3">
                                Abdullokh
                            </div>
                        </div>
                        <div class="col star-row">
                            <span>
                                <img v-for="star in 3" :key="star.index" alt="" class="star" src="../../images/star-gold.png">
                                <img v-for="greyStar in 1" :key="greyStar.index" alt="" class="star"
                                     src="../../images/star-grey.png">
                            </span>
                            <span class="download-count"> {{ audioBook }}.{{ audioBook + 2 }} </span>
                        </div>
                    </div>
                    <div class="col book-price-row d-flex justify-content-end">
                        <span class="book-price"> {{ audioBook }}000  {{ $t('price.currency') }}</span>
                    </div>
                </div>
            </div>
        </div>

        <!-- Footer component -->
        <FooterMenu/>
    </div>
</template>

<script>
import FooterMenu from "@/components/footer/footer";
import {Hooper, Pagination as HooperPagination, Slide} from 'hooper';
import 'hooper/dist/hooper.css';

export default {
    name: "home",
    components: {
        FooterMenu,
        Hooper,
        HooperPagination,
        Slide
    },
    methods: {
        pushMyGithub() {
            window.open('https://github.com/Abdullokh-dev');
        },
        pushMyProfile() {
            window.open('https://mailchi.mp/ba70c9cb6bda/abdullokh_dev')
        }
    },
}
</script>

<style scoped>

.all {
    font-family: 'Rubik', sans-serif !important;
}

.bg-first-content {
    background-color: var(--color-block);
    border-radius: 0 0 15px 15px;
}

.star-row {
    width: 135px !important;
}

.star {
    padding-right: 6px;
}

.download-count {
    font-family: 'Montserrat', 'Rubik', sans-serif !important;
    font-weight: 500;
    color: #828282;
    font-size: 12px;
    line-height: 15px;
    font-style: normal;
    margin-top: 6px;
    margin-left: 2px;
}

.book-author {
    font-size: 12px;
    color: #9597A1;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
}

.book-price-row {
    display: inline;
    padding-right: 15px;

}

.book-price {
    color: #0481F4;
    margin: 36px 0 0 0;
    position: absolute;
}

.col-2 {
    width: 71px !important;
}

.book-name {
    font-weight: 500;
    font-size: 14px;
    margin-top: 13px !important;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
}

.link {
    text-decoration: none !important;
    color: var(--color-Black-To-White);
}

.book-img {
    margin-top: 9px;
    width: 43px;
    height: 64px;
    border-radius: 5px;
}

.book-row {
    border-radius: 12px;
    background: var(--color-header);
    height: 86px;
    border: 1px solid var(--color-header);
    margin-bottom: 8px;
}

.bg {
    background-color: var(--color-container);
}

.body {
    padding-bottom: 85px !important;
}

.form-input {
    margin-top: 41px;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 95%;
}

input {
    border: none !important;
    padding: 5px 10px 5px 45px;
    font-size: 12px;
    color: var(--color-textGray-To-lightGray) !important;
    font-family: Montserrat, 'sans-serif';
    font-weight: 400;
    line-height: 30px;
    display: block;
    width: 100%;
    height: 50px;
    border-radius: 12px;
    background-color: var(--color-input) !important;
}

.icon {
    position: absolute;
    left: 20px;
    top: 0;
    font-size: 25px;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
}

.stories-container {
    display: flex;
    flex: 74px;
    gap: 1rem;
    background: var(--color-header);
    margin-bottom: -10px !important;
    border-radius: 3px;
    overflow-x: scroll;
    user-select: none;
    width: 100%;
    padding-left: 10px;
}

.stories-container::-webkit-scrollbar {
    width: 0;
}

.stories-container-2 {
    display: flex;
    flex: 74px;
    gap: 14px;
    background: var(--color-container);
    border-radius: 3px;
    overflow-x: scroll;
    user-select: none;
    width: 100%;
    margin: 5px 10px -20px 0 !important;
    padding: 0 20px 0 18px;
}

.stories-container-2::-webkit-scrollbar {
    width: 0;
}

.profiles {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 7px;
    transition: transform .2s ease-in-out;
    cursor: pointer;
}

.profiles-2 {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 7px;
    transition: transform .2s ease-in-out;
    cursor: pointer;
    border-radius: 12px;
    background-color: var(--color-header);
    padding: 9px 14px 9px 13px;
}

.story-name {
    max-width: 55px;
    font-size: 8px;
    font-weight: 400;
    line-height: 9px;
    text-align: center;
    color: var(--color-text);
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
}

.category-name {
    max-width: 74px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-size: 10px;
    font-weight: 400;
    line-height: 12px;
    text-align: center;
    color: var(--color-textDarkGray-To-white) !important;
}

.photo:hover, .photo-2:hover {
    transform: scale(1.03);
}

.photo {
    display: flex;
    align-items: center;
    border: 2px solid #0481F4;
    padding: 3px;
    border-radius: 50%;
    width: 56px !important;
    height: 56px !important;
}

.photo > img {
    width: 54px;
    object-fit: cover;
    border: 1px solid white;
    border-radius: 50%;
}

.photo-2 > img {
    width: 74px;
    height: 74px;
    border-radius: 50%;
}

.carousel-row {
    padding-bottom: 30px;
}

.position-text, .category-text {
    font-weight: 500;
    color: var(--color-text);
    size: 14px;
    line-height: 17px;
}

.position-text {
    margin: 18px 0 12px 0;
}

.category-text {
    margin: 20px 0 16px 0;
}

.head-phone {
    margin: -40px 0 0 2px;
}

.slide-content {
    width: 100% !important;
    height: 29.6vw;
    border-radius: 20px !important;
    padding: 10px 5px !important;
    display: flex;
    object-fit: cover;
}

.hooper-pagination {
    transform: translate(50%, -50%) !important;
}

.hooper-slide.is-active.is-current {
    transform: scaleY(1.19);
}

</style>

<template>
    <!--row container start -->
    <div class="row">
        <div class="col container-col">

            <!-- header start -->
            <div class="row">
                <div class="col fixed-top">
                    <div class="row header-name-row">
                        <div class="col-2 header-block ps-2">
                            <go-back-button class="arrow-back"/>
                        </div>
                        <div class="col-8 header-name d-flex justify-content-center p-0">
                            {{$t('library.myQuotes')}}
                        </div>
                        <div class="col-2"><!-- don't delete (Abdullokh) --> </div>
                    </div>
                </div>
            </div>
            <!-- header end -->

            <!-- book 1 block row start -->
            <div v-for="book in 2" :key="book.index" class="row d-flex justify-content-center">
                <div class="col-11 center-block">
                    <!-- book row-->
                    <div @click="pushBookPage" class="row">
                        <div class="col-2 book-img p-0 text-light">
                            <img src="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1552334367i/44318414.jpg" alt="" class="img-book">

                            <div class="logos">
                                <span class="tiny-headphone read-logo ps-0">
                                    <svg fill="none" height="8" viewBox="0 0 16 16"
                                         width="8" xmlns="http://www.w3.org/2000/svg">
                                        <rect fill="white" height="16" rx="8"
                                              width="16"/>
                                        <path
                                            d="M7.68815 5.49999V11.2958C7.68815 11.5917 7.38815 11.7958 7.11732 11.6833C6.34232 11.3583 5.37982 11.075 4.69648 10.9833L4.56732 10.9667C4.16315 10.9167 3.83398 10.5458 3.83398 10.1417V5.18749C3.83398 4.68749 4.23815 4.28333 4.73815 4.28333H4.76732C5.55065 4.34999 6.70482 4.71666 7.46732 5.12916C7.60482 5.20416 7.68815 5.34166 7.68815 5.49999Z"
                                            fill="#0481F4"/>
                                        <path
                                            d="M11.2625 4.28333H11.2375C11.1375 4.29166 11.0292 4.30416 10.9167 4.32499C10.4042 4.40833 9.79583 4.58333 9.25 4.79999C8.99167 4.90416 8.75 5.01666 8.5375 5.12916C8.4 5.20416 8.3125 5.34583 8.3125 5.49999V11.2958C8.3125 11.5917 8.6125 11.7958 8.88333 11.6833C9.65833 11.3583 10.6208 11.075 11.3042 10.9833L11.4333 10.9667C11.8375 10.9167 12.1667 10.5458 12.1667 10.1417V5.18749C12.1667 4.68749 11.7625 4.28333 11.2625 4.28333ZM11.0292 8.72083C11.0292 8.88333 10.9125 8.95416 10.7708 8.87499L10.3292 8.62916C10.2833 8.60416 10.2083 8.60416 10.1583 8.62916L9.71667 8.87499C9.575 8.95416 9.45833 8.88333 9.45833 8.72083V7.44166C9.45833 7.24999 9.61667 7.09166 9.80833 7.09166H10.6833C10.875 7.09166 11.0333 7.24999 11.0333 7.44166V8.72083H11.0292Z"
                                            fill="#0481F4"/>
                                    </svg>
                                </span>
                            </div>
                        </div>
                        <div class="col-8 p-0">
                            <div class="row">
                                <div class="col book-name">
                                    The Dutch House
                                </div>
                            </div>
                            <div class="row">
                                <div class="col book-author">
                                    Ann Patchett
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-8 star-row pe-0">
                                    <span>
                                        <svg class="archive" fill="none"
                                             height="14" viewBox="0 0 12 14"
                                             width="12" xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M9.21289 0.273438H2.78622C1.37289 0.273438 0.212891 1.43344 0.212891 2.84677V12.2401C0.212891 13.4401 1.07289 13.9468 2.12622 13.3668L5.37956 11.5601C5.72622 11.3668 6.28622 11.3668 6.62622 11.5601L9.87955 13.3668C10.9329 13.9534 11.7929 13.4468 11.7929 12.2401V2.84677C11.7862 1.43344 10.6329 0.273438 9.21289 0.273438ZM8.41289 5.0201L5.74622 7.68677C5.64622 7.78677 5.51956 7.83344 5.39289 7.83344C5.26622 7.83344 5.13956 7.78677 5.03956 7.68677L4.03956 6.68677C3.84622 6.49344 3.84622 6.17344 4.03956 5.9801C4.23289 5.78677 4.55289 5.78677 4.74622 5.9801L5.39289 6.62677L7.70622 4.31344C7.89955 4.1201 8.21955 4.1201 8.41289 4.31344C8.60622 4.50677 8.60622 4.82677 8.41289 5.0201Z"
                                                fill="#0481F4"/>
                                        </svg>
                                        <svg class="download" fill="none" height="16" viewBox="0 0 16 16"
                                             width="16" xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M10.794 1.33325H5.20732C2.78065 1.33325 1.33398 2.77992 1.33398 5.20659V10.7866C1.33398 13.2199 2.78065 14.6666 5.20732 14.6666H10.7873C13.214 14.6666 14.6607 13.2199 14.6607 10.7933V5.20659C14.6673 2.77992 13.2207 1.33325 10.794 1.33325ZM5.64732 7.98659C5.84065 7.79325 6.16065 7.79325 6.35398 7.98659L7.50065 9.13325V5.00659C7.50065 4.73325 7.72732 4.50659 8.00065 4.50659C8.27398 4.50659 8.50065 4.73325 8.50065 5.00659V9.13325L9.64732 7.98659C9.84065 7.79325 10.1607 7.79325 10.354 7.98659C10.5473 8.17992 10.5473 8.49992 10.354 8.69325L8.35398 10.6933C8.30732 10.7399 8.25398 10.7733 8.19398 10.7999C8.13398 10.8266 8.06732 10.8399 8.00065 10.8399C7.93398 10.8399 7.87398 10.8266 7.80732 10.7999C7.74732 10.7733 7.69398 10.7399 7.64732 10.6933L5.64732 8.69325C5.45398 8.49992 5.45398 8.18659 5.64732 7.98659Z"
                                                fill="#0481F4"/>
                                        </svg>
                                        <svg class="star" fill="none" height="13" viewBox="0 0 13 13"
                                             width="13" xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M7.23584 1.22039L8.32146 3.40667C8.4695 3.7048 8.86427 4.00293 9.19324 4.05261L11.1589 4.38387C12.4172 4.59918 12.7133 5.51013 11.8086 6.42108L10.2789 7.96969C10.0239 8.22641 9.87587 8.73158 9.95811 9.09595L10.394 11.0089C10.7394 12.5161 9.94166 13.1041 8.61754 12.3174L6.77527 11.216C6.43807 11.0172 5.89526 11.0172 5.55806 11.216L3.70757 12.3091C2.38345 13.0958 1.58568 12.5079 1.9311 11.0007L2.367 9.08767C2.44924 8.73158 2.3012 8.22641 2.04625 7.96141L0.524733 6.42936C-0.37995 5.51841 -0.0838721 4.59918 1.17446 4.39215L3.14009 4.0609C3.46907 4.00293 3.86384 3.71308 4.01188 3.41495L5.0975 1.22868C5.68143 0.0361615 6.65191 0.0361613 7.23584 1.22039Z"
                                                fill="#FFCF25"/>
                                        </svg>
                                    </span>
                                </div>
                                <div class="col p-0 download-count">
                                    4
                                </div>
                            </div>
                        </div>
                        <div class="col d-flex justify-content-end p-0">
                            <router-link to="#">
                                <svg class="more-circle" fill="none" height="28" viewBox="0 0 28 28"
                                     width="28" xmlns="http://www.w3.org/2000/svg">
                                    <path class="blueToWhite"
                                          d="M15.1673 13.9998C15.1673 14.6532 14.6423 15.1665 14.0007 15.1665C13.359 15.1665 12.834 14.6415 12.834 13.9998C12.834 13.3582 13.359 12.8332 14.0007 12.8332C14.6423 12.8332 15.1673 13.3465 15.1673 13.9998Z"
                                          fill="#0481F4"/>
                                    <path class="blueToWhite"
                                          d="M15.1673 9.33333C15.1673 9.98667 14.6423 10.5 14.0007 10.5C13.359 10.5 12.834 9.975 12.834 9.33333C12.834 8.69167 13.359 8.16667 14.0007 8.16667C14.6423 8.16667 15.1673 8.68 15.1673 9.33333Z"
                                          fill="#0481F4"/>
                                    <path class="blueToWhite"
                                          d="M15.1673 18.6668C15.1673 19.3202 14.6423 19.8335 14.0007 19.8335C13.359 19.8335 12.834 19.3085 12.834 18.6668C12.834 18.0252 13.359 17.5002 14.0007 17.5002C14.6423 17.5002 15.1673 18.0135 15.1673 18.6668Z"
                                          fill="#0481F4"/>
                                </svg>
                            </router-link>
                        </div>
                    </div>
                    <!-- book row end -->

                    <!--comment start -->
                    <div>
                        <div class="row">
                            <div class="col quote-col p-0" >
                                <div class="quote">
                                    I think this book never can be better than developer who created this Application. Thank you so much @Abdullokh 😍 👏
                                </div>
                            </div>
                        </div>
                        <!-- comment end -->

                        <div class="row">
                            <div class="col date p-0">
                                2021-11-01
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- book 1 block row end -->

            <!--footer row begin -->
            <Footer/>
            <!--footer row end -->

        </div> <!--container col -->
    </div>
    <!--row container start -->
</template>

<script>
import Footer from "../../footer/footer";
import GoBackButton from "@/components/modals/GoBackButton";
import {mapActions, mapGetters} from "vuex";

export default {
    name: "my-quotes",
    components: {GoBackButton, Footer},
    data() {
        return {
            localhost: process.env.VUE_APP_API_URL,
        }
    },
    computed: {
        ...mapGetters(['getQuotes', 'getTotalVotes']),
    },
    methods: {
        ...mapActions(['fetchQuotes', 'fetchTotalVotes']),
        pushBookPage(book) {
            if (book['@type'] === 'Book') {
                this.$router.push('/book/' + book.id)
            } else {
                this.$router.push('/audio-book/' + book.id)
            }
        },
        setDefaultImg(event) {
            event.target.src = "https://smartmobilestudio.com/wp-content/uploads/2012/06/leather-book-preview-300x252.png"
        },
    },
    mounted() {
        this.fetchQuotes()
            .then(() => {
                console.log(this.getQuotes)
            })
    }
}
</script>

<style scoped>
.container-col {
    font-family: 'Montserrat', 'Rubik', sans-serif !important;
    border-radius: 0 0 15px 15px;
    margin: 147px 0 100px 0;
    padding-bottom: 20px;
}

.header-name-row {
    height: 147px;
    border-radius: 15px;
    background-color: var(--color-header);
}

.header-block {
    border: 15px;
}

.blueToWhite {
    fill: var(--blueToWhite);
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

.center-block {
    border-radius: 15px;
    margin-top: 20px;
    background-color: var(--color-block);
}

.book-img {
    margin: 11px 0 0 13px;
    width: 60px;
}

.book-name {
    margin-top: 13px;
    font-weight: 600;
    font-size: 14px;
    line-height: 17px;
    color: var(--color-text);
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;

}

.book-author {
    font-size: 12px;
    line-height: 15px;
    color: var(--color-lightGray-to-lightBlue);
    margin-top: 5px;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;

}

.star-row {
    max-width: 67px;
}

.download-count {
    font-weight: 500;
    font-size: 12px;
    line-height: 15px;
    color: var(--color-textGray-to-gold);
    margin: 6px 0 0 2px;
}

.archive {
    margin-right: 5px;
}

.star {
    margin-left: 5px;
}

.more-circle {
    margin: 7px 5px 0 0;
}

.quote-col {
    font-weight: 500;
    border-radius: 5px;
    background-color: var(--fadedBlueToDark);
    margin: 22px 13px 13px 13px;
    font-style: italic;
    font-size: 11px;
    line-height: 13px;
    color: var(--color-text);
    padding: 20px;
}

.quote {
    margin: 13px 0 12px 15px;
}

.date {
    font-weight: normal;
    font-size: 12px;
    line-height: 15px;
    color: #828282;
    margin: 0 0 16px 25px;
}

.img-book {
    position: absolute;
    width: 43px;
    height: 64px;
    border-radius: 5px;
}

.tiny-headphone {
    position: absolute;
}

.read-logo {
    margin-left: 1px;
}

.logos {
    margin: 44px 0 0 3px;
}

</style>

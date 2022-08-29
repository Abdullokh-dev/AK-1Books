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
                            {{ $t('library.saved') }}
                        </div>
                        <div class="col-2"><!-- don't delete (Abdullokh) --> </div>
                    </div>
                </div>
            </div>
            <!-- header end -->

            <!-- Audio books -->
            <div v-for="audioBook in 5" :key="audioBook.index"
                 class="row d-flex justify-content-center">
                <div class="col-11 center-block pb-2">
                    <!-- book row-->
                    <div class="row" @click="pushAudioBookPage()">
                        <div class="col-2 book-img p-0 text-light">
                            <img src="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1552334367i/44318414.jpg" alt="" class="img-book">
                        </div>
                        <div class="col-8 p-0 pe-5">
                            <div class="row">
                                <div class="col book-name pe-4">
                                    Audio Book
                                </div>
                            </div>
                            <div class="row pe-3">
                                <div class="col book-author">
                                     Abdullokh_dev
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
                                        <svg class="download" fill="none"
                                             height="16" viewBox="0 0 16 16"
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
                            </div>
                        </div>
                        <div class="col d-flex justify-content-end p-0">
                            <router-link class="button-start" to="/">
                                <svg class="bi bi-play-circle-fill" fill="currentColor" height="38" viewBox="0 0 16 16"
                                     width="38" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM6.79 5.093A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814l-3.5-2.5z"/>
                                </svg>
                            </router-link>
                        </div>
                    </div>
                    <!-- book row end -->
                </div>
            </div>

            <!-- Books -->
            <div v-for="book in 10" :key="book.index"
                 class="row d-flex justify-content-center">
                <div class="col-11 center-block pb-2">
                    <!-- book row-->
                    <div class="row" @click="pushBookPage()">
                        <div class="col-2 book-img p-0 text-light">
                            <img src="https://images-na.ssl-images-amazon.com/images/I/81bsw6fnUiL.jpg" alt="" class="img-book" />
                        </div>
                        <div class="col-8 p-0 pe-5">
                            <div class="row">
                                <div class="col book-name pe-4">
                                    Book
                                </div>
                            </div>
                            <div class="row pe-3">
                                <div class="col book-author">
                                    Abdullokh_dev
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
                                        <svg class="download" fill="none"
                                             height="16" viewBox="0 0 16 16"
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
                            </div>
                        </div>
                        <div class="col d-flex justify-content-end p-0">
                            <div class="button-start">
                                3500 {{ $t('price.currency') }}
                            </div>
                        </div>

                    </div>
                    <!-- book row end -->
                </div>
            </div>
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

export default {
    name: "saved",
    components: {GoBackButton, Footer},
    methods: {
        pushAudioBookPage() {
            this.$router.push('/audio-book/1')
        },
        pushBookPage() {
            this.$router.push('/book/1')
        },
        disable() {
            this.$root.showOverlay = false
        }
    },
    mounted() {
        this.$root.showOverlay = true
        setTimeout(this.disable, 1000)
    }
}
</script>

<style scoped>
.container-col {
    font-family: 'Montserrat', 'Rubik', sans-serif !important;
    border-radius: 0 0 15px 15px;
    margin: 157px 0 80px 0;
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
    margin-top: 10px;
    background-color: var(--color-block);
    height: 87px;
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

.archive {
    margin-right: 5px;
}

.star {
    margin-left: 5px;
}

.img-book {
    position: absolute;
    width: 43px;
    height: 64px;
    border-radius: 5px;
}

.button-start {
    border: none;
    background-color: var(--color-header);
    margin: 24px 24px 0 0;
    color: #0481F4;
    position: absolute;
}

</style>

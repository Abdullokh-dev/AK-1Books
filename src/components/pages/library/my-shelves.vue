<template>
    <!--Container -->
    <div class="row">
        <div class="col container-col">

            <!-- header -->
            <div class="row header-content">
                <div class="col fixed-top">
                    <div class="row header-name-row ps-2">
                        <div class="col-2 header-block ps-0">
                            <go-back-button class="arrow-back" />
                        </div>
                        <div class="col-8 header-name d-flex justify-content-center p-0">
                            {{$t('shelf.myShelves')}}
                        </div>
                        <div class="col-2"><!-- don't delete (Abdullokh) --> </div>

                        <!--pic 1 -->
                        <div class="row pic-row">
                            <div class="col-12 d-flex justify-content-center pe-0">
                                <div class="row block-bg-row">
                                    <div class="col block-bg">
                                        <div class="pic-size d-flex justify-content-center">
                                            <img src="https://images-na.ssl-images-amazon.com/images/I/81bsw6fnUiL.jpg" alt="shelfImage" class="img-box">
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="row">
                            <div class="col text-1">
                                Abdullokh_dev
                            </div>
                        </div>
                        <div class="row">
                            <div class="col text-2">
                                1
                                {{$t('shelf.numberBooks')}}
                            </div>
                        </div>
                        <div class="row">
                            <div class="col text-3">
                                Rich Dad Poor Dad
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- content -->
            <div @click="pushBookPage" class="row d-flex justify-content-center">
                <div class="col-11 center-block">
                    <div class="row">
                        <div class="col-2 p-0 width-img d-flex justify-content-center align-items-center">
                            <img src="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1552334367i/44318414.jpg" alt="name" class="img-book">
                        </div>
                        <div class="col-7 p-0 pe-5">
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
                                <div class="col-8 star-row-2 pe-0">
                                    <span>
                                        <svg width="12" height="14" viewBox="0 0 12 14" fill="none"
                                             xmlns="http://www.w3.org/2000/svg" class="archive">
                                            <path
                                                d="M9.21289 0.273438H2.78622C1.37289 0.273438 0.212891 1.43344 0.212891 2.84677V12.2401C0.212891 13.4401 1.07289 13.9468 2.12622 13.3668L5.37956 11.5601C5.72622 11.3668 6.28622 11.3668 6.62622 11.5601L9.87955 13.3668C10.9329 13.9534 11.7929 13.4468 11.7929 12.2401V2.84677C11.7862 1.43344 10.6329 0.273438 9.21289 0.273438ZM8.41289 5.0201L5.74622 7.68677C5.64622 7.78677 5.51956 7.83344 5.39289 7.83344C5.26622 7.83344 5.13956 7.78677 5.03956 7.68677L4.03956 6.68677C3.84622 6.49344 3.84622 6.17344 4.03956 5.9801C4.23289 5.78677 4.55289 5.78677 4.74622 5.9801L5.39289 6.62677L7.70622 4.31344C7.89955 4.1201 8.21955 4.1201 8.41289 4.31344C8.60622 4.50677 8.60622 4.82677 8.41289 5.0201Z"
                                                fill="#0481F4"/>
                                        </svg>
                                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                                             xmlns="http://www.w3.org/2000/svg" class="download">
                                            <path
                                                d="M10.794 1.33325H5.20732C2.78065 1.33325 1.33398 2.77992 1.33398 5.20659V10.7866C1.33398 13.2199 2.78065 14.6666 5.20732 14.6666H10.7873C13.214 14.6666 14.6607 13.2199 14.6607 10.7933V5.20659C14.6673 2.77992 13.2207 1.33325 10.794 1.33325ZM5.64732 7.98659C5.84065 7.79325 6.16065 7.79325 6.35398 7.98659L7.50065 9.13325V5.00659C7.50065 4.73325 7.72732 4.50659 8.00065 4.50659C8.27398 4.50659 8.50065 4.73325 8.50065 5.00659V9.13325L9.64732 7.98659C9.84065 7.79325 10.1607 7.79325 10.354 7.98659C10.5473 8.17992 10.5473 8.49992 10.354 8.69325L8.35398 10.6933C8.30732 10.7399 8.25398 10.7733 8.19398 10.7999C8.13398 10.8266 8.06732 10.8399 8.00065 10.8399C7.93398 10.8399 7.87398 10.8266 7.80732 10.7999C7.74732 10.7733 7.69398 10.7399 7.64732 10.6933L5.64732 8.69325C5.45398 8.49992 5.45398 8.18659 5.64732 7.98659Z"
                                                fill="#0481F4"/>
                                        </svg>

                                        <svg width="13" height="13" viewBox="0 0 13 13" fill="none"
                                             xmlns="http://www.w3.org/2000/svg" class="star">
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
                        <div class="col d-flex justify-content-end">
                            <span class="price">
                                35000 {{ $t('price.currency') }}
                            </span>
                        </div>
                    </div>
                </div>
            </div>

            <!--footer -->
            <Footer />

        </div>
    </div>
</template>

<script>
import Footer from "../../footer/footer";
import GoBackButton from "@/components/modals/GoBackButton";

export default {
    name: "my-shelves",
    components: {GoBackButton, Footer},
    methods: {
        pushBookPage() {
            this.$router.push('/audio-book/1')
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
.container-col {
    font-family: 'Montserrat', 'Rubik', sans-serif !important;
    margin-bottom: 80px;
}

.block-bg-row {
    width: 100%;
    border-radius: 15px;
    margin-bottom: 16px;
    height: 87px;
}

.img-box {
    object-fit: fill;
    width: 100% !important;
    border-radius: 12px;
}

.pic-size {
    height: 87px;
}

.pic-row {
    margin-top: 30px;
}

.text-1 {
    font-weight: bold;
    font-size: 30px;
    line-height: 37px;
    color: var(--color-textDarkGray-To-white);
    margin-top: 21px;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
}

.text-2 {
    font-size: 10px;
    line-height: 12px;
    color: #65B1F9;
}

.text-3 {
    font-weight: 500;
    font-size: 16px;
    line-height: 20px;
    color: var(--color-textDarkGray-To-Blue);
    margin: 16px 0 17px 0;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
}

.img-book {
    position: absolute;
    width: 43px;
    height: 64px;
    border-radius: 5px;
    margin-top: 8px;
}

.width-img {
    width: 75px;
}

.book-name {
    font-weight: 500;
    font-size: 14px;
    line-height: 17px;
    margin-top: 14px;
    color: var(--color-text);
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
}

.book-author {
    font-size: 12px;
    line-height: 15px;
    color: var(--color-lightGray-to-lightBlue);
    margin-top: 2px;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
}

.archive {
    margin-top: 5px;
}

.download {
    margin: 5px 0 0 7px;
}

.star {
    margin: 3px 0 0 7px;
}

.download-count {
    font-weight: 500;
    font-size: 12px;
    line-height: 15px;
    color: var(--color-textGray-to-gold);
    margin: 6px 0 0 5px;
}

.star-row-2 {
    max-width: 67px;
}

.price {
    font-weight: 500;
    font-size: 14px;
    line-height: 17px;
    color: #0481F4;
    margin: 34px 7px 0 0;
    position: absolute;
}

.container-col {
    font-family: 'Montserrat', 'Rubik', sans-serif !important;
    background-color: var(--color-container) !important;
    border-radius: 0 0 15px 15px;
    padding-bottom: 15px;
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

.header-name {
    margin-top: 67px;
    font-size: 14px;
    line-height: 17px;
    font-style: normal;
    color: var(--color-text);
}

.center-block {
    border-radius: 12px;
    background-color: var(--color-block);
    margin-bottom: 8px;
    height: 87px;
}

.header-content {
    padding-bottom: 365px;
}

</style>

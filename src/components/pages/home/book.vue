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
                                <textarea v-model="vote.comment" class="form-control" id="message-text" placeholder="....." rows="4"/>
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

        <!-- bg image -->
        <div class="px-0 w-100">
            <img class="bg-image px-0" src="https://images-na.ssl-images-amazon.com/images/I/81bsw6fnUiL.jpg" alt="rich dad poor dad"/>
        </div>
        <div class="liner">
        </div>

        <div style="z-index: 1;">
            <!-- Header icons -->
            <div class="row img-row">
                <div class="col-6" >
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
                    <span style="line-height: 20px">Rich Dad Poor Dad</span>
                </div>
            </div>

            <!-- Book content -->
            <div class="row">
                <div class="col book-width p-0">
                    <img class="images-book" src="https://images-na.ssl-images-amazon.com/images/I/81bsw6fnUiL.jpg" alt="rich dad poor dad" />

                    <router-link to="/read/1">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" class="read-logo">
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
                                <span id="author"> Robert T. Kiyosaki</span>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col price">
                                {{ $t('price.price') }}:
                            </div>
                        </div>
                        <div class="row">
                            <div class="col price-number">
                                <span id="price"> 55000 {{ $t('price.currency') }} </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Sizes -->
        <div class="block-star">
            <star-rating class="mt-2 ms-0 star-rating" :star="40/10" :show-count="true" :font-size="14"/>

            <div class="row">
                <div class="col timing timing2">
                    <span class="post"> 12h</span>
                    <span class="vertical-line">|</span>
                    <span class="post"> 10 {{ $t('time.mb') }} </span>
                    <span class="vertical-line">|</span>
                    <span class="post">1997</span>
                    <span class="post">16+</span>
                </div>
            </div>
        </div>

        <div class="bg-block-1">
            <!-- Read button -->
            <div class="row buttons-row">
                <div class="col-9 ps-4 pe-1">
                    <Button type="submit" text="reading" height="65" top="0" :onClick="read"/>
                </div>
                <div class="col-3 pe-4">
                    <button class="saved-btn">
                        <img src="../../images/saved-icon.png" alt="#">
                    </button>
                </div>
            </div>

            <!-- Star rate -->
            <div class="row">
                <div class="col text-mark ps-0">
                    {{ $t('rateTheBook') }}
                </div>
                <div class="col star-row-2 d-flex justify-content-end pe-4">
                    <img data-bs-toggle="modal" data-bs-target="#exampleModal" src="../../images/audio-book/img_1.png" alt="" />
                    <img data-bs-toggle="modal" data-bs-target="#exampleModal" src="../../images/audio-book/img_1.png" alt="" />
                    <img data-bs-toggle="modal" data-bs-target="#exampleModal" src="../../images/audio-book/img_1.png" alt="" />
                    <img data-bs-toggle="modal" data-bs-target="#exampleModal" src="../../images/audio-book/img_1.png" alt="" />
                    <img data-bs-toggle="modal" data-bs-target="#exampleModal" src="../../images/audio-book/star-simple.png" alt="">
                </div>
            </div>

            <!-- #hashtag -->
            <div class="row">
                <div class="col hashtag-row ps-0 p-0">
                    <span v-for="category in 4" :key="category">
                        <span class="hashtag">
                            #category{{category}}
                        </span>
                    </span>
                </div>
            </div>

            <!-- Book description -->
            <div class="row">
                <div class="col-12 ps-0 show-more">
                    <input type="checkbox" id="check_id"/>
                    <div class="content description pb-0 mb-0">
                        Rich Dad Poor Dad is a 1997 book written by Robert T. Kiyosaki and Sharon Lechter. It advocates the importance of financial literacy (financial education), financial independence and building wealth through investing in assets, real estate investing, starting and owning businesses, as well as increasing one's financial intelligence (financial IQ).
                        Rich Dad Poor Dad is written in the style of a set of parables, ostensibly based on Kiyosaki's life.[1] The titular "rich dad" is his friend's father who accumulated wealth due to entrepreneurship and savvy investing, while the "poor dad" is claimed to be Kiyosaki's own father who he says worked hard all his life but never obtained financial security.
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
                    Robert T. Kiyosaki
                </div>
            </div>
        </div>

        <div class="bg-2">
            <div class="row">
                <div class="col other-books ps-0">
                    {{ $t('similarBooks') }}
                </div>
            </div>

            <div class="row">
                <div class="col-12 p-0">

                    <!-- Similar books -->
                    <div class="wrapper">
                        <div v-for="similarBook in 10" :key="similarBook">
                            <div class="row profiles">
                                <div class="col-4 book-pc p-0"
                                    :style="{'background': 'center / contain no-repeat url(https://kbimages1-a.akamaihd.net/6e298d2d-0a5c-4dba-9855-e96b4976c4d1/1200/1200/False/ugly-love.jpg)'}"
                                >
                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                                         xmlns="http://www.w3.org/2000/svg" class="tiny-reader">
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
                                             Ugly Love
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col book-author ps-0">
                                            Colleen Hoover
                                        </div>
                                    </div>

                                    <star-rating :star="40 / 10" :width="10" :height="10" :padding="4.7" :count-margin="-40" :font-size="10"/>

                                    <div class="row" style="width: 80px">
                                        <div class="col hashtag-book">
                                            #Romantic
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>

        <!-- Chats -->
        <div class="row scrollable-row">
            <div class="col ps-0">
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
                                2022-01-0{{vote}}
                            </div>
                        </div>

                        <star-rating :star="4" :width="10" :height="10" :padding="4.7" :count-margin="-40" :font-size="10" :show-count="false"/>
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
        </div>

        <!-- footer component -->
        <Footer/>
    </div>
</template>

<script>
import Footer from "../../footer/footer";
import Button from "@/components/button/Button";
import StarRating from "@/components/modals/star-rating";
import Swal from 'sweetalert2';
import GoBackButton from '../../modals/GoBackButton';

export default {
    name: "book",
    data() {
        return {
            localhost: process.env.VUE_APP_API_URL,
            vote: {
                comment: '',
                rating: 0,
                totalCount: 0,
                show: false,
                showCount: false,
            },
            countOfVotes: 0,
            isSimilarBookVisible: true
        }
    },
    components: { GoBackButton, StarRating, Button, Footer},
    methods: {
        openMyGitHub() {
            window.open('https://github.com/Abdullokh-dev');
        },

        read() {
            this.$router.push('/read/1')
        },

        disable() {
            this.$root.showOverlay = false
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
    },
    mounted() {
        this.$root.showOverlay = true
        setTimeout(this.disable, 1000)
    }
}
</script>

<style scoped>

.modal-content {
    background-color: var(--color-block);
}

.bg-2 {
    background-color: var(--color-container);
}

textarea {
    background-color: var(--bg-button-row);
}

.other-books {
    margin: 20px 0 16px 19px;
    font-size: 14px;
    line-height: 17px;
    color: var(--color-text);
}

.myName {
    color: #0d6efd;
    cursor: pointer;
    text-decoration: underline;
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
    border-radius: 7px;
    margin: 15px;
    height: 99px;
    width: 67px;
}

.tiny-reader {
    margin: 78px 0 0 5px;
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
    height: 317px !important;
}

.bg {
    font-family: 'Montserrat', 'Rubik', sans-serif !important;
    margin-bottom: 100px;
}

.right-book {
    margin: 35px 0 0 166px;
}

.block-star {
    margin-left: 175px;
    padding: 0;
    max-width: 160px;
}

.bg-block-1 {
    background-color: var(--color-container);
    margin-top: 18px;
}

.star-rating {
    padding-left: 1px;
}

.scrollable-row {
    overflow-x: hidden;
    border-radius: 12px;
    margin: 0;
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

.img-row {
    padding: 70px 0 29px 0;
}

.intersection {
    font-size: 30px;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    color: white;
    text-align: center;
    font-weight: 700;
    margin-bottom: 30px;
}

.author, .price {
    font-size: 12px;
    font-weight: 500;
    color: rgb(180, 194, 207);
    margin-bottom: -2px;
}

.price {
    margin-top: 6px;
}

.author-name, .price-number {
    font-size: 14px;
    line-height: 17px;
    font-weight: 500;
    color: white;
    margin-bottom: -1px;

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
    margin-top: 10px !important;
    padding-bottom: 22px;
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
    display: inline-block;
    background-color: #0481F4;
    color: #FFFFFF;
    border-radius: 10px;
    padding: 3px 10px 5px 10px;
    font-size: 10px;
    margin-right: 8px;
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

.holder {
    font-weight: 400;
    font-style: normal;
    font-size: 14px;
    margin-left: 25px;
    color: var(--color-text-to-blue);
}

.Eksmo {
    font-weight: 500;
    font-style: normal;
    font-size: 14px;
    color: #0481F4;
}

.hr {
    height: 25px;
    color: #97CAFB !important;
}

.read-logo {
    margin: -58px 0 0 8px;
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

</style>

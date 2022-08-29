<template>
    <!--row container start -->
    <div class="row">
        <div class="col container-col">

            <!-- Modal start -->
            <div class="modal fade" id="exampleModal" data-bs-backdrop="static" tabindex="-1"
                 aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">{{$t('addComment')}}</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <form>
                                <div>
                                    <div class="d-flex justify-content-center">
                                        <div class="stars">
                                            <form action="">
                                                <input class="star star-5" id="star-5" type="radio" name="star" />
                                                <label class="star star-5" for="star-5"></label>
                                                <input class="star star-4" id="star-4" type="radio" name="star" />
                                                <label class="star star-4" for="star-4"></label>
                                                <input class="star star-3" id="star-3" type="radio" name="star" />
                                                <label class="star star-3" for="star-3"></label>
                                                <input class="star star-2" id="star-2" type="radio" name="star" />
                                                <label class="star star-2" for="star-2"></label>
                                                <input class="star star-1" id="star-1" type="radio" name="star" />
                                                <label class="star star-1" for="star-1"></label>
                                            </form>
                                        </div>
                                    </div>
                                    <textarea class="form-control" id="message-text"
                                          placeholder="....." rows="4"/>
                                </div>
                            </form>
                        </div>
                        <div class="modal-footer">
                            <button type="button" @click="sendVote" class="btn btn-primary" data-bs-dismiss="modal">
                                {{$t('send')}}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <!-- Modal end -->

            <!-- header start -->
            <div class="row">
                <div class="col fixed-top">
                    <div class="row header-name-row ps-0">
                        <div class="col-2 header-block ps-2">
                            <go-back-button class="arrow-back" />
                        </div>
                        <div class="col-8 header-name d-flex justify-content-center p-0">
                            {{$t('library.myVotes')}}
                        </div>
                        <div class="col-2"><!-- don't delete (Abdullokh) --> </div>
                    </div>
                </div>
            </div>
            <!-- header end -->

            <!-- book 1 block row start -->
            <div class="row d-flex justify-content-center content">
                <div class="col-11 center-block">
                    <!-- book row-->
                    <div class="row">
                        <div class="col-2 book-img p-0" @click="pushBookPage">
                            <img src="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1552334367i/44318414.jpg" alt="" class="img-book">

                            <div class="logos">
                                <span class="tiny-headphone read-logo ps-0">
                                    <svg width="8" height="8" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect width="16" height="16" rx="8" fill="white"/>
                                        <path d="M7.68815 5.49999V11.2958C7.68815 11.5917 7.38815 11.7958 7.11732 11.6833C6.34232 11.3583 5.37982 11.075 4.69648 10.9833L4.56732 10.9667C4.16315 10.9167 3.83398 10.5458 3.83398 10.1417V5.18749C3.83398 4.68749 4.23815 4.28333 4.73815 4.28333H4.76732C5.55065 4.34999 6.70482 4.71666 7.46732 5.12916C7.60482 5.20416 7.68815 5.34166 7.68815 5.49999Z" fill="#0481F4"/>
                                        <path d="M11.2625 4.28333H11.2375C11.1375 4.29166 11.0292 4.30416 10.9167 4.32499C10.4042 4.40833 9.79583 4.58333 9.25 4.79999C8.99167 4.90416 8.75 5.01666 8.5375 5.12916C8.4 5.20416 8.3125 5.34583 8.3125 5.49999V11.2958C8.3125 11.5917 8.6125 11.7958 8.88333 11.6833C9.65833 11.3583 10.6208 11.075 11.3042 10.9833L11.4333 10.9667C11.8375 10.9167 12.1667 10.5458 12.1667 10.1417V5.18749C12.1667 4.68749 11.7625 4.28333 11.2625 4.28333ZM11.0292 8.72083C11.0292 8.88333 10.9125 8.95416 10.7708 8.87499L10.3292 8.62916C10.2833 8.60416 10.2083 8.60416 10.1583 8.62916L9.71667 8.87499C9.575 8.95416 9.45833 8.88333 9.45833 8.72083V7.44166C9.45833 7.24999 9.61667 7.09166 9.80833 7.09166H10.6833C10.875 7.09166 11.0333 7.24999 11.0333 7.44166V8.72083H11.0292Z" fill="#0481F4"/>
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
                            <div class="row d-inline-flex">
                                <div class="col my-mark-text">
                                    {{$t('library.myVote')}}
                                    <svg
                                        width="13" height="13" class="star" viewBox="0 0 13 13" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M7.23584 1.22052L8.32146 3.40679C8.4695 3.70492 8.86427 4.00305 9.19324 4.05274L11.1589 4.38399C12.4172 4.59931 12.7133 5.51025 11.8086 6.4212L10.2789 7.96981C10.0239 8.22653 9.87587 8.7317 9.95811 9.09608L10.394 11.0091C10.7394 12.5163 9.94166 13.1042 8.61754 12.3175L6.77527 11.2161C6.43807 11.0173 5.89526 11.0173 5.55806 11.2161L3.70757 12.3092C2.38345 13.096 1.58568 12.508 1.9311 11.0008L2.367 9.0878C2.44924 8.7317 2.3012 8.22653 2.04625 7.96153L0.524733 6.42948C-0.37995 5.51853 -0.0838721 4.59931 1.17446 4.39227L3.14009 4.06102C3.46907 4.00305 3.86384 3.7132 4.01188 3.41507L5.0975 1.2288C5.68143 0.0362835 6.65191 0.0362834 7.23584 1.22052Z" fill="#FFCF25"/>
                                    </svg>
                                    <svg
                                        width="13" height="13" class="star" viewBox="0 0 13 13" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M7.23584 1.22052L8.32146 3.40679C8.4695 3.70492 8.86427 4.00305 9.19324 4.05274L11.1589 4.38399C12.4172 4.59931 12.7133 5.51025 11.8086 6.4212L10.2789 7.96981C10.0239 8.22653 9.87587 8.7317 9.95811 9.09608L10.394 11.0091C10.7394 12.5163 9.94166 13.1042 8.61754 12.3175L6.77527 11.2161C6.43807 11.0173 5.89526 11.0173 5.55806 11.2161L3.70757 12.3092C2.38345 13.096 1.58568 12.508 1.9311 11.0008L2.367 9.0878C2.44924 8.7317 2.3012 8.22653 2.04625 7.96153L0.524733 6.42948C-0.37995 5.51853 -0.0838721 4.59931 1.17446 4.39227L3.14009 4.06102C3.46907 4.00305 3.86384 3.7132 4.01188 3.41507L5.0975 1.2288C5.68143 0.0362835 6.65191 0.0362834 7.23584 1.22052Z" fill="#FFCF25"/>
                                    </svg>
                                    <svg
                                        width="13" height="13" class="star" viewBox="0 0 13 13" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M7.23584 1.22052L8.32146 3.40679C8.4695 3.70492 8.86427 4.00305 9.19324 4.05274L11.1589 4.38399C12.4172 4.59931 12.7133 5.51025 11.8086 6.4212L10.2789 7.96981C10.0239 8.22653 9.87587 8.7317 9.95811 9.09608L10.394 11.0091C10.7394 12.5163 9.94166 13.1042 8.61754 12.3175L6.77527 11.2161C6.43807 11.0173 5.89526 11.0173 5.55806 11.2161L3.70757 12.3092C2.38345 13.096 1.58568 12.508 1.9311 11.0008L2.367 9.0878C2.44924 8.7317 2.3012 8.22653 2.04625 7.96153L0.524733 6.42948C-0.37995 5.51853 -0.0838721 4.59931 1.17446 4.39227L3.14009 4.06102C3.46907 4.00305 3.86384 3.7132 4.01188 3.41507L5.0975 1.2288C5.68143 0.0362835 6.65191 0.0362834 7.23584 1.22052Z" fill="#FFCF25"/>
                                    </svg>
                                    <svg
                                        width="13" height="13" class="star" viewBox="0 0 13 13" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M7.23584 1.22052L8.32146 3.40679C8.4695 3.70492 8.86427 4.00305 9.19324 4.05274L11.1589 4.38399C12.4172 4.59931 12.7133 5.51025 11.8086 6.4212L10.2789 7.96981C10.0239 8.22653 9.87587 8.7317 9.95811 9.09608L10.394 11.0091C10.7394 12.5163 9.94166 13.1042 8.61754 12.3175L6.77527 11.2161C6.43807 11.0173 5.89526 11.0173 5.55806 11.2161L3.70757 12.3092C2.38345 13.096 1.58568 12.508 1.9311 11.0008L2.367 9.0878C2.44924 8.7317 2.3012 8.22653 2.04625 7.96153L0.524733 6.42948C-0.37995 5.51853 -0.0838721 4.59931 1.17446 4.39227L3.14009 4.06102C3.46907 4.00305 3.86384 3.7132 4.01188 3.41507L5.0975 1.2288C5.68143 0.0362835 6.65191 0.0362834 7.23584 1.22052Z" fill="#FFCF25"/>
                                    </svg>
                                    <svg
                                        width="13" height="13" class="star" viewBox="0 0 13 13" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M7.23584 1.22052L8.32146 3.40679C8.4695 3.70492 8.86427 4.00305 9.19324 4.05274L11.1589 4.38399C12.4172 4.59931 12.7133 5.51025 11.8086 6.4212L10.2789 7.96981C10.0239 8.22653 9.87587 8.7317 9.95811 9.09608L10.394 11.0091C10.7394 12.5163 9.94166 13.1042 8.61754 12.3175L6.77527 11.2161C6.43807 11.0173 5.89526 11.0173 5.55806 11.2161L3.70757 12.3092C2.38345 13.096 1.58568 12.508 1.9311 11.0008L2.367 9.0878C2.44924 8.7317 2.3012 8.22653 2.04625 7.96153L0.524733 6.42948C-0.37995 5.51853 -0.0838721 4.59931 1.17446 4.39227L3.14009 4.06102C3.46907 4.00305 3.86384 3.7132 4.01188 3.41507L5.0975 1.2288C5.68143 0.0362835 6.65191 0.0362834 7.23584 1.22052Z" fill="#e7e8ea"/>
                                    </svg>
                                </div>
                            </div>
                        </div>
                        <div class="col d-flex justify-content-end p-0">
                            <div class="dropstart">
                                <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg" class="more-circle dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                                    <path class="blueToWhite" d="M15.1673 13.9998C15.1673 14.6532 14.6423 15.1665 14.0007 15.1665C13.359 15.1665 12.834 14.6415 12.834 13.9998C12.834 13.3582 13.359 12.8332 14.0007 12.8332C14.6423 12.8332 15.1673 13.3465 15.1673 13.9998Z" fill="#0481F4"/>
                                    <path class="blueToWhite" d="M15.1673 9.33333C15.1673 9.98667 14.6423 10.5 14.0007 10.5C13.359 10.5 12.834 9.975 12.834 9.33333C12.834 8.69167 13.359 8.16667 14.0007 8.16667C14.6423 8.16667 15.1673 8.68 15.1673 9.33333Z" fill="#0481F4"/>
                                    <path class="blueToWhite" d="M15.1673 18.6668C15.1673 19.3202 14.6423 19.8335 14.0007 19.8335C13.359 19.8335 12.834 19.3085 12.834 18.6668C12.834 18.0252 13.359 17.5002 14.0007 17.5002C14.6423 17.5002 15.1673 18.0135 15.1673 18.6668Z" fill="#0481F4"/>
                                </svg>

                                <ul class="dropdown-menu">
                                    <li> <span @click="deleteVote">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash mb-1" viewBox="0 0 16 16">
                                          <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
                                          <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
                                        </svg>
                                            {{ $t('delete') }}
                                        </span>
                                    </li>
                                    <li>
                                        <span data-bs-toggle="modal" data-bs-target="#exampleModal">

                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
                                          <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                                          <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
                                        </svg>
                                            {{ $t('change') }}
                                        </span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <!-- book row end -->

                    <!--comment start -->
                    <div class="row">
                        <div class="col comment-col p-0">
                            <div class="comment">
                                I think this book never can be better than developer who created this Application. Thank you so much @Abdullokh 😍 👏
                            </div>
                        </div>
                    </div>
                    <!-- comment end -->

                    <div class="row">
                        <div class="col date p-0">
                            2022-10-01
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
import Swal from "sweetalert2";

export default {
    name: "my-feedback",
    components: {GoBackButton, Footer},
    methods: {
        pushBookPage() {
            this.$router.push('/audio-book/1')
        },
        pushAudioBookPage(item) {
            this.$router.push('/audio-book/' + item.audioBook.id)
        },
        deleteVote() {
            Swal.fire({
                position: 'center',
                icon: 'success',
                iconColor: '#0481F4',
                confirmButtonColor: '#0481F4',
                showConfirmButton: false,
                title: this.$t('deleted'),
                showCancelButton: false,
                timer: 1000,
                timerProgressBar: true,
            })

        },
        sendVote() {
            Swal.fire({
                position: 'center',
                icon: 'success',
                iconColor: '#0481F4',
                confirmButtonColor: '#0481F4',
                showConfirmButton: false,
                title: this.$t('commentChange'),
                showCancelButton: false,
                timer: 1500,
                timerProgressBar: true,
            })
        }
    },
}
</script>

<style scoped>
.modal-content {
    background-color: var(--color-container);
}

.modal-title {
    color: var(--color-text);
}

div.stars{
    width: 100%;
    display: inline-block;
}

input.star{
    display: none;
}

label.star {
    float: right;
    padding: 6px;
    font-size: 36px;
    color: #444;
    transition: all .2s;
}

input.star:checked ~ label.star:before {
    content:'\f005';
    color: #FD4;
    transition: all .25s;
}


input.star-5:checked ~ label.star:before {
    color:#FE7;
    text-shadow: 0 0 20px #952;
}

input.star-1:checked ~ label.star:before {
    color: #F62;
}

label.star:hover{
    transform: rotate(-15deg) scale(1.3);
}

label.star:before{
    content:'\f006';
    font-family: FontAwesome;
}

.container-col {
    font-family: 'Montserrat', 'Rubik', sans-serif !important;
    background-color: var(--color-container) !important;
    border-radius: 0 0 15px 15px;
    margin: 147px 0 100px 0 !important;
    padding-bottom: 20px;
}

.blueToWhite {
    fill: var(--blueToWhite);
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
    margin-top: 20px;
    border-radius: 15px;
    background-color: var(--color-block);
}

.book-img {
    margin: 11px 0 0 13px;
    width: 60px;
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

.my-mark-text {
    font-weight: 500;
    font-size: 12px;
    line-height: 15px;
    margin-top: 6px;
    color: var(--color-black-to-lightGray);
}

.star {
    margin-left: 5px;
}

.more-circle {
    margin: 7px 5px 0 0;
}

.comment-col {
    font-weight: 500;
    font-size: 12px;
    line-height: 15px;
    border-radius: 5px;
    background-color: var(--color-input);
    color: var(--color-Black-To-White);
    margin: 22px 13px 0 13px;
}

.comment {
    margin: 13px;
}

.date {
    font-weight: normal;
    font-size: 12px;
    line-height: 15px;
    color: #828282;
    margin: 13px 0 16px 25px;
}

.dropdown-menu {
    text-align: center;
    animation: zoomIn;
    animation-duration: 0.2s;
    border: 1px solid var(--bg-progress);
    background-color: var(--color-block);
    color: var(--color-text);
}

.bi-trash, .bi-pencil-square {
    animation: rubberBand;
    animation-duration: 1s;
}

</style>

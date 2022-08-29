<template>
    <form>
        <div class="row mt-5">
            <div class="col-12 d-flex justify-content-end">
                <div>
                    <router-link to="/login-fourth" class="cancel">{{ $t('login.skip') }}</router-link>
                </div>
            </div>
        </div>

        <div class="row logo-size">
            <div class="col logo d-flex justify-content-center position top-10">
                <img src="../../images/login-first-logo.png" alt="" class="main-img">
            </div>
        </div>

        <div class="row">
            <div class="col text-one">
                {{ $t('login.weAreHere') }}
            </div>
        </div>

        <div class="row">
            <span class="text-two"> {{ $t('login.in1books') }} </span>
        </div>

        <div class="row">
            <div class="col-12 fixed-bottom d-flex justify-content-end">
                <router-link to="/login-second" class="button">
                    <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor"
                         class="bi bi-play-circle-fill" viewBox="0 0 16 16">
                        <path
                            d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM6.79 5.093A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814l-3.5-2.5z"/>
                    </svg>
                </router-link>
            </div>
        </div>
    </form>
</template>

<script>
export default {
    name: "login-first"
}
</script>
<style scoped>
.cancel {
    color: var(--color-textGray-To-lightGray);
    text-decoration-line: none !important;
    font-family: 'Rubik', sans-serif;
    padding-top: 40px;
    padding-right: 30px;
}

.logo {
    margin-top: 10% !important;
    align-items: center !important;
    animation: zoomIn;
    animation-duration: 0.7s;
}

.main-img {
    min-height: 30px !important;
    min-width: 40px !important;
}

.text-one {
    font-family: 'Montserrat', 'Rubik', sans-serif !important;
    font-size: 24px;
    line-height: 29px;
    text-align: center;
    margin-top: 46px;
    font-weight: bold;
    color: var(--color-text);
}

.text-two {
    font-family: 'Montserrat', 'Rubik', sans-serif !important;
    font-style: normal;
    font-weight: normal;
    font-size: 15px;
    text-align: center;
    margin-top: 12px;
    color: var(--color-textGray-To-lightGray);
    align-items: center !important;
}

.button {
    width: 50px;
    height: 50px;
    margin: 0 15px 30px 0;
    animation: pulse;
    animation-duration: 0.7s;
}

svg {
    border-radius: 150px;
    border: 2px solid #0481F4;
    border-top: none;
    border-bottom: none;
    border-left: none;
    padding: 3px;
    margin-top: 10px;
}

</style>

<template>
    <!--footer row begin -->
    <div class="row">
        <div class="col-12 footer d-flex justify-content-center fixed-bottom">
            <router-link to="/home" exact-active-class="active">
                <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path class="first" d="M27.5 13.125C27.5 11.6125 26.4875 9.67496 25.25 8.81246L17.525 3.39996C15.775 2.17496 12.9625 2.23746 11.275 3.54996L4.5375 8.79996C3.4125 9.67496 2.5 11.5375 2.5 12.95V22.2125C2.5 25.1125 4.8625 27.4875 7.7625 27.4875H22.2375C25.1375 27.4875 27.5 25.1125 27.5 22.225V18.35" stroke="#65B1F9" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path class="second" d="M15 22.4875V18.7375" stroke="#65B1F9" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </router-link>

            <router-link to="/support-service" exact-active-class="active">
                <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path class="first" d="M2.5 14.45V16.7876C2.5 20.5376 5 23.0376 8.75 23.0376H13.75L19.3125 26.7375C20.1375 27.2875 21.25 26.7001 21.25 25.7001V23.0376C25 23.0376 27.5 20.5376 27.5 16.7876V9.28748C27.5 5.53748 25 3.03748 21.25 3.03748H8.75C5 3.03748 2.5 5.53748 2.5 9.28748" stroke="#65B1F9" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                    <path class="second" d="M15.0007 14.2V13.9375C15.0007 13.0875 15.5258 12.6375 16.0508 12.275C16.5633 11.925 17.0757 11.475 17.0757 10.65C17.0757 9.49999 16.1507 8.57495 15.0007 8.57495C13.8507 8.57495 12.9258 9.49999 12.9258 10.65" stroke="#65B1F9" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path class="second" d="M14.9944 17.1875H15.0056" stroke="#65B1F9" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </router-link>
            <router-link to="/library" exact-active-class="active">
                <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path class="first" d="M27.5 13.7375V5.83749C27.5 4.33749 26.275 3.22499 24.7875 3.34999H24.7125C22.0875 3.57499 18.1 4.91249 15.875 6.31249L15.6625 6.44999C15.3 6.67499 14.7 6.67499 14.3375 6.44999L14.025 6.26249C11.8 4.87499 7.825 3.54999 5.2 3.33749C3.7125 3.21249 2.5 4.33749 2.5 5.82499V20.925C2.5 22.125 3.475 23.25 4.675 23.4L5.0375 23.45C7.75 23.8125 11.9375 25.1875 14.3375 26.5L14.3875 26.525C14.725 26.7125 15.2625 26.7125 15.5875 26.525C17.9875 25.2 22.1875 23.8125 24.9125 23.45L25.325 23.4C26.525 23.25 27.5 22.125 27.5 20.925V18.775" stroke="#65B1F9" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path class="second" d="M15 6.86249V25.6125" stroke="#65B1F9" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path class="second" d="M9.6875 10.6125H6.875" stroke="#65B1F9" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path class="second" d="M10.625 14.3625H6.875" stroke="#65B1F9" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </router-link>

            <router-link to="/search" exact-active-class="active-search">
                <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path class="first" d="M13.75 2.5C19.9625 2.5 25 7.5375 25 13.75C25 19.9625 19.9625 25 13.75 25C7.5375 25 2.5 19.9625 2.5 13.75C2.5 9.375 5 5.575 8.6625 3.7125" stroke="#65B1F9" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path class="second" d="M23.8382 26.2125C24.5007 28.2125 26.0132 28.4125 27.1757 26.6625C28.2507 25.0625 27.5507 23.75 25.6257 23.75C24.1882 23.75 23.3882 24.8625 23.8382 26.2125Z" stroke="#65B1F9" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </router-link>

            <router-link to="/progress-audio" exact-active-class="active-profile">
                <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path class="first" d="M13.0379 3.025C14.2504 2.325 15.7504 2.325 16.9754 3.025L24.4004 7.31249C25.6129 8.01249 26.3629 9.31254 26.3629 10.725V19.275C26.3629 20.675 25.6129 21.9751 24.4004 22.6876L16.9754 26.975C15.7629 27.675 14.2629 27.675 13.0379 26.975L5.61289 22.6876C4.40039 21.9876 3.65039 20.6875 3.65039 19.275V10.725C3.65039 9.32504 4.40039 8.02499 5.61289 7.31249L7.98789 5.93752" stroke="#65B1F9" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path class="second" d="M15.0004 13.75C16.6089 13.75 17.9129 12.446 17.9129 10.8375C17.9129 9.22893 16.6089 7.92502 15.0004 7.92502C13.3919 7.92502 12.0879 9.22893 12.0879 10.8375C12.0879 12.446 13.3919 13.75 15.0004 13.75Z" stroke="#65B1F9" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path class="second" d="M20 20.825C20 18.575 17.7625 16.75 15 16.75C12.2375 16.75 10 18.575 10 20.825" stroke="#65B1F9" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </router-link>
        </div>
    </div>
    <!--footer row end -->
</template>

<script>
export default {
    name: "footerMenu"
}
</script>

<style scoped>
.active svg > .first, .active-message-question svg > .first{
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
    stroke-width: 1.5 ;
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
    border-radius: 12px;
    align-items: center !important;
    gap: 11%;
    margin-bottom: -1px;
}

</style>

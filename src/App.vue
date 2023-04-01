<template>
    <body id=app :class="mode">
    <div v-if="isOnline" class="container-fluid">
        <router-view :mode="mode" @detectSystemTheme="detectSystemTheme" @lightTheme="lightTheme" @darkTheme="darkTheme" @cancel="cancel"/>
    </div>

    <div v-if="isOffline" class="container-fluid">
        <Saved />
    </div>
    <logo-spinner style="z-index: 9999" v-if="$root.showOverlay"/>
    </body>
</template>

<script>
import logoSpinner from "@/assets/spinner/logoSpinner";
import VueOffline from 'vue-offline'
import Vue from "vue";
import Saved from "@/components/pages/library/saved";
Vue.use(VueOffline)

export default {
    name: 'App',
    components: {Saved, logoSpinner},
    data() {
        return {
            mode: localStorage.getItem('theme') || 'light',
            light: 'light',
            dark: 'dark',
        }
    },
    methods: {
        lightTheme() {
            this.mode = this.light
        },
        darkTheme() {
            this.mode = this.dark
        },
        detectSystemTheme() {
            if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
                this.mode = this.dark
            } else {
                this.mode = this.light
            }
        },
        cancel() {
            this.mode = localStorage.getItem('theme')
            this.$router.back()
        },
    },
    mounted() {
        if (localStorage.getItem('theme') === null) {
            localStorage.setItem('theme', 'dark');
            this.mode = localStorage.getItem('theme');
        }
        if (localStorage.getItem('system') === 'true') {
            const darkThemeMq = window.matchMedia("(prefers-color-scheme: dark)");
            if (darkThemeMq.matches) {
                localStorage.setItem('theme', 'dark');
                this.mode = localStorage.getItem('theme');
            } else {
                localStorage.setItem('theme', 'light');
                this.mode = localStorage.getItem('theme');
            }
        }

        if (localStorage.getItem('language')) {
            this.$i18n.locale = localStorage.getItem('language')
        } else {
            this.$i18n.locale = 'ru'
        }
    }
}
</script>

<style>
.light {
    background-color: #F8FAFF; /* done  theme back color */
    --color-container: #F8FAFF; /* done theme back container color */
    --color-header: white; /* done block back color */
    --color-block: white; /* done block back color */
    --color-black-to-lightGray: #000000; /* color black to light gray */
    --white-to-dark: white; /* white color to dark mode color */
    --bg-button-row: #F4F6FB; /* done btn row bg color */
    --bg-buttonWhite-dark: white; /* bg button white to dark mode */
    --bg-button-row-lighter: #F4F6FB; /* done btn row bg color lighter in dark mode*/
    --bg-button-row-lighter2: #F4F6FB; /* done btn row bg color lighter in dark mode 2*/
    --bg-book-liner: rgba(23, 77, 132, 0.7); /* done  back-book color */
    --btn-focus-bg: white; /*done btn after click color */
    --color-swiper: rgba(244, 246, 251, 1); /*done color swiper */
    --color-text: #333333; /* done text color */
    --color-Blacktext-To-Blue: #000000; /* done text black color to blue */
    --color-Black-To-White: #000000; /* color black to white */
    --color-text-to-blue: #828282; /* done text color gray to blue */
    --color-textGray-to-gold: #828282; /* done text color gray to gold */
    --color-textDarkGray-To-Blue: #4F4F4F; /*done text dark gray to blue */
    --color-textDarkGray-to-lightGray: #4F4F4F; /*done text dark gray to light gray */
    --color-lightGray-to-lightBlue: #9597A1; /*done light gray to light Blue */
    --color-textGray-To-lightGray: #828282; /* color gray to light blue */
    --color-textGray-To-white: #828282;
    --color-textDarkGray-To-white: #4F4F4F;
    /*for svg*/
    --blueToFade: #0481F4; /*color forward blue to fade blue */
    --blueToWhite: #0481F4; /*color blue to white */
    --blueToFaded: #0481F4; /* color blue to so faded blue*/
    --fadeGrayToWhite: #BDBDBD; /* color faded gray to white color */
    --fadedBlueToFadeBlue: #C7E2FD; /*color so faded to fade blue */
    --fadedBlueToDark: #D4E8FE; /*color so faded blue to darkGray */
    --svg-week-fadeBlue: #CBE5FD; /* color week days svg color faded blue to dark mode */
    --bg-progress: #F4F6FB; /* background color of progress */
    /*for range*/
    --range-fadeBlueToGray: #C3E2FF;
    --day-calendar: #c7c7c7; /* color of calendar unselectable day */
    --color-input: #F4F6FB; /* color input lightBlue to dark */
    --liner: linear-gradient(180deg, rgba(224, 239, 255, 0) -210.86%, #FFFFFF 93.75%); /*color gradient */
    --liner-gray: linear-gradient(270deg, #0085FF 0%, rgba(255, 255, 255, 0) 64.06%);
}

.dark {
    background-color: #1F1D2B; /* done  theme back color */
    --color-container: #1F1D2B; /* done theme back container color */
    --color-header: #252836; /* done block back color */
    --color-block: #252836; /* done block back color */
    --color-black-to-lightGray: #BDBDBD; /* color black to light gray */
    --white-to-dark: #1F1D2B; /* white color to dark mode color */
    --bg-button-row: #252836; /* done btn row bg color */
    --bg-buttonWhite-dark: #2F3244; /* bg button white to dark mode */
    --bg-button-row-lighter: #2D3141; /* done btn row bg color lighter in dark mode*/
    --bg-button-row-lighter2: #2F3344; /* done btn row bg color lighter in dark mode 2*/
    --bg-book-liner: rgba(37, 40, 54, 0.7); /* done  back-book color */
    --btn-focus-bg: #1F1D2B; /*done btn after click color */
    --color-swiper: rgba(244, 246, 251, 0.1); /*done color swiper */
    --color-text: white; /* done text color */
    --color-Blacktext-To-Blue: #0481F4; /* done text black color to blue */
    --color-Black-To-White: white; /* color black to white */
    --color-text-to-blue: #65B1F9; /* done text color gray to blue */
    --color-textGray-to-gold: #FFCF25; /* done text color gray to gold */
    --color-textDarkGray-To-Blue: #65B1F9; /*done text dark gray to blue */
    --color-textDarkGray-to-lightGray: rgba(255, 255, 255, 0.8); /*done text dark gray to light gray */
    --color-lightGray-to-lightBlue: #65B1F9; /*done light gray to light Blue */
    --color-textGray-To-lightGray: #BDBDBD; /* color gray to light blue */
    --color-textGray-To-white: white;
    --color-textDarkGray-To-white: white;
    /*for svg*/
    --blueToFade: #65B1F9; /*color forward blue to faded blue */
    --blueToWhite: white; /*color blue to white */
    --blueToFadeGray: #BDBDBD; /*color blue to white */
    --blueToFaded: #97CAFB; /* color blue to so faded blue*/
    --fadeGrayToWhite: white; /* color faded gray to white color */
    --fadedBlueToFadeBlue: #65B1F9; /*color so faded blue to fade blue */
    --fadedBlueToDark: #31374B; /*color so faded blue to darkGray */
    --svg-week-fadeBlue: #303445; /* color week days svg color faded blue to dark mode */
    --bg-progress: #363A4E; /* background color of progress */
    /*for range*/
    --range-fadeBlueToGray: #767676;
    --day-calendar: #767676; /* color of calendar unselectable day */
    --color-input: #1F1D2B;
    --liner: linear-gradient(180deg, rgba(224, 239, 255, 0) -210.86%, #1F1D2B 93.75%); /*color gradient */
    --liner-gray: linear-gradient(270deg, #0085FF 0%, #252836 52.66%);
}

.hooper-indicator.is-active {
    background-color: #65B1F9 !important;
    width: 11px !important;
    height: 4px !important;
    border-radius: 4px !important;
}

.hooper-indicator {
    width: 4px !important;
    height: 4px !important;
    background-color: #97CAFB !important;
    border-radius: 50% !important;
}

</style>

<template>
    <!--row container start -->
    <div class="row">
        <div class="col container-col">

            <!-- header start -->
            <div class="row">
                <div class="col fixed-top">
                    <div class="row header-name-row">
                        <div class="col-2 ps-2">
                            <go-back-button class="arrow-back"/>
                        </div>
                        <div class="col-8 header-name d-flex justify-content-center p-0">
                            {{ $t('language.language') }}
                        </div>
                        <div class="col-2"><!-- don't delete (Abdullokh) --> </div>
                    </div>
                </div>
            </div>
            <!-- header end -->

            <!-- content block row start -->
            <div class="row d-flex justify-content-center">
                <div class="col-11 center-block">
                    <div v-if="this.language === 'ru'">
                        <button class="button-b">Русский</button>
                        <svg class="icon" width="14" height="10" viewBox="0 0 14 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 5.57143L4.6 9L13 1" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </div>
                    <button v-else class="ru-btn" @click="language = 'ru'">Русский</button>

                    <div v-if="this.language === 'uz'">
                        <button class="button-b">O'zbek</button>
                        <svg class="icon" width="14" height="10" viewBox="0 0 14 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 5.57143L4.6 9L13 1" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </div>
                    <button v-else class="ru-btn" @click="language = 'uz'">O'zbek</button>

                    <div v-if="this.language === 'en'">
                        <button class="button-b">English</button>
                        <svg class="icon" width="14" height="10" viewBox="0 0 14 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 5.57143L4.6 9L13 1" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </div>
                    <button v-else class="ru-btn" @click="language = 'en'">English</button>
                </div>
            </div>
            <!-- content block row end -->

            <div class="row">
                <div class="col d-flex justify-content-center fixed-bottom">
                    <Button type="submit" text="save" style="width: 104%" :onClick="changeLanguage"/>
                </div>
            </div>

        </div> <!--container col -->
    </div>
    <!--row container start -->
</template>

<script>
import locale from "@/mixins/locale";
import Button from "../../button/Button";
import GoBackButton from "@/components/modals/GoBackButton";

export default {
    name: "setting-language",
    components: {GoBackButton, Button},
    mixins: [locale],
    data() {
        return {
            language: this.$i18n.locale
        }
    },
    mounted() {
        this.$root.showOverlay = true
        setTimeout(this.disable, 1000)
    },
    methods: {
        disable() {
            this.$root.showOverlay = false
        },
        changeLanguage() {
            if (this.language === 'ru') {
                this.$i18n.locale = 'ru'
                localStorage.setItem('language', 'ru')
            }

            if (this.language === 'uz') {
                this.$i18n.locale = 'uz'
                localStorage.setItem('language', 'uz')
            }

            if (this.language === 'en') {
                this.$i18n.locale = 'en'
                localStorage.setItem('language', 'en')
            }

            this.$router.push('/setting')
        },
    },
}
</script>

<style scoped>
.fixed-bottom {
    margin-bottom: 18px;
}

.container-col {
    font-family: 'Montserrat', 'Rubik', sans-serif !important;
    background-color: var(--color-container) !important;
    border-radius: 0 0 15px 15px;
    padding-top: 147px;
}

.header-name-row {
    height: 147px;
    border-radius: 15px;
    background-color: var(--color-header);
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

.ru-btn {
    width: 100%;
    margin: 0 0 12px 0;
    padding-left: 0;
    border-radius: 12px;
    height: 65px;
    color: #0481F4;
    border: none;
    background-color: var(--bg-button-row-lighter2) !important;
}

.ru-btn {
    margin-top: 17px;
}

.button-b {
    width: 100%;
    margin: 17px 0 12px 0;
    padding-left: 0;
    border-radius: 12px;
    height: 65px;
    color: white;
    border: none;
    background-color: #177EE6 !important;
}
.icon {
    position: absolute;
    margin: 45px 0 0 -40px;
}

</style>

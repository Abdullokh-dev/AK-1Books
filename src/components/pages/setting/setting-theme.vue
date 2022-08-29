<template>
    <!--row container start -->
    <div class="row">
        <div class="col container-col">

            <div class="row header-name-row">
                <div class="col-2 ps-3 d-flex align-items-center">
                    <button type="button" class="btn d-flex justify-content-start btn-arrow"
                            @click="$emit('cancel')"
                    >
                        <svg width="29" height="24" viewBox="0 0 29 24" fill="none"
                             xmlns="http://www.w3.org/2000/svg"
                             class="arrow-back">
                            <path class="svg"
                                  d="M7.8175 18.6375C7.6275 18.6375 7.4375 18.5675 7.2875 18.4175L1.2175 12.3475C0.9275 12.0575 0.9275 11.5775 1.2175 11.2875L7.2875 5.2175C7.5775 4.9275 8.0575 4.9275 8.3475 5.2175C8.6375 5.5075 8.6375 5.9875 8.3475 6.2775L2.8075 11.8175L8.3475 17.3575C8.6375 17.6475 8.6375 18.1275 8.3475 18.4175C8.2075 18.5675 8.0075 18.6375 7.8175 18.6375Z"
                                  fill="#333333"/>
                            <path class="svg"
                                  d="M27.748 12.5675H2.91797C2.50797 12.5675 2.16797 12.2275 2.16797 11.8175C2.16797 11.4075 2.50797 11.0675 2.91797 11.0675H27.748C28.158 11.0675 28.498 11.4075 28.498 11.8175C28.498 12.2275 28.158 12.5675 27.748 12.5675Z"
                                  fill="#333333"/>
                        </svg>
                    </button>
                </div>
                <div class="col-8 header-name d-flex justify-content-center">
                    {{ $t('theme') }}
                </div>
                <div class="col-2"><!-- don't delete (Abdullokh) --> </div>
            </div>

            <!-- content block row start -->
            <div class="row d-flex justify-content-center">
                <div class="col-11 center-block">
                    <div class="row">
                        <div class="col-9">
                            <div class="row">
                                <div class="col row-text-1 p-0">
                                    {{ $t('light') }}
                                </div>
                            </div>
                        </div>

                        <div class="col-3 d-flex justify-content-end">
                            <span v-if="this.light === true"
                                  class="checked-radio p-0">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="12" cy="12" r="12" fill="#0481F4"/>
                                    <path d="M8 12.4286L10.7 15L17 9" stroke="white" stroke-width="2"
                                          stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                            </span>
                            <input v-else type="radio" name="theme" class="box-theme p-0"
                                   @click="$emit('lightTheme')"
                                   @change="changeToLight"
                            >
                        </div>
                    </div>

                    <!-- hr row start -->
                    <div class="row d-flex justify-content-center ">
                        <div class="col  hr-width">
                            <div class="hr"></div>
                        </div>
                    </div>
                    <!-- hr row end -->
                    <!-- 2 -->
                    <div class="row">
                        <div class="col-9">
                            <div class="row">
                                <div class="col row-text-1 p-0">
                                    {{ $t('dark') }}
                                </div>
                            </div>
                        </div>

                        <div class="col-3 d-flex justify-content-end">
                            <span v-if="this.dark === true"
                                  class="checked-radio p-0">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="12" cy="12" r="12" fill="#0481F4"/>
                                    <path d="M8 12.4286L10.7 15L17 9" stroke="white" stroke-width="2"
                                          stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                            </span>

                            <input v-else type="radio" name="theme" class="box-theme p-0"
                                   @click="$emit('darkTheme')"
                                   @change="changeToDark"
                            >
                        </div>
                    </div>
                    <!-- hr row start -->
                    <div class="row d-flex justify-content-center ">
                        <div class="col  hr-width">
                            <div class="hr"></div>
                        </div>
                    </div>
                    <!-- hr row end -->

                    <!-- 3 -->
                    <div class="row pb-block-2">
                        <div class="col-9">
                            <div class="row">
                                <div class="col row-text-1 p-0">
                                    {{ $t('systemic') }}
                                </div>
                            </div>
                        </div>

                        <div class="col-3 d-flex justify-content-end">
                            <span v-if="this.systemTheme === 'true'"
                                  class="checked-radio p-0">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="12" cy="12" r="12" fill="#0481F4"/>
                                    <path d="M8 12.4286L10.7 15L17 9" stroke="white" stroke-width="2"
                                          stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                            </span>

                            <input v-else type="radio" name="theme" class="box-theme p-0"
                                   @click="$emit('detectSystemTheme')"
                                   @change="changeToSystem"
                            >
                        </div>
                    </div>

                </div>
            </div>
            <!-- content block row end -->

            <!-- save button row start -->
            <div class="row">
                <div class="col d-flex justify-content-center fixed-bottom">
                    <Button type="submit" class="save-button" text="save" style="width: 104%" :onClick="save"/>
                </div>
            </div>
        </div> <!--container col -->
    </div>
    <!--row container start -->
</template>

<script>
import Button from "../../button/Button";
import App from "@/App";

export default {
    name: "setting-theme",
    components: {Button},
    data() {
        return {
            systemTheme: localStorage.getItem('system') || 'false',
            light: false,
            dark: false
        }
    },
    methods: {
        save() {
            if (this.light) {
                localStorage.setItem('theme', 'light');
                localStorage.setItem('system', 'false');
            } else if (this.dark) {
                localStorage.setItem('theme', 'dark');
                localStorage.setItem('system', 'false');
                this.systemTheme = localStorage.getItem('system');
            } else if (this.systemTheme === 'true') {
                localStorage.setItem('system', 'true');
                this.systemTheme = localStorage.getItem('system');
            }
            this.$router.push('/setting')
        },
        changeToLight() {
            this.systemTheme = 'false';
            this.dark = false;
            this.light = true;
        },
        changeToDark() {
            this.systemTheme = 'false';
            this.light = false;
            this.dark = true;
        },
        changeToSystem() {
            this.systemTheme = 'true';
            this.light = false;
            this.dark = false;
        }
    },
    mounted() {
        if (localStorage.getItem('system') === 'false' && App.data().mode === 'light') {
            this.changeToLight()
        } else if (localStorage.getItem('system') === 'false' && App.data().mode === 'dark') {
            this.changeToDark()
        }
    },
}
</script>

<style scoped>
.container-col {
    font-family: 'Montserrat', 'Rubik', sans-serif !important;
    background-color: var(--color-container);
    border-radius: 0 0 15px 15px;
    margin-bottom: 100px;
}

.header-name-row {
    height: 147px;
    border-radius: 15px;
    background-color: var(--color-header);
}

.btn-arrow {
    margin: 0 0 -7px 3px;
}

.arrow-back > path {
    fill: var(--color-Black-To-White);
    margin: 1px 1px 1px 1px;
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
    background-color: var(--color-block);
    margin: 20px 0 20px 0;
}

.row-text-1 {
    font-weight: 500;
    font-size: 14px;
    line-height: 17px;
    align-items: center;
    color: var(--color-text);
    margin: 34px 0 0 26px;
}

.hr {
    border-bottom: 1px solid #C4E2FF;
    width: 100%;
}

.hr-width {
    padding-left: 26px !important;
    padding-right: 30px !important;
    margin-top: 30px;
}

.pb-block-2 {
    margin-bottom: 33px;
}

.checked-radio {
    margin: 30px 13px 0 0;
}

.box-theme {
    width: 24px;
    height: 24px;
    border-radius: 50%;
    border: 1px solid grey;
    outline: none;
    cursor: pointer;
    margin: 30px 13px 0 0;
}

.box-theme:checked {
    background-image: url("../../images/setting/profile/icon-blue-checked.svg");
    border: none;
}

.save-button {
    margin-bottom: 18px;
}

</style>

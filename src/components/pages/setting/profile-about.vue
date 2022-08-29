<template>
    <!--row container start -->
    <div class="row">
        <div class="col container-col"> <!--container col -->

            <!-- header start -->
            <div class="row">
                <div class="col fixed-top">
                    <div class="row header-name-row">
                        <div class="col-2 ps-2">
                            <GoBackButton class="arrow-back"/>
                        </div>

                        <div class="col-8 header-name d-flex justify-content-center p-0">
                            {{ $t('account') }}
                        </div>
                        <div class="col-2"><!-- don't delete (Abdullokh) --> </div>
                    </div>
                </div>
            </div>
            <!-- header end -->

            <!-- second block start -->
            <div class="row">
                <div class="col block-2">
                    <div class="row">
                        <div class="col d-flex justify-content-center">
                            <div class="d-flex justify-content-center align-items-center box-img">
                                <div class="liner">

                                </div>
                                <div>
                                    <img src="../../images/profile/man2.png" class="bg-man-profile" alt="">
                                </div>
                            </div>
                        </div>

                        <label for="image">
                            <div class="col-12 d-flex justify-content-center">
                                <svg width="30" height="30" viewBox="0 0 30 30" fill="none"
                                     xmlns="http://www.w3.org/2000/svg" class="camera-icon">
                                    <path
                                        d="M21.5501 28.4375H8.4501C4.9501 28.4375 2.72509 26.35 2.52509 22.8625L1.87509 12.55C1.77509 10.9875 2.31259 9.4875 3.38759 8.35C4.45009 7.2125 5.95009 6.5625 7.50009 6.5625C7.90009 6.5625 8.2876 6.325 8.4751 5.95L9.37509 4.1625C10.1126 2.7 11.9626 1.5625 13.5751 1.5625H16.4376C18.0501 1.5625 19.8876 2.7 20.6251 4.15L21.5251 5.975C21.7126 6.325 22.0876 6.5625 22.5001 6.5625C24.0501 6.5625 25.5501 7.2125 26.6126 8.35C27.6876 9.5 28.2251 10.9875 28.1251 12.55L27.4751 22.875C27.2501 26.4125 25.0876 28.4375 21.5501 28.4375ZM13.5751 3.4375C12.6501 3.4375 11.4751 4.1625 11.0501 5L10.1501 6.8C9.62509 7.8125 8.6126 8.4375 7.50009 8.4375C6.45009 8.4375 5.47509 8.8625 4.75009 9.625C4.03759 10.3875 3.67509 11.3875 3.75009 12.425L4.40009 22.75C4.55009 25.275 5.9126 26.5625 8.4501 26.5625H21.5501C24.0751 26.5625 25.4376 25.275 25.6001 22.75L26.2501 12.425C26.3126 11.3875 25.9626 10.3875 25.2501 9.625C24.5251 8.8625 23.5501 8.4375 22.5001 8.4375C21.3876 8.4375 20.3751 7.8125 19.8501 6.825L18.9376 5C18.5251 4.175 17.3501 3.45 16.4251 3.45H13.5751V3.4375Z"
                                        fill="white"/>
                                    <path
                                        d="M16.875 10.9375H13.125C12.6125 10.9375 12.1875 10.5125 12.1875 10C12.1875 9.4875 12.6125 9.0625 13.125 9.0625H16.875C17.3875 9.0625 17.8125 9.4875 17.8125 10C17.8125 10.5125 17.3875 10.9375 16.875 10.9375Z"
                                        fill="white"/>
                                    <path
                                        d="M15 23.4375C12.2375 23.4375 10 21.2 10 18.4375C10 15.675 12.2375 13.4375 15 13.4375C17.7625 13.4375 20 15.675 20 18.4375C20 21.2 17.7625 23.4375 15 23.4375ZM15 15.3125C13.275 15.3125 11.875 16.7125 11.875 18.4375C11.875 20.1625 13.275 21.5625 15 21.5625C16.725 21.5625 18.125 20.1625 18.125 18.4375C18.125 16.7125 16.725 15.3125 15 15.3125Z"
                                        fill="white"/>
                                </svg>
                            </div>
                        </label>
                        <input
                            id="image"
                            style="visibility: hidden"
                            type="file"
                            name="image"
                            accept="image/png,image/jpeg,image/jpg"
                        />
                    </div>

                    <div class="row d-flex justify-content-center">
                        <div class="col-11 p-0">
                            <input type="email" max="" name="email" :placeholder="$t('firstName')"
                                   v-model="form.givenName"
                                   class="form-control first-input">
                        </div>

                        <div class="col-11 p-0">
                            <input type="email" name="email" :placeholder="$t('lastName')"
                                   v-model="form.familyName"
                                   class="form-control mt-2">
                        </div>

                        <div class="col-11 p-0">
                            <div class="row">
                                <div class="col-12">
                                    <div class="form-input1">
                                        <span class="icon-1">
                                            <img src="../../images/tel-logo.png" class="fa fa-envelope" alt="" aria-hidden="true">
                                        </span>
                                        <input
                                            type="tel"
                                            name="phone-number"
                                            v-model="number"
                                            class="form-control form-control-3"
                                            @blur="sortVal"
                                            @input="defaultVal"
                                            maxlength="18"
                                            pattern="^\+[0-9]{3}\([0-9]{2}\) [0-9]{3}-[0-9]{2}-[0-9]{2}"
                                        >
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- checkbox row start -->
                    <div class="row checkbox-row">
                        <div v-if="this.genderNumber === 0"
                             class="col-6 d-flex justify-content-start radio male-radio-row">
                            <input type="radio" checked value=0 v-model="form.gender" name="gender"
                                   class="box-male p-0">
                            <span class="female-text-checked"> {{ $t('male') }} </span>
                        </div>
                        <div v-else class="col-6 d-flex justify-content-start radio male-radio-row">
                            <input @click="changeMale" type="radio" checked value=0 v-model="form.gender" name="gender"
                                   class="box-male p-0">
                            <span class="male-text">{{ $t('male') }}</span>
                        </div>

                        <div v-if="this.genderNumber === 1"
                             class="col-6 d-flex justify-content-end radio female-radio-row">
                            <input class="box-female p-0" type="radio" name="gender" checked>
                            <label class="form-check-label female-text-checked" for="flexRadioDefault2"> {{$t('female') }} </label>
                        </div>
                        <div v-else class="col-6 d-flex justify-content-end radio female-radio-row">
                            <input @click="changeFemale" type="radio" value="1" class="box-female p-0" name="gender"
                                   id="flexRadioDefault2">
                            <span class="form-check-label female-text"> {{ $t('female') }} </span>
                        </div>
                    </div>
                    <!-- checkbox row end -->

                    <!--bottom 2 input row start -->
                    <div class="row d-flex justify-content-center">
                        <div class="col-11 p-0">
                            <select v-model="form.city" class="form-select form-select-lg mb-3"
                                    aria-label=".form-select-lg example">
                                <option selected>
                                    ...
                                </option>
                            </select>
                        </div>
                    </div>

                    <div class="row d-flex justify-content-center">
                        <div class="col-11 p-0">
                            <date-pick :mobileBreakpointWidth=2400 type="date" :displayFormat="'DD / MM / YYYY'"
                                       class="mt-2 cal-btn" v-model="birthdate">
                                <template v-slot:default="{toggle, inputValue}">
                                    <button class="cal-btn-text d-flex justify-content-start" @click="toggle">
                                        {{ inputValue || birthdate || $t('calendar') }}
                                    </button>
                                </template>
                            </date-pick>
                        </div>
                    </div>
                    <!--bottom 2 input row end -->

                    <!-- save button row start-->
                    <div class="row d-flex justify-content-center">
                        <div class="col-11 p-0">
                            <Button type="submit" :on-click="putUser" text="save" class="save-button mt-2"/>
                        </div>
                    </div>
                    <!-- save button row end-->

                </div> <!-- second block col -->
            </div>
            <!-- second block start -->

        </div><!-- container col -->
    </div>
    <!--row container end -->
</template>

<script>

import GoBackButton from "@/components/modals/GoBackButton";
import Button from "../../button/Button";
import DatePick from 'vue-date-pick';
import "@/assets/calendar.css";

export default {
    name: "profile-about",
    components: {
        GoBackButton,
        Button,
        DatePick
    },
    data() {
        return {
            form: {
                phone: '+998970003525',
                givenName: 'Abdullokh',
                familyName: 'Khamzaev',
                gender: 0,
                birthday: '2001-09-09',
            },
            birthdate: '2001-09-09',
            genderNumber: null,
            number: '+998(97) 000 35 25',
        }
    },
    methods: {
        convertDateAnnouncement(inputFormat) {
            function pad(s) {
                return (s < 10) ? '0' + s : s;
            }

            let d = new Date(inputFormat)
            return [pad(d.getDate()), pad(d.getMonth() + 1), d.getFullYear()].join('-')
        },
        defaultVal() {
            if (this.number.length === 2) {
                this.number = '998'
            }
        },
        sortVal() {
            let str = this.number;
            let result = str.match(/[/0-9]+/g)
            this.form.phone = result[0] + result[1] + result[2] + result[3] + result[4]
        },
        changeFemale() {
            this.genderNumber = 1
        },
        changeMale() {
            this.genderNumber = 0
        },
        putUser() {
            this.$router.push('./setting')
        },
        disable() {
            this.$root.showOverlay = false
        },
    },
    mounted() {
        this.$root.showOverlay = true
        setTimeout(this.disable, 1000)
    },
    watch: {
        number() {
            this.number = this.number.replace(/[^0-9]/g, '')
                .replace(/^(\d{3})(\d{2})(\d{3})(\d{2})(\d{2})/g, '+998($2) $3-$4-$5');
        },
    }
}
</script>

<style scoped>
.container-col {
    font-family: 'Montserrat', 'Rubik', sans-serif !important;
    background-color: var(--color-container) !important;
}

.form-select {
    height: 70px;
    border-radius: 12px;
    color: #0481F4;
    background-color: var(--color-block);
}

option {
    background-color: yellowgreen !important;
}

.liner {
    width: 116px;
    height: 116px;
    position: absolute;
    background-color: #0481F4;
    border-radius: 50%;
}

.box-img {
    height: 177px;
    width: 177px;
}

.block-2 {
    border-radius: 15px;
    background-color: var(--color-block);
    margin-top: 167px;
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

.bg-man-profile {
    opacity: 0.5;
}

.bg-man-profile {
    margin-top: 10.5px;
    width: 178px;
    height: 176px;
}

.camera-icon {
    z-index: 1;
    position: absolute;
    margin-top: -105px;
}

.fixed-top {
    z-index: 2;
}

.cal-btn-text {
    font-size: 20px !important;
    padding: 18px 0 0 20px;
    color: #0481F4;
    border: none !important;
    height: 68px;
    width: 100%;
    border-radius: 12px;
    background-color: var(--color-header);
}

.cal-btn {
    width: 100%;
    height: 70px;
    border-radius: 12px;
    background-color: var(--color-header);
    border: 1px solid #BDBDBD;
}

input::placeholder {
    color: var(--range-fadeBlueToGray);
}

.form-control {
    height: 70px;
    border-radius: 12px;
    padding-left: 21px;
    border: 1px solid #BDBDBD;
    color: #0481F4;
    background-color: var(--color-header);
    font-size: 16px;
}

.form-control-3 {
    padding-left: 67px;
    font-size: 20px !important;
}

.form-input1 {
    margin-top: 8px;
    position: relative;
    display: flex;
}

.icon-1 {
    position: absolute;
    left: 25px;
    top: 0;
    font-size: 25px;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
}

.box-male, .box-female {
    width: 24px;
    height: 24px;
    border-radius: 50%;
    vertical-align: middle;
    border: 1px solid grey;
    -webkit-appearance: none;
    outline: none;
    cursor: pointer;
}

.box-male:checked, .box-female:checked {
    border: none !important;
}

.male-text, .female-text, .female-text-checked, .female-text-checked {
    font-weight: 500;
    font-size: 16px;
    line-height: 20px;
    color: #828282;
    margin: 3px 0 0 16px;
}

.female-text-checked {
    color: #0481F4 !important;
}

.female-text-checked {
    color: #0481F4 !important;
}

.box-male:checked, .box-female:checked {
    background-image: url("../../images/setting/profile/icon-blue-checked.svg");
}

.male-radio-row {
    padding: 31px 0 31px 10%;
}

.female-radio-row {
    padding: 31px 10% 31px 0;
}

.first-input {
    margin-top: -15px;
}

.save-button {
    margin-bottom: 18px;
}

</style>

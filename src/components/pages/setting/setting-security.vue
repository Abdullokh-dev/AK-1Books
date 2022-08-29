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
                            {{ $t('security.security') }}
                        </div>
                        <div class="col-2"><!-- don't delete (Abdullokh) --> </div>
                    </div>
                </div>
            </div>
            <!-- header end -->

            <!-- content block row start -->
            <form>
                <div>
                    <div class="row d-flex justify-content-center">
                        <div class="col-11 center-block">
                            <svg xmlns="http://www.w3.org/2000/svg" style="display: none;">
                                <symbol id="check-circle-fill" fill="currentColor" viewBox="0 0 16 16">
                                    <path
                                        d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
                                </symbol>
                                <symbol id="info-fill" fill="currentColor" viewBox="0 0 16 16">
                                    <path
                                        d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"/>
                                </symbol>
                                <symbol id="exclamation-triangle-fill" fill="currentColor" viewBox="0 0 16 16">
                                    <path
                                        d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
                                </symbol>
                            </svg>

                            <input
                                type="password"
                                :placeholder="$t('security.oldPassword')"
                                class="form-control input-size-1"
                                v-model="checkPassword.password"
                            />

                            <input
                                type="password"
                                :placeholder="$t('security.newPassword')"
                                class="form-control input-size-2 "
                                v-model="checkNewPassword.first"
                            />

                            <input
                                type="password"
                                :placeholder="$t('security.repeatNewPassword')"
                                class="form-control input-size-3"
                                v-model="checkNewPassword.password"
                            />
                        </div>
                    </div>
                    <div class="row">
                        <div class="col d-flex justify-content-center fixed-bottom">
                            <Button text="save" class="save-button" style="width: 104%" :onClick="changePassword"/>
                        </div>
                    </div>
                </div>
            </form>
            <!-- save button row end-->

            <div class=" row reset_password justify-content-center" style="margin-bottom: 20px; border-radius: 10px">
                <label class="press_button_info"> {{ $t('security.forgotPasswordInfo') }} <span
                    style="color:blue"> {{ $t('security.pressReset') }} </span></label>
                <div class="col-11 d-flex justify-content-center pb-3">
                    <button class="timer" style="width: 100%"> {{ $t('security.buttonResetPassword') }}</button>
                </div>
            </div>
            <!-- content block row end -->

        </div> <!--container col -->
    </div>
    <!--row container start -->
</template>

<script>
import Button from "../../button/Button";
import GoBackButton from "@/components/modals/GoBackButton";

export default {
    name: "setting-security",
    components: {GoBackButton, Button},
    computed: {
    },
    methods: {
        changePassword() {
            this.$router.push('/setting')
        },
        disable() {
            this.$root.showOverlay = false
        },
    },
    data() {
        return {
            checkPassword: {
                phone: '',
                password: '',
            },
            checkNewPassword: {
                first: '',
                password: '',
            },
        }
    },
    mounted() {
        this.$root.showOverlay = true
        setTimeout(this.disable, 1000)
    },
}
</script>

<style scoped>
.container-col {
    font-family: 'Montserrat', 'Rubik', sans-serif !important;
    background-color: var(--color-container) !important;
    border-radius: 0 0 15px 15px;
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
    margin: 167px 0 20px 0;
    background-color: var(--color-block);
    padding-bottom: 19px;
}

.form-control {
    width: 100%;
    height: 58px;
    border-radius: 12px;
    font-size: 14px;
    padding-left: 26px !important;
    border: 1px solid #0481F4;
    background-color: var(--color-input);
}

.input-size-1 {
    border: 1px solid #BDBDBD !important;
    margin: 18px 0 8px 0;
}

.input-size-1::placeholder {
    color: #BDBDBD;
}

.input-size-2::placeholder, .input-size-3::placeholder {
    color: var(--color-textDarkGray-To-white);
}

.input-size-3 {
    margin: 8px 0 2px 0;
}

.timer {
    width: 100% !important;
    height: 70px;
    border: none;
    border-radius: 12px;
    background-color: #0481F4;
    color: white;
}

.press_button_info {
    padding: 5px 40px;
    font-size: 14px;
    color: var(--color-textGray-To-lightGray);
}

.save-button {
    margin-bottom: 26px;
}

</style>

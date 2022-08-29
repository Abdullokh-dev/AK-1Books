<template>
    <div>
        <div class="row">
            <div class="col logo d-flex justify-content-center">
                <img alt="" src="../../images/login-sixth-logo.png">
            </div>
        </div>

        <div class="row">
            <div class="col text-one">
                {{ $t('verificationCode') }}
            </div>
        </div>

        <div class="row">
            <div class="col text-two">
                {{ $t('security.sendCodeToPhone') }} <br/>
                <span
                    class="number">
                </span>
            </div>
        </div>

        <div class="row">
            <div class="col">
                <input
                    class="form-control"
                    maxlength="6"
                    min="6"
                    placeholder="- - - - - -"
                    type="text"
                >
            </div>
        </div>

        <Button :onClick="next" text="next"/>
    </div>

</template>

<script>
import Button from "../../button/Button";

export default {
    name: "login-sixth",
    components: {Button},
    methods: {
        route() {
            this.$router.push('/home')
        },

        disable() {
            this.$root.showOverlay = false
        },

        next() {
            this.$root.showOverlay = true
            setTimeout(this.disable, 1000)
            setTimeout(this.route, 1000)
        },
    },

}
</script>

<style scoped>
.logo {
    margin-top: 82px;
}

.text-one {
    font-family: 'Montserrat', 'Rubik', sans-serif !important;
    font-size: 20px;
    line-height: 24px;
    text-align: center;
    margin-top: 38px;
    font-weight: 500;
    color: var(--color-text);
}

.text-two {
    font-family: 'Montserrat', 'Rubik', sans-serif !important;
    font-style: normal;
    font-weight: normal;
    font-size: 15px;
    text-align: center;
    margin-top: 16px;
    color: var(--color-textGray-To-lightGray);
    align-items: center !important;
}

.number {
    color: #177EE6;
}

input {
    text-align: center !important;
    background-color: var(--color-input) !important;
    color: var(--color-text);
    font-size: 40px;
    width: 100%;
    height: 70px;
    border-radius: 12px;
    margin-top: 28px;
    border: 2px solid #177EE6;
}

</style>

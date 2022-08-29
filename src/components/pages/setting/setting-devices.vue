<template>
    <!--row container start -->
    <div class="row">
        <div class="col container-col">

            <!-- header start -->
            <div class="row header-row">
                <div class="col fixed-top">
                    <div class="row header-name-row">
                        <div class="col-2 ps-2">
                            <go-back-button class="arrow-back"/>
                        </div>
                        <div class="col-8 header-name d-flex justify-content-center p-0">
                            {{ $t('device.myDevice') }}
                        </div>
                        <div class="col-2"><!-- don't delete (Abdullokh) --> </div>
                    </div>
                </div>
            </div>
            <!-- header end -->

            <!-- devices row start -->
            <div class="row mb-4">
                <div class="col-12">
                    <!-- device block row start -->
                    <div class="row d-flex justify-content-center">
                        <div class="col-11 center-block">
                            <div class="row">
                                <div class="col phone-model">
                                    Iphone 13 pro Max
                                </div>
                            </div>
                            <div class="row">
                                <div class="col p-0 phone-address" style="padding: 0 80px 0 0;">
                                    2021-11-01
                                </div>
                            </div>
                            <div class="row">
                                <div class="col p-0 edit-device">
                                    {{ $t('device.thisDevice') }}
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- device block row end -->
                </div>
            </div>

            <!-- save button row start -->
            <div class="row d-flex justify-content-center">
                <div class="col-12 d-flex justify-content-center fixed-bottom">
                    <Button type="submit" text="save" class="save-btn" :onClick="toPage"/>
                </div>
            </div>
        </div> <!--container col -->
    </div>
    <!--row container start -->
</template>

<script>
import Button from "../../button/Button";
import GoBackButton from "@/components/modals/GoBackButton";

export default {
    name: "setting-devices",
    components: {GoBackButton, Button},
    methods: {
        toPage() {
            this.$router.push('/setting')
        },
        disable() {
            this.$root.showOverlay = false
        },
    },
    mounted() {
        this.$root.showOverlay = true
        setTimeout(this.disable, 1000)
    }
}
</script>

<style scoped>
.container-col {
    font-family: 'Montserrat', 'Rubik', sans-serif !important;
    background-color: var(--color-container) !important;
    border-radius: 0 0 15px 15px;
    margin-bottom: 100px;
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

.phone-model {
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 17px;
    margin: 15px 0 0 24px;
    padding: 0 80px 0 0;
    color: var(--color-text);
}

.phone-address {
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 15px;
    color: var(--color-textGray-To-white);
    margin: 8px 0 0 24px;
}

.edit-device {
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 15px;
    color: #0481F4;
    margin: 8px 0 15px 24px;
}

.header-row {
    margin-bottom: 147px;
}

.save-btn {
    width: 104%;
    margin-bottom: 18px;
}

</style>

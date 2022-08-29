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
                            {{ $t('notification') }}
                        </div>
                        <div class="col-2"><!-- don't delete (Abdullokh) --> </div>
                    </div>
                </div>
            </div>
            <!-- header end -->

            <!-- content block row start -->
            <div class="row d-flex justify-content-center">
                <div class="col-11 center-block">
                    <div class="row">
                        <div class="col-9">
                            <div class="row">
                                <div class="col row-text-1 p-0">
                                    {{ $t('promotion') }}
                                </div>
                            </div>
                            <div class="row">
                                <div class="col row-text-2 p-0">
                                    {{ $t('distribution') }}
                                </div>
                            </div>
                        </div>

                        <div class="col-3 d-flex justify-content-end">
                            <div class="form-check form-switch">
                                <input class="form-check-input" type="checkbox" role="switch">
                            </div>
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
                                    {{ $t('bookRecommendations')}}
                                </div>
                            </div>
                            <div class="row">
                                <div class="col row-text-2 p-0">
                                    {{ $t('distribution') }}
                                </div>
                            </div>
                        </div>

                        <div class="col-3 d-flex justify-content-end">
                            <div class="form-check form-switch">
                                <input class="form-check-input" type="checkbox" role="switch">
                            </div>
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
                    <div class="row pb-4">
                        <div class="col-9">
                            <div class="row">
                                <div class="col row-text-1 p-0">
                                    {{ $t('game') }}
                                </div>
                            </div>
                            <div class="row">
                                <div class="col row-text-2 p-0">
                                    {{ $t('distribution') }}
                                </div>
                            </div>
                        </div>

                        <div class="col-3 d-flex justify-content-end">
                            <div class="form-check form-switch">
                                <input class="form-check-input" type="checkbox" role="switch">
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <!-- content block row end -->

            <!-- save button row start -->
            <div class="row">
                <div class="col d-flex justify-content-center fixed-bottom">
                    <Button type="submit" text="save" class="save-button" :onClick="toPage"/>
                </div>
            </div>
            <!-- save button row end-->

        </div> <!--container col -->
    </div>
    <!--row container start -->
</template>

<script>
import Button from "../../button/Button";
import GoBackButton from "@/components/modals/GoBackButton";
export default {
    name: "setting-notification",
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
    background-color: var(--color-block);
    margin: 167px 0 20px 0;
}

.row-text-1 {
    font-weight: 500;
    font-size: 14px;
    line-height: 17px;
    align-items: center;
    color: var(--color-text);
    margin: 28px 0 0 26px;
}

.row-text-2 {
    font-weight: 500;
    font-size: 10px;
    line-height: 12px;
    color: var(--color-textGray-To-lightGray);
    margin: 7px 0 0 26px;
}

.form-check-input {
    width: 46px;
    height: 24px;
    margin-top: 33px;
    border: none;
    margin-right: 13px;
}

.hr {
    border-bottom: 1px solid #C4E2FF;
    width: 100%;
}

.hr-width {
    padding-left: 26px !important;
    padding-right: 30px !important;
    margin-top: 27px;
}

.save-button {
    width: 104%;
    margin-bottom: 18px;
}

</style>

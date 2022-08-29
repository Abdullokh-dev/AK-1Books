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
                            {{ $t('aboutSubs') }}
                        </div>
                        <div class="col-2"><!-- don't delete (Abdullokh) --> </div>
                    </div>
                </div>
            </div>
            <!-- header end -->

            <!-- content block row start -->
            <div class="row d-flex justify-content-center">
                <div class="col-11 center-block">

                </div>
            </div>
            <!-- content block row end -->

        </div> <!--container col -->
    </div>
    <!--row container start -->
</template>

<script>
import GoBackButton from "@/components/modals/GoBackButton";

export default {
    name: "setting-ab-subs",
    components: {GoBackButton}
}
</script>

<style scoped>
.container-col {
    font-family: 'Montserrat', 'Rubik', sans-serif !important;
    background-color: var(--color-container);
    border-radius: 0 0 15px 15px;
}

.header-name-row {
    height: 147px;
    border-radius: 15px;
    background-color: var(--color-header);
}

.header-block {
    border: 15px;
}

.arrow-back {
    margin-top: 65px;
}

svg > path {
    fill: var(--color-text);
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
    margin: 167px 0 22px 0;
    background-color: var(--color-block);
    height: 75vh;
}

</style>

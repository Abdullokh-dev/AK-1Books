<template>
    <div class="col-2 ps-4 d-flex align-items-center">
        <button type="button" class="btn d-flex justify-content-start" @click="$router.back()">
            <svg width="29" height="24" viewBox="0 0 29 24" fill="none"
                 xmlns="http://www.w3.org/2000/svg"
                 class="arrow-back">
                <path class="svg"
                    d="M7.8175 18.6375C7.6275 18.6375 7.4375 18.5675 7.2875 18.4175L1.2175 12.3475C0.9275 12.0575 0.9275 11.5775 1.2175 11.2875L7.2875 5.2175C7.5775 4.9275 8.0575 4.9275 8.3475 5.2175C8.6375 5.5075 8.6375 5.9875 8.3475 6.2775L2.8075 11.8175L8.3475 17.3575C8.6375 17.6475 8.6375 18.1275 8.3475 18.4175C8.2075 18.5675 8.0075 18.6375 7.8175 18.6375Z"
                    :fill="svgColor"/>
                <path class="svg"
                    d="M27.748 12.5675H2.91797C2.50797 12.5675 2.16797 12.2275 2.16797 11.8175C2.16797 11.4075 2.50797 11.0675 2.91797 11.0675H27.748C28.158 11.0675 28.498 11.4075 28.498 11.8175C28.498 12.2275 28.158 12.5675 27.748 12.5675Z"
                    :fill="svgColor"/>
            </svg>
        </button>
    </div>
</template>

<script>
export default {
    name: "GoBackButton",
    props: {
        svgColor: {
            type: String,
            default: 'var(--color-Black-To-White)'
        }
    }
}
</script>

<style scoped>
.btn {
    border: none !important;
    padding: 0;
}
</style>

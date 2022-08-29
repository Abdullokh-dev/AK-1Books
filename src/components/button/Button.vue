<template>
    <div class="row">
        <div class="col d-flex justify-content-center">
            <button class="button"
                    :type="type"
                    @click="onClick"
                    :style="{height: height + 'px', marginTop: top + 'px'}"
            >
                {{ $t(text) }}
            </button>
        </div>
    </div>
</template>

<script>
export default {
    name: "Button",
    props: {
        height: {
          type: String,
          default: "70"
        },
        top: {
            type: String,
            default: "16"
        },
        type: {
            type: String,
            default: "button",
        },
        text: {
            type: String,
            default: null
        },
        onClick: {
            type: Function
        }
    },
}

</script>

<style scoped>

.button {
    width: 100% !important;
    border: none;
    border-radius: 12px;
    background-color: #0481F4;
    color: white;
}

</style>

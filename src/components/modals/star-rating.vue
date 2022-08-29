<template>
    <div class="row rating">
        <div class="col ps-0 list" :class="{'disabled': disabled}">
            <svg
                :key="star" v-for="star in maxstars"
                :class="[{ 'active': star <= stars }]" @click="rate(star)" class="star"
                :width="width" :height="height" viewBox="0 0 13 13" xmlns="http://www.w3.org/2000/svg"
                :style="{marginRight: padding + 'px'}"
            >
                <path d="M7.23584 1.22052L8.32146 3.40679C8.4695 3.70492 8.86427 4.00305 9.19324 4.05274L11.1589 4.38399C12.4172 4.59931 12.7133 5.51025 11.8086 6.4212L10.2789 7.96981C10.0239 8.22653 9.87587 8.7317 9.95811 9.09608L10.394 11.0091C10.7394 12.5163 9.94166 13.1042 8.61754 12.3175L6.77527 11.2161C6.43807 11.0173 5.89526 11.0173 5.55806 11.2161L3.70757 12.3092C2.38345 13.096 1.58568 12.508 1.9311 11.0008L2.367 9.0878C2.44924 8.7317 2.3012 8.22653 2.04625 7.96153L0.524733 6.42948C-0.37995 5.51853 -0.0838721 4.59931 1.17446 4.39227L3.14009 4.06102C3.46907 4.00305 3.86384 3.7132 4.01188 3.41507L5.0975 1.2288C5.68143 0.0362835 6.65191 0.0362834 7.23584 1.22052Z" fill="#e7e8ea"/>
            </svg>
        </div>
        <div
            :style="{marginLeft: countMargin + 'px'}"
            class="col-1
            col-number p-0"
        >
            <span v-if="showCount" class="ps-1 align-middle" :style="{fontSize: fontSize + 'px'}">{{ stars.toFixed(1) }}</span>
        </div>
    </div>
</template>

<script>


export default {
    name: "star-rating",
    data() {
        return {
            stars: this.star,
        };
    },
    props: {
        star: {
            type: Number,
        },
        fontSize: {
            type: Number,
            default: 12
        },
        maxstars: {
            type: Number,
            default: 5
        },
        disabled: {
            type: Boolean,
            default: true
        },
        width: {
            type: Number,
            default: 13
        },
        height: {
            type: Number,
            default: 13
        },
        padding: {
            type: Number,
            default: 7
        },
        countMargin: {
            type: Number,
            default: -15
        },
        showCount: {
            type: Boolean,
            default: false
        }
    },
    methods: {
        rate(star) {
            if (this.disabled) {
                return;
            }
            if (star <= this.maxstars && star >= 0) {
                this.stars = this.stars === star ? star - 1 : star;
            }
        },
    }
};

</script>

<style lang="css">
svg {
    cursor: pointer;
    /*margin-right: 7px;*/
}

.list {
    max-width: 115px;
}

.col-number {
    margin-top: 1px;
}

.active > path {
    fill: #FFCF25 !important;
}

.align-middle {
    font-weight: 500;
    font-size: 12px;
    color: var(--color-textGray-to-gold);
}

</style>

<template>
    <div class="v-spinner" v-show="$root.showOverlay">
        <div class="v-pulse v-pulse1">
            <svg width="230" height="55" viewBox="8 -8 220 80" fill="none"
                 xmlns="http://www.w3.org/2000/svg">s
                <path
                    v-bind:style="[spinnerStyle, spinnerDelay1]" d="M12.4558 0V38.8427H5.38411V6.91935H0V0H12.4558Z"
                    fill="#333333"/>
                <path
                    v-bind:style="[spinnerStyle, spinnerStyle2,spinnerDelay2]"
                    d="M63.2467 3.53831C65.5504 5.73992 66.7022 8.41331 66.7022 11.5585C66.7022 14.7036 65.604 17.377 63.4075 19.5786C65.604 21.7278 66.7022 24.375 66.7022 27.5202C66.7022 30.6653 65.5504 33.3649 63.2467 35.619C60.9967 37.8206 58.2644 38.9214 55.05 38.9214H21.4711V32.002H55.05C56.3358 32.002 57.4073 31.5827 58.2644 30.744C59.1752 29.8528 59.6305 28.7782 59.6305 27.5202C59.6305 26.2621 59.1752 25.1875 58.2644 24.2964C57.4073 23.4052 56.3358 22.9597 55.05 22.9597H21.4711V16.119H55.05C56.3358 16.119 57.4073 15.6734 58.2644 14.7823C59.1752 13.8911 59.6305 12.8165 59.6305 11.5585C59.6305 10.3004 59.1752 9.25202 58.2644 8.41331C57.4073 7.52218 56.3358 7.07661 55.05 7.07661H21.4711V0.157256H55.05C58.2644 0.157256 60.9967 1.28427 63.2467 3.53831Z"
                    fill="#333333"/>
                <path
                    v-bind:style="[spinnerStyle, spinnerStyle3,spinnerDelay3]"
                    d="M80.5354 5.81855C84.4462 2.04435 89.1339 0.157256 94.5984 0.157256C100.116 0.157256 104.804 2.04435 108.661 5.81855C112.519 9.59274 114.447 14.1794 114.447 19.5786C114.447 24.9254 112.519 29.5121 108.661 33.3387C104.804 37.1129 100.116 39 94.5984 39V32.0806C98.1342 32.0806 101.161 30.875 103.679 28.4637C106.197 26 107.456 23.0383 107.456 19.5786C107.456 16.1189 106.197 13.1573 103.679 10.6935C101.161 8.22984 98.1342 6.99798 94.5984 6.99798C91.0625 6.99798 88.0356 8.22984 85.5177 10.6935C83.0533 13.1573 81.8212 16.1189 81.8212 19.5786H74.7495C74.7495 14.1794 76.6781 9.59274 80.5354 5.81855Z"
                    fill="#333333"/>
                <path
                    v-bind:style="[spinnerStyle, spinnerStyle4,spinnerDelay4]"
                    d="M129.034 5.81855C132.945 2.04435 137.632 0.157256 143.097 0.157256C148.615 0.157256 153.302 2.04435 157.16 5.81855C161.017 9.59274 162.946 14.1794 162.946 19.5786C162.946 24.9254 161.017 29.5121 157.16 33.3387C153.302 37.1129 148.615 39 143.097 39V32.0806C146.633 32.0806 149.659 30.875 152.177 28.4637C154.695 26 155.954 23.0383 155.954 19.5786C155.954 16.1189 154.695 13.1573 152.177 10.6935C149.659 8.22984 146.633 6.99798 143.097 6.99798C139.561 6.99798 136.534 8.22984 134.016 10.6935C131.552 13.1573 130.32 16.1189 130.32 19.5786H123.248C123.248 14.1794 125.177 9.59274 129.034 5.81855Z"
                    fill="#333333"/>
                <path
                    v-bind:style="[spinnerStyle, spinnerStyle5,spinnerDelay5]"
                    d="M187.336 39L171.827 17.2984L186.693 0.157256H195.935L180.747 17.6915L195.935 39H187.336Z"
                    fill="#333333"/>
                <path
                    v-bind:style="[spinnerStyle, spinnerStyle6, spinnerDelay6]"
                    d="M216.91 15.8831C218.143 16.3024 219.294 16.8266 220.366 17.4556C221.491 18.0323 222.669 18.7923 223.902 19.7359C225.134 20.627 226.098 21.754 226.795 23.1169C227.545 24.4274 227.946 25.8689 228 27.4415C228 30.4819 226.821 33.1814 224.464 35.5403C222.161 37.8468 219.053 39 215.142 39H214.741V32.0806H215.142C215.892 32.0806 216.589 32.002 217.232 31.8448C217.875 31.6875 218.384 31.4778 218.759 31.2157C219.187 30.9536 219.535 30.6653 219.803 30.3508C220.125 29.9839 220.339 29.6694 220.446 29.4073C220.607 29.0927 220.714 28.7782 220.768 28.4637C220.875 28.1492 220.928 27.9395 220.928 27.8347C220.928 27.6774 220.928 27.5464 220.928 27.4415C220.928 25.502 218.812 23.7722 214.58 22.252C212.973 21.7278 211.58 21.1774 210.401 20.6008C209.276 19.9718 208.151 19.2379 207.026 18.3992C205.901 17.5081 205.044 16.4597 204.455 15.254C203.865 13.996 203.571 12.6069 203.571 11.0867C203.571 8.25605 204.562 5.79234 206.544 3.69556C208.848 1.33669 211.901 0.157256 215.705 0.157256C218.759 0.157256 221.303 0.969756 223.339 2.59476C225.428 4.16734 226.902 6.05444 227.759 8.25605L221.169 10.6935C220.312 8.28226 218.491 7.07661 215.705 7.07661C214.741 7.07661 213.883 7.20766 213.133 7.46976C212.437 7.73185 211.901 8.09879 211.526 8.57056C211.205 8.98992 210.964 9.43548 210.803 9.90726C210.642 10.3266 210.562 10.746 210.562 11.1653C210.562 11.375 210.562 11.5585 210.562 11.7157C210.616 11.873 210.749 12.1351 210.964 12.502C211.178 12.869 211.473 13.2097 211.848 13.5242C212.276 13.7863 212.919 14.1532 213.776 14.625C214.633 15.0444 215.678 15.4637 216.91 15.8831Z"
                    fill="#333333"/>
            </svg>
        </div>
    </div>

</template>

<script>
export default {
    name: 'logoSpinner',

    props: {
        loading: {
            type: Boolean,
            default: true
        },
    },

    data() {
        return {
            spinnerStyle: {
                animationName: 'v-syncStretchDelay',
                animationDuration: '0.8s',
                animationIterationCount: 'infinite',
                animationTimingFunction: 'ease-in-out',
                animationFillMode: 'both'
            },
            spinnerStyle2: {
                animationName: 'v-syncStretchDelay2',
            },
            spinnerStyle3: {
                animationName: 'v-syncStretchDelay3',
            },
            spinnerStyle4: {
                animationName: 'v-syncStretchDelay4',
            },
            spinnerStyle5: {
                animationName: 'v-syncStretchDelay5',
            },
            spinnerStyle6: {
                animationName: 'v-syncStretchDelay6',
            },
            spinnerDelay1: {
                animationDelay: '0.04s'
            },
            spinnerDelay2: {
                animationDelay: '0.08s'
            },
            spinnerDelay3: {
                animationDelay: '0.12s'
            },
            spinnerDelay4: {
                animationDelay: '0.16s'
            },
            spinnerDelay5: {
                animationDelay: '0.20s'
            },
            spinnerDelay6: {
                animationDelay: '0.24s'
            }
        }
    }
}
</script>

<style>

.v-spinner {
    position: fixed !important;
    height: 100vh;
    left: 0;
    top: 0;
    bottom: 0;
    right: 0;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-pack: center;
    justify-content: center;
    -ms-flex-align: center;
    align-items: center !important;
    background-color: rgba(0, 0, 0, .9);
    margin: 0 auto;
    padding-top: 20px;
}

@-webkit-keyframes v-syncStretchDelay {
    33% {
        fill: #cde6fe;
    }
}

@keyframes v-syncStretchDelay {
    33% {
        fill: #cde6fe;
    }
}

@-webkit-keyframes v-syncStretchDelay2 {
    33% {
        fill: #9bcefd;
    }
}

@keyframes v-syncStretchDelay2 {
    33% {
        fill: #9bcefd;
    }
}

@-webkit-keyframes v-syncStretchDelay3 {
    33% {
        fill: #68b5fd;
    }
}

@keyframes v-syncStretchDelay3 {
    33% {
        fill: #68b5fd;
    }
}

@-webkit-keyframes v-syncStretchDelay4 {
    33% {
        fill: #369cfc;
        -webkit-transform: translateY(3px);
        transform: translateY(3px);
    }
    66% {
        -webkit-transform: translateY(3px);
        transform: translateY(3px);
    }
    100% {
        -webkit-transform: translateY(0);
        transform: translateY(0);
    }
}

@keyframes v-syncStretchDelay4 {
    33% {
        fill: #369cfc;
        -webkit-transform: translateY(2px);
        transform: translateY(2px);
    }
    66% {
        -webkit-transform: translateY(-2px);
        transform: translateY(-2px);
    }
    100% {
        -webkit-transform: translateY(0);
        transform: translateY(0);
    }
}

@-webkit-keyframes v-syncStretchDelay5 {
    33% {
        fill: #1d90fc;
        -webkit-transform: translateY(3px);
        transform: translateY(3px);
    }
    66% {
        -webkit-transform: translateY(3px);
        transform: translateY(3px);
    }
    100% {
        -webkit-transform: translateY(0);
        transform: translateY(0);
    }
}

@keyframes v-syncStretchDelay5 {
    33% {
        fill: #1d90fc;
        -webkit-transform: translateY(2px);
        transform: translateY(2px);
    }
    66% {
        -webkit-transform: translateY(-2px);
        transform: translateY(-2px);
    }
    100% {
        -webkit-transform: translateY(0);
        transform: translateY(0);
    }
}

@-webkit-keyframes v-syncStretchDelay6 {
    33% {
        fill: #0481F4;
        -webkit-transform: translateY(3px);
        transform: translateY(3px);
    }
    66% {
        -webkit-transform: translateY(3px);
        transform: translateY(3px);
    }
    100% {
        -webkit-transform: translateY(0);
        transform: translateY(0);
    }
}

@keyframes v-syncStretchDelay6 {
    33% {
        fill: #0481F4;
        -webkit-transform: translateY(2px);
        transform: translateY(2px);
    }
    66% {
        -webkit-transform: translateY(-2px);
        transform: translateY(-2px);
    }
    100% {
        -webkit-transform: translateY(0);
        transform: translateY(0);
    }
}

</style>

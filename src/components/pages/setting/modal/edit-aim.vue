<template>
    <!-- container  -->
    <form>
        <div class="row">
            <div class="col all"> <!-- container col-->

                <div class="row">
                    <div class="col line d-flex justify-content-center swiper">
                        <router-link to="/progress-audio"><img src="../../../images/modal/swiper-line.png" alt="">
                        </router-link>
                    </div>
                </div>
                <div class="row">
                    <div class="col d-flex justify-content-center text-1">
                        {{ $t('yourTarget') }}
                    </div>
                </div>
                <div class="row">
                    <div class="col d-flex justify-content-center logo">
                        <img src="../../../images/modal/logo-aim.png" alt="">
                    </div>
                </div>

                <!-- block_2 row start -->
                <div class="row block-2">
                    <div class="col">

                        <div class="row">
                            <div class="col p-0 text-2">
                                {{ $t('IWillRead') }}
                            </div>
                        </div>
                        <div class="row d-flex justify-content-center">
                            <div class="col-11 input p-0">
                                <div class="row">
                                    <div class="col text-3">
                                        {{ this.form.howManyBooks }} {{ $t('book') }}
                                    </div>
                                    <div class="col d-flex justify-content-end">
                                        <div class="btn-group" role="group" aria-label="Basic outlined example">
                                            <button @click="decrement" type="button" class="btn">-</button>
                                            <button @click="increment" type="button" class="btn">+</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="row">
                            <div class="col p-0 mt-5 text-2">
                                {{ $t('while') }}
                            </div>
                        </div>

                        <div class="row d-flex justify-content-center">
                            <div class="col-11 bg-buttons">
                                <div class="row">
                                    <div class="col-4 d-flex justify-content-center">
                                        <input type="radio" class="btn-check" name="day" :value="10" id="10-day"
                                               autocomplete="off" v-model="form.howManyDays">
                                        <label class="btn select" for="10-day">10 {{ $t('days') }}</label>
                                    </div>

                                    <div class="col-4 d-flex justify-content-center">
                                        <input type="radio" class="btn-check" name="day" :value="20" id="20-day"
                                               autocomplete="off" v-model="form.howManyDays">
                                        <label class="btn select" for="20-day">20 {{ $t('days') }}</label>
                                    </div>

                                    <div class="col-4 d-flex justify-content-center">
                                        <input type="radio" class="btn-check" name="day" :value="30" id="30-day"
                                               autocomplete="off" v-model="form.howManyDays">
                                        <label class="btn select" for="30-day">30 {{ $t('days') }}</label>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="row">
                            <div class="col p-0 mt-5 text-2">
                                {{ $t('inOneDay') }}
                            </div>
                        </div>

                        <div class="row d-flex justify-content-center">
                            <div class="col-11 bg-buttons">
                                <div class="row">
                                    <div class="col-4 d-flex justify-content-center">
                                        <input type="radio" class="btn-check" name="minutes" :value=10 id="10-minutes"
                                               autocomplete="off" v-model="form.howManyMinute">
                                        <label class="btn select" for="10-minutes">10 {{ $t('minutes') }}</label>
                                    </div>

                                    <div class="col-4 d-flex justify-content-center">
                                        <input type="radio" class="btn-check" name="minutes" :value=20 id="20-minutes"
                                               autocomplete="off" v-model="form.howManyMinute">
                                        <label class="btn select" for="20-minutes">20 {{ $t('minutes') }}</label>
                                    </div>

                                    <div class="col-4 d-flex justify-content-center">
                                        <input type="radio" class="btn-check" name="minutes" :value=30 id="30-minutes"
                                               autocomplete="off" v-model="form.howManyMinute">
                                        <label class="btn select" for="30-minutes">30 {{ $t('minutes') }}</label>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- install button row start -->
                        <Button text="install" class="pb-3" :onClick="pushTarget" />
                        <!-- install button row end-->
                    </div>
                </div>
                <!-- block_2 row end -->

            </div> <!-- container col-->
        </div>
        <!-- container row end -->
    </form>
</template>

<script>
import {mapActions} from "vuex";
import Button from "../../../button/Button";

export default {
    name: "edit-aim",
    components: {Button},
    data() {
        return {
            form: {
                howManyBooks: 0,
                howManyDays: 0,
                howManyMinute: 0,
            }
        }
    },
    methods: {
        increment() {
            this.form.howManyBooks++
        },
        decrement() {
            this.form.howManyBooks--
        },
        ...mapActions(['fetchTarget']),
        pushTarget() {
            this.$router.push('/progress-audio')
        }
    },
}
</script>

<style scoped>
.all {
    font-family: 'Montserrat', 'Rubik', sans-serif !important;
    background: var(--color-container) !important;
    border-radius: 16px !important;
    margin-top: 50px;
}

.block-2 {
    background-color: var(--color-block);
    border-radius: 16px;
}

.swiper {
    margin-top: 12px;
}

.text-1 {
    font-weight: 500;
    font-size: 16px;
    line-height: 20px;
    color: var(--color-textDarkGray-To-white);
    margin-top: 9px;
}

.text-2 {
    font-weight: 500;
    font-size: 14px;
    line-height: 17px;
    color: var(--color-text);
    margin: 20px 0 16px 30px;
}

.text-3 {
    margin-top: 9px;
}

.bg-buttons {
    background-color: var(--color-container);
    border-radius: 12px;
    padding: 16px 14px 16px 14px;
}

.select {
    background-color: var(--color-header) !important;
    color: var(--blueToWhite) !important;
    width: 100% !important;
    font-size: 12px;
    border-radius: 6px;
    border: none;
    font-weight: 500;
    line-height: 15px;
    padding: 9px 0 9px 0 !important;
}

input[type="radio"] {
    display: none;
}

input[type="radio"]:checked + .btn {
    color: white !important;
    background: #0481F4 !important;
}

.logo {
    margin-top: 34px;
}

.input {
    border-radius: 18px;
    height: 68px;
    font-weight: 500;
    font-size: 14px;
    line-height: 17px;
    color: var(--blueToWhite);
    background-color: var(--color-input) !important;
    padding: 16px 16px 0 22px !important;
}

.btn {
    border-radius: 6px;
    background-color: #177EE6;
    border: 1px solid rgba(255, 255, 255, 0.3);
    outline: none !important;
    width: 63px;
    color: white;
}

</style>

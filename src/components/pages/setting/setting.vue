<template>
    <div class="row all">
        <div class="col all-col">
            <!-- Header -->
            <div class="row">
                <div class="col fixed-top">
                    <div class="row header-name-row">
                        <div class="col-2 ps-2">
                            <go-back-button class="arrow-back"/>
                        </div>
                        <div class="col-8 header-name d-flex justify-content-center p-0">
                            {{ $t('setting') }}
                        </div>
                        <div class="col-2"><!-- don't delete (Abdullokh) --> </div>
                    </div>
                </div>
            </div>
            <!-- header end -->

            <!-- center row start -->
            <div class="row d-flex justify-content-center">
                <!--border begin-->
                <div class="col-12 center-row bg content">

                    <div class="row pb-1 pointer" @click="goToProfile">
                        <div class="col-2 logo-manual-width">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                 xmlns="http://www.w3.org/2000/svg" class="logo-1">
                                <path
                                    d="M12 2C9.38 2 7.25 4.13 7.25 6.75C7.25 9.32 9.26 11.4 11.88 11.49C11.96 11.48 12.04 11.48 12.1 11.49C12.12 11.49 12.13 11.49 12.15 11.49C12.16 11.49 12.16 11.49 12.17 11.49C14.73 11.4 16.74 9.32 16.75 6.75C16.75 4.13 14.62 2 12 2Z"
                                    fill="#0481F4"/>
                                <path
                                    d="M17.0809 14.15C14.2909 12.29 9.74094 12.29 6.93094 14.15C5.66094 15 4.96094 16.15 4.96094 17.38C4.96094 18.61 5.66094 19.75 6.92094 20.59C8.32094 21.53 10.1609 22 12.0009 22C13.8409 22 15.6809 21.53 17.0809 20.59C18.3409 19.74 19.0409 18.6 19.0409 17.36C19.0309 16.13 18.3409 14.99 17.0809 14.15Z"
                                    fill="#0481F4"/>
                            </svg>
                        </div>
                        <div class="col text ps-0">
                            <span class="link">{{ $t('account') }}</span>
                        </div>
                        <div class="col-2 p-0 d-flex justify-content-end">
                            <svg width="6" height="6" viewBox="0 0 6 6" fill="none" xmlns="http://www.w3.org/2000/svg"
                                 class="dot">
                                <rect width="6" height="6" rx="3" fill="#EB5757"/>
                            </svg>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col">
                            <hr/>
                        </div>
                    </div>

                    <div class="row pb-1 pointer" @click="goToSecurity">
                        <div class="col-2 logo-manual-width">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                 xmlns="http://www.w3.org/2000/svg" class="logo-2">
                                <path
                                    d="M18.5408 4.17001L13.0408 2.11001C12.4708 1.90001 11.5408 1.90001 10.9708 2.11001L5.47078 4.17001C4.41078 4.57001 3.55078 5.81001 3.55078 6.94001V15.04C3.55078 15.85 4.08078 16.92 4.73078 17.4L10.2308 21.51C11.2008 22.24 12.7908 22.24 13.7608 21.51L19.2608 17.4C19.9108 16.91 20.4408 15.85 20.4408 15.04V6.94001C20.4508 5.81001 19.5908 4.57001 18.5408 4.17001ZM12.7508 12.87V15.5C12.7508 15.91 12.4108 16.25 12.0008 16.25C11.5908 16.25 11.2508 15.91 11.2508 15.5V12.87C10.2408 12.55 9.50078 11.61 9.50078 10.5C9.50078 9.12001 10.6208 8.00001 12.0008 8.00001C13.3808 8.00001 14.5008 9.12001 14.5008 10.5C14.5008 11.62 13.7608 12.55 12.7508 12.87Z"
                                    fill="#0481F4"/>
                            </svg>

                        </div>
                        <div class="col text-2 ps-0">
                            <span class="link">{{ $t('security.security') }}</span>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col">
                            <hr/>
                        </div>
                    </div>

                    <div class="row pb-1 pointer" @click="goToSubscriptions">
                        <div class="col-2 logo-manual-width">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                 xmlns="http://www.w3.org/2000/svg" class="logo-2">
                                <path
                                    d="M21.7696 9.60069L20.9696 8.04758L19.2097 4.63076C18.7397 3.73341 17.9997 3 16.2998 3H7.70019C6.00026 3 5.2603 3.73341 4.79032 4.63076L3.0304 8.04758L2.23043 9.60069C1.77045 10.5067 2.02044 11.8354 2.79041 12.5688L9.6401 19.0746C10.94 20.3085 13.06 20.3085 14.3599 19.0746L21.2096 12.5688C21.9796 11.8354 22.2295 10.5067 21.7696 9.60069Z"
                                    fill="#0481F4"/>
                            </svg>
                        </div>
                        <div class="col text-2 ps-0">
                            <span class="link">{{ $t('about.subscription') }}</span>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col">
                            <hr/>
                        </div>
                    </div>

                    <div class="row pb-1 pointer" @click="goToBuy">
                        <div class="col-2 logo-manual-width">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                 xmlns="http://www.w3.org/2000/svg" class="logo-2">
                                <path
                                    d="M22 5.71002V15.29C22 18.05 19.76 20.29 17 20.29H7C6.54 20.29 6.1 20.23 5.67 20.11C5.05 19.94 4.85 19.15 5.31 18.69L15.94 8.06002C16.16 7.84002 16.49 7.79002 16.8 7.85002C17.12 7.91002 17.47 7.82002 17.72 7.58002L20.29 5.00002C21.23 4.06002 22 4.37002 22 5.71002Z"
                                    fill="#0481F4"/>
                                <path
                                    d="M14.64 7.36002L4.17 17.83C3.69 18.31 2.89 18.19 2.57 17.59C2.2 16.91 2 16.12 2 15.29V5.71002C2 4.37002 2.77 4.06002 3.71 5.00002L6.29 7.59002C6.68 7.97002 7.32 7.97002 7.71 7.59002L11.29 4.00002C11.68 3.61002 12.32 3.61002 12.71 4.00002L14.65 5.94002C15.03 6.33002 15.03 6.97002 14.64 7.36002Z"
                                    fill="#0481F4"/>
                                <path
                                    d="M2 5.71002V15.29C2 18.05 4.24 20.29 7 20.29H17C17.46 20.29 17.9 20.23 18.33 20.11C18.95 19.94 19.15 19.15 18.69 18.69L8.06 8.06002C7.84 7.84002 7.51 7.79002 7.2 7.85002C6.88 7.91002 6.53 7.82002 6.28 7.58002L3.71 5.00002C2.77 4.06002 2 4.37002 2 5.71002Z"
                                    fill="#0481F4"/>
                                <path
                                    d="M9.36 7.36002L19.83 17.83C20.31 18.31 21.11 18.19 21.43 17.59C21.8 16.91 22 16.12 22 15.29V5.71002C22 4.37002 21.23 4.06002 20.29 5.00002L17.71 7.59002C17.32 7.97002 16.68 7.97002 16.29 7.59002L12.71 4.00002C12.32 3.61002 11.68 3.61002 11.29 4.00002L9.35 5.94002C8.97 6.33002 8.97 6.97002 9.36 7.36002Z"
                                    fill="#0481F4"/>
                                <path
                                    d="M15.0006 13.5L14.5006 10C14.1672 9.83337 13.5005 9.40004 13.5005 9.00004C13.5005 8.60004 12.8338 8.83337 12.5005 9.00004H9.50049C9.50049 9.83337 9.40051 11.9 9.00058 13.5C8.50058 14.5 11.0006 15 12.5006 15C13.7006 15 14.6672 14 15.0006 13.5Z"
                                    fill="#0481F4"/>
                            </svg>
                        </div>
                        <div class="col text-2 ps-0">
                            <span class="link">{{ $t('buySubscription') }}</span>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col">
                            <hr/>
                        </div>
                    </div>

                    <div class="row pb-1 pointer" @click="goToLanguage">
                        <div class="col-2 logo-manual-width">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                 xmlns="http://www.w3.org/2000/svg" class="logo-2">
                                <path
                                    d="M8.93 2H5.02C3 2 2 3 2 5.02V8.94C2 11 3 12 5.02 11.95H8.94C11 12 12 11 11.95 8.93V5.02C12 3 11 2 8.93 2ZM9.01 9.76C8.33 9.76 7.67 9.5 7.12 9.04C6.5 9.49 5.75 9.76 4.94 9.76C4.53 9.76 4.19 9.42 4.19 9.01C4.19 8.6 4.53 8.26 4.94 8.26C5.96 8.26 6.81 7.56 7.12 6.6H4.94C4.53 6.6 4.19 6.26 4.19 5.85C4.19 5.44 4.53 5.1 4.94 5.1H6.23C6.27 4.72 6.58 4.42 6.97 4.42C7.36 4.42 7.67 4.72 7.71 5.1H7.97C7.98 5.1 7.99 5.1 7.99 5.1H8.01H9C9.41 5.1 9.75 5.44 9.75 5.85C9.75 6.26 9.42 6.6 9 6.6H8.67C8.58 7.08 8.39 7.53 8.14 7.94C8.41 8.14 8.7 8.26 9.01 8.26C9.42 8.26 9.76 8.6 9.76 9.01C9.76 9.42 9.42 9.76 9.01 9.76Z"
                                    fill="#0481F4"/>
                                <path
                                    d="M9 22.75C4.73 22.75 1.25 19.27 1.25 15C1.25 14.59 1.59 14.25 2 14.25C2.41 14.25 2.75 14.59 2.75 15C2.75 17.96 4.81 20.44 7.58 21.09L7.31 20.64C7.1 20.28 7.21 19.82 7.57 19.61C7.92 19.4 8.39 19.51 8.6 19.87L9.65 21.62C9.79 21.85 9.79 22.14 9.66 22.37C9.52 22.6 9.27 22.75 9 22.75Z"
                                    fill="#0481F4"/>
                                <path
                                    d="M22.0004 9.75C21.5904 9.75 21.2504 9.41 21.2504 9C21.2504 6.04 19.1904 3.56 16.4204 2.91L16.6904 3.36C16.9004 3.72 16.7904 4.18 16.4304 4.39C16.0804 4.6 15.6104 4.49 15.4004 4.13L14.3504 2.38C14.2104 2.15 14.2104 1.86 14.3404 1.63C14.4804 1.4 14.7304 1.25 15.0004 1.25C19.2704 1.25 22.7504 4.73 22.7504 9C22.7504 9.41 22.4104 9.75 22.0004 9.75Z"
                                    fill="#0481F4"/>
                                <path
                                    d="M16.9198 11.85C14.1198 11.85 11.8398 14.12 11.8398 16.93C11.8398 19.73 14.1098 22.01 16.9198 22.01C19.7198 22.01 21.9998 19.74 21.9998 16.93C21.9998 14.12 19.7298 11.85 16.9198 11.85ZM19.3998 19.34C19.0298 19.52 18.5798 19.38 18.3898 19L18.2198 18.66H15.6298L15.4598 19C15.3298 19.26 15.0598 19.41 14.7898 19.41C14.6798 19.41 14.5598 19.38 14.4598 19.33C14.0898 19.14 13.9398 18.69 14.1198 18.32L16.2598 14.05C16.3898 13.8 16.6498 13.64 16.9298 13.64C17.2098 13.64 17.4698 13.8 17.5998 14.06L19.7398 18.33C19.9198 18.7 19.7698 19.15 19.3998 19.34Z"
                                    fill="#0481F4"/>
                                <path d="M16.3809 17.1599H17.4709L16.9209 16.0699L16.3809 17.1599Z" fill="#0481F4"/>
                            </svg>
                        </div>
                        <div class="col text-2 ps-0">
                            <span class="link">{{ $t('language.language') }}</span>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col">
                            <hr/>
                        </div>
                    </div>

                    <div class="row pb-1 pointer" @click="goToDevices">
                        <div class="col-2 logo-manual-width">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                 xmlns="http://www.w3.org/2000/svg" class="logo-2">
                                <path
                                    d="M20.99 9.71C20.65 9.57 20.2 9.5 19.64 9.5H14.36C12.62 9.5 12 10.12 12 11.88V19.62C12 20.2 12.07 20.65 12.22 21C12.53 21.72 13.19 22 14.36 22H19.64C21.38 22 22 21.37 22 19.62V11.88C22 10.69 21.72 10.02 20.99 9.71ZM18 19.75H16C15.98 19.75 15.95 19.75 15.93 19.74C15.78 19.73 15.65 19.68 15.54 19.58C15.36 19.45 15.25 19.24 15.25 19C15.25 18.59 15.59 18.25 16 18.25H18C18.41 18.25 18.75 18.59 18.75 19C18.75 19.41 18.41 19.75 18 19.75Z"
                                    fill="#0481F4"/>
                                <path
                                    d="M20.9898 6.19V7C20.9898 7.55 20.5398 8 19.9898 8H14.3598C11.7998 8 10.4998 9.31 10.4998 11.88V21C10.4998 21.55 10.0498 22 9.49977 22H7.54977C7.14977 22 6.82977 21.68 6.82977 21.29C6.82977 20.89 7.14977 20.58 7.54977 20.58H9.49977V16.75H5.99977C3.77977 16.64 2.00977 14.81 2.00977 12.56V6.19C2.00977 3.88 3.88977 2 6.20977 2H16.7998C19.1098 2 20.9898 3.88 20.9898 6.19Z"
                                    fill="#0481F4"/>
                            </svg>
                        </div>
                        <div class="col text-2 ps-0">
                            <span class="link">{{ $t('device.myDevice') }}</span>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col">
                            <hr/>
                        </div>
                    </div>

                    <div class="row pb-1 pointer" @click="goToNotification">
                        <div class="col-2 logo-manual-width">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                 xmlns="http://www.w3.org/2000/svg" class="logo-2">
                                <path
                                    d="M20.1892 14.06L19.0592 12.18C18.8092 11.77 18.5892 10.98 18.5892 10.5V8.63005C18.5892 5.00005 15.6392 2.05005 12.0192 2.05005C8.38923 2.06005 5.43923 5.00005 5.43923 8.63005V10.49C5.43923 10.97 5.21923 11.76 4.97923 12.17L3.84923 14.05C3.41923 14.78 3.31923 15.61 3.58923 16.33C3.85923 17.06 4.46923 17.64 5.26923 17.9C6.34923 18.26 7.43923 18.52 8.54923 18.71C8.65923 18.73 8.76923 18.74 8.87923 18.76C9.01923 18.7801 9.16923 18.8 9.31923 18.82C9.57923 18.8601 9.83923 18.89 10.1092 18.91C10.7392 18.97 11.3792 19 12.0192 19C12.6492 19 13.2792 18.97 13.8992 18.91C14.1292 18.89 14.3592 18.8701 14.5792 18.84C14.7592 18.82 14.9392 18.8001 15.1192 18.7701C15.2292 18.76 15.3392 18.74 15.4492 18.72C16.5692 18.54 17.6792 18.26 18.7592 17.9C19.5292 17.64 20.1192 17.06 20.3992 16.32C20.6792 15.57 20.5992 14.75 20.1892 14.06ZM12.7492 10C12.7492 10.42 12.4092 10.76 11.9892 10.76C11.5692 10.76 11.2292 10.42 11.2292 10V6.90005C11.2292 6.48005 11.5692 6.14005 11.9892 6.14005C12.4092 6.14005 12.7492 6.48005 12.7492 6.90005V10Z"
                                    fill="#0481F4"/>
                                <path
                                    d="M14.8297 20.01C14.4097 21.17 13.2997 22 11.9997 22C11.2097 22 10.4297 21.68 9.87969 21.11C9.55969 20.81 9.31969 20.41 9.17969 20C9.30969 20.02 9.43969 20.03 9.57969 20.05C9.80969 20.08 10.0497 20.11 10.2897 20.13C10.8597 20.18 11.4397 20.21 12.0197 20.21C12.5897 20.21 13.1597 20.18 13.7197 20.13C13.9297 20.11 14.1397 20.1 14.3397 20.07C14.4997 20.05 14.6597 20.03 14.8297 20.01Z"
                                    fill="#0481F4"/>
                            </svg>
                        </div>
                        <div class="col text-2 ps-0">
                            <span class="link">{{ $t('notification') }}</span>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col">
                            <hr/>
                        </div>
                    </div>

                    <div class="row pb-1 pointer" @click="goToTheme">
                        <div class="col-2 logo-manual-width">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                 xmlns="http://www.w3.org/2000/svg" class="logo-2">
                                <path
                                    d="M9.5 19.5V18H4.5C3.95 18 3.45 17.78 3.09 17.41C2.72 17.05 2.5 16.55 2.5 16C2.5 14.97 3.3 14.11 4.31 14.01C4.37 14 4.43 14 4.5 14H19.5C19.57 14 19.63 14 19.69 14.01C20.17 14.05 20.59 14.26 20.91 14.59C21.32 14.99 21.54 15.56 21.49 16.18C21.4 17.23 20.45 18 19.39 18H14.5V19.5C14.5 20.88 13.38 22 12 22C10.62 22 9.5 20.88 9.5 19.5Z"
                                    fill="#0481F4"/>
                                <path
                                    d="M17.1906 2H13.2506C12.9706 2 12.7506 2.22 12.7506 2.5V4C12.7506 4.41 12.4106 4.75 12.0006 4.75C11.9106 4.75 11.8306 4.73 11.7506 4.7C11.4606 4.6 11.2506 4.32 11.2506 4V2.5C11.2506 2.22 11.0306 2 10.7506 2H9.24058C8.96058 2 8.74058 2.22 8.74058 2.5V7C8.74058 7.41 8.40058 7.75 7.99058 7.75C7.58058 7.75 7.24058 7.41 7.24058 7V4.75V2.5C7.24058 2.23 7.04058 2.02 6.77058 2H6.74058C5.00058 2.04 3.65058 3.55 3.83058 5.3L4.20058 12.05C4.23058 12.58 4.67058 13 5.20058 13H18.8006C19.3306 13 19.7706 12.58 19.8006 12.05L20.1706 5.3C20.3506 3.53 18.9606 2 17.1906 2Z"
                                    fill="#0481F4"/>
                            </svg>
                        </div>
                        <div class="col text-2 ps-0">
                            <span class="link">{{ $t('theme') }}</span>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col">
                            <hr/>
                        </div>
                    </div>

                    <div class="row pb-4 pointer" @click="goToAbout">
                        <div class="col-2 logo-manual-width">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                 xmlns="http://www.w3.org/2000/svg" class="logo-2">
                                <path
                                    d="M21.7696 9.60069L20.9696 8.04758L19.2097 4.63076C18.7397 3.73341 17.9997 3 16.2998 3H7.70019C6.00026 3 5.2603 3.73341 4.79032 4.63076L3.0304 8.04758L2.23043 9.60069C1.77045 10.5067 2.02044 11.8354 2.79041 12.5688L9.6401 19.0746C10.94 20.3085 13.06 20.3085 14.3599 19.0746L21.2096 12.5688C21.9796 11.8354 22.2295 10.5067 21.7696 9.60069Z"
                                    fill="#0481F4"/>
                            </svg>
                        </div>
                        <div class="col text-2 ps-0">
                            <span class="link">{{ $t('about.application') }}</span>
                        </div>
                    </div>
                </div>
                <!--border end-->
            </div>
            <!-- center row end -->

            <!--footer row begin -->
            <Footer/>
            <!--footer row end -->
        </div>
    </div>
</template>

<script>
import Footer from "../../footer/footer";
import GoBackButton from "@/components/modals/GoBackButton";

export default {
    name: "setting",
    components: {GoBackButton, Footer},
    methods: {
        goToSecurity() {
            this.$router.push("/security")
        },
        goToProfile() {
            this.$router.push("/profile-about")
        },
        goToSubscriptions() {
            this.$router.push("/subscriptions")
        },
        goToBuy() {
            this.$router.push("/buy")
        },
        goToLanguage() {
            this.$router.push("/setting-language")
        },
        goToDevices() {
            this.$router.push("/devices")
        },
        goToNotification() {
            this.$router.push("/notification")
        },
        goToTheme() {
            this.$router.push("/theme")
        },
        goToAbout() {
            this.$router.push("/about-app")
        }

    }
}
</script>

<style scoped>
.all-col {
    font-family: 'Montserrat', 'Rubik', sans-serif !important;
    background: var(--color-container);
}

.pointer {
    cursor: pointer;
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

.center-row {
    border-radius: 15px;
    margin-top: 20px;
    width: 85%;
}

.logo-1 {
    margin: 23px 16px 0 20px;
}

.logo-2 {
    margin: 5px 16px 0 20px;
}

.text {
    margin-top: 25px;
    font-weight: 600;
    font-size: 14px;
    color: var(--color-text);
}

.logo-manual-width {
    width: 80px;
}

hr {
    height: 2px;
    color: #C4E2FF;
}

.dot {
    margin-top: 35px;
    margin-right: 35px;
}

.text-2 {
    margin-top: 8px;
    font-weight: 600;
    font-size: 14px;
    color: #333333;
}

.link {
    text-decoration: none !important;
    color: var(--color-text);
}

.bg {
    background-color: var(--color-block) !important;
}

.content {
    margin-bottom: 100px;
    margin-top: 165px;
}
</style>

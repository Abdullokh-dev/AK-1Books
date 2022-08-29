export default {
    data: () => ({
        storageKey: 'locale'
    }),
    methods: {
        determineLocale () {
            if (!localStorage.getItem(this.storageKey)) {
                localStorage.setItem(this.storageKey, this.locale);
            }
        }
    },
    computed: {
        locales () {
            return Object.keys(this.$i18n.messages)
        },
        locale: {
            get () {
                return this.$i18n.locale;
            },
            set (locale) {
                localStorage.setItem(this.storageKey, locale);
                this.$i18n.locale = locale;
            }
        },
        localeType () {
            return this.locale;
        }
    },
}

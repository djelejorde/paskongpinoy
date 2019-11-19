import Vue from 'vue'

Vue.mixin({
    methods:{
        async fetchCollectionData (url) {
            var apiUrl = 'http://api.paskongpinoy.weave.ph/paskong-pinoy/items'

            return await this.$axios.get(apiUrl + url)
        },
        async postCollectionData (url, params) {
            var apiUrl = 'http://api.paskongpinoy.weave.ph/paskong-pinoy/items'

            return await this.$axios.post(apiUrl + url, params)
        },
    }
})
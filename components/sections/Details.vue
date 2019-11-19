<template>
    <div class="relative pb-10">
        <HeaderTitle class="mb-6">Mga Karagdagang Kaalaman</HeaderTitle>

        <div class="flex w-full lg:w-2/3 justify-center mx-auto px-6 lg:px-0">
            <ItemList :items="infos"/>
        </div>
    </div>
</template>

<script>
import HeaderTitle from '~/components/elements/HeaderTitle'
import ItemList from '~/components/elements/ItemList'

export default {
    name: 'DetailsSection',
    components: { HeaderTitle, ItemList },
    data () {
        return {
            infos: []
        }
    },
    methods: {
        getDetails () {
            this.fetchCollectionData('/event_details?fields=details')
                .then(response => {
                    if(response.data && Object.keys(response.data.data).length) {
                        let infos = []

                        response.data.data.map(i => {
                            infos.push(i.details)
                        })

                        this.infos = infos
                    }
                })
        }
    },
    mounted () { 
        this.getDetails()
    }
}
</script>
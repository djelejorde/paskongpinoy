<template>
    <v-col 
        cols=12 
        class="pa-0 white"
    >
        <SectionTitle>Our Clients</SectionTitle>
        <ClientListModule :clients="clients"/>
    </v-col>
</template>

<script>
import SectionTitle from '~/components/elements/heading/SectionTitle'
import ClientListModule from '~/components/modules/Lists/ClientListModule'

import SampleClients from '~/data/clients.json'

export default {
    name: 'ClientsSection',
    components: {
        SectionTitle,
        ClientListModule
    },
    data () {
        return {
            clients: SampleClients
        }
    }
}
</script>
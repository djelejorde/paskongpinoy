<template>
    <v-container py-0 fluid>
        <v-row>
            <v-col 
                cols=12 
                class="pa-0 white"
            >
                <v-parallax
                    id="parallax-clients"
                    class="left-gradient"
                    :src="require('@/static/images/clients_bg.jpg')"
                >
                    <v-container>
                        <v-row class="mx-12">
                            <v-col cols=12>
                                <SectionTitle class="white--text tracking-2 z-1 relative">Our Clients</SectionTitle>
                                <ClientListModule 
                                    class="bg-clients left-gradient" 
                                    :clients="clients"/>
                            </v-col>
                        </v-row>
                    </v-container>
                </v-parallax>
            </v-col>
        </v-row>
    </v-container>
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
    },
    mounted() {
        document.getElementById('parallax-clients').style.height = '100vh'
    }
}
</script>

<style scoped>
  .left-gradient:before {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 0;
    content: "";
    background: -moz-linear-gradient(90deg,  rgba(255, 0, 64, 0.65) 0%,rgba(37, 61, 81, .35) 40%); /* FF3.6-15 */
    background: -webkit-linear-gradient(90deg,  rgba(255, 0, 64,0.65) 0%,rgba(37, 61, 81, .35) 40%); /* Chrome10-25,Safari5.1-6 */
    background: linear-gradient(90deg,  rgba(255, 0, 64,0.65) 0%,rgba(37, 61, 81, .35) 40%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#a6000000', endColorstr='#00000000',GradientType=1 ); /* IE6-9 fallback on horizontal gradient */
  }

</style>
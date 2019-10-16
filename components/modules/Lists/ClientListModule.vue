<template>
    <div>
        <v-row>
            <v-col
                class="mx-1"
                v-for="(client, key) in clients"
                :key="key"
                :cols="2"
                data-aos="fade-up"
                :data-aos-duration="(100 * key) + 800"
            >
                <v-card 
                    flat 
                    tile
                >
                    <v-img
                        :src="client.image"
                        aspect-ratio="1"
                    />
                </v-card>
            </v-col>
        </v-row>
    </div>
</template>
<script>
import AOS from "aos"

export default {
    name: 'ClientListModule',
    props: {
        clients: {
            type: [Array, Object],
            default: {}
        }
    },
    mounted () {
       AOS.init()
    }
}
</script>
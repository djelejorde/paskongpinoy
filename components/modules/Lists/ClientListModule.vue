<template>
    <div>
        <v-row no-gutters>
            <v-col
                v-for="(client, key) in clients"
                :key="key"
                :cols="5">
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
export default {
    name: 'ClientListModule',
    props: {
        clients: {
            type: [Array, Object],
            default: {}
        }
    }
}
</script>
<template>
    <div>
        <v-row>
            <v-col
                class=""
                v-for="(client, key) in clients"
                :key="key"
                :cols="2">
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
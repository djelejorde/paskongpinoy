<template>
    <div>
        <v-row no-gutters>
            <v-col
                v-for="(project, key) in projects"
                :key="key"
                :cols="3">
                <v-card 
                    flat 
                    tile
                >
                    <v-img
                        :src="project.image"
                        aspect-ratio="1"
                    />
                </v-card>
            </v-col>
        </v-row>
    </div>
</template>
<script>
export default {
    name: 'ProjectsListModule',
    props: {
        projects: {
            type: [Array, Object],
            default: {}
        }
    }
}
</script>
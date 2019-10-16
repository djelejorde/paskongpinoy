<template>
    <div>
        <v-row no-gutters>
            <v-col
                v-for="(project, key) in projects"
                :key="key"
                :cols="2"
                data-aos="fade-up"
                :data-aos-duration="(100 * key) + 1000"
             >
                <v-hover v-slot:default="{ hover }">
                    <v-card
                        class="project-item"
                        :class="hover ? 'active' : ''"
                        flat 
                        tile
                        
                    >
                        <v-img
                            :src="project.image"
                            aspect-ratio="1"
                        >
                            <div class="project-details pa-7">
                                <p class="font-tertiary text-uppercase white--text font-weight-bold project-name">{{ project.name }}</p>
                                <p class="project-excerpt leading-base white--text font-weight-medium">{{ project.excerpt }}</p>
                                <a class="text-underline text-primary font-weight-bold" :href="project.url">READ MORE</a>
                            </div>
                        </v-img>
                    </v-card>
                </v-hover>
            </v-col>
        </v-row>
    </div>
</template>
<script>
import AOS from "aos"

export default {
    name: 'ProjectsListModule',
    props: {
        projects: {
            type: [Array, Object],
            default: {}
        }
    },
    mounted () {
        AOS.init()
    }
}
</script>
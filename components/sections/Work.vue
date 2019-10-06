<template>
    <v-col 
        cols=12 
        class="pa-0 white"
    >
        <SectionTitle class="my-8">Our Work</SectionTitle>
        <ProjectsListModule :projects="projects"/>
    </v-col>
</template>

<script>
import SectionTitle from '~/components/elements/heading/SectionTitle'
import ProjectsListModule from '~/components/modules/Lists/ProjectsListModule'

import SampleProjects from '~/data/projects.json'

export default {
    name: 'WorkSection',
    components: {
        SectionTitle,
        ProjectsListModule
    },
    data () {
        return {
            projects: SampleProjects
        }
    }
}
</script>
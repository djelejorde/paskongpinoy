<template>
    <v-container py-0 fluid>
        <v-row class="mx-12 white">
            <v-col cols=12>
                <SectionTitle class="tracking-2">Our Team</SectionTitle>
                <TeamMembersModule :team-members="teamMembers"/>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import SectionTitle from '~/components/elements/heading/SectionTitle'
import TeamMembersModule from '~/components/modules/Lists/TeamMembersModule'

import TeamMembers from '~/data/team.json'

export default {
    name: 'TeamSection',
    components: {
        SectionTitle,
        TeamMembersModule
    },
    data () {
        return {
            teamMembers: TeamMembers
        }
    },
    mounted() {
    }
}
</script>
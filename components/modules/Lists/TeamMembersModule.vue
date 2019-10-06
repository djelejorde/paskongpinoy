<template>
    <div>
        <v-row>
            <v-col
                v-for="(member, key) in teamMembers"
                :key="key"
                :cols="6"
            >
                <v-card
                    class="member-item"
                    flat 
                    tile
                >
                    <v-img
                        :src="member.image"
                        aspect-ratio="1"
                    >
                        <div class="member-details pa-7">
                            <p class="font-tertiary text-uppercase white--text font-weight-bold member-name">{{ member.name }}</p>
                            <p class="member-excerpt leading-base white--text font-weight-medium">{{ member.excerpt }}</p>
                            <a class="text-underline text-primary font-weight-bold" :href="member.url">READ MORE</a>
                        </div>
                    </v-img>
                </v-card>
            </v-col>
        </v-row>
    </div>
</template>
<script>
export default {
    name: 'TeamMembersModule',
    props: {
        teamMembers: {
            type: [Array, Object],
            default: {}
        }
    }
}
</script>
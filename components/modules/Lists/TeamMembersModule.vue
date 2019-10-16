<template>
    <div>
        <v-row>
            <v-col
                v-for="(member, key) in teamMembers"
                :key="key"
                :cols="6"
                data-aos="fade-up"
                :data-aos-duration="(100 * key) + 1000"
            >
                <v-card
                    class="member-item"
                    flat 
                    tile
                >
                    <v-list-item>
                        <v-list-item-avatar
                            size="200"
                            tile
                        >
                            <v-img :src="member.image" aspect-ratio="1" />
                        </v-list-item-avatar>

                        <v-list-item-content class="align-self-start">
                            <p class="text-primary mb-2 text-uppercase !font-xl">
                                {{ member.name }}
                            </p>

                            <p class="mt-3 mb-5">{{ member.excerpt }}</p>
                            <a class="text-primary p-0" :href="member.url">READ MORE</a>
                        </v-list-item-content>
                    </v-list-item>
                </v-card>
            </v-col>
        </v-row>
    </div>
</template>
<script>
import AOS from "aos"

export default {
    name: 'TeamMembersModule',
    props: {
        teamMembers: {
            type: [Array, Object],
            default: {}
        }
    },
    mounted () {
        AOS.init()
    }
}
</script>
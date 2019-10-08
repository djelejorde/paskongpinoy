<template>
    <div class="w-full">
        <v-container py-0 fluid>
            <v-row>
                <v-col 
                    cols=12 
                    class="pa-0"
                >
                    <v-parallax
                        id="parallax-about"
                        class="left-gradient"
                        :src="require('@/static/images/about_bg.jpg')"
                    >
                        <v-row class="mx-12">
                            <v-col cols=12>
                                <SectionTitle class="white--text tracking-2">About Us</SectionTitle>
                            </v-col>
                        </v-row>
                    </v-parallax>
                </v-col>
            </v-row>
        </v-container>
        <v-container fluid py-0>
            <v-row>
                <v-col 
                    cols=12 
                    class="pa-0 black"
                    style="height: 100vh;"
                >   
                    <v-container pa-12>
                        <div class="white--text font-xl text-center pa-12" v-html="about"></div>
                    </v-container>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>

<script>
import SectionTitle from '~/components/elements/heading/SectionTitle'

export default {
    name: 'AboutSection',
    components: {
        SectionTitle
    },
    data () {
        return {
            about: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sit amet auctor eros. Sed dictum dolor et erat.'
        }
    },
    mounted() {
        document.getElementById('parallax-about').style.height = '100vh'
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
    z-index: 2;
    content: "";
    background: -moz-linear-gradient(90deg,  rgba(255, 0, 64, 0.65) 0%,rgba(37, 61, 81, .35) 40%); /* FF3.6-15 */
    background: -webkit-linear-gradient(90deg,  rgba(255, 0, 64,0.65) 0%,rgba(37, 61, 81, .35) 40%); /* Chrome10-25,Safari5.1-6 */
    background: linear-gradient(90deg,  rgba(255, 0, 64,0.65) 0%, rgba(37, 61, 81, .35) 40%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#a6000000', endColorstr='#00000000',GradientType=1 ); /* IE6-9 fallback on horizontal gradient */
  }

</style>
<template>
    <div class="w-full">
        <v-container fluid pa-0>
            <div class="slider-container">
                <div class="slide" 
                    v-for="(slide, index) in 10"
                    :key="index"
                >
                    <img
                        :src="'https://picsum.photos/seed/picsum/200/200'"
                        width="100%"
                    />
                </div>
            </div>
        </v-container>
    </div>
</template>

<script>
import SectionTitle from '~/components/elements/heading/SectionTitle'

export default {
    name: 'SliderSection',
    components: {
        SectionTitle
    },
    data () {
        return {
            slides: []
        }
    },
    mounted() {
    }
}
</script>

<style scoped>
.slider-container {
    overflow-y: hidden;
    overflow-x: auto;
    height: 500px;
    display: flex;
    flex-wrap: nowrap;
}

.slider-container .slide {
    flex: 1 0 40%;
}

/* width */
::-webkit-scrollbar {
  width: 3px;
  height: 3px;
}

/* Track */
::-webkit-scrollbar-track {
  background: #000;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #eb234b;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #eb234b;
}
</style>
<template>
    <div class="relative pb-10">
        <SubHeaderTitle>Kasiglahan at Kasiyahan!</SubHeaderTitle>

        <div class="flex w-full lg:w-4/5 px-6 lg:px-0 justify-center container mx-auto lg:mt-12">
            <div class="flex flex-wrap items-start justify-around mt-2 w-full">
                <div class="flex flex-col text-center my-4 lg:my-8 lg:mx-8 activity-item border-b border-gray-100 lg:border-b-0 pb-10 lg:pb-0">
                    <div class="w-full mx-2 lg:mx-0">
                        <img :src="require('@/static/disenyong_pinoy.svg')" alt="Disyenong Pinoy" width="100%">
                    </div>
                    <div class="activity-desc text-lg font-body mb-8 lg:mb-0 mt-8 flex-1 text-orange">Paligsahan sa paggawa ng mga makukulay at magagandang parol</div>
                    <PrimaryButton @click="showDetails('details')" class="flex-end">ALAMIN</PrimaryButton>
                </div>

                <div class="flex flex-col text-center my-4 lg:my-8 lg:mx-8 activity-item border-b border-gray-100 lg:border-b-0 pb-10 lg:pb-0">
                    <div class="w-full mx-2 lg:mx-0 px-6 lg:px-8 ">
                        <img :src="require('@/static/himig_pinoy.svg')" alt="Himig Pinoy" width="100%">
                    </div>

                    <div class="activity-desc text-lg font-body mb-8 lg:mb-0 mt-8 flex-1 text-orange">Pagtatanghal sa pamamagitan ng pag awit na naaayon sa ating tema</div>
                    <PrimaryButton @click="showDetails('details')" class="flex-end">ALAMIN</PrimaryButton>
                </div>

                <div class="flex flex-col text-center my-4 lg:my-8 lg:mx-8 activity-item border-b border-gray-100 lg:border-b-0 pb-10 lg:pb-0">
                    <div class="w-full mx-2 lg:mx-0">
                        <img :src="require('@/static/salo_salong_pinoy.svg')" alt="Salo Salong Pinoy" width="100%">
                    </div>

                    <div class="activity-desc text-lg font-body mb-8 lg:mb-0 mt-8 flex-1 text-orange">Pagkakaisa sa pagdadala ng mga paboritong pagkaing Pinoy na sabay sabay pagsasaluhan</div>
                    <PrimaryButton @click="showDetails('details')" class="flex-end">ALAMIN</PrimaryButton>
                </div>

                <div class="flex flex-col text-center my-4 lg:my-8 lg:mx-8 activity-item border-b border-gray-100 lg:border-b-0 pb-10 lg:pb-0">
                    <div class="text-center mx-auto lg:my-8 lg:py-2 w-2/3">
                        <img class="block" :src="require('@/static/bingo.svg')" alt="Bingo" width="100%">
                    </div>

                    <div class="activity-desc text-lg font-body mb-8 lg:mb-0 mt-8 lg:mt-0 flex-1 text-orange">Paligsahan sa paggawa ng mga makukulay at magagandang parol</div>
                    <PrimaryButton @click="showDetails('details')" class="flex-end">ALAMIN</PrimaryButton>
                </div>

                <div class="flex flex-col text-center my-4 lg:my-8 lg:mx-8 activity-item border-b border-gray-100 !border-b-0 pb-10 lg:pb-0">
                    <div class="w-full mx-2 lg:mx-0">
                        <img :src="require('@/static/perya.svg')" alt="Perya" width="100%">
                    </div>

                    <div class="activity-desc text-lg font-body mb-8 lg:mb-0 mt-8 flex-1 text-orange">SEGUNDO</div>
                    <PrimaryButton @click="showDetails('details')" class="flex-end">ALAMIN</PrimaryButton>
                </div>
            </div>
        </div>

        <div class="fixed inset-0 z-20 bg-black opacity-50 modal-backdrop" v-show="open"></div>
        <div class="fixed inset-0 z-30 modal-dialog flex items-center justify-center" v-show="open">
            <div class="w-1/2 text-center bg-white relative details">
                <a @click="close" class="modal-close cursor-pointer absolute text-white font-body font-bold">x</a>
                <span>{{ activityDetails }}</span>
            </div>
        </div>
    </div>
</template>

<script>
import SubHeaderTitle from '~/components/elements/SubHeaderTitle'
import PrimaryButton from '~/components/elements/PrimaryButton'

export default {
    name: 'ActivitiesSection',
    components: { SubHeaderTitle, PrimaryButton },
    data () {
        return {
            open: false,
            activityDetails: null
        }
    },
    props: {
    },
    methods: {
        showDetails (val) {
            this.open = true

            this.activityDetails = val
        },
        close () {
            this.open = false
            this.activityDetails = null
        }
    },
    mounted () {

    }
}
</script>

<style scoped>
.activity-item { 
    width: 300px;
    height: auto;
}

@media screen and (min-width: 1024px) {   
    .activity-item {
        height: 500px;
    }
}

.activity-item img {
    min-height: 180px;
}
.modal-close {
    right: -10px;
    top: -15px;
    @apply .bg-green;
    @apply .rounded-full;
    @apply .w-6;
    @apply .h-6;
    @apply .text-center;
}
.modal-dialog .details {
    height: 300px;
}
</style>
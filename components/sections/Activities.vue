<template>
    <div class="relative">
        <SubHeaderTitle>Kasiglahan at Kasiyahan!</SubHeaderTitle>

        <div class="flex w-4/5 justify-center container mx-auto">
            <div class="flex flex-wrap items-start justify-around mt-2 w-full">
                <div class="flex flex-col text-center text-orange mx-8 my-8 activity-item">
                    <div class="w-full">
                        <img :src="require('@/static/disenyong_pinoy.svg')" alt="Salu Salong Pinoy" width="100%">
                    </div>
                    <div class="activity-desc mt-8 flex-1">Paligsahan sa paggawa ng mga makukulay at magagandang parol</div>
                    <PrimaryButton class="bg-green flex-end">ALAMIN</PrimaryButton>
                </div>

                <div class="flex flex-col text-center text-orange mx-8 my-8 px-8 activity-item">
                    <div class="w-full">
                        <img :src="require('@/static/himig_pinoy.svg')" alt="Salu Salong Pinoy" width="100%">
                    </div>

                    <div class="activity-desc mt-8 flex-1">Pagtatanghal sa pamamagitan ng pag awit na naaayon sa ating tema</div>
                    <PrimaryButton class="bg-green flex-end">ALAMIN</PrimaryButton>
                </div>

                <div class="flex flex-col text-center text-orange mx-8 my-8 activity-item">
                    <div class="w-full">
                        <img :src="require('@/static/salo_salong_pinoy.svg')" alt="Salu Salong Pinoy" width="100%">
                    </div>

                    <div class="activity-desc mt-8 flex-1">Pagkakaisa sa pagdadala ng mga paboritong pagkaing Pinoy na sabay sabay pagsasaluhan</div>
                    <PrimaryButton class="bg-green flex-end">ALAMIN</PrimaryButton>
                </div>

                <div class="flex flex-col text-center text-orange mx-8 my-8 activity-item">
                    <div class="text-center w-full">
                        <img class="inline" :src="require('@/static/bingo.svg')" alt="Salu Salong Pinoy" width="200">
                    </div>

                    <div class="activity-desc mt-8 flex-1">Paligsahan sa paggawa ng mga makukulay at magagandang parol</div>
                    <PrimaryButton class="bg-green flex-end">ALAMIN</PrimaryButton>
                </div>

                <div class="flex flex-col text-center text-orange mx-8 my-8 activity-item">
                    <div class="w-full">
                        <img :src="require('@/static/perya.svg')" alt="Salu Salong Pinoy" width="100%">
                    </div>

                    <div class="activity-desc mt-8 flex-1">SEGUNDO</div>
                    <PrimaryButton class="bg-green flex-end">ALAMIN</PrimaryButton>
                </div>
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
        }
    },
    props: {
    },
    methods: {
    },
    mounted () {

    }
}
</script>

<style scoped>
.activity-item {
    width: 300px;
    height: 400px;
}

.activity-item img {
    min-height: 180px;
}
</style>
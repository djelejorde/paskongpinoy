<template>
    <div class="relative">
        <div class="text-center">Kasiglahan at Kasiyahan!</div>

        <div class="flex flex-wrap w-full justify-center container mx-auto">
            <div class="flex items-start justify-between mt-2 w-full">
                <div class="text-center text-orange">
                    <div>
                        <img :src="require('@/static/disenyong_pinoy.svg')" alt="Salu Salong Pinoy" width="100%">
                    </div>
                    <div>ARAW</div>
                    <PrimaryButton class="bg-green">ALAMIN</PrimaryButton>
                </div>

                <div class="text-center text-orange">
                    <div>
                        <img :src="require('@/static/himig_pinoy.svg')" alt="Salu Salong Pinoy" width="100%">
                    </div>

                    <div>ORAS</div>
                    <PrimaryButton class="bg-green">ALAMIN</PrimaryButton>
                </div>

                <div class="text-center text-orange">
                    <div>
                        <img :src="require('@/static/salo_salong_pinoy.svg')" alt="Salu Salong Pinoy" width="100%">
                    </div>

                    <div>MINUTO</div>
                    <PrimaryButton class="bg-green">ALAMIN</PrimaryButton>
                </div>

                <div class="text-center text-orange">
                    <div>
                        <img :src="require('@/static/bingo.svg')" alt="Salu Salong Pinoy" width="100%">
                    </div>

                    <div>SEGUNDO</div>
                    <PrimaryButton class="bg-green">ALAMIN</PrimaryButton>
                </div>

                <div class="text-center text-orange">
                    <div>
                        <img :src="require('@/static/perya.svg')" alt="Salu Salong Pinoy" width="100%">
                    </div>

                    <div>SEGUNDO</div>
                    <PrimaryButton class="bg-green">ALAMIN</PrimaryButton>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import HeaderTitle from '~/components/elements/HeaderTitle'
import PrimaryButton from '~/components/elements/PrimaryButton'

export default {
    name: 'ActivitiesSection',
    components: { HeaderTitle, PrimaryButton },
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
<template>
    <div class="relative">
        <SubHeaderTitle>Mga Karagdagang Kaalaman</SubHeaderTitle>

        <div class="flex flex-wrap w-full justify-center">
            <div class="flex justify-between mt-2 w-full">
                <div class="text-center text-red">
                    <div>ARAW</div>
                    <PrimaryButton class="bg-green">ALAMIN</PrimaryButton>
                </div>

                <div class="text-center text-yellow">
                    <div>ORAS</div>
                    <PrimaryButton class="bg-green">ALAMIN</PrimaryButton>
                </div>

                <div class="text-center text-orange">
                    <div>MINUTO</div>
                    <PrimaryButton class="bg-green">ALAMIN</PrimaryButton>
                </div>

                <div class="text-center text-blue">
                    <div>SEGUNDO</div>
                    <PrimaryButton class="bg-green">ALAMIN</PrimaryButton>
                </div>

                <div class="text-center text-blue">
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
    name: 'DetailsSection',
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
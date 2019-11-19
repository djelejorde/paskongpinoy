<template>
    <div class="relative">
        <SubHeaderTitle>Pagdalo</SubHeaderTitle>

        <div class="w-full px-6 lg:px-0 lg:w-1/2 justify-center items-center mx-auto mt-12 pb-12 lg:pb-0 lg:mt-16">
            <TextInput class="mt-3" 
                :placeholder="'Buong Pangalan (Full Name)'"
            />

            <TextInput class="mt-3" 
                :placeholder="'Sulatroniko (Email)'"
            />
            
            <DropdownInput class="mt-3"
                :placeholder="'Kabanata / Grupo (Chapter)'"
                :options="chapters"
            />

            <p class="text-center my-12 font-bold font-body text-xl">Handa ka na bang makisalo at makisaya sa ating pagdiriwang?</p>
            
            <div class="w-full text-center">
                <PrimaryButton>SUMALI</PrimaryButton>
            </div>
        </div>
    </div>
</template>

<script>
import SubHeaderTitle from '~/components/elements/SubHeaderTitle'
import DropdownInput from '~/components/elements/DropdownInput'
import TextInput from '~/components/elements/TextInput'
import PrimaryButton from '~/components/elements/PrimaryButton'


export default {
    name: 'RegistrationSection',
    components: { SubHeaderTitle, PrimaryButton, TextInput, DropdownInput },
    data () {
        return {
            chapters: [
                'Balibago',
                'Cabuyao 1',
                'Cabuyao 2',
                'Cabuyao 3',
                'Cabuyao 4',
                'Golden City',
                'MACOPA',
                'Malitlit',
                'Pulong Santa Cruz',
                'San Lorenzo Villages',
                'Santa Rosa',
                'Technopark'
            ]
        }
    }
}
</script>
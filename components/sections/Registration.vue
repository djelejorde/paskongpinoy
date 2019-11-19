<template>
    <div id="registration" class="relative">
        <SubHeaderTitle>Pagdalo</SubHeaderTitle>

        <div class="w-full px-6 lg:px-0 lg:w-1/2 justify-center items-center mx-auto mt-12 pb-12 lg:pb-0 lg:mt-16">
            <TextInput class="mt-3" 
                id="full_name"
                :placeholder="'Buong Pangalan (Full Name)'"
                :name="'name'"
            />

            <TextInput class="mt-3"
                id="email"
                :placeholder="'Sulatroniko (Email)'"
                :name="'email'"
            />
            
            <DropdownInput class="mt-3"
                id="chapter"
                :placeholder="'Kabanata / Grupo (Chapter)'"
                :name="'chapter'"
                :options="chapters"
            />

            <p class="text-center my-12 font-bold font-body text-xl">Handa ka na bang makisalo at makisaya sa ating pagdiriwang?</p>
            
            <div class="w-full text-center">
                <PrimaryButton @click="submitForm">SUMALI</PrimaryButton>
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
    },
    methods: {
        submitForm () {
            let form = {
                name: this.$el.querySelector('#full_name input').value,
                chapter: this.$el.querySelector('#chapter input').value,
                email: this.$el.querySelector('#email input').value,
                status: 'published'
            }

            this.postCollectionData('/participants', form)
                .then(response => {
                    if(response.status === 200) { 
                        this.resetForm()
                        alert('Ang iyong pangalan ay nailista nang matagumpay!')
                    }
                })
        },
        resetForm () {
            this.$el.querySelector('#full_name input').value = ''
            this.$el.querySelector('#chapter input').value = ''
            this.$el.querySelector('#email input').value = ''
        }
    }
}
</script>
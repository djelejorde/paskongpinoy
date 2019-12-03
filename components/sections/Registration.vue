<template>
    <div id="registration" class="relative">
        <SubHeaderTitle>Pagdalo</SubHeaderTitle>

        <div class="w-full px-6 lg:px-0 lg:w-1/2 justify-center items-center mx-auto mt-12 pb-12 lg:pb-0 lg:mt-16">
            <TextInput class="mt-6"
                id="full_name"
                :placeholder="'Buong Pangalan (Full Name)'"
                :name="'name'"
                :disabled="true"
                :has-error="hasErrors.indexOf('full_name') > -1"
            />

            <TextInput class="mt-6"
                id="email"
                :placeholder="'Sulatroniko (Email)'"
                :name="'email'"
                :disabled="true"
                :has-error="hasErrors.indexOf('email') > -1"
            />
            
            <DropdownInput class="mt-6"
                id="chapter"
                :placeholder="'Kabanata / Grupo (Chapter)'"
                :name="'chapter'"
                :disabled="true"
                :options="chapters"
                :has-error="hasErrors.indexOf('chapter') > -1"
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
            ],
            hasErrors: []
        }
    },
    methods: {
        validateForm () {
            let now = new Date()
            let eventDate = new Date('12/01/2019 04:00:00 PM GMT+0800')
            let timeDiff = parseInt(eventDate.getTime() - now.getTime())

            if(timeDiff > 0) {
                let fields = ['full_name', 'chapter', 'email']

                for (let x in fields) {
                    let field = document.querySelector('#' + fields[x] +' input')
                    
                    if(field.value === '' || field.value === null || field.value === undefined) {
                        this.hasErrors.push(fields[x])
                    }
                }
                
                if(this.hasErrors.length) {
                    window.scrollTo(0, this.$el.offsetTop);

                    alert('Paumanhin ngunit hindi nailista ang iyong pangalan. May kaunting suliranin sa iyong mga sagot.')

                    return false
                }

                return true
            } else {
                alert('Pasensya na ngunit ang pagdiriwang ay naganap na. Magkita muli tayo sa susunod na pagkakataon!')

                return false
            }
        },
        sanitize (string) {
            const map = {
                '&': '&amp;',
                '<': '&lt;',
                '>': '&gt;',
                '"': '&quot;',
                "'": '&#x27;',
                "/": '&#x2F;',
            };
            const reg = /[&<>"'/]/ig;

            return string.replace(reg, (match)=>(map[match]));
        },
        submitForm () {
            let valid = this.validateForm()

            if(valid) {
                let form = {
                    name: this.sanitize(this.$el.querySelector('#full_name input').value),
                    chapter: this.sanitize(this.$el.querySelector('#chapter input').value),
                    email: this.sanitize(this.$el.querySelector('#email input').value),
                    status: 'published'
                }

                this.postCollectionData('/participants', form)
                    .then(response => {
                        if(response.status === 200) { 
                            this.resetForm()
                            alert('Ang iyong pangalan ay nailista nang matagumpay!')
                        } else {
                            alert('Paumanhin ngunit hindi nailista ang iyong pangalan. May kaunting suliranin lamang sa aming panig. Subukan muli pagkaraan ng ilang minuto.')
                        }
                    })
            }
        },
        resetForm () {
            this.$el.querySelector('#full_name input').value = ''
            this.$el.querySelector('#chapter input').value = ''
            this.$el.querySelector('#email input').value = ''
        }
    }
}
</script>
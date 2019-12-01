<template>
  <div class="relative">
    <HeaderTitle>Maswerteng Panalo</HeaderTitle>
    <div>
        <div class="flex flex-wrap justify-center content-center items-center" style="height: 400px;">
            <div ref="names" class="w-full font-bebas self-center names w-2/3 text-center mt-8">
                <div class="text-8 leading-none">{{ name }}</div>
                <div class="text-4xl">{{ chapter }}</div>
            </div>

            <div class="w-full text-center mt-10">
                <PrimaryButton @click="pickWinner" class="bg-green">{{ buttonLabel }}</PrimaryButton>
            </div>
        </div>
    </div>

  </div>
</template>

<script>
import HeaderTitle from '~/components/elements/HeaderTitle'
import PrimaryButton from '~/components/elements/PrimaryButton'

export default {
    name: 'Raffle',
    components: { PrimaryButton, HeaderTitle },
    data () {
        return {
            name: '',
            chapter: '',
            participants: [],
            timeout: null,
            stopped: false,
            buttonLabel: 'PUMILI!'
        }
    },
    methods: {
        pickWinner () {
            if(!this.stopped) {
                clearTimeout(this.timeout)

                this.stopped = true

                this.buttonLabel = 'ULITIN'
            } else {
                this.buttonLabel = 'PUMILI!'
                this.flashNames()

                this.stopped = false
            }
        },
        getParticipants () {
            this.fetchCollectionData('/participants?fields=name,chapter')
                .then(response => {
                    if(response.data && Object.keys(response.data.data).length) {
                        this.participants = response.data.data
                        
                        this.flashNames()
                    }
                })
        },
        randomize () {
            return Math.floor(Math.random() * this.participants.length)
        },
        flashNames () {
            this.timeout = setTimeout(() => {
                let index = this.randomize()

                this.name = this.participants[index].name
                this.chapter = this.participants[index].chapter

                this.flashNames()
            }, 100)
        }
    },
    mounted () {
        this.getParticipants()
    }
}
</script>

<style scoped>
.bottom-custom {
    bottom: 20px;
}
</style>
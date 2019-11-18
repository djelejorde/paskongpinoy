<template>
    <div class="relative">
        <HeaderTitle>Halina't Makisaya</HeaderTitle>

        <div class="flex flex-wrap justify-center">
            <div class="-mt-6 text-center w-full text-gray">
                <p>IKA-1 NG DISYEMPRE TAONG 2019</p>
                <p>P1C ANNEX CLUBHOUSE SAN LORENZO SOUTH, SANTA ROSA CITY, LAGUNA</p>
            </div>

            <div class="countdown flex mx-auto justify-between w-1/2 mt-12 mb-16">
                <div class="text-center text-red">
                    <p class="text-7xl">{{ days }}</p>
                    <span>ARAW</span>
                </div>

                <div class="text-center text-yellow">
                    <p class="text-7xl">{{ hours }}</p>
                    <span>ORAS</span>
                </div>

                <div class="text-center text-orange">
                    <p class="text-7xl">{{ minutes }}</p>
                    <span>MINUTO</span>
                </div>

                <div class="text-center text-blue">
                    <p class="text-7xl">{{ seconds }}</p>
                    <span>SEGUNDO</span>
                </div>
            </div>

            <div class="w-full text-center">
                <PrimaryButton class="bg-green">MAG REHISTRO NA!</PrimaryButton>
            </div>
        </div>
    </div>
</template>

<script>
import HeaderTitle from '~/components/elements/HeaderTitle'
import PrimaryButton from '~/components/elements/PrimaryButton'

export default {
    name: 'CountdownSection',
    components: { HeaderTitle, PrimaryButton },
    data () {
        return {
            days: 0,
            hours: 0,
            minutes: 0,
            seconds: 0
        }
    },
    props: {
        eventDate: {
            type: String,
            default: '12-01-2019 16:00:00 GMT +0800'
        }
    },
    methods: {
        initCountDown () {

            setInterval(this.count, 1000)
        },
        count () {
            let dateNow = new Date()
            let eventDate = new Date(this.eventDate)
            
            let timeDiff = eventDate.getTime() - dateNow.getTime()

            // Time calculations for days, hours, minutes and seconds
            this.days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
            this.hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            this.minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
            this.seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

            if(timeDiff < 0) {
                clearInterval(this.count)
            }
        }
    },
    mounted () {
        this.initCountDown()
    }
}
</script>
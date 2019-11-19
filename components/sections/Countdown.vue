<template>
    <div class="relative pb-16">
        <HeaderTitle>Halina't Makisaya</HeaderTitle>

        <div class="flex flex-wrap justify-center mt-8 lg:mt-0 px-6 lg:px-0">
            <div class="mt-4 lg:-mt-6 text-center w-full text-gray-400 font-bebas text-lg lg:text-2xl tracking-wide px-6 lg:px-0">
                <p>IKA-1 NG DISYEMBRE TAONG 2019</p>
                <p>P1C ANNEX CLUBHOUSE SAN LORENZO SOUTH, SANTA ROSA CITY, LAGUNA</p>
            </div>

            <div class="countdown flex mx-auto justify-between w-full lg:w-1/2 mt-8 mb-16 px-6 lg:px-0">
                <div class="text-center text-red font-bebas">
                    <p class="text-5xl lg:text-11">{{ days || 0 }}</p>
                    <span class="text-lg lg:text-3xl">ARAW</span>
                </div>

                <div class="text-center text-yellow font-bebas">
                    <p class="text-5xl lg:text-11">{{ hours || 0}}</p>
                    <span class="text-lg lg:text-3xl">ORAS</span>
                </div>

                <div class="text-center text-orange font-bebas">
                    <p class="text-5xl lg:text-11">{{ minutes || 0}}</p>
                    <span class="text-lg lg:text-3xl">MINUTO</span>
                </div>

                <div class="text-center text-blue font-bebas">
                    <p class="text-5xl lg:text-11">{{ seconds || 0}}</p>
                    <span class="text-lg lg:text-3xl">SEGUNDO</span>
                </div>
            </div>

            <div class="w-full text-center">
                <PrimaryButton @click="scrollMeTo('registration')" class="bg-green">MAG REHISTRO NA!</PrimaryButton>
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
            default: '12/01/2019 04:00:00 PM GMT+0800'
        }
    },
    methods: {
        initCountDown () {
            this.count()
        },
        count () {
            let dateNow = new Date()
            let eventDate = new Date(this.eventDate)
            
            let timeDiff = parseInt(eventDate.getTime() - dateNow.getTime())

            // Time calculations for days, hours, minutes and seconds
            this.days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
            this.hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            this.minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
            this.seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

            if(timeDiff > 0) {
                setTimeout(this.count, 1000)
            }
        },
        scrollMeTo (ref) {
            var element = document.getElementById(ref);

            if(element) window.scrollTo(0, element.offsetTop);
        }
    },
    mounted () {
        this.initCountDown()
    }
}
</script>
<template>
  <div class="relative p-10">
    <div class="w-1/2 mx-auto flex flex-wrap mb-6">
        <div class="flex last-three-picks border-2 flex-1 p-1 text-4xl font-bebas mr-4 justify-center">
            <div class="px-6 text-red" v-for="n in lastPicks" :key="n">{{ n }}</div>
        </div>

        <PrimaryButton @click="pickNumber" class="bg-green">BUMOLA!</PrimaryButton>
    </div>

    <div class="numbers flex px-8 pb-8">
        <div class="flex flex-wrap items-center text-center mr-6">
            <div class="p-1 text-6xl font-bebas text-white w-20 rounded-full" :class="'bg-' + color" v-for="(letter, color) in bingoColorMapping" :key="color">{{ letter }}</div>
        </div>
        <div class="flex-row flex flex-wrap text-center">
            <div :ref="'n' + n" class="w-1/15 py-8 px-8 font-bebas text-4xl text-gray-100" v-for="n in max" :key="n">
                {{ n }}
            </div>
        </div>
    </div>

    <div class="fixed inset-0 z-20 bg-black opacity-50 modal-backdrop" v-show="open"></div>
    <div class="bg-red bg-yellow bg-orange hidden" />
    <transition name="fade">
        <div class="fixed inset-0 z-50 modal-dialog flex items-center justify-center" v-show="open">
            <div class="flex lg:items-center justify-center w-full m-4 lg:m-0 lg:w-1/2 bg-white relative details p-6 lg:p-12 max-h-90 overflow-y-auto overflow-x-hidden lg:overflow-auto">
                <div class="font-body text-11">{{ inBingo(lastPick) + ' - ' + lastPick }}</div>
            </div>
        </div>
    </transition>

  </div>
</template>

<script>
import PrimaryButton from '~/components/elements/PrimaryButton'

export default {
    name: 'Bingo',
    components: { PrimaryButton },
    data () {
        return {
            open: false,
            lastPick: null,
            min: 1,
            max: 75,
            picked: [],
            bingoColorMapping: {
                'red' : 'B',
                'yellow': 'I',
                'blue' : 'N',
                'orange': 'G',
                'green' : 'O'
            }
        }
    },
    computed: {
        lastPicks () {
            return this.picked.slice(-5)
        }
    },
    methods: {
        bingo (n) {
            if(n === 1) return 'B'
            if(n === 16) return 'I'
            if(n === 31) return 'N'
            if(n === 46) return 'G'
            if(n === 60) return 'O'

            return false
        },
        inBingo (number) {
            if(number <= 15) return 'B'
            if(number <= 30) return 'I'
            if(number <= 45) return 'N'
            if(number <= 60) return 'G'
            if(number <= 75) return 'O'
        },
        pickNumber () {
            let pick = Math.floor(Math.random() * this.max) + this.min
            
            if(this.picked.indexOf(pick) === -1) {
                this.picked.push(pick)
                
                this.$refs['n' + pick][0].classList.add('!text-red')

                this.lastPick = pick

                this.open = true

                setTimeout(() => {
                    this.open = false
                }, 3000)
                return
            } else if (this.picked.length < this.max) {
                this.pickNumber()
            } else {
                alert('Bingo!')
            }     
        }
    }
}
</script>

<style scoped>
.fade-enter-active {
    -moz-transition-duration: 150ms;
    -webkit-transition-duration: 150ms;
    -o-transition-duration: 150ms;
    transition-duration: 150ms;
    -moz-transition-timing-function: ease-in;
    -webkit-transition-timing-function: ease-in;
    -o-transition-timing-function: ease-in;
    transition-timing-function: ease-in;
}

.fade-leave-active {
    -moz-transition-duration: 150ms;
    -webkit-transition-duration: 150ms;
    -o-transition-duration: 150ms;
    transition-duration: 150ms;
    -moz-transition-timing-function: ease-in;
    -webkit-transition-timing-function: ease-in;
    -o-transition-timing-function: ease-in;
    transition-timing-function: ease-in;
}

.fade-enter-to, .fade-leave {
    opacity: 1;
}

.fade-enter, .fade-leave-to {
    opacity: 0;
}

.w-1\/15 {
    width: 6.6666666%;
}

.w-1\/16 {
    width: 6.25%;
}

</style>
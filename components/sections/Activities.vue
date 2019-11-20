<template>
    <div class="relative pb-10">
        <SubHeaderTitle>Kasiglahan at Kasiyahan!</SubHeaderTitle>

        <div class="flex w-full lg:w-4/5 px-6 lg:px-0 justify-center container mx-auto lg:mt-12">
            <div class="flex flex-wrap items-start justify-around mt-2 w-full">

                <div class="flex flex-col text-center my-4 lg:my-8 lg:mx-8 activity-item border-b border-gray-100 lg:border-b-0 pb-10 lg:pb-0"
                    v-for="(activity, i) in activities"
                    :class="{ '!border-b-0' : (i+1) === Object.keys(activities).length,  }"
                    :key="i"
                >
                    <div class="w-full mx-2 lg:mx-0"
                        :class="{ 
                            'px-6 lg:px-8' : activity.name === 'Himig Pinoy',
                            '!mx-auto lg:my-8 lg:py-2 !w-2/3' : activity.name === 'Bingo',
                        }"
                    >
                        <img class="block" :src="activity.image.data.full_url" :alt="activity.name" width="100%">
                    </div>
                    <div class="activity-desc text-lg font-body mb-8 lg:mb-0 mt-8 flex-1 text-orange"
                        :class="{ 'lg:mt-0' : activity.name === 'Bingo' }"
                    >{{ activity.excerpt }}</div>

                    <PrimaryButton v-if="activity.display_button" @click="showDetails(activity.activity_details)" class="flex-end">ALAMIN</PrimaryButton>
                </div>
            </div>
        </div>

        <div class="fixed inset-0 z-20 bg-black opacity-50 modal-backdrop" v-show="open"></div>

        <transition name="fade">
            <div class="fixed inset-0 z-50 modal-dialog flex items-center justify-center" v-show="open">
                <a @click="close" class="modal-close cursor-pointer absolute text-white font-body lg:hidden z-10">x</a>
                <div class="flex lg:items-center justify-center w-full m-4 lg:m-0 lg:w-1/2 bg-white relative details p-6 lg:p-12 max-h-90 overflow-y-auto overflow-x-hidden lg:overflow-auto">
                    <a @click="close" class="modal-close cursor-pointer absolute text-white font-body hidden lg:block">x</a>
                    <div class="font-body text-base wysiwyg-content" v-html="activityDetails"></div>
                </div>
            </div>
        </transition>
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
            open: false,
            activityDetails: null,
            activities: []
        }
    },
    props: {
    },
    methods: {
        showDetails (val) {
            document.body.style.overflow = 'hidden'

            this.open = true

            this.activityDetails = val
        },
        close () {
            document.body.style.overflow = 'auto'

            this.open = false
            this.activityDetails = null
        },
        getActivities () {
            this.fetchCollectionData('/activities?fields=name,excerpt,image.*.*,activity_details,display_button&sort=sort')
                .then(response => {
                    if(response.data && Object.keys(response.data.data).length) {
                        this.activities = response.data.data
                    }
                })
        }
    },
    mounted () {
        this.getActivities()
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

.activity-item { 
    width: 300px;
    height: auto;
}

@media screen and (min-width: 1024px) {   
    .activity-item {
        height: 500px;
    }
}

.activity-item img {
    min-height: 180px;
}

@media screen and (min-width: 1024px) { 
    .modal-close {
        right: -10px;
        top: -15px;
    }
}

.modal-close {
    right: 5px;
    top: 5px;
    @apply .bg-green;
    @apply .rounded-full;
    @apply .w-8;
    @apply .h-8;
    @apply .text-center;
    @apply .text-xl;
}

.modal-dialog .details {
    min-height: 300px;
}

@media screen and (max-width: 1023px) {  
    .wysiwyg-content p[style*="padding-left"] {
        padding-left: 20px;
    }
}
</style>
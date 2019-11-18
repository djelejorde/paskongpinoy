<template>
    <div
        v-click-outside="handleClickOutside" 
        class="dropdown border border-gray-400 relative cursor-pointer"
    >
        <input
            @click="open = !open"
            class="pl-4 p-2 w-full cursor-pointer"
            type="text"
            :placeholder="placeholder"
            v-model="value"
        >
        <ul class="dropdown-list-items absolute border border-t-0 border-gray-400 bg-white overflow-hidden" v-show="open">
            <li 
                class="dropdown-list-item py-2 pl-4 cursor-pointer hover:text-white hover:bg-green"
                v-show="!value"
                @click="selectValue('')"
            >{{ placeholder }}</li>
            <li 
                @click="selectValue(i)"
                class="dropdown-list-item py-2 pl-4 cursor-pointer hover:text-white hover:bg-green"
                v-for="i in dropdownValues"
                :key="'chapter-' + i.toLowerCase()"
            >{{ i }}</li>
        </ul>
    </div>
</template>
<script>
export default {
    name: 'DropdownInput',
    data () {
        return {
            value: null,
            dropdownValues: [],
            open: false
        }
    },
    props: {
        placeholder: {
            type: String,
            default: ''
        },
        options: {
            type: Array,
            default: ''
        }
    },
    watch: {
        value (newVal, oldVal) {
            if(newVal) {
                this.dropdownValues = this.options.filter(i => newVal === '' || i.toLowerCase().indexOf(newVal.toLowerCase()) > -1 )
            } else {
                this.dropdownValues = this.options
            }
        }
    },
    methods: {
        handleClickOutside () {
            this.open = false
        },
        selectValue (val) {
            if(val) {
                this.value = val
            } else {
                this.value = null
            }

            this.open = false
        },
    },
    directives: {
        'click-outside': {
            bind: function (el, binding, vNode) {
                // Provided expression must evaluate to a function.
                if (typeof binding.value !== 'function') {
                const compName = vNode.context.name
                let warn = `[Vue-click-outside:] provided expression '${binding.expression}' is not a function, but has to be`
                if (compName) {
                    warn += `Found in component '${compName}'`
                }

                console.warn(warn)
                }
                // Define Handler and cache it on the element
                const bubble = binding.modifiers.bubble
                const handler = e => {
                if (bubble || (!el.contains(e.target) && el !== e.target)) {
                    binding.value(e)
                }
                }
                el.__vueClickOutside__ = handler

                // add Event Listeners
                document.addEventListener('click', handler)
            },

            unbind: function (el, binding) {
                // Remove Event Listeners
                document.removeEventListener('click', el.__vueClickOutside__)
                el.__vueClickOutside__ = null
            }
        }
    },
    mounted () {
        this.dropdownValues = this.options
    }

}
</script>

<style scoped>
::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
  color: #726f72;
  opacity: 1; /* Firefox */
}

:-ms-input-placeholder { /* Internet Explorer 10-11 */
  color: #726f72;
}

::-ms-input-placeholder { /* Microsoft Edge */
  color: #726f72;
}

.dropdown-list-items {
    top: 40px;
    left: -1px;
    right: -1px;
    max-height: 200px;
    overflow-y: auto;
}

.dropdown:before {
    position: absolute;
    right: 12px;
    top: 16px;
    content: '';
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 8px 5px 0 5px;
    border-color: #726f72 transparent transparent transparent;
}

/* width */
::-webkit-scrollbar {
  width: 5px;
}

/* Track */
::-webkit-scrollbar-track {
  background: #dadada;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #ee662c;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #d1490f;
}
</style>
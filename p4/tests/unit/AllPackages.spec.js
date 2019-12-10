import { expect } from 'chai'
import { shallowMount, RouterLinkStub, createLocalVue } from '@vue/test-utils'
import AllPackages from '@/components/AllPackages.vue'
import Vuex from 'vuex'

// Local vue - https://vue-test-utils.vuejs.org/guides/#getting-started
const localVue = createLocalVue()
localVue.use(Vuex)

describe('AllPackages.vue', () => {

    let pack = {
        id: 1,
        name: 'bootstrap-vue',
        description:
            'BootstrapVue, with over 40 available plugins and more than 80 custom components, provides one of the most comprehensive implementations of the Bootstrap v4.3 component and grid system for Vue.js, complete with extensive and automated WAI-ARIA accessibility markup.',
        category: 'Styling',
    }

    let store
    let getters

    beforeEach(() => {
        getters = {
            getPackages: function() {return pack}
        }
        store = new Vuex.Store({
            getters
        })
    })

    it('shows a package', () => {

        const wrapper = shallowMount(AllPackages, {
            store, localVue,
            computed: {
                allPackages: function () {
                    return [pack]
                }
            },
            stubs: {
                RouterLink: RouterLinkStub
            }
        })
        console.log(wrapper.vm);
        expect(wrapper.text()).to.include('Packages');
        expect(wrapper.text()).to.include('Vue All Packages');

    })
})

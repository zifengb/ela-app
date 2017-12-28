import * as filters from '../filters'
import VueI18n from '../constants/i18n/vue-i18n.min'
import locales from '../constants/i18n'
import Vue from 'vue'

Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})

Vue.use(VueI18n)
var i18n = new VueI18n({
  locale: 'ZH',
  messages: locales
})

export default {
  i18n: i18n,
  data() {
    return {
      msg: '混合器'
    }
  },
  created() {

  },
  mounted() {

  },
  methods: {
    
  }
}

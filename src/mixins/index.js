import constants from 'constants/constants'

import * as filters from '../filters'

// register global utility filters.
Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})

export default {
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

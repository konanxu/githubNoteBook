import './subPageA'
import './subPageB'



require.ensure(['./subPageA'], function() {
    var subPageA = require('./sub')
})

export default 'pageA'
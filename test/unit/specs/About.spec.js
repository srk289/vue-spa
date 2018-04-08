import Vue from 'vue'
import About from '../../../src/about/About.vue'

describe('About.vue', () => {
  const createComponent = () => {
    const AboutConstructor = Vue.extend(About)
    const comp = new AboutConstructor({
      data () {
        return {
          title: 'Test About Page'
        }
      }
    }).$mount()
    return comp
  }
  it('should render the heading', () => {
    const comp = createComponent()
    // console.log(comp.$el.querySelector('h3').innerText)
    const txt = comp.$el.querySelector('h3').innerText
    expect(txt).to.equal('Test About Page')
  })
})

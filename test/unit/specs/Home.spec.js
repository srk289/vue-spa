import Vue from 'vue'
import Home from '../../../src/home/Home.vue'
import { Carousel, Slide } from 'vue-carousel'

describe('Home.vue', () => {
  const createComponent = () => {
    const HomeConstructor = Vue.extend(Home)
    const comp = new HomeConstructor({
      data () {
        return {
          title: 'Test Home Page'
        }
      },
      components: {
        'carousel': Carousel,
        'slide': Slide
      }
    }).$mount()
    return comp
  }
  it('should render the heading', () => {
    const comp = createComponent()
    // console.log(comp.$el.querySelector('h3').innerText)
    const txt = comp.$el.querySelector('h3').innerText
    expect(txt).to.equal('Test Home Page')
  })
})

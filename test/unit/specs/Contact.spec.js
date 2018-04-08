import Vue from 'vue'
import Contact from '../../../src/contact/Contact.vue'

describe('Contact.vue', () => {
  const createComponent = () => {
    const ContactConstructor = Vue.extend(Contact)
    const comp = new ContactConstructor({
      data () {
        return {
          title: 'Test Contact Page'
        }
      }
    }).$mount()
    return comp
  }
  it('should render the heading', () => {
    const comp = createComponent()
    // console.log(comp.$el.querySelector('h3').innerText)
    const txt = comp.$el.querySelector('h3').innerText
    expect(txt).to.equal('Test Contact Page')
  })
})

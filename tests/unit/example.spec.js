import { expect } from 'chai'
import { shallowMount } from '@vue/test-utils'
import Counter from '@/components/Counter.vue'

describe('Counter.vue', () => {
  const wrapper = shallowMount(Counter, {
    propsData: {
      initNum: 3
    }
  })
  const p = wrapper.find('p')
  const buttons = wrapper.findAll('button')
  it('render', () => {
    expect(p.text()).to.equal('3')
    expect(buttons.length).to.equal(2)
  })
  it('add', () => {
    const addButton = buttons.at(0)
    addButton.trigger('click')
    expect(p.text()).to.equal('4')
  })
  it('reduce', () => {
    const reduceButton = buttons.at(1)
    reduceButton.trigger('click')
    expect(p.text()).to.equal('3')
  })
})

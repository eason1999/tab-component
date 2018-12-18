<template>
<div>
  <tab 
    :active-color="'#333'"
    :bar-active-color="'#FB625B'"
    v-model='tabIndex'
    @on-item-click="handlerTabItem">
    <tab-item v-for="(item, index) in tabs" :key="index" :label="item.name" :name='item.id'></tab-item>
  </tab>
</div>
</template>
<script>
import Tab from './../../components/tab'
import TabItem from './../../components/tab-item'

let lens = []
for (let i = 0; i < 100; i++) {
  lens.push(i)
}

export default {
  components: {
    Tab,
    TabItem
  },
  data () {
    return {
      tabs: [
        {
          name: '佣金最高啊是伟大的',
          id: 'COMMISSION_PRICE_DESC'
        },
        {
          name: '券额最大',
          id: 'COUPON_AMOUNT_DESC'
        },
        {
          name: '价格',
          id: 'PRICE_ASC'
        },
        {
          name: '价格最',
          id: 'PRICE_ASC1'
        },
        {
          name: '价格最低',
          id: 'PRICE_ASC2'
        },
        {
          name: '价格最低',
          id: 'PRICE_ASC3'
        }
      ],
      tabIndex: 'COMMISSION_PRICE_DESC'
    }
  },
  computed: {
  },
  mounted () {
  },
  methods: {
  },
}
</script>
<style lang="less" scoped>
</style>
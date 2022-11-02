<template>
  <div class="border">
    <h1>새로운 컴포넌트</h1>
    <MyComponentItem 
      static-props="MyComponent에서 보낸 데이터ㅋㅋ"
      :dynamic-props="dynamicProps"
      @money="parentGetEvent"
      @child-input="getDynamicData"
    />

  </div>
</template>

<script>
import MyComponentItem from '@/components/MyComponentItem'

export default {
  name: 'MyComponent',
  components: {
    MyComponentItem,
  },
  data: function() {
    return {
      dynamicProps: '이건 동적인 데이터 킬킬!'
    }
  },
  methods: {
    parentGetEvent: function (data) {
      console.log('용돈 없어!!')
      console.log(data)
    },
    getDynamicData: function (data) {
      console.log(`사용자가 입력한 값은 ${data}입니다.`)
    }
  }
}
</script>

<style>
  .border {
    border: solid 1px black
  }
</style>
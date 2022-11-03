<template>
  <div>
    <h1>AppParent</h1>
    <input type="text" @input="inputChange">
    <p>AppData: {{appData}}</p>
    <p>childData: {{childData}} </p>
    <AppChild 
      :app-data="appData"
      :parent-data="parentData"
      @child-input="childInput"
    />
  </div>
</template>

<script>
import AppChild from '@/components/AppChild.vue'

export default {
  name: "AppParent",
  components: {
    AppChild,
  },
  data() {
    return {
      childData: null,
    }
  },
  props: {
    appData: String,
    parentData: String,
  },
  methods: {
    inputChange(event) {
      this.$emit('parent-input', event.target.value)
    },
    childInput(data) {
      this.$emit('child-input', data)
      this.childData = data
    }
  }
}
</script>

<style>

</style>
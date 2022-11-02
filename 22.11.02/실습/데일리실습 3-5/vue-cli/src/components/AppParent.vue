<template>
  <div>AppParent입니다.
    <AppChild/>
  </div>
</template>

<script>
import AppChild from '@/components/AppChild'
export default {
    name: 'AppParent',
    components: {
        AppChild,
    },
    props : {
        myProps: String,
    }
}
</script>

<style>

</style>
<template>
  <div class="alert alert-danger">
  <i class="fas fa-times-circle"></i>
  {{ msg }}
  </div>
</template>

<script>
export default {
  props: ["msg"]
};
</script>

<style scoped>
.alert {
  margin: 10px 0;
  padding: 10px;
  border-radius: 3px 3px 3px 3px;
  position: absolute;
  width: 100%;
  }
.alert-danger {
  color: #D8000C;
  background-color: #FFBABA;
}
</style>
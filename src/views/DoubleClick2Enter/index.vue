<template>
  <div class="list">
    <template v-if="list.length">
      <ToDoItem
        v-for="(item ,index) of list"
        :key="index"
        :itemObj="item"
        @update-item="updateList"
      ></ToDoItem>
    </template>
  </div>
</template>

<script>
import ToDoItem from './Item.vue';
export default {
  name: 'DoubleClick2Enter',
  data() {
    return {
      list: [],
    };
  },
  components: { ToDoItem },
  computed: {},
  watch: {},
  methods: {
    updateList(itemObj) {
      console.log('updateList', itemObj);
      this.list[itemObj.index].des = itemObj.des;
    },
  },
  created() {
    const arr = [];
    for (let index = 0; index < 100; index++) {
      const obj = {
        index,
        des: `输入框文字__${index}`,
      };
      arr.push(obj);
    }
    this.list = arr;
  },
  mounted() {},
};
</script>

<style scoped lang="less">
</style>
<template>
  <div class="db-item">
    <span v-show="toggleShow">
      <span @dblclick="dblclick">双击前:{{itemObjCopy.des}}</span>
    </span>

    <span v-show="!toggleShow">
      双击后
      <el-input v-model="itemObjCopy.des" ref="input" @blur="updateList"></el-input>
    </span>
  </div>
</template>

<script>
export default {
  name: 'Item',
  props: {
    itemObj: {
      type: Object,
      require: true,
      default: () => ({ des: '' }),
    },
  },
  data() {
    return {
      editPipeLineName: '',
      toggleShow: true,
      itemObjCopy: { des: null, index: null },
    };
  },
  components: {},
  computed: {},
  watch: {},
  methods: {
    doToogle() {
      this.toggleShow = !this.toggleShow;
    },
    dblclick() {
      this.doToogle();
      this.$nextTick(() => {
        this.$refs.input.focus();
      });
    },
    updateList() {
      this.doToogle();
      this.$emit('update-item', this.itemObjCopy);
    },
  },
  created() {},
  mounted() {
    this.itemObjCopy = Object.assign({}, this.itemObj);
  },
};
</script>

<style scoped lang="less">
.db-item {
  border: 1px solid salmon;
  margin: 10px 0;
}
</style>
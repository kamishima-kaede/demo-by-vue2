<template>
  <div class="demo-list">
    <el-table :data="routers" style="width: 100%">
      <el-table-column label="功能/插件" width="180">
        <template v-slot="scope">{{scope.row.meta.routerName}}</template>
      </el-table-column>
      <el-table-column>
        <template v-slot="scope">
          <el-button
            type="text"
            icon="el-icon-view"
            @click="$router.push( {path:scope.row.path,query: { searchQuery: new Date().getTime() }})"
          >查看</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import _ from 'lodash';
import routers from '@/router';
export default {
  name: 'DemoList',
  data() {
    return {
      routers: [],
    };
  },
  components: {},
  computed: {},
  watch: {},
  methods: {},
  created() {
    this.routers = _.cloneDeep(routers.options.routes);
  },
  mounted() {},
};
</script>

<style scoped lang="less">
</style>
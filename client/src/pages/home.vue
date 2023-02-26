<template>
  <BcPage>
    <el-table-v2 :columns="columns" :data="getList" :width="1200" :height="400" fixed>
      <!-- <template #bodyCell="{ column, record }">
        <template v-if="column?.key === 'action'">
          <el-button text @click="handleStop(record)">
            <template #icon>
              <stop-outlined />
            </template>
          </el-button>
          <el-button text @click="handleReload(record)">
            <template #icon>
              <redo-outlined />
            </template>
          </el-button>
        </template>
      </template> -->
      <!-- <template #row="props">
        <el-button>1</el-button>
      </template> -->
    </el-table-v2>
  </BcPage>
</template>
<script lang="ts" setup>
// # config import
import { usePm2Store } from '../store/pm2';
import { defaultErrorHandler } from '../utils';
import type { Column } from 'element-plus';
// import { StopOutlined, RedoOutlined } from "@ant-design/icons-vue";
// # base state

// # pinia
const store = usePm2Store();
const { getList, columns } = storeToRefs(store);
// # computed
// # watch

onMounted(() => {});

// # function
function handleStop(record: unknown) {
  console.log(record);

  store.stopPm2(record);
}

function handleReload(record: unknown) {
  console.log(record);
  store.reloadPm2(record);
}
// async function getList

async function init() {
  // await hasAdmin();
  await store.getListFn();
}
// # lifecycle

init();
// # style
</script>
<style lang="less" scoped></style>

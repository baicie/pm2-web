<template>
  <header id="header" :class="headerClassName">
    <!-- 手机端菜单  -->
    <el-popover
      v-if="isMobile"
      :visible="menuVisible"
      overlay-class-name="popover-menu"
      trigger="click"
    >
      <template #reference>
        <el-icon>
          <Edit class="nav-phone-icon" />
        </el-icon>
      </template>
    </el-popover>
    <el-row :style="{ flexFlow: 'nowrap', height: 64, justifyContent: 'center' }">
      <el-col v-bind="colProps[1]" class="menu-row">
        <Menu v-if="!isMobile" :is-mobile="isMobile"></Menu>
      </el-col>
    </el-row>
  </header>
</template>
<script lang="ts" setup>
import { Edit } from '@element-plus/icons-vue';
import { storeToRefs } from 'pinia';
import { computed, ref } from 'vue';
import { useRoute } from 'vue-router';
import { globalConfigStore } from '../../../store/base-config';
import Menu from './Menu.vue';

const route = useRoute();
const { isMobile } = storeToRefs(globalConfigStore());

const isHome = computed(() => {
  return ['', 'index', 'index-cn'].includes(route.path);
});

const menuVisible = ref(false);
const colProps = isHome.value
  ? [{ flex: 'none' }, { flex: 'auto' }]
  : [
      {
        xxxl: 4,
        xxl: 4,
        xl: 5,
        lg: 6,
        md: 6,
        sm: 24,
        xs: 24
      },
      {
        xxxl: 20,
        xxl: 20,
        xl: 19,
        lg: 18,
        md: 18,
        sm: 0,
        xs: 0
      }
    ];

const headerClassName = {
  clearfix: true,
  'home-header': isHome.value
};
</script>

<style scope>
#header {
  position: relative;
  z-index: 10;
  max-width: 100%;
  background: #fff;
  box-shadow: 0 2px 8px #f0f1f2;
}
.adblock-banner,
.alert-banner {
  position: relative;
  z-index: 100;
  padding: 16px;
  line-height: 28px;
  color: #8590a6;
  text-align: center;
  background-color: #ebebeb;
}
.alert-banner {
  background-color: var(--ant-primary-color);
  color: #fff;
  padding: 5px;
}
.alert-banner a {
  color: #fff;
  text-decoration: underline;
}
.alert-banner .close-icon {
  top: 12px;
}
.close-icon {
  position: absolute;
  top: 15px;
  right: 15px;
}
.menu-row {
  display: flex;
  justify-content: flex-end;
}
</style>

<template>
  <header id="header" :class="headerClassName">
    <el-popover
      v-if="isMobile"
      v-model:visible="menuVisible"
      overlay-class-name="popover-menu"
      trigger="click"
      arrow-point-at-center
    >
      <Edit class="nav-phone-icon" />
      <template #content>
        <Menu :is-mobile="isMobile"></Menu>
      </template>
    </el-popover>
    <el-row :style="{ flexFlow: 'nowrap', height: 64 }">
      <el-col v-bind="colProps[1]" class="menu-row">
        <!-- <Menu v-if="!isMobile" :is-mobile="isMobile"></Menu> -->
        <div :style="{ height: '64px' }"></div>
      </el-col>
    </el-row>
  </header>
</template>
<script lang="ts" setup>
import { Edit } from "@element-plus/icons-vue";
import { storeToRefs } from "pinia";
import { computed, ref } from "vue";
import { useRoute } from "vue-router";
import { globalConfigStore } from "../../../store/base-config";
import Menu from "./Menu.vue";

const route = useRoute();
const { isMobile } = storeToRefs(globalConfigStore());

const isHome = computed(() => {
  return ["", "index", "index-cn"].includes(route.path);
});

const menuVisible = ref(false);
const colProps = isHome.value
  ? [{ flex: "none" }, { flex: "auto" }]
  : [
      {
        xxxl: 4,
        xxl: 4,
        xl: 5,
        lg: 6,
        md: 6,
        sm: 24,
        xs: 24,
      },
      {
        xxxl: 20,
        xxl: 20,
        xl: 19,
        lg: 18,
        md: 18,
        sm: 0,
        xs: 0,
      },
    ];

const headerClassName = {
  clearfix: true,
  "home-header": isHome.value,
};
</script>

<style scope>
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

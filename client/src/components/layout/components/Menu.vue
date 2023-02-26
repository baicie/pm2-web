<template>
  <elmenu
    id="nav"
    class="menu-site"
    :mode="menuMode"
    :selected-keys="[activeMenuItem]"
    disabled-overflow
  >
    <template v-for="item in navInfo" :key="item.path">
      <elmenu-item>
        <router-link :to="item.path">
          {{ item.title }}
        </router-link>
      </elmenu-item>
    </template>
  </elmenu>
</template>
<script lang="ts" setup>
// # config import
// # base state
const route = useRoute();
const props = defineProps({
  isMobile: {
    type: Boolean,
    required: true,
  },
});
const activeMenuItem = ref("home");
const navInfo = ref([
  {
    path: "/home/home",
    title: "首页",
  },
]);
// # pinia
// # computed
const menuMode = computed(() => {
  return props.isMobile ? "inline" : "horizontal";
});

// # watch
watch(
  () => route.path,
  (pathname) => {
    const modules = pathname.split("/");
    activeMenuItem.value = `/${modules[1]}`;
  },
  { immediate: true }
);
// # function
// # lifecycle
// # style
</script>
<style lang="less" scoped></style>

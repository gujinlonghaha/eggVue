<template>
<template  v-for="(i) in menuList" :key="i.name">
    <template v-if="i.children">
        <el-sub-menu :index="i.name">
            <template #title>
            <span>{{ i.name }}</span>
            </template>
            <template v-if="i.children">
                <TheMenu :list="i.children"></TheMenu>
            </template>
            <el-menu-item v-else>{{ i.name }}</el-menu-item>
        </el-sub-menu>
    </template>
     <el-menu-item v-else :index="i.name">{{ i.name }}</el-menu-item>
</template>
</template>

<script>
import { defineComponent, reactive } from "vue";
export default defineComponent({
  name: "TheMenu",
  props: ["list"],
  setup(props) {
    console.log(props);
    let menuList = reactive(props.list);
    return {
      menuList,
    };
  },
});
</script>

<script setup lang="ts">
const props = defineProps<{ error: { statusCode: number } }>()

onMounted(() => {
  if (props.error.statusCode === 404) {
    navigateTo('/', { replace: true, redirectCode: 301 })
  }
})
</script>

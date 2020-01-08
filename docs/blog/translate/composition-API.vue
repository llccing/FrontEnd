<script>
import { reactive, computed } from 'vue'
export default {
  setup(){
    // vue composition api 暴露vue的核心响应式能力
    let state = reactive({
      input: '',
      groceries: [],
      groceriesLeft: computed(() => groceries.length)
    });

    function addGrocery() {
      state.groceries.push(state.input);
      state.input = '';
    }

    function deleteGrocery(index) {
      state.groceries,splice(index, 1);
    }

    return {
      state,
      addGrocery,
      deleteGrocery
    }
  }
}
</script>
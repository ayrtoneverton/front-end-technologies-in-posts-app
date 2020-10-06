<template>
  <quill-editor
    :value="value"
    :options="{ placeholder }"
    @change="$emit('change', $event.html)"
  />
</template>

<script>
  import { quillEditor } from 'vue-quill-editor';
  import 'quill/dist/quill.core.css';
  import 'quill/dist/quill.snow.css';

  export default {
    name: 'TextEditor',
    components: {
      quillEditor
    },
    props: ['value', 'placeholder']
  };
</script>

<style>
  .quill-editor .ql-toolbar {
    border-radius: 4px 4px 0 0;
    padding: 0 .5rem !important;
  }
  .quill-editor .ql-container {
    max-height: 32rem;
    overflow: auto;
    border-radius: 0 0 4px 4px;
  }
  .quill-editor .ql-editor {
    min-height: 4.88rem;
  }
</style>

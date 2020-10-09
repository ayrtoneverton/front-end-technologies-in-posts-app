<script>
  import Quill from 'quill';

  export let value = '';
  export let placeholder;

  const quill = (node) => {
    const quillEditor = new Quill(node, {
      modules: {
        toolbar: [
          [
            { font: [] },
            { header: [1, 2, 3, 4, 5, 6, false] },
            { size: ['small', false, 'large', 'huge'] },
            { align: [] },
            { color: [] },
            { background: [] },
            'bold', 'italic', 'underline', 'strike',
            'code', 'blockquote', 'code-block',
            { list: 'ordered' }, { list: 'bullet' },
            { script: 'sub' }, { script: 'super' },
            { indent: '-1' }, { indent: '+1' },
            { direction: 'rtl' },
            'link', 'image', 'video', 'clean'
          ]
        ]
      },
      placeholder,
      theme: "snow"
    });
    
    const editor = node.querySelector('.ql-editor');
    editor.innerHTML = value;

    quillEditor.on('text-change', () => {
      value = editor.innerText.trim() && editor.innerHTML;
    });
  };
</script>

<div class="quill-editor">
  <div use:quill></div>
</div>

<style>
  .quill-editor :global(.ql-toolbar) {
    border-radius: 4px 4px 0 0;
    padding: 0 .5rem !important;
  }
  .quill-editor :global(.ql-container) {
    max-height: 32rem;
    overflow: auto;
    border-radius: 0 0 4px 4px;
  }
  .quill-editor :global(.ql-editor) {
    min-height: 6rem;
  }
</style>

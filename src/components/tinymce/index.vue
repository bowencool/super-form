<template>
  <textarea :id="id"></textarea>
</template>

<script>
import getTinymce from './init';
// const tinymce = window.tinymce;

export default {
  props: {
    id: {
      type: String,
      default: () => `tinymce-${Date.now()}`,
    },
    height: {
      type: Number,
      default: () => 360,
    },
    toolbar: {
      type: Array,
      default: () => [
        'undo redo removeformat preview code fullscreen ',
        'alignleft aligncenter alignright outdent indent | hr bullist numlist template link picpool charmap table',
        'formatselect bold italic underline strikethrough forecolor backcolor blockquote  subscript superscript ',
      ],
    },
    plugins: {
      type: Array,
      default: () => [
        'advlist anchor autolink autoresize autosave code codesample colorpicker colorpicker contextmenu directionality emoticons fullscreen hr image imagetools importcss insertdatetime legacyoutput link lists media nonbreaking noneditable pagebreak paste preview print save searchreplace spellchecker tabfocus table textcolor textpattern visualblocks visualchars wordcount',
      ],
    },
    value: String,
  },
  watch: {
    value(v) {
      if (this.editor && this.editor.getContent() !== v) {
        this.editor.setContent(v);
      }
    },
  },
  async mounted() {
    const tinymce = await getTinymce();
    tinymce.init({
      target: this.$el,
      height: this.height,
      toolbar: this.toolbar,
      plugins: this.plugins,
      menubar: false,
      branding: false,
      object_resizing: false,
      end_container_on_empty_block: true,
      powerpaste_word_import: 'clean',
      code_dialog_height: 450,
      code_dialog_width: 1000,
      advlist_bullet_styles: 'square',
      advlist_number_styles: 'default',
      imagetools_cors_hosts: ['www.tinymce.com', 'codepen.io'],
      default_link_target: '_blank',
      link_title: false,
      init_instance_callback: editor => {
        this.editor = editor;

        editor.on('NodeChange Change KeyUp', () => {
          const content = editor.getContent();
          this.$emit('input', content);
        });

        editor.setContent(this.value);
      },
      setup: editor => {
        editor.addButton('picpool', {
          icon: 'image',
          title: '自定义上传函数',
          onclick: () => {
            const rez = ['http://via.placeholder.com/350x150'];
            editor.insertContent(rez.map(src => `<img src=${src} />`).join(''));
          },
        });
      },
    });
  },
  async beforeDestroy() {
    const tinymce = await getTinymce();
    tinymce.remove(this.editor);
    console.log('removed.');
  },
};
</script>

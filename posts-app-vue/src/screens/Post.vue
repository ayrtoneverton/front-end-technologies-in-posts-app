<template>
  <div>
    <Loading v-if="!post"/>
    <div v-else class="post-screen">
      <h1>{{isUpdate ? 'Update' : 'Create'}} Post</h1>
      <b-form-input
        v-model="post.title"
        placeholder="Title"
        size="lg"
        autofocus
      />
      <b-form-textarea
        v-model="post.description"
        placeholder="Description"
        rows="2"
        max-rows="5"
      />
      <TextEditor
        placeholder="Post body"
        :value="post.body"
        @change="onBodyChange"
      />
      <div class="post-actions">
        <b-button @click="onSave" variant="primary">SAVE</b-button>
        <b-button @click="onCancel">CANCEL</b-button>
      </div>
    </div>
  </div>
</template>

<script>
  import axios from 'axios';
  import Loading from '../components/Loading.vue';
  import TextEditor from '../components/TextEditor.vue';

  export default {
    name: 'Post',
    components: {
      Loading,
      TextEditor
    },
    data() {
      const { id } = this.$route.params;
      return {
        isUpdate: id !== 'new',
        id,
        post: null
      };
    },
    methods: {
      onBodyChange(html) {
        this.post.body = html;
      },
      async onSave() {
        const { isUpdate, post } = this;
        if (!(post.title && post.description && post.body)) {
          return this.$bvToast.toast('All fields are required!', {
            noCloseButton: true,
            variant: 'danger'
          });
        }
        if (isUpdate) {
          post._id = undefined;
          await axios.put(process.env.VUE_APP_URL_API + this.id, post);
        } else {
          await axios.post(process.env.VUE_APP_URL_API, post);
        }
        this.$router.replace(`/?m=${isUpdate ? 'updated' : 'created'}`);
      },
      onCancel() {
        this.$router.back();
      }
    },
    mounted() {
      if(this.isUpdate) {
        axios.get(process.env.VUE_APP_URL_API + this.id).then(({ data }) => {
          this.post = data;
        });
      } else {
        this.post = {};
      }
    },
    watch: {
      $route() {
        this.isUpdate = this.$route.params.id !== 'new';
      }
    }
  };
</script>

<style scoped>
  .post-screen > * {
    margin: .8rem 0 .4rem 0;
  }
  textarea {
    overflow-y: auto !important;
  }
  .post-actions {
    margin-top: 1rem;
  }
  .post-actions > * {
    margin-right: .6rem;
  }
</style>

<template>
  <div class="card">
    <h4 @click="$emit('view')">{{title}}</h4>
    <p>{{description}}</p>
    <div class="actions">
      <div v-if="confirm" class="confirm">
        <span>Do you really want to remove?</span>
        <b-icon icon="check" @click="$emit('remove')"/>
        <b-icon icon="x" @click="confirm = false"/>
      </div>
      <div v-else>
        <b-icon icon="eye" @click="$emit('view')"/>
        <b-icon icon="pencil" @click="$emit('edit')"/>
        <b-icon icon="trash" @click="confirm = true"/>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Card',
    props: ['title', 'description'],
    data: () => ({
      confirm: false
    })
  };
</script>

<style scoped>
  .card {
    position: relative;
    border: solid .02rem #DDD;
    border-radius: 4px;
    padding: .8rem;
    margin-bottom: 1rem;
  }
  h4{
    width: fit-content;
    cursor: pointer;
  }
  h4:hover {
    opacity: .7;
  }
  p {
    margin: 0;
  }
  .actions {
    position: absolute;
    top: 0;
    right: 0;
    padding: .8rem;
    display: none;
    background: #FFF;
    font-size: 1.1rem;
  }
  .card:hover > .actions {
    display: block;
  }
  .actions > * > :not(span) {
    font-size: 1.2rem;
    display: inline-flex;
    vertical-align: middle;
    margin-left: .5rem;
    cursor: pointer;
  }
  .actions > * > :not(span):hover {
    opacity: .7;
  }
  .actions > .confirm > :not(span) {
    font-size: 1.6rem;
  }
</style>

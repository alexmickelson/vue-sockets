<template>
  <h1>Homepage</h1>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
// import { Socket } from "vue-socket.io-extended";

@Component
export default class HelloWorld extends Vue {
  @Prop() private msg!: string;
  private connection: WebSocket | null = null;
  created() {
    console.log("Starting connection to WebSocket Server")
    this.connection = new WebSocket("ws://localhost:3000")

    this.connection.onmessage = function(event) {
      console.log(event);
    }

    this.connection.onopen = function(event) {
      console.log(event)
      console.log("Successfully connected to the echo websocket server...")
    }

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>

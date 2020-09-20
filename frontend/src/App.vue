<template>
  <div id="app">
    <nav class="level">
      <div class="level-item has-text-centered">
        <div class="box">
          <article class="media">
            <div class="media-content">
              <div class="content">
                <a class="link is-info">Home</a>
              </div>
            </div>
          </article>
        </div>
      </div>
      <div class="level-item has-text-centered">
        <div class="box">
          <article class="media">
            <div class="media-content">
              <div class="content">
                <a class="link is-info">Menu</a>
              </div>
            </div>
          </article>
        </div>
      </div>
      <p class="level-item has-text-centered">
        <img src="https://bulma.io/images/bulma-type.png" alt style="height: 30px;" />
      </p>
      <div class="level-item has-text-centered">
        <div class="box">
          <article class="media">
            <div class="media-content">
              <div class="content">
                <a class="link is-info">Reservations</a>
              </div>
            </div>
          </article>
        </div>
      </div>
      <div class="level-item has-text-centered">
        <div class="box">
          <article class="media">
            <div class="media-content">
              <div class="content">
                <a class="link is-info">Contact</a>
              </div>
            </div>
          </article>
        </div>
      </div>
    </nav>
    <div class="hero is-info">
      <div class="hero-body">
        <div class="container natori">
          <h1 class="title">Natori Sana!</h1>
          <h2 class="subtitle">Pink!ALL Pink!</h2>
          <div>
            <img src="./assets/hq720.jpg" />
          </div>
        </div>
      </div>
    </div>
    <router-view />
    <footer class="footer">
      <div class="content has-text-centered">
        <p>
          <strong>Yamitter</strong>
          by
          <a href="https://github.com/MasaKusuda">Masakusu</a> and
          <a href="https://github.com/AkihiroKusuda">AkihiroKusuda</a>
        </p>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style lang="scss">
@import '../node_modules/bulma/bulma.sass';
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3333;
  margin-top: 60px;
}
</style>
